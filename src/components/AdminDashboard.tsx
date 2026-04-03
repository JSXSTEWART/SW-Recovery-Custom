import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, logOut } from '../firebase';
import { LayoutDashboard, LogOut, Users } from 'lucide-react';

export function AdminDashboard() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate('/vercel-admin');
      } else {
        setUserEmail(user.email);
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await logOut();
    navigate('/vercel-admin');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 font-heading">Admin Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Logged in as {userEmail}</p>
        </div>
        <button 
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <LogOut className="w-4 h-4" />
          Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Users</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">1</p>
          <p className="text-sm text-gray-500 mt-1">Total administrators</p>
        </div>
        
        <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm">
          <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4">
            <LayoutDashboard className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Deployments</h3>
          <p className="text-3xl font-bold text-gray-900 mt-2">0</p>
          <p className="text-sm text-gray-500 mt-1">Active Vercel deployments</p>
        </div>

        <div className="p-6 bg-white rounded-xl border border-gray-100 shadow-sm flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-4">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Blog Posts</h3>
            <p className="text-sm text-gray-500 mt-1">Manage your blog content</p>
          </div>
          <button 
            onClick={() => navigate('/vercel-admin/blog')}
            className="mt-4 w-full px-4 py-2 bg-purple-50 text-purple-700 rounded-lg font-medium hover:bg-purple-100 transition-colors"
          >
            Manage Blog
          </button>
        </div>
      </div>
    </div>
  );
}
