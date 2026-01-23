'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Loader2, Image as ImageIcon, Briefcase, Edit } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

const initialForm = {
  title: '', slug: '', icon: '', heroImage: '',
  description: '', features: [], process: []
};

export default function ServicesManager() {
  const [services, setServices] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialForm);

  useEffect(() => { fetchServices(); }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/api/services', { cache: 'no-store' });
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

  const handleEdit = (service) => {
    setFormData({ ...initialForm, ...service });
    setIsFormOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const isEdit = !!formData._id;
      const url = isEdit ? `/api/services/${formData._id}` : '/api/services';
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

      toast.success(isEdit ? 'Service updated' : 'Service created');
      setFormData(initialForm);
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
      <Toaster />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Services</h1>
          <p className="text-gray-400 mt-2 text-sm">Manage your offerings.</p>
        </div>
        <button onClick={() => { setFormData(initialForm); setIsFormOpen(true); }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Service</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 ? services.map(item => (
          <div key={item._id} className="group bg-[#111116] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col">
            <div className="h-48 bg-gray-900 relative overflow-hidden">
              {item.heroImage ? (
                <img src={item.heroImage} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              ) : (
                <div className="w-full h-full bg-blue-500/10 flex items-center justify-center">
                  <img src={item.icon || '/webImages/icons.svg'} alt={item.title} className="w-16 h-16 object-contain opacity-50" onError={(e) => { e.target.onerror = null; e.target.src = '/webImages/icons.svg' }} />
                </div>
              )}

              <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleEdit(item)} className="p-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-500"><Edit size={16} /></button>
                <button onClick={() => handleDelete(item._id)} className="p-2 bg-red-500/80 text-white rounded-lg hover:bg-red-500"><Trash2 size={16} /></button>
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-500/10 rounded-lg border border-blue-500/20 shrink-0">
                  <img src={item.icon} alt={item.title} className="w-6 h-6 object-contain" onError={(e) => { e.target.onerror = null; e.target.src = '/webImages/icons.svg' }} />
                </div>
                <h3 className="text-lg font-bold text-white leading-tight">{item.title}</h3>
              </div>

              <p className="text-sm text-gray-400 line-clamp-2 mb-4">{item.description}</p>

              <div className="mt-auto">
                {item.slug && <span className="text-[10px] text-blue-400 border border-blue-500/20 bg-blue-500/5 px-2 py-1 rounded font-mono">{item.slug}</span>}
              </div>
            </div>
          </div>
        )) : (
          <div className="col-span-full py-12 text-center border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.01]">
            <Briefcase className="h-12 w-12 text-gray-700 mx-auto mb-4" />
            <h3 className="text-gray-400 font-medium">No services found</h3>
          </div>
        )}
      </div>

      {isFormOpen && (
        <ServiceModal
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

function ServiceModal({ onClose, formData, setFormData, handleSubmit, isLoading }) {

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-[#111116] h-full border-l border-white/10 flex flex-col shadow-2xl animate-in slide-in-from-right">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-xl font-bold text-white">{formData._id ? 'Edit Service' : 'Add New Service'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={24} /></button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          <form id="serviceForm" onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <Input label="Service Title" value={formData.title} onChange={v => setFormData({ ...formData, title: v })} required />
              <Input label="Slug" value={formData.slug} onChange={v => setFormData({ ...formData, slug: v })} required />
              <Input label="Description / Intro Text" textarea value={formData.description} onChange={v => setFormData({ ...formData, description: v })} required />

              <div className="grid grid-cols-2 gap-4">
                <ImageUpload label="Icon" value={formData.icon} onChange={v => setFormData({ ...formData, icon: v })} />
                <ImageUpload label="Hero Cover Image" value={formData.heroImage} onChange={v => setFormData({ ...formData, heroImage: v })} />
              </div>

              <ArrayInput label="Key Features / Bullets" values={formData.features} onChange={v => setFormData({ ...formData, features: v })} />
            </div>

            <div className="space-y-4 pt-6 border-t border-white/10">
              <h3 className="text-white font-bold">Process Steps (Optional)</h3>
              <p className="text-xs text-gray-500">Add up to 3 steps for best display.</p>
              <ProcessManager items={formData.process} onChange={v => setFormData({ ...formData, process: v })} />
            </div>
          </form>
        </div>

        <div className="p-6 border-t border-white/10">
          <button form="serviceForm" type="submit" disabled={isLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
            {isLoading ? 'Saving...' : 'Save Service'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Helper Components

function Input({ label, type = "text", textarea, value, onChange, required }) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-400 uppercase">{label}</label>
      {textarea ? (
        <textarea required={required} rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" value={value || ''} onChange={e => onChange(e.target.value)} />
      ) : (
        <input required={required} type={type} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" value={value || ''} onChange={e => onChange(e.target.value)} />
      )}
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
      <label className="text-xs font-semibold text-gray-400 uppercase mb-2 block">{label}</label>
      <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center cursor-pointer hover:border-blue-500/30 relative bg-black/20 h-24 flex items-center justify-center">
        <input type="file" accept="image/*,.svg" onChange={handleFile} className="absolute inset-0 w-full h-full opacity-0 z-10" />
        {uploading ? <Loader2 className="animate-spin text-blue-500" /> : (value ? <img src={value} className="h-full object-contain" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Upload</div>)}
      </div>
    </div>
  );
}

function ArrayInput({ label, values = [], onChange }) {
  const add = () => onChange([...values, '']);
  const update = (i, v) => { const n = [...values]; n[i] = v; onChange(n); };
  const remove = (i) => { const n = [...values]; n.splice(i, 1); onChange(n); };

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <label className="text-xs font-semibold text-gray-400 uppercase">{label}</label>
        <button type="button" onClick={add} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">+ Add Item</button>
      </div>
      {values.map((v, i) => (
        <div key={i} className="flex gap-2">
          <input className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-sm text-white outline-none" value={v} onChange={e => update(i, e.target.value)} />
          <button type="button" onClick={() => remove(i)} className="p-2 text-gray-500 hover:text-red-400"><X size={16} /></button>
        </div>
      ))}
      {values.length === 0 && <div className="text-xs text-gray-600 italic">No items added</div>}
    </div>
  );
}

function ProcessManager({ items = [], onChange }) {
  const add = () => onChange([...items, { title: '', text: '', image: '' }]);
  const update = (i, field, val) => { const n = [...items]; n[i] = { ...n[i], [field]: val }; onChange(n); };
  const remove = (i) => { const n = [...items]; n.splice(i, 1); onChange(n); };

  return (
    <div className="space-y-4">
      <button type="button" onClick={add} className="w-full py-2 border border-dashed border-white/20 rounded-lg text-sm text-gray-400 hover:text-white hover:border-white/40">+ Add Step</button>
      {items.map((item, i) => (
        <div key={i} className="bg-white/5 p-4 rounded-xl space-y-3 border border-white/5">
          <div className="flex justify-between items-center pb-2 border-b border-white/5">
            <span className="text-xs font-bold text-gray-500">Step {i + 1}</span>
            <button type="button" onClick={() => remove(i)} className="text-red-400 hover:text-red-300"><X size={16} /></button>
          </div>
          <Input label="Title" value={item.title} onChange={v => update(i, 'title', v)} />
          <Input label="Description" textarea value={item.text} onChange={v => update(i, 'text', v)} />
          <div className="mt-2 text-xs font-bold uppercase text-gray-500 mb-1">Image</div>
          <ImageUpload label="Step Image" value={item.image} onChange={v => update(i, 'image', v)} />
        </div>
      ))}
    </div>
  )
}
