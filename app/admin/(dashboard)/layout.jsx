'use client';

import Sidebar from '@/components/admin/Sidebar';
import { useState } from 'react';

export default function DashboardLayout({ children }) {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <div className="flex h-screen bg-[#050507] overflow-hidden text-gray-100">
      {/* Sidebar - layout handles width via the Sidebar component's motion div, but we verify here */}
      <Sidebar
        isCollapsed={isSidebarCollapsed}
        toggleSidebar={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative transition-all duration-300">
        {/* Top Header - Optional, for mobile menu trigger or breadcrumbs */}

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
