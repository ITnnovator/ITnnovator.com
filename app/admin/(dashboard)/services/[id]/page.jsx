'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUploader from '@/admin-core/components/ImageUploader';
import RichTextEditor from '@/admin-core/components/RichTextEditor';
import toast, { Toaster } from 'react-hot-toast';
import { Layers, Workflow, Compass, Plus, Trash2, ShieldCheck, Search, LayoutTemplate, Link2 } from 'lucide-react';

export default function ServiceForm() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const isNew = id === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('core'); // core | hero | offer | trust
  const [cases, setCases] = useState([]);
  const [allServices, setAllServices] = useState([]); // For related services

  // Initial Form State
  const [formData, setFormData] = useState({
    // Core Identity
    title: '',
    slug: '',
    serviceType: 'primary',
    isFeatured: false,
    sortOrder: 0,
    icon: '',
    alt: '',

    // SEO & Search
    metaTitle: '',
    metaDescription: '',
    primaryKeyword: '', // New Field
    canonicalUrl: '',
    noindex: false,
    redirectFrom: [''], 
    ogTags: {
      title: '',
      description: '',
      image: ''
    },

    // Hero Section
    hero: {
      headline: '',
      subheadline: '',
      image: '',
      ctas: [] 
    },

    // Content Blocks
    overview: '', 
    
    whoIsFor: [], 
    whatsIncluded: [], 
    processSteps: [], 
    
    tools: [], 
    whyChooseUs: [], 
    faqs: [], 
    
    relatedCaseStudies: [],
    relatedServices: [] // New Field
  });

  // Calculate Content Health
  const calculateHealth = () => {
    let wordCount = 0;
    const textFields = [
      formData.overview || '',
      formData.hero.subheadline || '',
      ...(formData.processSteps?.map(s => s.description) || []),
      ...(formData.whatsIncluded?.map(s => s.description) || []),
      ...(formData.whyChooseUs?.map(s => s.description) || [])
    ];
    wordCount = textFields.join(' ').trim().split(/\s+/).length;
    
    const isThin = wordCount < 800;
    const isReady = !isThin && formData.title && formData.slug;

    return { wordCount, isThin, isReady };
  };

  const health = calculateHealth();

  // Fetch Data
  useEffect(() => {
    const init = async () => {
      try {
        // Fetch Cases
        const casesRes = await fetch('/api/admin/cases');
        if (casesRes.ok) setCases(await casesRes.json());

        // Fetch Services (for Relations)
        const servicesRes = await fetch('/api/admin/services'); 
        if (servicesRes.ok) setAllServices(await servicesRes.json());

        if (!isNew) {
          const res = await fetch(`/api/admin/services/${id}`);
          if (!res.ok) throw new Error('Failed to fetch service');
          const data = await res.json();
          
          setFormData(prev => ({
            ...prev,
            ...data,
            redirectFrom: data.redirectFrom?.length ? data.redirectFrom : [''],
            hero: { ...prev.hero, ...data.hero, ctas: data.hero?.ctas || [] },
            ogTags: { ...prev.ogTags, ...data.ogTags },
            whoIsFor: data.whoIsFor || [],
            whatsIncluded: data.whatsIncluded || [],
            processSteps: data.processSteps || [],
            tools: data.tools || [],
            whyChooseUs: data.whyChooseUs || [],
            faqs: data.faqs || [],
            relatedCaseStudies: data.relatedCaseStudies || [],
            relatedServices: data.relatedServices || []
          }));
        }
      } catch (error) {
        toast.error('Error loading data');
        router.push('/admin/services');
      } finally {
        setLoading(false);
      }
    };
    init();
  }, [id, isNew]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const url = isNew ? '/api/admin/services' : `/api/admin/services/${id}`;
      const method = isNew ? 'POST' : 'PUT';

      const cleanData = {
        ...formData,
        redirectFrom: formData.redirectFrom.filter(u => u.trim() !== ''),
      };

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cleanData),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to save');
      }

      toast.success(isNew ? 'Service created!' : 'Service updated!');
      router.push('/admin/services');
      router.refresh();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
      setSubmitting(false);
    }
  };

  // --- Array Handlers ---

  const handleArrayChange = (field, index, subField, value) => {
    const newArr = [...formData[field]];
    if (subField) {
      newArr[index] = { ...newArr[index], [subField]: value };
    } else {
      newArr[index] = value;
    }
    setFormData({ ...formData, [field]: newArr });
  };

  const addItem = (field, template) => {
    setFormData({ ...formData, [field]: [...formData[field], template] });
  };

  const removeItem = (field, index) => {
    setFormData({ ...formData, [field]: formData[field].filter((_, i) => i !== index) });
  };

  // --- Render Helpers ---

  if (loading) return <div className="p-10 text-center text-white">Loading Service Data...</div>;

  return (
    <div className="max-w-7xl mx-auto space-y-6 pb-20">
      <Toaster />

      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 sticky top-0 bg-[#0a0a0c] z-10 py-4 border-b border-white/5">
        <div>
          <h1 className="text-3xl font-bold text-white">{isNew ? 'Create New Service' : `Edit: ${formData.title}`}</h1>
          <div className="flex items-center gap-2 mt-1">
             <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${health.isThin ? 'bg-red-500/20 text-red-500' : 'bg-emerald-500/20 text-emerald-500'}`}>
                {health.wordCount} words
             </span>
             {health.isThin && <span className="text-xs text-red-400">Low Word Count (Will be set to NoIndex)</span>}
             {!health.isThin && <span className="text-xs text-emerald-400">Content Ready for Indexing</span>}
          </div>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-4 py-2 bg-white/5 border border-white/10 rounded-xl text-gray-300 hover:bg-white/10 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="px-6 py-2 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-500 shadow-lg shadow-blue-500/20 disabled:opacity-50 transition-all"
          >
            {submitting ? 'Saving...' : 'Save Changes'}
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
        {[
          { id: 'core', label: 'Core & SEO', icon: Search },
          { id: 'hero', label: 'Hero & Overview', icon: LayoutTemplate },
          { id: 'offer', label: 'Offer Details', icon: Compass },
          { id: 'trust', label: 'Trust Elements', icon: ShieldCheck },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === tab.id ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
          >
            <tab.icon size={18} /> {tab.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-300">

        {/* --- TAB 1: CORE & SEO --- */}
        {activeTab === 'core' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Identity */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Core Identity</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Service Title</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" 
                    value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                </div>
                
                <div className="col-span-2 md:col-span-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Slug</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" 
                    value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} />
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Service Type</label>
                  <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none"
                    value={formData.serviceType} onChange={e => setFormData({ ...formData, serviceType: e.target.value })}>
                    <option value="primary">Primary</option>
                    <option value="supporting">Supporting</option>
                    <option value="hidden">Hidden</option>
                  </select>
                </div>

                <div className="col-span-2 md:col-span-1 flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                  <input type="checkbox" id="isFeatured" className="w-5 h-5 rounded border-gray-600 text-blue-600 focus:ring-blue-500 bg-gray-700"
                    checked={formData.isFeatured} onChange={e => setFormData({ ...formData, isFeatured: e.target.checked })} />
                  <label htmlFor="isFeatured" className="text-sm font-medium text-white cursor-pointer select-none">Show on Homepage?</label>
                </div>

                <div className="col-span-2 md:col-span-1">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Sort Order</label>
                  <input type="number" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" 
                    value={formData.sortOrder} onChange={e => setFormData({ ...formData, sortOrder: parseInt(e.target.value) || 0 })} />
                </div>

                <div className="col-span-2">
                  <ImageUploader label="Service Icon (SVG)" value={formData.icon} onChange={val => setFormData({ ...formData, icon: val })} />
                </div>
                <div className="col-span-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Icon Alt Text</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" 
                    value={formData.alt} onChange={e => setFormData({ ...formData, alt: e.target.value })} />
                </div>
              </div>
            </div>

            {/* SEO Settings */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">SEO & Metadata</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase">Primary Keyword (Internal)</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none font-mono text-sm" 
                    value={formData.primaryKeyword} onChange={e => setFormData({ ...formData, primaryKeyword: e.target.value })} placeholder="Target Keyword for monitoring" />
                </div>
                
                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase">Meta Title</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" 
                    value={formData.metaTitle} onChange={e => setFormData({ ...formData, metaTitle: e.target.value })} placeholder="Defaults to Service Title if empty" />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase">Meta Description</label>
                  <textarea rows={3} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none text-sm" 
                    value={formData.metaDescription} onChange={e => setFormData({ ...formData, metaDescription: e.target.value })} />
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase">Canonical URL (Optional)</label>
                  <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" 
                    value={formData.canonicalUrl} onChange={e => setFormData({ ...formData, canonicalUrl: e.target.value })} />
                </div>

                <div className="flex items-center gap-3 bg-white/5 p-3 rounded-xl">
                  <input type="checkbox" id="noindex" className="w-5 h-5 rounded border-gray-600 text-red-600 focus:ring-red-500 bg-gray-700"
                    checked={formData.noindex} onChange={e => setFormData({ ...formData, noindex: e.target.checked })} />
                  <label htmlFor="noindex" className="text-sm font-medium text-white cursor-pointer select-none">NoIndex (Hide from Google)</label>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 uppercase mb-2 block">Redirect From (Legacy URLs)</label>
                  {formData.redirectFrom.map((url, i) => (
                    <div key={i} className="flex gap-2 mb-2">
                      <input type="text" className="flex-1 bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" 
                        value={url} onChange={e => handleArrayChange('redirectFrom', i, null, e.target.value)} placeholder="/old-service-url" />
                      <button type="button" onClick={() => removeItem('redirectFrom', i)} className="p-2 text-red-400 hover:bg-white/5 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => addItem('redirectFrom', '')} className="text-sm text-blue-400 hover:text-blue-300 font-medium">+ Add Redirect URL</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 2: HERO & OVERVIEW --- */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Hero Section</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase">Headline</label>
                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none font-bold" 
                      value={formData.hero.headline} onChange={e => setFormData({ ...formData, hero: { ...formData.hero, headline: e.target.value } })} />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase">Subheadline</label>
                    <textarea rows={3} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" 
                      value={formData.hero.subheadline} onChange={e => setFormData({ ...formData, hero: { ...formData.hero, subheadline: e.target.value } })} />
                  </div>
                  
                  {/* CTAs */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400 uppercase mb-2 block">Hero CTAs</label>
                    {formData.hero.ctas.map((cta, i) => (
                      <div key={i} className="flex gap-2 mb-2 bg-white/5 p-2 rounded-lg">
                        <input type="text" placeholder="Button Text" className="flex-1 bg-black/40 border border-white/10 rounded px-2 py-1 text-white text-sm" 
                          value={cta.text} onChange={e => {
                            const newCtas = [...formData.hero.ctas];
                            newCtas[i].text = e.target.value;
                            setFormData({ ...formData, hero: { ...formData.hero, ctas: newCtas } });
                          }} />
                        <input type="text" placeholder="Link (e.g. /contact)" className="flex-1 bg-black/40 border border-white/10 rounded px-2 py-1 text-white text-sm" 
                          value={cta.link} onChange={e => {
                            const newCtas = [...formData.hero.ctas];
                            newCtas[i].link = e.target.value;
                            setFormData({ ...formData, hero: { ...formData.hero, ctas: newCtas } });
                          }} />
                         <select className="bg-black/40 border border-white/10 rounded px-2 py-1 text-white text-sm"
                            value={cta.variant} onChange={e => {
                              const newCtas = [...formData.hero.ctas];
                              newCtas[i].variant = e.target.value;
                              setFormData({ ...formData, hero: { ...formData.hero, ctas: newCtas } });
                            }}>
                            <option value="primary">Primary</option>
                            <option value="secondary">Secondary</option>
                         </select>
                        <button type="button" onClick={() => {
                           const newCtas = formData.hero.ctas.filter((_, idx) => idx !== i);
                           setFormData({ ...formData, hero: { ...formData.hero, ctas: newCtas } });
                        }} className="p-1 text-red-400"><Trash2 size={16} /></button>
                      </div>
                    ))}
                    <button type="button" onClick={() => {
                       const newCtas = [...formData.hero.ctas, { text: '', link: '', variant: 'primary' }];
                       setFormData({ ...formData, hero: { ...formData.hero, ctas: newCtas } });
                    }} className="text-sm text-blue-400 hover:text-blue-300 font-medium">+ Add CTA</button>
                  </div>
                </div>

                <div>
                   <ImageUploader label="Hero Image" value={formData.hero.image} onChange={val => setFormData({ ...formData, hero: { ...formData.hero, image: val } })} />
                </div>
              </div>
            </div>

            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Service Overview (Rich Text)</h3>
              <p className="text-gray-400 text-sm mb-4">This content appears in the main body section. Use headings properly for TOC.</p>
              <RichTextEditor value={formData.overview} onChange={val => setFormData({ ...formData, overview: val })} />
            </div>
          </div>
        )}

        {/* --- TAB 3: OFFER DETAILS --- */}
        {activeTab === 'offer' && (
          <div className="space-y-6">
            
            {/* Who Is For */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Who This Service Is For</h3>
              <div className="space-y-4">
                {formData.whoIsFor.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-16 h-16 shrink-0">
                      <ImageUploader compact value={item.icon} onChange={val => handleArrayChange('whoIsFor', i, 'icon', val)} />
                    </div>
                    <div className="flex-1">
                      <input type="text" placeholder="Description (e.g. Startups looking for growth)" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white mb-2" 
                        value={item.text} onChange={e => handleArrayChange('whoIsFor', i, 'text', e.target.value)} />
                    </div>
                    <button type="button" onClick={() => removeItem('whoIsFor', i)} className="text-red-400 p-2"><Trash2 size={20} /></button>
                  </div>
                ))}
                <button type="button" onClick={() => addItem('whoIsFor', { text: '', icon: '' })} className="w-full py-3 border border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 transition-colors">+ Add Audience Segment</button>
              </div>
            </div>

            {/* What's Included */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">What's Included (Scope)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.whatsIncluded.map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 relative group">
                    <button type="button" onClick={() => removeItem('whatsIncluded', i)} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                    <ImageUploader compact className="mb-3 w-12 h-12" value={item.icon} onChange={val => handleArrayChange('whatsIncluded', i, 'icon', val)} />
                    <input type="text" placeholder="Title" className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-white font-bold mb-2" 
                      value={item.title} onChange={e => handleArrayChange('whatsIncluded', i, 'title', e.target.value)} />
                    <textarea placeholder="Description" rows={2} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-gray-300 text-sm" 
                      value={item.description} onChange={e => handleArrayChange('whatsIncluded', i, 'description', e.target.value)} />
                  </div>
                ))}
                <button type="button" onClick={() => addItem('whatsIncluded', { title: '', description: '', icon: '' })} className="flex items-center justify-center min-h-[200px] border border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 transition-colors">+ Add Scope Item</button>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Process & Methodology</h3>
              <div className="space-y-4">
                {formData.processSteps.map((step, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 relative">
                     <button type="button" onClick={() => removeItem('processSteps', i)} className="absolute top-4 right-4 text-red-400"><Trash2 size={18} /></button>
                     <div className="flex gap-4">
                        <div className="w-24 shrink-0">
                           <ImageUploader label="Step Img" value={step.image} onChange={val => handleArrayChange('processSteps', i, 'image', val)} />
                        </div>
                        <div className="flex-1 space-y-2">
                           <input type="text" placeholder="Step Name (e.g. 01 Discovery)" className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white font-bold" 
                              value={step.stepName} onChange={e => handleArrayChange('processSteps', i, 'stepName', e.target.value)} />
                           <textarea placeholder="Step Description" rows={2} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-gray-300 text-sm" 
                              value={step.description} onChange={e => handleArrayChange('processSteps', i, 'description', e.target.value)} />
                        </div>
                     </div>
                  </div>
                ))}
                <button type="button" onClick={() => addItem('processSteps', { stepName: '', description: '', image: '' })} className="w-full py-3 border border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 transition-colors">+ Add Process Step</button>
              </div>
            </div>
          </div>
        )}

        {/* --- TAB 4: TRUST DETAILS --- */}
        {activeTab === 'trust' && (
          <div className="space-y-6">
            
            {/* Tools */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Tools & Technologies</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {formData.tools.map((tool, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/5 relative group text-center">
                    <button type="button" onClick={() => removeItem('tools', i)} className="absolute -top-2 -right-2 bg-red-500 rounded-full p-1 text-white opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={12} /></button>
                    <div className="mx-auto mb-2 w-12 h-12">
                      <ImageUploader compact value={tool.logo} onChange={val => handleArrayChange('tools', i, 'logo', val)} />
                    </div>
                    <input type="text" placeholder="Tool Name" className="w-full bg-transparent text-center text-white text-xs border-b border-transparent focus:border-white/20 outline-none" 
                      value={tool.name} onChange={e => handleArrayChange('tools', i, 'name', e.target.value)} />
                  </div>
                ))}
                <button type="button" onClick={() => addItem('tools', { name: '', logo: '' })} className="flex flex-col items-center justify-center h-24 border border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 transition-colors">
                  <Plus size={20} /> <span className="text-xs mt-1">Add Tool</span>
                </button>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Why Choose Us</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {formData.whyChooseUs.map((item, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 relative group">
                    <button type="button" onClick={() => removeItem('whyChooseUs', i)} className="absolute top-2 right-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                    <input type="text" placeholder="Benefit Title" className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-white font-bold mb-2" 
                      value={item.title} onChange={e => handleArrayChange('whyChooseUs', i, 'title', e.target.value)} />
                    <textarea placeholder="Description" rows={2} className="w-full bg-black/40 border border-white/10 rounded px-2 py-1 text-gray-300 text-sm" 
                      value={item.description} onChange={e => handleArrayChange('whyChooseUs', i, 'description', e.target.value)} />
                  </div>
                ))}
                <button type="button" onClick={() => addItem('whyChooseUs', { title: '', description: '', icon: '' })} className="flex items-center justify-center min-h-[150px] border border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 transition-colors">+ Add Benefit</button>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">FAQs</h3>
              <div className="space-y-4">
                {formData.faqs.map((faq, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/5 relative">
                     <button type="button" onClick={() => removeItem('faqs', i)} className="absolute top-4 right-4 text-red-400"><Trash2 size={18} /></button>
                     <div className="space-y-2 pr-8">
                       <input type="text" placeholder="Question" className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white font-bold" 
                          value={faq.question} onChange={e => handleArrayChange('faqs', i, 'question', e.target.value)} />
                       <textarea placeholder="Answer" rows={2} className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-gray-300 text-sm" 
                          value={faq.answer} onChange={e => handleArrayChange('faqs', i, 'answer', e.target.value)} />
                     </div>
                  </div>
                ))}
                <button type="button" onClick={() => addItem('faqs', { question: '', answer: '' })} className="w-full py-3 border border-dashed border-white/20 rounded-xl text-gray-400 hover:text-white hover:border-white/40 transition-colors">+ Add FAQ</button>
              </div>
            </div>
            
            {/* Related Services (Internal Linking) */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Related Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {allServices.filter(s => s._id !== id).map(s => (
                   <label key={s._id} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.relatedServices.includes(s._id) ? 'bg-blue-600/20 border-blue-500' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                     <input type="checkbox" className="w-5 h-5 rounded border-gray-600 text-blue-600 focus:ring-blue-500 bg-gray-700"
                        checked={formData.relatedServices.includes(s._id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                             setFormData({ ...formData, relatedServices: [...formData.relatedServices, s._id] });
                          } else {
                             setFormData({ ...formData, relatedServices: formData.relatedServices.filter(id => id !== s._id) });
                          }
                        }}
                     />
                     <span className="text-white font-medium truncate">{s.title}</span>
                   </label>
                 ))}
              </div>
            </div>

            {/* Related Case Studies */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-4">Related Case Studies</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                 {cases.map(c => (
                   <label key={c._id} className={`flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all ${formData.relatedCaseStudies.includes(c._id) ? 'bg-blue-600/20 border-blue-500' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                     <input type="checkbox" className="w-5 h-5 rounded border-gray-600 text-blue-600 focus:ring-blue-500 bg-gray-700"
                        checked={formData.relatedCaseStudies.includes(c._id)}
                        onChange={(e) => {
                          if (e.target.checked) {
                             setFormData({ ...formData, relatedCaseStudies: [...formData.relatedCaseStudies, c._id] });
                          } else {
                             setFormData({ ...formData, relatedCaseStudies: formData.relatedCaseStudies.filter(id => id !== c._id) });
                          }
                        }}
                     />
                     <span className="text-white font-medium truncate">{c.title}</span>
                   </label>
                 ))}
                 {cases.length === 0 && <div className="text-gray-500 text-sm col-span-3">No case studies found. Create some in the Cases section first.</div>}
              </div>
            </div>

          </div>
        )}

      </form>
    </div>
  );
}
