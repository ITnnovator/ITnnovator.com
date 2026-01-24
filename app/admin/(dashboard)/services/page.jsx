'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Edit, Briefcase } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import ServiceForm from '../../components/ServiceForm';

export default function ServicesManager() {
  const [services, setServices] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);

  useEffect(() => { fetchServices(); }, []);

  const fetchServices = async () => {
    try {
      const res = await fetch('/admin/api/services', { cache: 'no-store' });
      const r = await res.json();
      if (r.success) {
        setServices(r.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this service?')) return;
    try {
      await fetch(`/admin/api/services/${id}`, { method: 'DELETE' });
      toast.success('Service deleted');
      fetchServices();
    } catch (e) {
      toast.error('Failed to delete');
    }
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setIsFormOpen(true);
  };

  const handleCreate = () => {
    setEditingService(null);
    setIsFormOpen(true);
  }

  const handleSuccess = () => {
    setIsFormOpen(false);
    setEditingService(null);
    fetchServices();
    toast.success(editingService ? 'Service updated' : 'Service created');
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <Toaster />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Services</h1>
          <p className="text-gray-400 mt-2 text-sm">Manage your offerings.</p>
        </div>
        <button onClick={handleCreate} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Service</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.length > 0 ? services.map(item => (
          <div key={item._id} className="group bg-[#111116] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col">
            <div className="h-48 bg-gray-900 relative overflow-hidden">
              {item.heroImg ? (
                <img src={item.heroImg} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={() => setIsFormOpen(false)} />
          <div className="relative w-full max-w-4xl bg-[#111116] h-full border-l border-white/10 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-white/10 bg-[#111116]">
              <h2 className="text-xl font-bold text-white">{editingService ? 'Edit Service' : 'Add New Service'}</h2>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"><X size={24} /></button>
            </div>
            <div className="flex-1 overflow-hidden">
              <ServiceForm
                initialData={editingService || {}}
                isEdit={!!editingService}
                onSuccess={handleSuccess}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
