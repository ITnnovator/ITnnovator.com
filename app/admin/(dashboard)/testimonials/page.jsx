'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Loader2, Quote } from 'lucide-react';
import toast from 'react-hot-toast';

export default function TestimonialsManager() {
  const [testimonials, setTestimonials] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '', role: '', company: '', quote: '', rating: 5
  });

  useEffect(() => { fetchTestimonials(); }, []);

  const fetchTestimonials = async () => {
    const res = await fetch('/api/testimonials');
    const data = await res.json();
    setTestimonials(data);
  };

  const handleDelete = async (id) => {
    if (!confirm('Delete this testimonial?')) return;
    await fetch(`/api/testimonials/${id}`, { method: 'DELETE' });
    toast.success('Deleted');
    fetchTestimonials();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch('/api/testimonials', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    toast.success('Testimonial added');
    setFormData({ name: '', role: '', company: '', quote: '', rating: 5 });
    setIsFormOpen(false);
    fetchTestimonials();
    setIsLoading(false);
  };

  return (
    <div className="space-y-8 animate-in fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Testimonials</h1>
          <p className="text-gray-400 mt-2 text-sm">Manage customer reviews and feedback.</p>
        </div>
        <button onClick={() => setIsFormOpen(true)} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Review</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map(item => (
          <div key={item._id} className="relative group bg-[#111116] border border-white/5 p-6 rounded-2xl hover:border-white/20 transition-all">
            <Quote className="h-8 w-8 text-blue-500/20 mb-4" />
            <p className="text-gray-300 text-sm leading-relaxed mb-6">"{item.quote}"</p>
            <div className="flex items-center gap-3 border-t border-white/5 pt-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-white font-bold shrink-0">
                {item.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-white text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.role} {item.company && `at ${item.company}`}</p>
              </div>
            </div>
            <button onClick={() => handleDelete(item._id)} className="absolute top-4 right-4 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
          </div>
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsFormOpen(false)} />
          <div className="relative w-full max-w-md bg-[#111116] h-full border-l border-white/10 p-6 overflow-y-auto shadow-2xl animate-in slide-in-from-right">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-bold text-white">Add Testimonial</h2>
              <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-white"><X size={24} /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                {isLoading ? 'Saving...' : 'Add Review'}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
