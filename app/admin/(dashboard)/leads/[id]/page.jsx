'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, ExternalLink, Loader2, Save } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

import { getLabel } from '@/lib/estimatorData';

export default function LeadDetailPage() {
    const { id } = useParams();
    const router = useRouter();
    const [lead, setLead] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);

    // Editable fields
    const [status, setStatus] = useState('');
    const [internalNotes, setInternalNotes] = useState('');

    useEffect(() => {
        fetchLead();
    }, [id]);

    const fetchLead = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(`/api/leads/${id}`);
            if (!res.ok) throw new Error("Lead not found");
            const data = await res.json();
            setLead(data);
            setStatus(data.status);
            setInternalNotes(data.internalNotes || '');
        } catch (error) {
            toast.error('Error fetching lead');
            router.push('/admin/leads');
        } finally {
            setIsLoading(false);
        }
    };

    const handleSave = async () => {
        setIsSaving(true);
        try {
            const res = await fetch(`/api/leads/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status, internalNotes })
            });

            if (!res.ok) throw new Error("Failed to update");

            toast.success("Lead updated successfully");
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsSaving(false);
        }
    };

    if (isLoading) return <div className="flex justify-center py-20"><Loader2 className="animate-spin text-blue-500" size={32} /></div>;
    if (!lead) return null;

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-5xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link href="/admin/leads" className="p-2 bg-white/5 rounded-lg hover:bg-white/10 text-gray-400 hover:text-white transition-colors">
                        <ArrowLeft size={20} />
                    </Link>
                    <div>
                        <h1 className="text-2xl font-bold text-white tracking-tight">{lead.contact.name}</h1>
                        <p className="text-gray-400 text-sm">Submitted on {new Date(lead.createdAt).toLocaleString()}</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="bg-[#111] border border-white/10 text-white text-sm rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                    >
                        <option value="New">New</option>
                        <option value="Contacted">Contacted</option>
                        <option value="Qualified">Qualified</option>
                        <option value="Won">Won</option>
                        <option value="Lost">Lost</option>
                    </select>

                    <button
                        onClick={handleSave}
                        disabled={isSaving}
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium disabled:opacity-50"
                    >
                        {isSaving ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />} Save
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Info */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Project Estimate Card */}
                    <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Project Estimate</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Project Type</p>
                                <p className="text-white text-lg">{getLabel(lead.projectDetails.type)}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Complexity</p>
                                <p className="text-white">{lead.estimate?.complexity}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Estimated Cost</p>
                                <p className="text-malibu text-xl font-bold">
                                    {lead.estimate?.costRange}
                                    {lead.currency !== 'PKR' && <span className="text-sm text-gray-500 block">({lead.estimate?.baseCostRange} PKR)</span>}
                                </p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Timeline</p>
                                <p className="text-white">{lead.estimate?.timelineRange}</p>
                            </div>
                        </div>
                    </div>

                    {/* Features & Details */}
                    <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Requirements</h3>

                        <div className="mb-6">
                            <p className="text-gray-400 text-xs uppercase font-bold mb-2">Selected Features</p>
                            <div className="flex flex-wrap gap-2">
                                {lead.projectDetails.features && lead.projectDetails.features.length > 0 ? (
                                    lead.projectDetails.features.map((f, i) => (
                                        <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                            {getLabel(f)}
                                        </span>
                                    ))
                                ) : (
                                    <span className="text-gray-500 italic">No specific features selected</span>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            {/* Loop through step 3 responses if available for generic display, or just custom logic */}
                            {Object.entries(lead.step3Responses || lead.projectDetails.step3 || {}).map(([key, val]) => (
                                <div key={key}>
                                    <p className="text-gray-400 text-xs uppercase font-bold mb-1">{getLabel(key)}</p>
                                    <p className="text-white">{typeof val === 'boolean' ? (val ? 'Yes' : 'No') : (getLabel(val) || val)}</p>
                                </div>
                            ))}
                        </div>

                        <div>
                            <p className="text-gray-400 text-xs uppercase font-bold mb-2">Budget Preference</p>
                            <p className="text-white">{getLabel(lead.projectDetails.budget)}</p>
                        </div>
                    </div>
                </div>

                {/* Sidebar / Contact Info */}
                <div className="space-y-6">
                    <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Contact Details</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Name</p>
                                <p className="text-white text-lg">{lead.contact.name}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Email</p>
                                <Link href={`mailto:${lead.contact.email}`} className="text-blue-400 hover:text-blue-300 flex items-center gap-1">
                                    {lead.contact.email} <ExternalLink size={14} />
                                </Link>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Phone</p>
                                <Link href={`tel:${lead.contact.phone}`} className="text-blue-400 hover:text-blue-300">
                                    {lead.contact.phone}
                                </Link>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Company</p>
                                <p className="text-white">{lead.contact.company || "N/A"}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-xs uppercase font-bold mb-1">Preferred Method</p>
                                <p className="text-white capitalize">{lead.contact.method || "Any"}</p>
                            </div>
                        </div>
                    </div>

                    {/* Internal Notes */}
                    <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
                        <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Internal Notes</h3>
                        <textarea
                            value={internalNotes}
                            onChange={(e) => setInternalNotes(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-white text-sm focus:border-blue-500/50 outline-none h-32 resize-none"
                            placeholder="Add private notes about this lead..."
                        />
                        <div className="mt-2 text-right">
                            <button onClick={handleSave} disabled={isSaving} className="text-xs text-blue-400 hover:text-white underline">Save Notes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
