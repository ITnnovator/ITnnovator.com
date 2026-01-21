import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import User from '@/models/User';
import { LayoutDashboard, MessageSquare, Users, Eye, TrendingUp, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

async function getStats() {
  await dbConnect();
  const contactCount = await Contact.countDocuments();
  const userCount = await User.countDocuments();
  const recentContacts = await Contact.find().sort({ createdAt: -1 }).limit(5);

  return { contactCount, userCount, recentContacts };
}

export default async function AdminDashboard() {
  const { contactCount, userCount, recentContacts } = await getStats();

  const stats = [
    {
      label: 'Total Messages',
      value: contactCount,
      icon: MessageSquare,
      gradient: 'from-blue-500 to-cyan-400',
      bg: 'bg-blue-500/10',
      change: '+12% from last week'
    },
    {
      label: 'Admin Users',
      value: userCount,
      icon: Users,
      gradient: 'from-purple-500 to-pink-400',
      bg: 'bg-purple-500/10',
      change: 'Stable'
    },
    {
      label: 'Total Views',
      value: '1,204',
      icon: Eye,
      gradient: 'from-emerald-500 to-teal-400',
      bg: 'bg-emerald-500/10',
      change: '+24% today'
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-gray-400 mt-2 text-sm">Welcome back, here's what's happening today.</p>
        </div>
        <div className="text-right hidden md:block">
          <p className="text-sm font-medium text-gray-400">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="group relative bg-[#111116] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all overflow-hidden">

            {/* Hover Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ring-1 ring-white/5`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <span className="text-xs font-medium text-emerald-400 flex items-center bg-emerald-500/10 px-2 py-1 rounded-full">
                <TrendingUp className="h-3 w-3 mr-1" /> {stat.change}
              </span>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Messages - Spans 2 columns */}
        <div className="lg:col-span-2 bg-[#111116] border border-white/5 rounded-2xl p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-gray-400" /> Recent Messages
            </h3>
            <Link href="/admin/contacts" className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-500/10">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-3 flex-1">
            {recentContacts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-48 text-gray-500">
                <MessageSquare className="h-8 w-8 mb-2 opacity-20" />
                <p>No messages found.</p>
              </div>
            ) : (
              recentContacts.map((contact) => (
                <div key={contact._id.toString()} className="group flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] border border-transparent hover:border-white/5 transition-all cursor-default">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-gray-300 font-bold text-sm shrink-0 border border-white/5 group-hover:border-white/20 transition-colors shadow-lg">
                    {contact.name.charAt(0).toUpperCase()}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <p className="font-semibold text-gray-200 text-sm truncate group-hover:text-blue-400 transition-colors">{contact.name}</p>
                      <span className="text-[10px] text-gray-500 flex items-center gap-1 bg-black/20 px-2 py-0.5 rounded-full">
                        <Clock className="h-3 w-3" />
                        {new Date(contact.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-xs text-gray-400 truncate">{contact.subject || 'No Subject'}</p>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 gap-3">
            <Link href="/admin/contacts" className="p-4 bg-gradient-to-r from-blue-900/20 to-blue-800/10 rounded-xl hover:from-blue-600/20 hover:to-blue-500/20 border border-blue-500/20 hover:border-blue-500/40 transition-all group flex items-center gap-4">
              <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400 group-hover:text-blue-300 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-200 group-hover:text-white">View Messages</p>
                <p className="text-xs text-gray-500">Check new inquiries</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-gray-600 group-hover:text-blue-400 transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
            </Link>

            <Link href="/admin/team" className="p-4 bg-gradient-to-r from-purple-900/20 to-purple-800/10 rounded-xl hover:from-purple-600/20 hover:to-purple-500/20 border border-purple-500/20 hover:border-purple-500/40 transition-all group flex items-center gap-4">
              <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400 group-hover:text-purple-300 transition-colors">
                <Users className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-200 group-hover:text-white">Manage Team</p>
                <p className="text-xs text-gray-500">Update team members</p>
              </div>
              <ArrowRight className="ml-auto h-4 w-4 text-gray-600 group-hover:text-purple-400 transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
