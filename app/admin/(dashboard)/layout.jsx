'use client';

import Sidebar from '@/components/admin/Sidebar';
import { useAdmin } from '../context/AdminContext';

export default function DashboardLayout({ children }) {
  const { sidebarOpen } = useAdmin();

  return (
    <div className="flex h-screen bg-[#050507] overflow-hidden text-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content - Pushed by Sidebar */}
      <div
        className={`flex-1 flex flex-col h-screen overflow-hidden relative transition-all duration-300
            ${sidebarOpen ? 'md:ml-72' : 'md:ml-20'}
        `}
      >
        {/* Main Scrollable Area */}
        <main className="flex-1 overflow-y-auto bg-[#0a0a0c] m-2 rounded-2xl border border-white/5 shadow-2xl relative">
          <div className="max-w-7xl mx-auto p-4 md:p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
