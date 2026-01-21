'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function AdminLayout({ children }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Dashboard', href: '/admin', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Services', href: '/admin/services', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { name: 'Case Studies', href: '/admin/cases', icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10' },
    { name: 'Testimonials', href: '/admin/testimonials', icon: 'M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z' },
    { name: 'Clients', href: '/admin/clients', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { name: 'Settings', href: '/admin/settings', icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z' },
  ];

  return (
    <div className='min-h-screen bg-gray-100 flex'>
      {/* Mobile menu button */}
      <div className='lg:hidden fixed top-0 left-0 w-full bg-white z-50 px-4 py-3 border-b flex justify-between items-center'>
        <div className='font-bold text-xl'>ITnnovator Admin</div>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className='p-2 bg-gray-100 rounded-md'>
          {isMobileMenuOpen ? (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' /></svg>
          ) : (
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' /></svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#0a0a0a] text-white transition-transform transform lg:translate-x-0 lg:static lg:inset-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className='h-full flex flex-col'>
          <div className='h-16 flex items-center justify-center border-b border-gray-800 text-2xl font-bold tracking-wider'>
            ITnnovator
          </div>

          <div className='flex-1 overflow-y-auto py-4'>
            <ul className='space-y-1 px-3'>
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={`flex items-center px-4 py-3 rounded-lg transition-colors ${
                        isActive
                          ? 'bg-malibu text-black font-medium'
                          : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                      }`}
                    >
                      <svg className={`w-5 h-5 mr-3 ${isActive ? 'text-black' : 'text-gray-500 group-hover:text-white'}`} fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d={item.icon} />
                      </svg>
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className='p-4 border-t border-gray-800'>
            <div className='flex items-center mb-4 px-2'>
              <div className='w-8 h-8 rounded-full bg-malibu flex items-center justify-center text-black font-bold mr-3'>
                {session?.user?.name?.[0] || 'A'}
              </div>
              <div className='overflow-hidden'>
                <p className='text-sm font-medium truncate'>{session?.user?.name}</p>
                <p className='text-xs text-gray-500 truncate'>{session?.user?.email}</p>
              </div>
            </div>
            <button
              onClick={() => signOut()}
              className='w-full flex items-center justify-center px-4 py-2 border border-gray-700 rounded-md text-sm font-medium text-gray-300 hover:bg-gray-800 transition-colors'
            >
              <svg className='w-4 h-4 mr-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1' />
              </svg>
              Sign out
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className='flex-1 lg:ml-0 pt-16 lg:pt-0 min-h-screen overflow-y-auto bg-gray-50 text-black'>
        <div className='p-6 lg:p-8 max-w-7xl mx-auto'>
          {children}
        </div>
      </main>
    </div>
  );
}
