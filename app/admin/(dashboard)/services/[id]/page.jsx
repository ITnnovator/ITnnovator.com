'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUploader from '@/admin-core/components/ImageUploader';
import RichTextEditor from '@/admin-core/components/RichTextEditor';
import toast, { Toaster } from 'react-hot-toast';

export default function ServiceForm() {
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
    icon: '',
    image: '',
    points: [''], // Array of strings
    images: [], // Array of strings
    process: [{ title: '', description: '' }], // Array of objects
  });

  useEffect(() => {
    if (!isNew) {
      fetchService();
    }
  }, [id]);

  const fetchService = async () => {
    try {
      const res = await fetch(`/api/admin/services/${id}`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setFormData(data);
    } catch (error) {
      toast.error('Error loading service');
      router.push('/admin/services');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = isNew ? '/api/admin/services' : `/api/admin/services/${id}`;
      const method = isNew ? 'POST' : 'PUT';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to save');
      }

      toast.success(isNew ? 'Service created!' : 'Service updated!');
      router.push('/admin/services');
      router.refresh();
    } catch (error) {
      toast.error(error.message);
      setSubmitting(false);
    }
  };

  const handlePointChange = (index, value) => {
    const newPoints = [...formData.points];
    newPoints[index] = value;
    setFormData({ ...formData, points: newPoints });
  };

  const addPoint = () => {
    setFormData({ ...formData, points: [...formData.points, ''] });
  };
  
  const removePoint = (index) => {
    const newPoints = formData.points.filter((_, i) => i !== index);
    setFormData({ ...formData, points: newPoints });
  };

  const handleProcessChange = (index, field, value) => {
    const newProcess = [...formData.process];
    newProcess[index][field] = value;
    setFormData({ ...formData, process: newProcess });
  };

  const addProcessStep = () => {
    setFormData({ ...formData, process: [...formData.process, { title: '', description: '' }] });
  };

  const removeProcessStep = (index) => {
    const newProcess = formData.process.filter((_, i) => i !== index);
    setFormData({ ...formData, process: newProcess });
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto">
      <Toaster />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">{isNew ? 'New Service' : 'Edit Service'}</h1>
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

        <RichTextEditor
          label="Description"
          value={formData.description}
          onChange={(val) => setFormData({ ...formData, description: val })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ImageUploader
            label="Icon (SVG recommended)"
            value={formData.icon}
            onChange={(val) => setFormData({ ...formData, icon: val })}
          />
          <ImageUploader
            label="Main Image"
            value={formData.image}
            onChange={(val) => setFormData({ ...formData, image: val })}
          />
        </div>

        {/* Dynamic Points Section */}
        <div className="border-t pt-6">
          <label className="block text-lg font-medium text-gray-900 mb-4">Key Points</label>
          {formData.points.map((point, index) => (
            <div key={index} className="flex gap-2 mb-3">
              <input
                type="text"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-malibu focus:border-transparent outline-none"
                value={point}
                onChange={(e) => handlePointChange(index, e.target.value)}
                placeholder="Feature point..."
              />
              <button
                type="button"
                onClick={() => removePoint(index)}
                className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
              >
                ✕
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addPoint}
            className="text-sm text-malibu font-medium hover:underline"
          >
            + Add Point
          </button>
        </div>

        {/* Dynamic Process Section */}
        <div className="border-t pt-6">
          <label className="block text-lg font-medium text-gray-900 mb-4">Process Steps</label>
          {formData.process.map((step, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg mb-4 border border-gray-200">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold text-gray-500">Step {index + 1}</span>
                <button
                  type="button"
                  onClick={() => removeProcessStep(index)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Remove
                </button>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Step Title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={step.title}
                  onChange={(e) => handleProcessChange(index, 'title', e.target.value)}
                />
                <textarea
                  placeholder="Step Description"
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  value={step.description}
                  onChange={(e) => handleProcessChange(index, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          <button
            type="button"
            onClick={addProcessStep}
            className="text-sm text-malibu font-medium hover:underline"
          >
            + Add Process Step
          </button>
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
            {submitting ? 'Saving...' : 'Save Service'}
          </button>
        </div>
      </form>
    </div>
  );
}
