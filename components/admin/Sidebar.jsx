'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Users,
    MessageSquare,
    Settings,
    LogOut,
    Briefcase,
    Layers,
    ChevronLeft,
    ChevronRight,
    Menu,
    Image
} from 'lucide-react';
import { cn } from '@/lib/utils';

const sidebarItems = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
    { icon: MessageSquare, label: 'Messages', href: '/admin/contacts' },
    { icon: Users, label: 'Team', href: '/admin/team' },
    { icon: Briefcase, label: 'Services', href: '/admin/services' },
    { icon: Layers, label: 'Cases', href: '/admin/cases' },
    { icon: Users, label: 'Clients', href: '/admin/clients' },
    { icon: MessageSquare, label: 'Testimonials', href: '/admin/testimonials' },
    { icon: Image, label: 'Hero Banner', href: '/admin/hero' },
    { icon: Settings, label: 'Settings', href: '/admin/settings' },
];

export default function Sidebar({ isCollapsed, toggleSidebar }) {
    const pathname = usePathname();

    const handleLogout = async () => {
        try {
            await fetch('/api/auth/logout', { method: 'POST' });
            window.location.href = '/admin/login';
        } catch (error) {
            console.error('Logout failed', error);
        }
    };

    return (
        <motion.div
            animate={{ width: isCollapsed ? 80 : 280 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="bg-[#0a0a0c] border-r border-white/5 h-screen flex flex-col relative shrink-0 z-50 shadow-2xl"
        >
            {/* Header / Logo */}
            <div className={cn("p-6 flex items-center h-20", isCollapsed ? "justify-center" : "justify-between")}>
                {!isCollapsed && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex flex-col justify-center"
                    >
                        <img
                            src="/webImages/logo.png"
                            alt="ITnnovator Logo"
                            className="h-10 w-auto object-contain"
                        />
                    </motion.div>
                )}

                {/* Toggle Button */}
                <button
                    onClick={toggleSidebar}
                    className={cn(
                        "p-1.5 rounded-lg bg-gray-900/50 hover:bg-blue-600/20 text-gray-400 hover:text-blue-400 transition-all border border-transparent hover:border-blue-500/30",
                        isCollapsed && "mx-auto"
                    )}
                >
                    {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
                </button>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 space-y-2 overflow-y-auto overflow-x-hidden content-start py-4">
                {sidebarItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="block group"
                        >
                            <div
                                className={cn(
                                    "flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 min-h-[48px] relative",
                                    isActive
                                        ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-400 border border-blue-500/20"
                                        : "text-gray-400 hover:bg-white/5 hover:text-gray-100 border border-transparent"
                                )}
                            >
                                {/* Icon */}
                                <item.icon className={cn(
                                    "shrink-0 transition-colors",
                                    isActive ? "text-blue-400" : "text-gray-500 group-hover:text-gray-300",
                                    isCollapsed ? "h-6 w-6 mx-auto" : "h-5 w-5"
                                )} />

                                {/* Label - Only show if not collapsed */}
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="font-medium text-sm whitespace-nowrap"
                                    >
                                        {item.label}
                                    </motion.span>
                                )}

                                {/* Active Indicator Line (Left) */}
                                {isActive && (
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                )}

                                {/* Tooltip for Collapsed State */}
                                {isCollapsed && (
                                    <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-xs rounded-md shadow-xl border border-white/10 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                                        {item.label}
                                    </div>
                                )}
                            </div>
                        </Link>
                    );
                })}
            </nav>

            {/* Footer / Logout */}
            <div className="p-3 border-t border-white/5">
                <button
                    onClick={handleLogout}
                    className={cn(
                        "flex items-center gap-3 px-3 py-3 w-full text-left rounded-xl transition-colors group",
                        "text-gray-400 hover:bg-red-500/10 hover:text-red-400 hover:border-red-500/20 border border-transparent",
                        isCollapsed && "justify-start" // Icon alignment
                    )}
                >
                    <LogOut className={cn("shrink-0 transition-colors", isCollapsed && "mx-auto")} size={20} />
                    {!isCollapsed && <span className="font-medium text-sm">Logout</span>}
                </button>
            </div>
        </motion.div>
    );
}
