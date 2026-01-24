'use client';

import { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
import Link from 'next/link';
import AdminList from '@/components/admin/AdminList';
import toast from 'react-hot-toast';

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
            toast.error('Failed to load leads');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Permanently delete this lead?')) return;
        try {
            await fetch(`/api/leads/${id}`, { method: 'DELETE' });
            setLeads(prev => prev.filter(l => l._id !== id));
            toast.success('Lead deleted');
        } catch (error) {
            toast.error('Failed to delete lead');
        }
    };

    const handleBulkDelete = async (ids) => {
        try {
            await Promise.all(ids.map(id => fetch(`/api/leads/${id}`, { method: 'DELETE' })));
            setLeads(prev => prev.filter(l => !ids.includes(l._id)));
            toast.success(`${ids.length} leads deleted`);
        } catch (error) {
            toast.error('Failed to delete leads');
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

    // Table Columns Configuration
    const columns = [
        {
            header: 'Status',
            render: (lead) => (
                <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(lead.status)}`}>
                    {lead.status}
                </span>
            )
        },
        {
            header: 'Name',
            accessor: 'contact.name',
            render: (lead) => (
                <div>
                    <div className="text-white font-medium">{lead.contact.name}</div>
                    <div className="text-xs opacity-70">{lead.contact.email}</div>
                </div>
            )
        },
        { header: 'Project Type', accessor: 'projectDetails.type' },
        {
            header: 'Estimate',
            render: (lead) => (
                <div>
                    <div className="text-white">{lead.estimate?.costRange}</div>
                    <div className="text-xs opacity-70">{lead.estimate?.timelineRange}</div>
                </div>
            )
        },
        {
            header: 'Date',
            render: (lead) => new Date(lead.createdAt).toLocaleDateString()
        }
    ];

    // Mobile Card View
    const LeadCard = ({ item }) => (
        <div className="flex flex-col gap-2">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-white font-bold">{item.contact.name}</h3>
                    <p className="text-xs text-gray-500">{item.contact.email}</p>
                </div>
                <span className={`px-2 py-0.5 rounded text-[10px] border ${getStatusColor(item.status)}`}>
                    {item.status}
                </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-sm mt-1">
                <div className="bg-white/5 p-2 rounded">
                    <p className="text-[10px] text-gray-500 uppercase">Type</p>
                    <p className="text-gray-300">{item.projectDetails.type}</p>
                </div>
                <div className="bg-white/5 p-2 rounded">
                    <p className="text-[10px] text-gray-500 uppercase">Est. Cost</p>
                    <p className="text-blue-400 font-medium">{item.estimate?.costRange}</p>
                </div>
            </div>

            <div className="flex justify-between items-center mt-2 pt-2 border-t border-white/5">
                <span className="text-xs text-gray-600">{new Date(item.createdAt).toLocaleDateString()}</span>
                <Link href={`/admin/leads/${item._id}`} className="text-xs font-bold text-blue-400 hover:text-white uppercase tracking-wider flex items-center gap-1">
                    View Details <Eye size={12} />
                </Link>
            </div>
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <AdminList
                header={
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight">Project Leads</h1>
                        <p className="text-gray-400 mt-2 text-sm">Manage submissions from the Project Estimator.</p>
                    </div>
                }
                data={leads}
                isLoading={isLoading}
                columns={columns}
                CardComponent={LeadCard}
                onDelete={handleDelete}
                onBulkDelete={handleBulkDelete}
                searchKeys={['contact.name', 'contact.email', 'projectDetails.type']}
            />
        </div>
    );
}
