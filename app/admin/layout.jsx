import '../globals.css';
import { Toaster } from 'react-hot-toast';

export const metadata = {
  title: 'Admin Panel - ITnnovator',
  description: 'ITnnovator Admin Dashboard',
};

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-950 text-gray-100 antialiased selection:bg-blue-500/30">
        <Toaster position="top-center" />
        {children}
      </body>
    </html>
  );
}
