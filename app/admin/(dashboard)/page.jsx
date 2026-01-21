import StatsCard from '@/admin-core/components/StatsCard';

// Using server component to fetch initial stats (mocked for now or via direct DB call)
// Since we are using Mongoose, we can query directly in Server Component!
import dbConnect from '@/app/admin/lib/mongodb';
import Service from '@/models/Service';
import Case from '@/models/Case';
import Testimonial from '@/models/Testimonial';
import Client from '@/models/Client';

async function getStats() {
  await dbConnect();
  
  // Parallel fetch for performance
  const [
    servicesCount,
    casesCount,
    testimonialsCount,
    clientsCount
  ] = await Promise.all([
    Service.countDocuments({}),
    Case.countDocuments({}),
    Testimonial.countDocuments({}),
    Client.countDocuments({})
  ]);

  return {
    servicesCount,
    casesCount,
    testimonialsCount,
    clientsCount
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome back! Here's what's happening on your website.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard 
          title="Total Services" 
          value={stats.servicesCount} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
          color="blue"
        />
        <StatsCard 
          title="Case Studies" 
          value={stats.casesCount} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>}
          color="purple"
        />
        <StatsCard 
          title="Testimonials" 
          value={stats.testimonialsCount} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>}
          color="green"
        />
        <StatsCard 
          title="Clients" 
          value={stats.clientsCount} 
          icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
          color="orange"
        />
      </div>

      {/* Quick Actions or Recent Activity could go here */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-lg font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="flex gap-4">
            <a href="/admin/services/new" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-malibu hover:bg-blue-600 focus:outline-none">
              Add New Service
            </a>
            <a href="/admin/cases/new" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-malibu hover:bg-blue-600 focus:outline-none">
              Add Case Study
            </a>
        </div>
      </div>
    </div>
  );
}
