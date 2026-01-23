import '../globals.css';
import { Toaster } from 'react-hot-toast';
import { AdminProvider } from './context/AdminContext';

export const metadata = {
  title: 'Admin Panel - Itnnovator',
  description: 'Itnnovator Admin Dashboard',
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased selection:bg-blue-500/30">
        <Toaster position="top-center" />
        <AdminProvider>
          {children}
        </AdminProvider>
      </body>
    </html>
  );
}
