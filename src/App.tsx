import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { BlogManager } from './components/BlogManager';
import Home from './components/Home';
import { BlogArchive } from './components/BlogArchive';
import { BlogPost } from './components/BlogPost';
import { GenericPage } from './components/GenericPage';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vercel-admin" element={<AdminLogin />} />
            <Route path="/vercel-admin/dashboard" element={<AdminDashboard />} />
            <Route path="/vercel-admin/blog" element={<BlogManager />} />
            
            {/* Blog Routes */}
            <Route path="/resources/blog" element={<BlogArchive />} />
            <Route path="/resources/blog/:slug" element={<BlogPost />} />
            
            {/* Catch-all for other internal links */}
            <Route path="/about/*" element={<GenericPage />} />
            <Route path="/services/*" element={<GenericPage />} />
            <Route path="/industries/*" element={<GenericPage />} />
            <Route path="/locations/*" element={<GenericPage />} />
            <Route path="/resources/*" element={<GenericPage />} />
            <Route path="/contact" element={<GenericPage />} />
            <Route path="/privacy-policy" element={<GenericPage />} />
            <Route path="/terms-of-service" element={<GenericPage />} />
            <Route path="/sms-opt-in-out" element={<GenericPage />} />
            
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}
