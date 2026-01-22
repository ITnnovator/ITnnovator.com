'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Loader2, Quote } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    _id: '',
    title: '',
    name: '',
    role: '',
    company: '',
    quote: '',
    rating: 5
  });

  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    // Using the same API endpoint but ensuring we get fresh data
    const res = await fetch('/api/testimonials', { cache: 'no-store' });
    const data = await res.json();
    setTestimonials(data); // Assuming secure API returns array or {testimonials: []}, but previous insecure one returned array. Secure one is also array (Step 32).
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this testimonial?')) return;
    try {
        const res = await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
        if (!res.ok) throw new Error('Failed to delete');
        toast.success('Deleted');
        fetchTestimonials();
    } catch (e) {
        toast.error(e.message);
    }
  };

    const handleEdit = (item) => {
        setFormData({
            _id: item._id,
            title: item.title || '',
            name: item.name,
            role: item.role || '',
            company: item.company || '',
            quote: item.quote,
            rating: item.rating || 5
        });
        setIsFormOpen(true);
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
        const isEdit = !!formData._id;
        const url = isEdit ? `/api/testimonials/${formData._id}` : '/api/testimonials';
        const method = isEdit ? 'PUT' : 'POST';

        const payload = { ...formData };
        if (!isEdit) {
            delete payload._id;
        }

        const res = await fetch(url, {
            method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
        });

        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.error || 'Operation failed');
        }
        
        toast.success(isEdit ? 'Testimonial updated' : 'Testimonial added');
        setFormData({ _id: '', title: '', name: '', role: '', company: '', quote: '', rating: 5 });
        setIsFormOpen(false);
        fetchTestimonials();
    } catch (e) {
        toast.error(e.message);
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <Toaster />
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Testimonials</h1>
          <p className="text-gray-400 mt-2 text-sm">Manage customer reviews and feedback.</p>
        </div>
        <button onClick={() => { setIsFormOpen(true); setFormData({ _id: '', title: '', name: '', role: '', company: '', quote: '', rating: 5 }); }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Review</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(item => (
          <div key={item._id} className="relative group bg-[#111116] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-all">
            <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button onClick={() => handleEdit(item)} className="p-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-500 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"/></svg>
                </button>
                <button onClick={() => handleDelete(item._id)} className="p-2 bg-red-500/80 text-white rounded-lg hover:bg-red-500 transition-colors"><Trash2 size={16} /></button>
            </div>
            
            <Quote className="h-8 w-8 text-blue-500/20 mb-4" />
            {item.title && <h3 className="text-white font-bold mb-2">{item.title}</h3>}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">"{item.quote}"</p>
            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold shrink-0 overflow-hidden">
                {item.avatar ? (
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                ) : (
                    item.name.charAt(0)
                )}
              </div>
              <div>
                <p className="font-bold text-white text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role} {item.company && `at ${item.company}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          <div className="relative w-full max-w-md bg-[#111116] h-full border-l border-white/10 p-6 overflow-y-auto shadow-2xl animate-in slide-in-from-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">{formData._id ? 'Edit Testimonial' : 'Add Testimonial'}</h2>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Title <span className="text-gray-500 font-normal">(Optional)</span></label>
                <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="Excellent Service!" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Quote</label>
                <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" placeholder="What did they say?" value={formData.quote} onChange={e => setFormData({ ...formData, quote: e.target.value })} />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Author Name</label>
                <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="John Doe" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Role</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="CEO" value={formData.role} onChange={e => setFormData({ ...formData, role: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Company</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="Company Inc." value={formData.company} onChange={e => setFormData({ ...formData, company: e.target.value })} />
                </div>
              </div>

              <button type="submit" disabled={isLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors mt-4">
                {isLoading ? 'Saving...' : (formData._id ? 'Update Review' : 'Add Review')}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
