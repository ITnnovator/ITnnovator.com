import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import User from '@/models/User';
import Lead from '@/models/Lead';
import Blog from '@/models/Blog';
import Team from '@/models/Team';
import { LayoutDashboard, MessageSquare, Users, Eye, TrendingUp, Clock, ArrowRight, FileText, Briefcase, Plus, Star } from 'lucide-react';
import Link from 'next/link';

async function getStats() {
  await dbConnect();

  const [
    contactCount,
    userCount,
    leadCount,
    blogCount,
    teamCount,
    recentContacts,
    recentLeads
  ] = await Promise.all([
    Contact.countDocuments(),
    User.countDocuments(),
    Lead.countDocuments(),
    Blog.countDocuments(),
    Team.countDocuments(),
    Contact.find().sort({ createdAt: -1 }).limit(5),
    Lead.find().sort({ createdAt: -1 }).limit(5).populate('contact')
  ]);

  return { contactCount, userCount, leadCount, blogCount, teamCount, recentContacts, recentLeads };
}

export default async function AdminDashboard() {
  const { contactCount, userCount, leadCount, blogCount, teamCount, recentContacts, recentLeads } = await getStats();

  const stats = [
    {
      label: 'Total Messages',
      value: contactCount,
      icon: MessageSquare,
      gradient: 'from-blue-500 to-cyan-400',
      bg: 'bg-blue-500/10',
      link: '/admin/messages'
    },
    {
      label: 'New Leads',
      value: leadCount,
      icon: Users, // Or a target icon
      gradient: 'from-emerald-500 to-green-400',
      bg: 'bg-emerald-500/10',
      link: '/admin/leads'
    },
    {
      label: 'Published Blogs',
      value: blogCount,
      icon: FileText,
      gradient: 'from-orange-500 to-amber-400',
      bg: 'bg-orange-500/10',
      link: '/admin/blogs'
    },
    {
      label: 'Team Members',
      value: teamCount,
      icon: Users,
      gradient: 'from-purple-500 to-pink-400',
      bg: 'bg-purple-500/10',
      link: '/admin/team'
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Link key={index} href={stat.link} className="group relative bg-[#111116] border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all overflow-hidden block">
            {/* Hover Gradient Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />

            <div className="flex justify-between items-start mb-4">
              <div className={`p-3 rounded-xl ${stat.bg} ring-1 ring-white/5`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <ArrowRight className="h-4 w-4 text-gray-600 group-hover:text-white transition-colors -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Recent Leads - Spans 2 columns */}
        <div className="lg:col-span-2 bg-[#111116] border border-white/5 rounded-2xl p-6 flex flex-col h-full">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Users className="h-5 w-5 text-gray-400" /> Recent Leads
            </h3>
            <Link href="/admin/leads" className="text-xs font-medium text-blue-400 hover:text-blue-300 flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg hover:bg-blue-500/10">
              View All <ArrowRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="space-y-3 flex-1 overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="text-xs uppercase bg-white/5 text-gray-300 font-semibold">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Name</th>
                  <th className="px-4 py-3">Type</th>
                  <th className="px-4 py-3">Budget</th>
                  <th className="px-4 py-3 rounded-r-lg text-right">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {recentLeads.length === 0 ? (
                  <tr><td colSpan="4" className="text-center py-10 opacity-50">No leads found.</td></tr>
                ) : recentLeads.map(lead => (
                  <tr key={lead._id} className="hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 font-medium text-white">{lead.contact?.name || 'Unknown'}</td>
                    <td className="px-4 py-3">{lead.projectDetails?.type}</td>
                    <td className="px-4 py-3 text-emerald-400">{lead.estimate?.costRange}</td>
                    <td className="px-4 py-3 text-right opacity-60">{new Date(lead.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & Recent Messages */}
        <div className="flex flex-col gap-6">

          {/* Quick Actions */}
          <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 gap-3">

              <Link href="/admin/blogs" className="p-3 bg-gradient-to-r from-blue-900/10 to-blue-800/5 rounded-xl hover:from-blue-600/20 hover:to-blue-500/20 border border-blue-500/10 hover:border-blue-500/30 transition-all group flex items-center gap-3">
                <div className="p-2 bg-blue-500/20 rounded-lg text-blue-400">
                  <Plus className="h-4 w-4" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-semibold text-gray-200 group-hover:text-white">New Blog Post</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-gray-600 group-hover:text-blue-400 transition-colors" />
              </Link>

              <Link href="/admin/leads" className="p-3 bg-gradient-to-r from-emerald-900/10 to-emerald-800/5 rounded-xl hover:from-emerald-600/20 hover:to-emerald-500/20 border border-emerald-500/10 hover:border-emerald-500/30 transition-all group flex items-center gap-3">
                <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                  <Users className="h-4 w-4" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-semibold text-gray-200 group-hover:text-white">Check Leads</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-gray-600 group-hover:text-emerald-400 transition-colors" />
              </Link>

              <Link href="/admin/services" className="p-3 bg-gradient-to-r from-purple-900/10 to-purple-800/5 rounded-xl hover:from-purple-600/20 hover:to-purple-500/20 border border-purple-500/10 hover:border-purple-500/30 transition-all group flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg text-purple-400">
                  <Briefcase className="h-4 w-4" />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm font-semibold text-gray-200 group-hover:text-white">Services</p>
                </div>
                <ArrowRight className="ml-auto h-4 w-4 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </Link>
            </div>
          </div>

          {/* Recent Messages Mini-List */}
          <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-gray-400" /> Messages
              </h3>
              <Link href="/admin/contacts" className="text-xs text-blue-400 hover:text-white">View All</Link>
            </div>

            <div className="space-y-3">
              {recentContacts.slice(0, 3).map((contact) => (
                <Link key={contact._id.toString()} href="/admin/contacts" className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold text-gray-400 group-hover:text-white group-hover:bg-blue-600 transition-all">
                    {contact.name.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-gray-300 group-hover:text-white truncate">{contact.name}</p>
                    <p className="text-xs text-gray-500 truncate">{contact.subject || 'No Subject'}</p>
                  </div>
                </Link>
              ))}
              {recentContacts.length === 0 && <p className="text-sm text-gray-500 text-center py-4">No new messages.</p>}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
