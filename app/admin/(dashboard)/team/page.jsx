'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Loader2, Image as ImageIcon, Users, Mail, User } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const initialForm = {
    name: '', role: '', email: '', image: ''
};

export default function TeamManager() {
    const [team, setTeam] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialForm);

    useEffect(() => { fetchTeam(); }, []);

    const fetchTeam = async () => {
        try {
            const res = await fetch('/api/team', { cache: 'no-store' });
            const data = await res.json();
            setTeam(data);
        } catch (error) {
            console.error(error);
            toast.error('Failed to load team members');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this team member?')) return;
        try {
            await fetch(`/api/team/${id}`, { method: 'DELETE' });
            toast.success('Team member deleted');
            fetchTeam();
        } catch (e) {
            toast.error('Failed to delete');
        }
    };

    const handleEdit = (member) => {
        setFormData({ ...initialForm, ...member });
        setIsFormOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const isEdit = !!formData._id;
            const url = isEdit ? `/api/team/${formData._id}` : '/api/team';
            const method = isEdit ? 'PUT' : 'POST';

            const payload = { ...formData };
            if (!isEdit) delete payload._id;

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Operation failed');
            }

            toast.success(isEdit ? 'Team member updated' : 'Team member added');
            setFormData(initialForm);
            setIsFormOpen(false);
            fetchTeam();
        } catch (e) {
            toast.error(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <Toaster />
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Team Members</h1>
                    <p className="text-gray-400 mt-2 text-sm">Manage your team.</p>
                </div>
                <button onClick={() => { setFormData(initialForm); setIsFormOpen(true); }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Member</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {team.length > 0 ? team.map(item => (
                    <div key={item._id} className="group bg-[#111116] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col">
                        <div className="h-72 bg-gray-900 relative overflow-hidden">
                            {item.image ? (
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            ) : (
                                <div className="w-full h-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                                    <User size={64} />
                                </div>
                            )}
                            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button onClick={() => handleEdit(item)} className="p-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-500"><Users size={16} /></button>
                                <button onClick={() => handleDelete(item._id)} className="p-2 bg-red-500/80 text-white rounded-lg hover:bg-red-500"><Trash2 size={16} /></button>
                            </div>
                        </div>

                        <div className="p-5 flex-1 flex flex-col items-center text-center">
                            <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                            <p className="text-sm text-blue-400 font-medium mb-3">{item.role}</p>
                            {item.email && (
                                <div className="flex items-center gap-2 text-gray-500 text-sm mt-auto">
                                    <Mail size={14} />
                                    <span>{item.email}</span>
                                </div>
                            )}
                        </div>
                    </div>
                )) : (
                    <div className="col-span-full py-12 text-center border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
                        <Users className="h-12 w-12 text-gray-700 mx-auto mb-4" />
                        <h3 className="text-gray-400 font-medium">No team members found</h3>
                    </div>
                )}
            </div>

            {isFormOpen && (
                <TeamModal
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
}

function TeamModal({ onClose, formData, setFormData, handleSubmit, isLoading }) {

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-[#111116] h-full border-l border-white/10 flex flex-col shadow-2xl animate-in slide-in-from-right">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">{formData._id ? 'Edit Member' : 'Add New Member'}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={24} /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <form id="teamForm" onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <div className="flex justify-center mb-6">
                                <div className="w-32">
                                    <ImageUpload label="Profile Photo" value={formData.image} onChange={v => setFormData({ ...formData, image: v })} />
                                </div>
                            </div>

                            <Input label="Full Name" value={formData.name} onChange={v => setFormData({ ...formData, name: v })} required />
                            <Input label="Role / Position" value={formData.role} onChange={v => setFormData({ ...formData, role: v })} required />
                            <Input label="Email Address" type="email" value={formData.email} onChange={v => setFormData({ ...formData, email: v })} />
                        </div>
                    </form>
                </div>

                <div className="p-6 border-t border-white/10">
                    <button form="teamForm" type="submit" disabled={isLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
                        {isLoading ? 'Saving...' : 'Save Member'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Helper Components

function Input({ label, type = "text", value, onChange, required }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase">{label}</label>
            <input required={required} type={type} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" value={value || ''} onChange={e => onChange(e.target.value)} />
        </div>
    );
}

function ImageUpload({ label, value, onChange }) {
    const [uploading, setUploading] = useState(false);

    const handleFile = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const form = new FormData();
        form.append('file', file);
        try {
            const res = await fetch('/api/upload', { method: 'POST', body: form });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            onChange(data.url);
        } catch (e) {
            toast.error('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <label className="text-xs font-semibold text-gray-400 uppercase mb-2 block text-center">{label}</label>
            <div className="border-2 border-dashed border-white/10 rounded-full w-32 h-32 mx-auto text-center cursor-pointer hover:border-blue-500/30 relative bg-black/20 flex items-center justify-center overflow-hidden">
                <input type="file" accept="image/*,.svg" onChange={handleFile} className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" />
                {uploading ? <Loader2 className="animate-spin text-blue-500" /> : (value ? <img src={value} className="w-full h-full object-cover" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Upload</div>)}
            </div>
        </div>
    );
}
