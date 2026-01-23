'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdmin } from '../../app/admin/context/AdminContext';
import { useState } from 'react';
import {
    ChevronDown,
    PanelLeftClose,
    PanelLeftOpen,
    Menu,
    LayoutDashboard,
    Users,
    MessageSquare,
    Briefcase,
    Newspaper,
    FolderOpen,
    Star,
    Settings,
    Image as ImageIcon
} from 'lucide-react';

// Categorized Menu Items with Lucide Components
const menuCategories = [
    {
        title: "Main",
        items: [
            { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
            { name: 'Leads', href: '/admin/leads', icon: Users },
            { name: 'Messages', href: '/admin/messages', icon: MessageSquare },
        ]
    },
    {
        title: "Content",
        items: [
            { name: 'Services', href: '/admin/services', icon: Briefcase },
            { name: 'Blogs', href: '/admin/blogs', icon: Newspaper },
            { name: 'Case Studies', href: '/admin/cases', icon: FolderOpen },
            { name: 'Testimonials', href: '/admin/testimonials', icon: Star },
        ]
    },
    {
        title: "System",
        items: [
            { name: 'Team', href: '/admin/team', icon: Users },
            { name: 'Settings', href: '/admin/settings', icon: Settings },
            { name: 'Clients', href: '/admin/clients', icon: Users },
            { name: 'Hero Banner', href: '/admin/hero', icon: ImageIcon },
        ]
    }
];

export default function Sidebar() {
    const pathname = usePathname();
    const { sidebarOpen, setSidebarOpen } = useAdmin();

    // State for accordions
    const [openCategories, setOpenCategories] = useState({
        Main: true,
        Content: false,
        System: false
    });

    const toggleCategory = (title) => {
        setOpenCategories(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <>
            {/* Mobile Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Mobile Floating Toggle (Visible only when closed on mobile) */}
            {!sidebarOpen && (
                <button
                    onClick={() => setSidebarOpen(true)}
                    className="fixed bottom-6 left-6 z-50 p-3 bg-blue-600 text-white rounded-full shadow-2xl md:hidden hover:bg-blue-700 transition-colors"
                >
                    <Menu size={20} />
                </button>
            )}

            <aside
                className={`fixed left-0 top-0 z-50 h-screen bg-[#0a0a0c] border-r border-slate-800 text-slate-300 transition-all duration-300 flex flex-col
          ${sidebarOpen ? 'w-72' : 'w-20 -translate-x-full md:translate-x-0'}
        `}
            >
                {/* Header / Brand */}
                <div className={`h-20 flex items-center border-b border-slate-800 transition-all duration-300 relative
            ${sidebarOpen ? 'px-6' : 'justify-center px-0'}
        `}>
                    {sidebarOpen ? (
                        <Link href="/" className="flex items-center gap-2 animate-fade-in">
                            <img src="/webImages/logo.png" alt="ITnnovator" className="h-8 w-auto object-contain" />
                        </Link>
                    ) : (
                        <div className="w-10 h-10 flex items-center justify-center">
                            <img src="/webImages/favi-main-big-logo.png" alt="IT" className="h-8 w-8 object-contain" />
                        </div>
                    )}

                    {/* Floating Toggle Button (Desktop) */}
                    <button
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        className={`hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 bg-[#0a0a0c] border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all p-1.5 rounded-full shadow-xl z-50
                ${!sidebarOpen ? 'rotate-180' : ''}
            `}
                        style={{ top: '40px' }} // Align with header center roughly
                        title="Toggle Sidebar"
                    >
                        <PanelLeftClose size={14} />
                    </button>
                </div>

                {/* Nav */}
                <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto custom-scrollbar overflow-x-hidden">

                    {menuCategories.map((category) => (
                        <div key={category.title} className="overflow-hidden mb-2">

                            {/* Category Header (Accordion Toggle) */}
                            {sidebarOpen ? (
                                <button
                                    onClick={() => toggleCategory(category.title)}
                                    className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors rounded-lg hover:bg-white/5"
                                >
                                    <span>{category.title}</span>
                                    <div className={`transition-transform duration-300 ${openCategories[category.title] ? 'rotate-180' : ''}`}>
                                        <ChevronDown size={14} />
                                    </div>
                                </button>
                            ) : (
                                /* Divider when closed */
                                <div className="flex justify-center py-2 mb-1 group relative">
                                    <div className="h-0.5 bg-slate-800 w-4 rounded-full group-hover:bg-slate-600 transition-colors"></div>
                                    <span className="absolute left-full ml-4 px-2 py-1 bg-slate-900 border border-white/10 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity top-1/2 -translate-y-1/2 shadow-lg">
                                        {category.title}
                                    </span>
                                </div>
                            )}

                            {/* Items Container */}
                            <div
                                className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
                      ${!sidebarOpen ? 'max-h-[1000px] opacity-100' : (openCategories[category.title] ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0')}
                  `}
                            >
                                <div className="pt-1 space-y-1">
                                    {category.items.map((item) => {
                                        const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                                        const Icon = item.icon; // Component reference

                                        return (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group relative
                            ${isActive
                                                        ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20 shadow-sm'
                                                        : 'hover:bg-slate-800 hover:text-white border border-transparent'}
                            ${!sidebarOpen ? 'justify-center' : ''}
                          `}
                                            >
                                                {/* Render Lucide Icon */}
                                                <Icon size={22} className={`shrink-0 transition-colors ${isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'}`} />

                                                {sidebarOpen && (
                                                    <span className="ml-3 truncate animate-fade-in">{item.name}</span>
                                                )}

                                                {/* Hover Tooltip for collapsed state */}
                                                {!sidebarOpen && (
                                                    <div className="absolute left-full ml-4 px-3 py-1.5 bg-slate-900/90 backdrop-blur text-white text-xs font-medium rounded-md shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-all duration-200 translate-x-2 group-hover:translate-x-0 border border-white/10">
                                                        {item.name}
                                                        <div className="absolute top-1/2 -left-1 -translate-y-1/2 border-4 border-transparent border-r-slate-900/90"></div>
                                                    </div>
                                                )}
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    ))}
                </nav>

                {/* Footer */}
                <div className="p-4 border-t border-slate-800 bg-[#0a0a0c]">
                    <div className={`flex items-center gap-3 ${!sidebarOpen ? 'justify-center flex-col' : ''}`}>
                        <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shrink-0 cursor-pointer shadow-lg shadow-purple-500/20">
                            AD
                        </div>
                        {sidebarOpen && (
                            <div className="flex-1 min-w-0 animate-fade-in">
                                <p className="text-sm font-medium text-white truncate">Admin User</p>
                                <p className="text-xs text-slate-500 truncate">Super Admin</p>
                            </div>
                        )}
                    </div>
                </div>
            </aside>
        </>
    );
}
