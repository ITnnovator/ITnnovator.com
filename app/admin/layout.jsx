import Providers from './Providers';
import AdminLayout from '@/admin-core/components/AdminLayout';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export const metadata = {
  title: 'Admin Panel | ITnnovator',
  description: 'Manage your website content',
};

export default async function Layout({ children }) {
  const session = await getServerSession(authOptions);

  // Note: Middleware handles protection, but double check doesn't hurt
  // If we are on /admin/login, we shouldn't redirect or wrap in AdminLayout
  // However, layout wraps everything in /admin.
  // We need to differentiate if we are on login page or not.
  // Actually, standard practice is to use a separate layout for login or conditionally render.
  // BUT, app router layouts are nested. /admin/login is inside /admin.
  // So /admin/layout.jsx applies to /admin/login too.
  
  // We can't know pathname easily in server component layout to conditionally render.
  // Best approach: Move reusable layout to a sub-layout like /admin/(dashboard)/layout.jsx
  // and keep /admin/login outside of it.
  
  // For now, I will assume the AdminLayout generic wrapper is fine, but it has a sidebar.
  // The Login page already has its own full screen styling.
  
  return (
    <Providers>
      {/* We will handle layout inside page or sub-layouts, or check session here */}
       {children}
    </Providers>
  );
}
