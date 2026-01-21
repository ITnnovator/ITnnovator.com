'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Loader2, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ClientsManager() {
  const [clients, setClients] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [formData, setFormData] = useState({ name: '', logo: '', url: '' });

  useEffect(() => { fetchClients(); }, []);

  const fetchClients = async () => {
    const res = await fetch('/api/clients');
    const data = await res.json();
    setClients(data);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this client?')) return;
    await fetch(`/api/clients/${id}`, { method: 'DELETE' });
    toast.success('Client deleted');
    fetchClients();
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: form });
    const data = await res.json();
    setFormData(prev => ({ ...prev, logo: data.url }));
    setIsUploading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch('/api/clients', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    toast.success('Client added');
    setFormData({ name: '', logo: '', url: '' });
    setIsFormOpen(false);
    fetchClients();
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Clients & Partners</h1>
          <p className="text-gray-400 mt-2 text-sm">Manage client logos shown on the site.</p>
        </div>
        <button onClick={() => setIsFormOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Client</button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {clients.map(client => (
          <div key={client._id} className="relative group bg-white/5 p-6 rounded-xl border border-white/5 hover:border-white/20 transition-all flex items-center justify-center aspect-square">
            <img src={client.logo} alt={client.name} className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all" />
            <button onClick={() => handleDelete(client._id)} className="absolute top-2 right-2 p-1.5 bg-red-500/80 rounded-md text-white opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></button>
            <p className="absolute bottom-2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">{client.name}</p>
          </div>
        ))}
      </div>

      {/* Simple Modal */}
      {isFormOpen && (
        <div className="fixed inset-0 z[100] flex justify-center items-center bg-black/80 backdrop-blur-sm p-4 text-center" onClick={() => setIsFormOpen(false)}>
          <div className="bg-[#111116] border border-white/10 p-8 rounded-2xl w-full max-w-md text-left shadow-2xl space-y-6" onClick={e => e.stopPropagation()}>
            <h2 className="text-xl font-bold text-white">Add Client</h2>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center cursor-pointer hover:border-blue-500/30 relative">
                <input type="file" accept="image/*" onChange={handleFileUpload} className="absolute inset-0 w-full h-full opacity-0 z-10" />
                {isUploading ? <Loader2 className="animate-spin mx-auto text-blue-500" /> : (formData.logo ? <img src={formData.logo} className="h-20 mx-auto object-contain" /> : <div className="text-gray-500 text-sm">Click to upload logo</div>)}
              </div>
              <input type="text" placeholder="Client Name" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              <input type="text" placeholder="Website URL (Optional)" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" value={formData.url} onChange={e => setFormData({ ...formData, url: e.target.value })} />
            </div>

            <button onClick={handleSubmit} disabled={isLoading || !formData.logo} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl">{isLoading ? 'Saving...' : 'Add Client'}</button>
          </div>
        </div>
      )}
    </div>
  );
}
