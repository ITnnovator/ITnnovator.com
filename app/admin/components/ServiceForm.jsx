'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageUpload from '@/components/admin/ImageUpload';
import { Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

export default function ServiceForm({ initialData = {}, isEdit = false, onSuccess }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('general');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initialize form data with new schema structure
  const [formData, setFormData] = useState({
    // Core
    title: initialData.title || '',
    slug: initialData.slug || '',
    serviceType: initialData.serviceType || 'primary',
    isFeatured: initialData.isFeatured || false,
    sortOrder: initialData.sortOrder || 0,
    icon: initialData.icon || '',
    alt: initialData.alt || '',

    // SEO
    metaTitle: initialData.metaTitle || '',
    metaDescription: initialData.metaDescription || '',
    canonicalUrl: initialData.canonicalUrl || '',
    noindex: initialData.noindex || false,

    // Hero
    hero: {
      headline: initialData.hero?.headline || '',
      subheadline: initialData.hero?.subheadline || '',
      image: initialData.hero?.image || '',
      ctas: initialData.hero?.ctas || [{ text: 'Get Started', link: '/contact', variant: 'primary' }],
    },

    // Content
    overview: initialData.overview || '',
    features: initialData.features || [''], // New Features list

    // Lists
    whoIsFor: initialData.whoIsFor || [{ text: '', icon: '' }],
    whatsIncluded: initialData.whatsIncluded || [{ title: '', description: '', icon: '' }],
    processSteps: initialData.processSteps || [{ stepName: '', description: '', image: '' }],
    tools: initialData.tools || [{ name: '', logo: '' }],
    whyChooseUs: initialData.whyChooseUs || [{ title: '', description: '', icon: '' }],
    faqs: initialData.faqs || [{ question: '', answer: '' }],
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes('.')) {
      const parts = name.split('.');
      if (parts.length === 2) {
        setFormData(prev => ({
          ...prev,
          [parts[0]]: {
            ...prev[parts[0]],
            [parts[1]]: value
          }
        }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  // Generic Array Handler
  const handleArrayChange = (index, field, value, arrayName) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      if (typeof newArray[index] === 'object') {
        newArray[index] = { ...newArray[index], [field]: value };
      } else {
        newArray[index] = value;
      }
      return { ...prev, [arrayName]: newArray };
    });
  };

  const addArrayItem = (arrayName, template) => {
    setFormData(prev => ({ ...prev, [arrayName]: [...prev[arrayName], template] }));
  };

  const removeArrayItem = (index, arrayName) => {
    setFormData(prev => ({ ...prev, [arrayName]: prev[arrayName].filter((_, i) => i !== index) }));
  };

  // Hero CTA Handler
  const handleHeroCTAChange = (index, field, value) => {
    setFormData(prev => {
      const newCtas = [...prev.hero.ctas];
      newCtas[index] = { ...newCtas[index], [field]: value };
      return { ...prev, hero: { ...prev.hero, ctas: newCtas } };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const url = isEdit
        ? `/admin/api/services/${initialData._id}`
        : '/admin/api/services';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error || 'Failed to save service');
      }

      if (onSuccess) {
        onSuccess();
      } else {
        router.push('/admin/services');
        router.refresh();
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const TabButton = ({ id, label }) => (
    <button
      type="button"
      className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === id
        ? 'border-blue-500 text-blue-400'
        : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
        }`}
      onClick={() => setActiveTab(id)}
    >
      {label}
    </button>
  );

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col bg-[#111116] text-white">
      <div className="border-b border-white/10 flex-shrink-0 px-6">
        <nav className="-mb-px flex space-x-4">
          <TabButton id="general" label="General" />
          <TabButton id="hero" label="Hero & Content" />
          <TabButton id="details" label="Details" />
          <TabButton id="seo" label="SEO" />
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {/* --- TAB: GENERAL --- */}
        {activeTab === 'general' && (
          <div className="grid grid-cols-1 gap-6 max-w-3xl">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input-dark" />
              </div>
              <div>
                <label className="label">Slug</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className="input-dark" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="label">Service Type</label>
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="input-dark">
                  <option value="primary">Primary</option>
                  <option value="supporting">Supporting</option>
                  <option value="hidden">Hidden</option>
                </select>
              </div>
              <div>
                <label className="label">Sort Order</label>
                <input type="number" name="sortOrder" value={formData.sortOrder} onChange={handleChange} className="input-dark" />
              </div>
            </div>

            <div className="flex items-center gap-2 border border-white/10 p-4 rounded bg-white/5">
              <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} className="w-4 h-4" />
              <label className="text-sm">Featured on Homepage</label>
            </div>

            <div>
              <ImageUpload
                label="Service Icon"
                value={formData.icon}
                onChange={(url) => setFormData(prev => ({ ...prev, icon: url }))}
              />
              <input type="text" name="alt" value={formData.alt} onChange={handleChange} placeholder="Icon Alt Text" className="input-dark mt-2" />
            </div>
          </div>
        )}

        {/* --- TAB: HERO & CONTENT --- */}
        {activeTab === 'hero' && (
          <div className="space-y-8 max-w-4xl">
            {/* Hero Section */}
            <div className="section-block">
              <h3 className="section-title">Hero Section</h3>
              <div className="grid gap-4">
                <div>
                  <label className="label">Headline</label>
                  <input type="text" name="hero.headline" value={formData.hero.headline} onChange={handleChange} className="input-dark" />
                </div>
                <div>
                  <label className="label">Subheadline</label>
                  <textarea name="hero.subheadline" value={formData.hero.subheadline} onChange={handleChange} className="input-dark h-20" />
                </div>
                <ImageUpload
                  label="Hero Image"
                  value={formData.hero.image}
                  onChange={(url) => setFormData(prev => ({ ...prev, hero: { ...prev.hero, image: url } }))}
                />
              </div>
            </div>

            {/* Overview */}
            <div className="section-block">
              <h3 className="section-title">Overview (Rich Text HTML)</h3>
              <textarea name="overview" value={formData.overview} onChange={handleChange} className="input-dark h-32 font-mono text-sm" placeholder="<p>Enter HTML content here...</p>" />
            </div>

            {/* Features */}
            <div className="section-block">
              <div className="flex justify-between items-center mb-4">
                <h3 className="section-title">Features List (For Listing Page)</h3>
                <button type="button" onClick={() => addArrayItem('features', '')} className="btn-add">+ Add Feature</button>
              </div>
              <div className="space-y-2">
                {formData.features.map((feature, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleArrayChange(index, null, e.target.value, 'features')}
                      className="input-dark"
                      placeholder="e.g. 24/7 Support"
                    />
                    <button type="button" onClick={() => removeArrayItem(index, 'features')} className="btn-remove"><Trash2 size={16} /></button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- TAB: DETAILS --- */}
        {activeTab === 'details' && (
          <div className="space-y-8 max-w-4xl">

            {/* Who Is This For */}
            <div className="section-block">
              <div className="flex justify-between items-center mb-4">
                <h3 className="section-title">Who Is This For?</h3>
                <button type="button" onClick={() => addArrayItem('whoIsFor', { text: '', icon: '' })} className="btn-add">+ Add Item</button>
              </div>
              {formData.whoIsFor.map((item, i) => (
                <div key={i} className="item-card">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs uppercase text-gray-500">Item {i + 1}</span>
                    <button type="button" onClick={() => removeArrayItem(i, 'whoIsFor')} className="text-red-400"><Trash2 size={14} /></button>
                  </div>
                  <div className="grid grid-cols-[1fr_auto] gap-4">
                    <input type="text" placeholder="Text" value={item.text} onChange={(e) => handleArrayChange(i, 'text', e.target.value, 'whoIsFor')} className="input-dark" />
                    <div className="w-32">
                      <ImageUpload label="Icon" value={item.icon} onChange={(url) => handleArrayChange(i, 'icon', url, 'whoIsFor')} compact />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What's Included */}
            <div className="section-block">
              <div className="flex justify-between items-center mb-4">
                <h3 className="section-title">What's Included?</h3>
                <button type="button" onClick={() => addArrayItem('whatsIncluded', { title: '', description: '', icon: '' })} className="btn-add">+ Add Item</button>
              </div>
              {formData.whatsIncluded.map((item, i) => (
                <div key={i} className="item-card">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs uppercase text-gray-500">Item {i + 1}</span>
                    <button type="button" onClick={() => removeArrayItem(i, 'whatsIncluded')} className="text-red-400"><Trash2 size={14} /></button>
                  </div>
                  <div className="grid gap-2">
                    <input type="text" placeholder="Title" value={item.title} onChange={(e) => handleArrayChange(i, 'title', e.target.value, 'whatsIncluded')} className="input-dark" />
                    <textarea placeholder="Description" value={item.description} onChange={(e) => handleArrayChange(i, 'description', e.target.value, 'whatsIncluded')} className="input-dark h-20" />
                    {/* Icon support if needed, though usually strict list */}
                  </div>
                </div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="section-block">
              <div className="flex justify-between items-center mb-4">
                <h3 className="section-title">Process Steps</h3>
                <button type="button" onClick={() => addArrayItem('processSteps', { stepName: '', description: '', image: '' })} className="btn-add">+ Add Step</button>
              </div>
              {formData.processSteps.map((item, i) => (
                <div key={i} className="item-card bg-black/40">
                  <div className="flex justify-between mb-2">
                    <span className="text-xs uppercase text-gray-500">Step {i + 1}</span>
                    <button type="button" onClick={() => removeArrayItem(i, 'processSteps')} className="text-red-400"><Trash2 size={14} /></button>
                  </div>
                  <div className="grid gap-3">
                    <input type="text" placeholder="Step Name (e.g. 01 Discovery)" value={item.stepName} onChange={(e) => handleArrayChange(i, 'stepName', e.target.value, 'processSteps')} className="input-dark" />
                    <textarea placeholder="Description" value={item.description} onChange={(e) => handleArrayChange(i, 'description', e.target.value, 'processSteps')} className="input-dark h-24" />
                    <ImageUpload label="Step Image" value={item.image} onChange={(url) => handleArrayChange(i, 'image', url, 'processSteps')} />
                  </div>
                </div>
              ))}
            </div>

            {/* Tools */}
            <div className="section-block">
              <div className="flex justify-between items-center mb-4">
                <h3 className="section-title">Tools</h3>
                <button type="button" onClick={() => addArrayItem('tools', { name: '', logo: '' })} className="btn-add">+ Add Tool</button>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {formData.tools.map((item, i) => (
                  <div key={i} className="item-card relative">
                    <button type="button" onClick={() => removeArrayItem(i, 'tools')} className="absolute top-2 right-2 text-gray-500 hover:text-red-400"><Trash2 size={14} /></button>
                    <div className="space-y-2">
                      <input type="text" placeholder="Tool Name" value={item.name} onChange={(e) => handleArrayChange(i, 'name', e.target.value, 'tools')} className="input-dark text-sm" />
                      <ImageUpload label="Logo" value={item.logo} onChange={(url) => handleArrayChange(i, 'logo', url, 'tools')} compact />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* --- TAB: SEO --- */}
        {activeTab === 'seo' && (
          <div className="space-y-6 max-w-3xl">
            <div>
              <label className="label">Meta Title</label>
              <input type="text" name="metaTitle" value={formData.metaTitle} onChange={handleChange} className="input-dark" />
            </div>
            <div>
              <label className="label">Meta Description</label>
              <textarea name="metaDescription" value={formData.metaDescription} onChange={handleChange} className="input-dark h-24" />
            </div>
            <div>
              <label className="label">Canonical URL</label>
              <input type="text" name="canonicalUrl" value={formData.canonicalUrl} onChange={handleChange} className="input-dark" placeholder="https://..." />
            </div>
            <div className="flex items-center gap-2 border border-white/10 p-4 rounded bg-white/5">
              <input type="checkbox" name="noindex" checked={formData.noindex} onChange={handleChange} className="w-4 h-4" />
              <label className="text-sm text-red-300">No Index (Hide from Google)</label>
            </div>
          </div>
        )}

      </div>

      <div className="flex-shrink-0 p-6 border-t border-white/10 bg-[#111116] z-10">
        <button
          type="submit"
          disabled={loading}
          className="w-full justify-center py-3 px-8 border border-transparent shadow-sm text-sm font-bold rounded-xl text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 transition-colors"
        >
          {loading ? 'Saving...' : isEdit ? 'Update Service' : 'Create Service'}
        </button>
      </div>

      <style jsx>{`
        .input-dark {
            display: block;
            width: 100%;
            border-radius: 0.5rem;
            border-color: rgba(255, 255, 255, 0.1);
            background-color: rgba(0, 0, 0, 0.4);
            color: white;
            padding: 0.75rem 1rem;
            outline: none;
            transition: all 0.2s;
            border-width: 1px;
            font-size: 0.875rem;
        }
        .input-dark:focus {
             border-color: rgba(59, 130, 246, 0.5);
             background-color: rgba(0, 0, 0, 0.6);
        }
        .label {
            display: block;
            font-size: 0.75rem;
            font-weight: 600;
            text-transform: uppercase;
            color: #9ca3af;
            margin-bottom: 0.5rem;
        }
        .section-block {
            padding: 1.5rem;
            border-radius: 0.75rem;
            background-color: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .section-title {
            font-weight: 700;
            color: white;
            margin-bottom: 1rem;
        }
        .btn-add {
            font-size: 0.75rem;
            color: #60a5fa;
            background-color: rgba(37, 99, 235, 0.1);
            padding: 0.25rem 0.75rem;
            border-radius: 0.375rem;
            transition: all 0.2s;
        }
        .btn-add:hover {
            background-color: rgba(37, 99, 235, 0.2);
        }
        .btn-remove {
            color: #9ca3af;
            padding: 0.5rem;
            border-radius: 0.375rem;
        }
        .btn-remove:hover {
            color: #ef4444;
            background-color: rgba(239, 68, 68, 0.1);
        }
        .item-card {
            padding: 1rem;
            border-radius: 0.5rem;
            background-color: rgba(0, 0, 0, 0.2);
            border: 1px solid rgba(255, 255, 255, 0.05);
            margin-bottom: 0.75rem;
        }
      `}</style>
    </form>
  );
}
