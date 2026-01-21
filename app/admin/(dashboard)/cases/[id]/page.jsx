'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUploader from '@/admin-core/components/ImageUploader';
import RichTextEditor from '@/admin-core/components/RichTextEditor';
import toast, { Toaster } from 'react-hot-toast';

export default function CaseForm() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const isNew = id === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [submitting, setSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    topImg: '',
    tags: [], // Array of strings
    categories: [], // Array of strings
    client: '',
    year: new Date().getFullYear().toString(),
    link: '',
  });

  // Helper for comma-separated input
  const [tagInput, setTagInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('');

  useEffect(() => {
    if (!isNew) {
      fetchCase();
    }
  }, [id]);

  const fetchCase = async () => {
    try {
      const res = await fetch(`/api/admin/cases/${id}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setFormData(data);
      setTagInput(data.tags?.join(', ') || '');
      setCategoryInput(data.categories?.join(', ') || '');
    } catch (error) {
      toast.error('Error loading case');
      router.push('/admin/cases');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Process inputs back to arrays
    const payload = {
        ...formData,
        tags: tagInput.split(',').map(s => s.trim()).filter(Boolean),
        categories: categoryInput.split(',').map(s => s.trim()).filter(Boolean)
    };

    try {
      const url = isNew ? '/api/admin/cases' : `/api/admin/cases/${id}`;
      const method = isNew ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to save');
      }

      toast.success(isNew ? 'Case created!' : 'Case updated!');
      router.push('/admin/cases');
      router.refresh();
    } catch (error) {
      toast.error(error.message);
      setSubmitting(false);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'New Case Study' : 'Edit Case Study'}</h1>
      </div>

      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-malibu focus:border-transparent outline-none"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Slug</label>
            <input
              type="text"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-malibu focus:border-transparent outline-none"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Client Name</label>
                <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.client}
                onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Year</label>
                <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Link</label>
                <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                value={formData.link}
                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                />
            </div>
        </div>

        <RichTextEditor
          label="Description"
          value={formData.description}
          onChange={(val) => setFormData({ ...formData, description: val })}
        />

        <ImageUploader
            label="Main Project Image"
            value={formData.topImg}
            onChange={(val) => setFormData({ ...formData, topImg: val })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    placeholder="API, Backend, Frontend..."
                />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Categories (comma separated)</label>
                <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                    value={categoryInput}
                    onChange={(e) => setCategoryInput(e.target.value)}
                    placeholder="e-commerce, branding..."
                />
            </div>
        </div>

        <div className="flex justify-end gap-4 pt-6">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={submitting}
            className="px-6 py-2 bg-malibu text-white font-bold rounded-lg hover:bg-blue-600 disabled:opacity-50"
          >
            {submitting ? 'Saving...' : 'Save Case Study'}
          </button>
        </div>
      </form>
    </div>
  );
}
