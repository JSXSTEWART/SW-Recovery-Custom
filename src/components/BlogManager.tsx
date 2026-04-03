import { useState, useRef, useMemo, useEffect } from 'react';
import { blogPosts as initialBlogPosts, BlogPost } from '../data/blogs';
import { 
  Calendar, User, Image as ImageIcon, Edit2, X, Upload, 
  Sparkles, Loader2, Trash2, Search, Eye, EyeOff, 
  Tag, FileText, CheckCircle, AlertCircle, Database,
  Bold, Italic, List as ListIcon, ListOrdered, ArrowRight
} from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import Markdown from 'react-markdown';
import { auth, db } from '../firebase';
import { 
  collection, 
  onSnapshot, 
  query, 
  orderBy, 
  doc, 
  setDoc, 
  deleteDoc,
  serverTimestamp,
  getDocFromServer
} from 'firebase/firestore';
import { motion } from 'motion/react';

const CATEGORIES = ['Industry', 'Guide', 'News', 'Case Study', 'General'];

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId: string | undefined;
    email: string | null | undefined;
    emailVerified: boolean | undefined;
    isAnonymous: boolean | undefined;
    tenantId: string | null | undefined;
    providerInfo: {
      providerId: string;
      displayName: string | null;
      email: string | null;
      photoUrl: string | null;
    }[];
  }
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {
      userId: auth.currentUser?.uid,
      email: auth.currentUser?.email,
      emailVerified: auth.currentUser?.emailVerified,
      isAnonymous: auth.currentUser?.isAnonymous,
      tenantId: auth.currentUser?.tenantId,
      providerInfo: auth.currentUser?.providerData.map(provider => ({
        providerId: provider.providerId,
        displayName: provider.displayName,
        email: provider.email,
        photoUrl: provider.photoURL
      })) || []
    },
    operationType,
    path
  }
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function BlogManager() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSeeding, setIsSeeding] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [category, setCategory] = useState('General');
  const [author, setAuthor] = useState(auth.currentUser?.displayName || 'SWRS Team');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGeneratingImage, setIsGeneratingImage] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');
  const [filterAuthor, setFilterAuthor] = useState('All');
  const [showPreview, setShowPreview] = useState(false);
  const [previewMode, setPreviewMode] = useState<'full' | 'card'>('full');
  const [notification, setNotification] = useState<{ type: 'success' | 'error', message: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  const insertFormatting = (prefix: string, suffix: string = '') => {
    if (!contentRef.current) return;

    const textarea = contentRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    const newText = content.substring(0, start) + prefix + selectedText + suffix + content.substring(end);
    setContent(newText);

    // Set cursor position after update
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + prefix.length, end + prefix.length);
    }, 0);
  };

  const handleFormatBold = () => insertFormatting('**', '**');
  const handleFormatItalic = () => insertFormatting('*', '*');
  const handleFormatBulletList = () => insertFormatting('- ');
  const handleFormatNumberedList = () => insertFormatting('1. ');

  useEffect(() => {
    const testConnection = async () => {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if(error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
      }
    };
    testConnection();

    const q = query(collection(db, 'blog_posts'), orderBy('date', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsData = snapshot.docs.map(doc => doc.data() as BlogPost);
      setPosts(postsData);
      setIsLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'blog_posts');
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const uniqueAuthors = useMemo(() => {
    const authors = new Set(posts.map(post => post.author));
    return ['All', ...Array.from(authors)];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = filterCategory === 'All' || post.category === filterCategory;
      const matchesAuthor = filterAuthor === 'All' || post.author === filterAuthor;

      return matchesSearch && matchesCategory && matchesAuthor;
    });
  }, [posts, searchQuery, filterCategory, filterAuthor]);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ type, message });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || !imageUrl) {
      showNotification('error', 'Please fill in all required fields.');
      return;
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const id = editingPostId || Date.now().toString();
    const postData: any = {
      id,
      slug,
      title,
      excerpt: content.substring(0, 150) + '...',
      content,
      author,
      date: new Date().toISOString().split('T')[0],
      category,
      imageUrl,
      updatedAt: serverTimestamp(),
    };

    if (!editingPostId) {
      postData.createdAt = serverTimestamp();
    }

    try {
      const postRef = doc(db, 'blog_posts', id);
      await setDoc(postRef, postData, { merge: true });
      showNotification('success', editingPostId ? 'Post updated successfully!' : 'Post published successfully!');
      resetForm();
    } catch (error) {
      handleFirestoreError(error, editingPostId ? OperationType.UPDATE : OperationType.CREATE, `blog_posts/${id}`);
      showNotification('error', 'Failed to save post. Please try again.');
    }
  };

  const resetForm = () => {
    setTitle('');
    setContent('');
    setImageUrl('');
    setCategory('General');
    setAuthor(auth.currentUser?.displayName || 'SWRS Team');
    setAiPrompt('');
    setEditingPostId(null);
    setShowPreview(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleEdit = (post: BlogPost) => {
    setEditingPostId(post.id);
    setTitle(post.title);
    setContent(post.content);
    setImageUrl(post.imageUrl);
    setCategory(post.category);
    setAuthor(post.author);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      try {
        await deleteDoc(doc(db, 'blog_posts', id));
        showNotification('success', 'Post deleted successfully.');
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, `blog_posts/${id}`);
        showNotification('error', 'Failed to delete post.');
      }
    }
  };

  const handleCancelEdit = () => {
    resetForm();
  };

  const handleSeedData = async () => {
    if (posts.length > 0) {
      if (!window.confirm('There are already posts in the database. Seeding will add initial posts. Continue?')) {
        return;
      }
    }
    
    setIsSeeding(true);
    try {
      for (const post of initialBlogPosts) {
        const postRef = doc(db, 'blog_posts', post.id);
        await setDoc(postRef, {
          ...post,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        }, { merge: true });
      }
      showNotification('success', 'Initial data seeded successfully!');
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, 'blog_posts/seed');
      showNotification('error', 'Failed to seed data.');
    } finally {
      setIsSeeding(false);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerateImage = async () => {
    if (!aiPrompt) return;
    setIsGeneratingImage(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-image',
        contents: {
          parts: [{ text: aiPrompt }],
        },
      });
      
      let base64Image = '';
      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          base64Image = `data:${part.inlineData.mimeType || 'image/png'};base64,${part.inlineData.data}`;
          break;
        }
      }
      
      if (base64Image) {
        setImageUrl(base64Image);
        setAiPrompt('');
      } else {
        alert('Failed to generate image. Please try a different prompt.');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      alert('An error occurred while generating the image.');
    } finally {
      setIsGeneratingImage(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-950 min-h-screen py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {notification && (
          <div className={`fixed top-4 right-4 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-lg border animate-in slide-in-from-right duration-300 ${
            notification.type === 'success' 
              ? 'bg-green-50 border-green-100 text-green-800' 
              : 'bg-red-50 border-red-100 text-red-800'
          }`}>
            {notification.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
            <span className="font-medium">{notification.message}</span>
          </div>
        )}

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white font-heading">Blog Manager</h1>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={handleSeedData}
              disabled={isSeeding}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-sm font-medium disabled:opacity-50"
            >
              {isSeeding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Database className="w-4 h-4" />}
              Seed Data
            </button>
            
            <div className="flex flex-wrap items-center gap-2 bg-white dark:bg-gray-900 p-1 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9 pr-4 py-1.5 bg-transparent border-none focus:ring-0 dark:text-white text-sm w-full sm:w-40"
                />
              </div>
              
              <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800 hidden sm:block" />
              
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm text-gray-600 dark:text-gray-400 py-1.5 pl-2 pr-8 cursor-pointer"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>

              <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-800 hidden sm:block" />

              <select
                value={filterAuthor}
                onChange={(e) => setFilterAuthor(e.target.value)}
                className="bg-transparent border-none focus:ring-0 text-sm text-gray-600 dark:text-gray-400 py-1.5 pl-2 pr-8 cursor-pointer"
              >
                {uniqueAuthors.map(auth => (
                  <option key={auth} value={auth}>{auth === 'All' ? 'All Authors' : auth}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        
        {/* Add/Edit Post Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 p-6 mb-12"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-2">
              {editingPostId ? <Edit2 className="w-5 h-5 text-blue-500" /> : <FileText className="w-5 h-5 text-green-500" />}
              {editingPostId ? 'Edit Post' : 'Create New Post'}
            </h2>
            {editingPostId && (
              <button
                onClick={handleCancelEdit}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1 text-sm font-medium"
              >
                <X className="w-4 h-4" /> Cancel Edit
              </button>
            )}
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                    placeholder="Enter post title"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      id="category"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                    >
                      {CATEGORIES.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Author
                    </label>
                    <input
                      type="text"
                      id="author"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      className="w-full px-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white"
                      placeholder="Author name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Featured Image
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors h-[180px] overflow-hidden">
                  <div className="space-y-1 text-center w-full flex flex-col justify-center">
                    {imageUrl ? (
                      <div className="relative mx-auto w-full">
                        <img src={imageUrl} alt="Preview" className="mx-auto h-32 object-cover rounded-md" />
                        <button
                          type="button"
                          onClick={() => {
                            setImageUrl('');
                            if (fileInputRef.current) fileInputRef.current.value = '';
                          }}
                          className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 shadow-sm"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex flex-col items-center">
                          <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                          <div className="flex text-xs text-gray-600 dark:text-gray-400 justify-center">
                            <label
                              htmlFor="file-upload"
                              className="relative cursor-pointer bg-white dark:bg-gray-900 rounded-md font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 px-2 py-1"
                            >
                              <span>Upload file</span>
                              <input
                                id="file-upload"
                                name="file-upload"
                                type="file"
                                accept="image/*"
                                className="sr-only"
                                ref={fileInputRef}
                                onChange={handleImageUpload}
                              />
                            </label>
                            <p className="pl-1 py-1">or use AI</p>
                          </div>
                        </div>

                        <div className="mt-3 flex gap-2 max-w-md mx-auto">
                          <input
                            type="text"
                            value={aiPrompt}
                            onChange={(e) => setAiPrompt(e.target.value)}
                            placeholder="AI image prompt..."
                            className="flex-1 px-3 py-1.5 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:text-white text-xs"
                            onKeyDown={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                handleGenerateImage();
                              }
                            }}
                          />
                          <button
                            type="button"
                            onClick={handleGenerateImage}
                            disabled={isGeneratingImage || !aiPrompt}
                            className="inline-flex items-center justify-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-lg shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          >
                            {isGeneratingImage ? (
                              <Loader2 className="w-3 h-3 animate-spin" />
                            ) : (
                              <Sparkles className="w-3 h-3" />
                            )}
                          </button>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Content (Markdown)
                </label>
                <div className="flex items-center gap-4">
                  {showPreview && (
                    <div className="flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg border border-gray-200 dark:border-gray-700">
                      <button
                        type="button"
                        onClick={() => setPreviewMode('full')}
                        className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                          previewMode === 'full' 
                            ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        Full Post
                      </button>
                      <button
                        type="button"
                        onClick={() => setPreviewMode('card')}
                        className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                          previewMode === 'card' 
                            ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow-sm' 
                            : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        Card
                      </button>
                    </div>
                  )}
                  <button
                    type="button"
                    onClick={() => setShowPreview(!showPreview)}
                    className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:text-blue-500 flex items-center gap-1"
                  >
                    {showPreview ? <><EyeOff className="w-3 h-3" /> Hide Preview</> : <><Eye className="w-3 h-3" /> Show Preview</>}
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-4">
                {!showPreview ? (
                  <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent">
                    <div className="flex items-center gap-1 p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
                      <button
                        type="button"
                        onClick={handleFormatBold}
                        className="p-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Bold"
                      >
                        <Bold className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleFormatItalic}
                        className="p-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Italic"
                      >
                        <Italic className="w-4 h-4" />
                      </button>
                      <div className="w-px h-4 bg-gray-300 dark:bg-gray-700 mx-1" />
                      <button
                        type="button"
                        onClick={handleFormatBulletList}
                        className="p-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Bullet List"
                      >
                        <ListIcon className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleFormatNumberedList}
                        className="p-1.5 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
                        title="Numbered List"
                      >
                        <ListOrdered className="w-4 h-4" />
                      </button>
                    </div>
                    <textarea
                      id="content"
                      ref={contentRef}
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      rows={12}
                      className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border-none focus:ring-0 dark:text-white resize-y font-mono text-sm"
                      placeholder="Write your post content here..."
                      required
                    />
                  </div>
                ) : (
                  <div className="w-full bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg min-h-[400px] overflow-hidden">
                    {previewMode === 'full' ? (
                      <div className="p-8 max-w-4xl mx-auto bg-white dark:bg-gray-950 shadow-sm min-h-full">
                        <header className="mb-8 text-center">
                          <div className="inline-block px-3 py-1 mb-4 text-[10px] font-bold tracking-wider text-blue-700 uppercase bg-blue-100 rounded-full dark:bg-blue-900/30 dark:text-blue-300">
                            {category}
                          </div>
                          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight font-heading">
                            {title || 'Untitled Post'}
                          </h1>
                          <div className="flex items-center justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">
                            <span className="flex items-center gap-1.5">
                              <Calendar className="w-4 h-4" />
                              {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <User className="w-4 h-4" />
                              {author}
                            </span>
                          </div>
                        </header>

                        {imageUrl && (
                          <div className="rounded-xl overflow-hidden mb-8 shadow-md h-64">
                            <img 
                              src={imageUrl} 
                              alt={title} 
                              className="w-full h-full object-cover"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        )}

                        <div className="prose prose-lg dark:prose-invert max-w-none prose-blue">
                          <Markdown>{content || '*No content to preview*'}</Markdown>
                        </div>
                      </div>
                    ) : (
                      <div className="p-12 flex justify-center bg-gray-100 dark:bg-gray-900/50">
                        <article className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden w-full max-w-sm flex flex-col">
                          <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-800">
                            {imageUrl ? (
                              <img 
                                src={imageUrl} 
                                alt={title} 
                                className="w-full h-full object-cover"
                                referrerPolicy="no-referrer"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <ImageIcon className="w-12 h-12 text-gray-400" />
                              </div>
                            )}
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                              <span className="flex items-center gap-1">
                                <Calendar className="w-3 h-3" />
                                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                              </span>
                              <span className="flex items-center gap-1">
                                <User className="w-3 h-3" />
                                {author}
                              </span>
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-heading line-clamp-2">
                              {title || 'Untitled Post'}
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 flex-1 line-clamp-3">
                              {content ? (content.substring(0, 150) + '...') : 'No content yet...'}
                            </p>
                            <div className="inline-flex items-center font-bold text-xs text-blue-600 dark:text-blue-400 uppercase tracking-widest mt-auto">
                              Read Article <ArrowRight className="ml-2 w-3 h-3" />
                            </div>
                          </div>
                        </article>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 shadow-lg shadow-blue-200 dark:shadow-none hover:scale-[1.02] active:scale-[0.98]"
              >
                {editingPostId ? 'Update Post' : 'Publish Post'}
              </button>
              {editingPostId && (
                <button
                  type="button"
                  onClick={handleCancelEdit}
                  className="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 font-bold rounded-xl transition-all duration-200"
                >
                  Cancel
                </button>
              )}
            </div>
          </form>
        </motion.div>

        {/* Existing Posts List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center gap-3 font-heading">
              Existing Posts
              <span className="px-2.5 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-bold rounded-full">
                {filteredPosts.length}
              </span>
            </h2>
            {(searchQuery || filterCategory !== 'All' || filterAuthor !== 'All') && (
              <button
                onClick={() => {
                  setSearchQuery('');
                  setFilterCategory('All');
                  setFilterAuthor('All');
                }}
                className="text-sm text-gray-500 hover:text-blue-600 transition-colors flex items-center gap-1"
              >
                <X className="w-4 h-4" /> Clear filters
              </button>
            )}
          </div>
          
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin mb-4" />
              <p className="text-gray-500">Loading posts...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post, index) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  key={post.id}
                  className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-800 overflow-hidden flex flex-col group hover:shadow-md transition-all duration-300"
                >
                  <div className="h-40 relative overflow-hidden">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2 py-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur text-[10px] font-bold uppercase tracking-wider rounded border border-gray-100 dark:border-gray-800 flex items-center gap-1">
                        <Tag className="w-3 h-3 text-blue-500" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[10px] text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors font-heading">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 line-clamp-3 text-xs mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center gap-2 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <button
                        onClick={() => handleEdit(post)}
                        className="flex-1 flex items-center justify-center gap-2 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors text-xs font-bold"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg hover:bg-red-100 dark:hover:bg-red-900/30 transition-colors shadow-sm"
                        title="Delete Post"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white dark:bg-gray-900 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-300" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No posts found</h3>
              <p className="text-gray-500">Try adjusting your search query</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
}
