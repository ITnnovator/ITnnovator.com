'use client';

import { useState, useEffect } from 'react';
import { Eye, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LeadsManager() {
    const [leads, setLeads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchLeads();
    }, []);

    const fetchLeads = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/leads');
            const data = await res.json();
            setLeads(data);
        } catch (error) {
            console.error('Error fetching leads:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'New': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
            case 'Contacted': return 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20';
            case 'Qualified': return 'bg-purple-500/10 text-purple-400 border-purple-500/20';
            case 'Won': return 'bg-green-500/10 text-green-400 border-green-500/20';
            case 'Lost': return 'bg-red-500/10 text-red-400 border-red-500/20';
            default: return 'bg-gray-500/10 text-gray-400 border-gray-500/20';
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Project Leads</h1>
                    <p className="text-gray-400 mt-2 text-sm">Manage submissions from the Project Estimator.</p>
                </div>
            </div>

            {isLoading ? (
                <div className="flex justify-center py-20">
                    <Loader2 className="animate-spin text-blue-500" size={32} />
                </div>
            ) : leads.length === 0 ? (
                <div className="text-center py-20 bg-[#111116] border border-white/5 rounded-2xl">
                    <p className="text-gray-400">No leads found.</p>
                </div>
            ) : (
                <div className="bg-[#111116] border border-white/5 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-sm text-gray-400">
                        <thead className="bg-white/5 text-white uppercase font-bold">
                            <tr>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4">Name</th>
                                <th className="px-6 py-4">Project Type</th>
                                <th className="px-6 py-4">Estimate</th>
                                <th className="px-6 py-4">Date</th>
                                <th className="px-6 py-4 text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {leads.map((lead) => (
                                <tr key={lead._id} className="hover:bg-white/5 transition-colors">
                                    <td className="px-6 py-4">
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                                            {lead.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-white font-medium">{lead.contact.name}</div>
                                        <div className="text-xs opacity-70">{lead.contact.email}</div>
                                    </td>
                                    <td className="px-6 py-4 text-white">
                                        {lead.projectDetails.type}
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-white">{lead.estimate?.costRange}</div>
                                        <div className="text-xs opacity-70">{lead.estimate?.timelineRange}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        {new Date(lead.createdAt).toLocaleDateString()}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link
                                            href={`/admin/leads/${lead._id}`}
                                            className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white rounded-lg transition-all"
                                        >
                                            <Eye size={16} /> View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
