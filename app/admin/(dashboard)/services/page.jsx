'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Loader2, Image as ImageIcon, Briefcase } from 'lucide-react';
import toast from 'react-hot-toast';

export default function ServicesManager() {
  const [services, setServices] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  const [formData, setFormData] = useState({
    title: '', slug: '', description: '', icon: '', image: ''
  });

  useEffect(() => { fetchServices(); }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services');
      const data = await res.json();
      setServices(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this service?')) return;
    try {
      await fetch(`/api/services/${id}`, { method: 'DELETE' });
      toast.success('Service deleted');
      fetchServices();
    } catch (e) {
      toast.error('Failed to delete');
    }
  };

  const handleFileUpload = async (e, field) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setIsUploading(field);
    const form = new FormData();
    form.append('file', file);
    try {
      const res = await fetch('/api/upload', { method: 'POST', body: form });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setFormData(prev => ({ ...prev, [field]: data.url }));
      toast.success('Uploaded successfully');
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsUploading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch('/api/services', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to create');

      toast.success('Service created');
      setFormData({ title: '', slug: '', description: '', icon: '', image: '' });
      setIsFormOpen(false);
      fetchServices();
    } catch (e) {
      toast.error(e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Services</h1>
          <p className="text-gray-400 mt-2 text-sm">Manage your offerings.</p>
        </div>
        <button onClick={() => setIsFormOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Service</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(item => (
          <div key={item._id} className="relative group bg-[#111116] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-all flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
                <img src={item.icon} alt="" className="w-8 h-8 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = '/webImages/icons.svg' }} />
              </div>
              <button onClick={() => handleDelete(item._id)} className="p-2 text-gray-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"><Trash2 size={18} /></button>
            </div>

            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-400 line-clamp-2">{item.description}</p>

            <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-500 font-mono">
              <span>/{item.slug}</span>
            </div>
          </div>
        ))}

        {services.length === 0 && (
          <div className="col-span-full py-12 text-center border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
            <Briefcase className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <h3 className="text-gray-400 font-medium">No services found</h3>
            <p className="text-gray-600 text-sm mt-1">Add your first service to see it here.</p>
          </div>
        )}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          <div className="relative w-full max-w-md bg-[#111116] h-full border-l border-white/10 p-6 overflow-y-auto shadow-2xl animate-in slide-in-from-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Add New Service</h2>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase mb-2 block">Icon</label>
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center cursor-pointer hover:border-blue-500/30 relative bg-black/20 h-24 flex items-center justify-center">
                    <input type="file" accept="image/*,.svg" onChange={(e) => handleFileUpload(e, 'icon')} className="absolute inset-0 w-full h-full opacity-0 z-10" />
                    {isUploading === 'icon' ? <Loader2 className="animate-spin mx-auto text-blue-500" /> : (formData.icon ? <img src={formData.icon} className="h-12 mx-auto object-contain" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Icon</div>)}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase mb-2 block">Cover Image</label>
                  <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center cursor-pointer hover:border-blue-500/30 relative bg-black/20 h-32 flex items-center justify-center">
                    <input type="file" accept="image/*" onChange={(e) => handleFileUpload(e, 'image')} className="absolute inset-0 w-full h-full opacity-0 z-10" />
                    {isUploading === 'image' ? <Loader2 className="animate-spin mx-auto text-blue-500" /> : (formData.image ? <img src={formData.image} className="h-full w-full object-cover rounded" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Cover Image</div>)}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Service Title</label>
                <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="Web Development" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Slug</label>
                <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="web-development" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Description</label>
                <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" placeholder="Brief description of the service..." value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
              </div>

              <button type="submit" disabled={isLoading || !formData.title} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors mt-4">
                {isLoading ? 'Saving...' : 'Create Service'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
