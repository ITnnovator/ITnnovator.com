'use client';

import { useAdmin } from '../context/AdminContext';

export default function Header() {
  const { sidebarOpen, setSidebarOpen } = useAdmin();

  return (
    <header className="h-20 bg-white border-b border-gray-100 flex items-center justify-between px-8 sticky top-0 z-40 transition-all duration-300">
      
      {/* Title & Search & Toggle */}
      <div className="flex items-center gap-6 flex-1">
        <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors hidden md:block"
        >
            <i className={`ph ${sidebarOpen ? 'ph-list' : 'ph-list-dashes'} text-2xl`}></i>
        </button>

        <h2 className="text-xl font-bold text-gray-800 tracking-tight">Dashboard</h2>
        
        <div className="hidden md:flex items-center bg-gray-50 rounded-lg px-4 py-2 border border-gray-200 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-200 w-96">
            <i className="ph ph-magnifying-glass text-gray-400 text-lg"></i>
            <input 
                type="text" 
                placeholder="Search anything..." 
                className="bg-transparent border-none outline-none text-sm ml-3 w-full text-gray-600 placeholder-gray-400"
            />
        </div>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="relative p-2.5 rounded-full hover:bg-gray-100 text-gray-500 transition-colors">
            <i className="ph ph-bell text-xl"></i>
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full ring-2 ring-white"></span>
        </button>
      </div>
    </header>
  );
}
