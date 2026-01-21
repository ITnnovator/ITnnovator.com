import dbConnect from '@/lib/db';
import Contact from '@/models/Contact';
import { Mail, Phone, Calendar, Search, Inbox, CheckCircle2 } from 'lucide-react';

async function getContacts() {
    await dbConnect();
    const contacts = await Contact.find().sort({ createdAt: -1 });
    return contacts;
}

export default async function ContactsPage() {
    const contacts = await getContacts();

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Messages</h1>
                    <p className="text-gray-400 mt-2 text-sm">View and manage inquiries from your contact form.</p>
                </div>

                {/* Search Placeholder */}
                <div className="relative group w-full md:w-auto">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                    <input
                        type="text"
                        placeholder="Search all messages..."
                        className="w-full md:w-80 pl-10 pr-4 py-2.5 bg-[#0a0a0c] border border-white/10 rounded-xl text-sm text-gray-200 focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 focus:outline-none transition-all placeholder:text-gray-600"
                    />
                </div>
            </div>

            <div className="bg-[#111116] border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white/[0.02] border-b border-white/5">
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Sender Details</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider">Message Content</th>
                                <th className="px-6 py-4 text-xs font-semibold text-gray-400 uppercase tracking-wider text-right">Received</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {contacts.length === 0 ? (
                                <tr>
                                    <td colSpan="4" className="px-6 py-24 text-center">
                                        <div className="flex flex-col items-center justify-center text-gray-500 max-w-sm mx-auto">
                                            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-4">
                                                <Inbox className="h-8 w-8 opacity-40" />
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-300 mb-1">No messages yet</h3>
                                            <p className="text-sm">When visitors fill out your contact form, their queries will appear here.</p>
                                        </div>
                                    </td>
                                </tr>
                            ) : (
                                contacts.map((contact) => (
                                    <tr key={contact._id.toString()} className="group hover:bg-white/[0.02] transition-colors">
                                        <td className="px-6 py-5">
                                            <div className="flex items-start gap-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center text-blue-200 font-bold text-sm shrink-0 border border-white/5 shadow-md">
                                                    {contact.name.charAt(0).toUpperCase()}
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-gray-200 group-hover:text-blue-400 transition-colors">{contact.name}</p>
                                                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                                                        <Mail className="h-3 w-3" /> <a href={`mailto:${contact.email}`} className="hover:text-gray-300 transition-colors">{contact.email}</a>
                                                    </div>
                                                    {contact.phone && (
                                                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                                                            <Phone className="h-3 w-3" /> <a href={`tel:${contact.phone}`} className="hover:text-gray-300 transition-colors">{contact.phone}</a>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-5 align-top pt-6">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                                                {contact.subject || 'General Inquiry'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-5 max-w-md">
                                            <p className="text-sm text-gray-400 leading-relaxed line-clamp-2 md:line-clamp-3 group-hover:text-gray-300 transition-colors">
                                                {contact.message}
                                            </p>
                                        </td>
                                        <td className="px-6 py-5 text-right whitespace-nowrap align-top pt-6">
                                            <div className="flex flex-col items-end gap-1">
                                                <span className="text-xs font-medium text-gray-400 flex items-center gap-1.5">
                                                    <Calendar className="h-3 w-3" />
                                                    {new Date(contact.createdAt).toLocaleDateString()}
                                                </span>
                                                <span className="text-[10px] text-gray-600 bg-white/5 px-1.5 py-0.5 rounded">
                                                    {new Date(contact.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                                </span>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
