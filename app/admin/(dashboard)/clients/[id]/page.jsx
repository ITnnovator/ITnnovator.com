'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUploader from '@/admin-core/components/ImageUploader';
import toast, { Toaster } from 'react-hot-toast';

export default function ClientForm() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const isNew = id === 'new';
  const [loading, setLoading] = useState(!isNew);
  const [submitting, setSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    logo: '',
    url: '',
    order: 0,
    isActive: true,
  });

  useEffect(() => {
    if (!isNew) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    try {
      const res = await fetch(`/api/admin/clients/${id}`);
      if (!res.ok) throw new Error('Fetch failed');
      const data = await res.json();
      setFormData(data);
    } catch {
      router.push('/admin/clients');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const url = isNew ? '/api/admin/clients' : `/api/admin/clients/${id}`;
      const method = isNew ? 'POST' : 'PUT';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed');
      toast.success('Saved!');
      router.push('/admin/clients');
      router.refresh();
    } catch (e) {
      toast.error(e.message);
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-xl mx-auto">
      <Toaster />
      <h1 className="text-2xl font-bold mb-6">{isNew ? 'New Client' : 'Edit Client'}</h1>
      
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 space-y-6">
        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
            <input
                type="text"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
        </div>

        <ImageUploader  
            label="Logo Image"
            value={formData.logo}
            onChange={(val) => setFormData({ ...formData, logo: val })}
        />

        <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Website URL (Optional)</label>
            <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
            />
        </div>

        <div className="flex gap-4">
             <div className="flex-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Display Order</label>
                <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={formData.order}
                    onChange={(e) => setFormData({ ...formData, order: Number(e.target.value) })}
                />
            </div>
            <div className="flex items-center pt-6">
                 <input 
                    type="checkbox"
                    id="active"
                    checked={formData.isActive}
                    onChange={(e) => setFormData({ ...formData, isActive: e.target.checked })}
                    className="w-4 h-4 text-malibu rounded focus:ring-malibu border-gray-300"
                />
                <label htmlFor="active" className="ml-2 text-sm font-medium text-gray-700">Active</label>
            </div>
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
