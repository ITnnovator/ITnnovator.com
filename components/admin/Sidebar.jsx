'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAdmin } from '../../app/admin/context/AdminContext';
import { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

// Categorized Menu Items
const menuCategories = [
    {
        title: "Main",
        items: [
            { name: 'Dashboard', href: '/admin', icon: 'ph-squares-four' },
            { name: 'Leads', href: '/admin/leads', icon: 'ph-users-three' },
            { name: 'Messages', href: '/admin/messages', icon: 'ph-chat-text' },
        ]
    },
    {
        title: "Content",
        items: [
            { name: 'Services', href: '/admin/services', icon: 'ph-briefcase' },
            { name: 'Blogs', href: '/admin/blogs', icon: 'ph-newspaper' }, // Renamed to Blogs
            { name: 'Case Studies', href: '/admin/cases', icon: 'ph-folder-notch-open' },
            { name: 'Testimonials', href: '/admin/testimonials', icon: 'ph-star' },
        ]
    },
    {
        title: "System",
        items: [
            { name: 'Team', href: '/admin/team', icon: 'ph-users' },
            { name: 'Settings', href: '/admin/settings', icon: 'ph-gear' },
            { name: 'Clients', href: '/admin/clients', icon: 'ph-users' },
            { name: 'Hero Banner', href: '/admin/hero', icon: 'ph-image' },
        ]
    }
];

export default function Sidebar() {
    const pathname = usePathname();
    const { sidebarOpen } = useAdmin();

    // State for accordions (default all closed)
    const [openCategories, setOpenCategories] = useState({
        Main: false,
        Content: false,
        System: false
    });

    const toggleCategory = (title) => {
        setOpenCategories(prev => ({ ...prev, [title]: !prev[title] }));
    };

    return (
        <aside
            className={`fixed left-0 top-0 z-50 h-screen bg-[#0a0a0c] border-r border-slate-800 text-slate-300 transition-all duration-300 flex flex-col
        ${sidebarOpen ? 'w-64' : 'w-20'}
        `}
        >
            {/* Brand */}
            <div className={`h-20 flex items-center border-b border-slate-800 transition-all duration-300 ${sidebarOpen ? 'px-6' : 'justify-center px-0'}`}>
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/30 shrink-0">
                        <i className="ph-bold ph-rocket-launch text-lg"></i>
                    </div>
                    {sidebarOpen && (
                        <span className="text-lg font-bold text-white tracking-wide animate-fade-in">Admin</span>
                    )}
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 py-6 px-3 space-y-4 overflow-y-auto custom-scrollbar overflow-x-hidden">

                {menuCategories.map((category) => (
                    <div key={category.title} className="overflow-hidden">

                        {/* Category Header (Accordion Toggle) */}
                        {sidebarOpen ? (
                            <button
                                onClick={() => toggleCategory(category.title)}
                                className="w-full flex items-center justify-between px-3 py-2 text-xs font-bold text-slate-500 uppercase tracking-wider hover:text-slate-300 transition-colors rounded-lg hover:bg-white/5"
                                title={`Toggle ${category.title}`}
                            >
                                <span>{category.title}</span>
                                <div className={`transition-transform duration-300 ${openCategories[category.title] ? 'rotate-180' : ''}`}>
                                    <ChevronDown size={14} />
                                </div>
                            </button>
                        ) : (
                            // Divider for collapsed state
                            <div className="h-px bg-slate-800 mx-3 mb-3"></div>
                        )}

                        {/* Items Container with Transition */}
                        <div
                            className={`transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden
                    ${!sidebarOpen ? 'max-h-[500px] opacity-100' : (openCategories[category.title] ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0')}
                `}
                        >
                            <div className="pt-1 space-y-1">
                                {category.items.map((item) => {
                                    const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                                    return (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            title={!sidebarOpen ? item.name : ''}
                                            className={`flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200 group relative
                          ${isActive
                                                    ? 'bg-blue-600/10 text-blue-400 border border-blue-600/20 shadow-sm'
                                                    : 'hover:bg-slate-800 hover:text-white border border-transparent'}
                          ${!sidebarOpen ? 'justify-center' : ''}
                        `}
                                        >
                                            <i className={`ph ${item.icon} text-xl transition-colors ${isActive ? 'text-blue-400' : 'text-slate-400 group-hover:text-white'}`}></i>

                                            {sidebarOpen && (
                                                <span className="ml-3 truncate animate-fade-in">{item.name}</span>
                                            )}

                                            {/* Tooltip for collapsed state */}
                                            {!sidebarOpen && (
                                                <div className="absolute left-full ml-2 px-2 py-1 bg-slate-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50 transition-opacity border border-white/10">
                                                    {item.name}
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
                <div className={`flex items-center gap-3 ${!sidebarOpen ? 'justify-center' : ''}`}>
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-xs shrink-0 cursor-pointer">
                        AD
                    </div>
                    {sidebarOpen && (
                        <div className="flex-1 min-w-0 animate-fade-in">
                            <p className="text-sm font-medium text-white truncate">Admin User</p>
                            <p className="text-xs text-slate-500 truncate">Super Admin</p>
                        </div>
                    )}
                    {sidebarOpen && (
                        <button className="text-slate-400 hover:text-white transition-colors animate-fade-in">
                            <i className="ph ph-sign-out text-lg"></i>
                        </button>
                    )}
                </div>
            </div>
        </aside>
    );
}
