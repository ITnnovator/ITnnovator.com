'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import RichTextEditor from '@/admin-core/components/RichTextEditor';
import ImageUploader from '@/admin-core/components/ImageUploader';
import toast, { Toaster } from 'react-hot-toast';

export default function TestimonialForm() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const isNew = id === 'new';
  const [loading, setLoading] = useState(!isNew);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    company: '',
    quote: '',
    avatar: '',
    rating: 5,
    isFeatured: true,
  });

  useEffect(() => {
    if (!isNew) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/admin/testimonials/${id}`);
      if (!res.ok) throw new Error('Fetch failed');
      const data = await res.json();
      setFormData(data);
    } catch {
      router.push('/admin/testimonials');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const url = isNew ? '/api/admin/testimonials' : `/api/admin/testimonials/${id}`;
      const method = isNew ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success('Saved!');
      router.push('/admin/testimonials');
      router.refresh();
    } catch (e) {
      toast.error(e.message);
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <Toaster />
      <h1 className="text-2xl font-bold mb-6">{isNew ? 'New Testimonial' : 'Edit Testimonial'}</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Role/Title</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                />
            </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                />
            </div>
            <div>
                 <label className="block text-sm font-medium text-gray-700 mb-2">Rating (1-5)</label>
                 <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.rating}
                    onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                 >
                    {[5,4,3,2,1].map(r => <option key={r} value={r}>{r} Stars</option>)}
                 </select>
            </div>
        </div>

        <RichTextEditor
          label="Quote"
          value={formData.quote}
          onChange={(val) => setFormData({ ...formData, quote: val })}
          rows={3}
        />

        <ImageUploader  
            label="Client Avatar (Optional)"
            value={formData.avatar}
            onChange={(val) => setFormData({ ...formData, avatar: val })}
        />

        <div className="flex items-center gap-2">
            <input 
                type="checkbox"
                id="featured"
                checked={formData.isFeatured}
                onChange={(e) => setFormData({ ...formData, isFeatured: e.target.checked })}
                className="w-4 h-4 text-malibu rounded focus:ring-malibu border-gray-300"
            />
            <label htmlFor="featured" className="text-sm font-medium text-gray-700">Featured Testimonial</label>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t">
          <button type="button" onClick={() => router.back()} className="px-4 py-2 border rounded-lg hover:bg-gray-50">Cancel</button>
          <button type="submit" disabled={submitting} className="px-6 py-2 bg-malibu text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50">
            {submitting ? 'Saving...' : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
}
