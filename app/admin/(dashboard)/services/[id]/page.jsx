'use client';

import { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import ImageUploader from '@/admin-core/components/ImageUploader';
import RichTextEditor from '@/admin-core/components/RichTextEditor';
import toast, { Toaster } from 'react-hot-toast';
import { Layers, Workflow, Compass, Plus, Trash2, GripVertical } from 'lucide-react';

export default function ServiceForm() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const isNew = id === 'new';

  const [loading, setLoading] = useState(!isNew);
  const [submitting, setSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState('details'); // details | process | explore

  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    icon: '',
    alt: '',
    description: '',
    heroImg: '',
    herotitle: '',
    color: '#3b82f6',
    cta: 'Explore Services',

    // Intro
    intro: {
      heading: '',
      text: '',
      bullets: ['']
    },

    // Process & Deep Dive
    process: [], // { title, text, img, color }
    blocktext: [], // { title, text, bullets: [] }

    // Promise
    heropromisetitle: '',
    promisedescription: '',

    // Explore
    exploretitile: '',
    explorepoints: {
      points: ['']
    },

    points: [''] // Top summary points
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

      // Merge with defaults to ensure arrays exist
      setFormData(prev => ({
        ...prev,
        ...data,
        intro: { ...prev.intro, ...data.intro, bullets: data.intro?.bullets || [''] },
        explorepoints: { points: data.explorepoints?.points || [''] },
        points: data.points || [''],
        process: data.process || [],
        blocktext: data.blocktext || []
      }));
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

  // Generic Array Handler
  const handleArrayChange = (path, index, value, subIndex = null) => {
    // Helper for deep updates
    const updateDeep = (obj, pathParts, val) => {
      const head = pathParts[0];
      if (pathParts.length === 1) {
        if (Array.isArray(obj[head])) {
          const newArr = [...obj[head]];
          if (subIndex !== null && typeof newArr[index] === 'object') {
            // Nested array inside object in array (e.g. blocktext[i].bullets[j])
            // Not generically handled here easily without more args.
            // Special casing for bullets/points
          } else {
            newArr[index] = val;
          }
          return { ...obj, [head]: newArr };
        }
        return { ...obj, [head]: val };
      }
      return {
        ...obj,
        [head]: updateDeep(obj[head], pathParts.slice(1), val)
      };
    };

    // Simple top-level array handling
    if (path === 'points') {
      const newArr = [...formData.points];
      newArr[index] = value;
      setFormData({ ...formData, points: newArr });
    } else if (path === 'intro.bullets') {
      const newArr = [...formData.intro.bullets];
      newArr[index] = value;
      setFormData({ ...formData, intro: { ...formData.intro, bullets: newArr } });
    } else if (path === 'explorepoints.points') {
      const newArr = [...formData.explorepoints.points];
      newArr[index] = value;
      setFormData({ ...formData, explorepoints: { points: newArr } });
    }
  };

  const addArrayItem = (path) => {
    if (path === 'points') setFormData({ ...formData, points: [...formData.points, ''] });
    if (path === 'intro.bullets') setFormData({ ...formData, intro: { ...formData.intro, bullets: [...formData.intro.bullets, ''] } });
    if (path === 'explorepoints.points') setFormData({ ...formData, explorepoints: { points: [...formData.explorepoints.points, ''] } });
  };

  const removeArrayItem = (path, index) => {
    if (path === 'points') setFormData({ ...formData, points: formData.points.filter((_, i) => i !== index) });
    if (path === 'intro.bullets') setFormData({ ...formData, intro: { ...formData.intro, bullets: formData.intro.bullets.filter((_, i) => i !== index) } });
    if (path === 'explorepoints.points') setFormData({ ...formData, explorepoints: { points: formData.explorepoints.points.filter((_, i) => i !== index) } });
  };


  // Process Handler
  const handleProcessChange = (index, field, value) => {
    const newArr = [...formData.process];
    newArr[index] = { ...newArr[index], [field]: value };
    setFormData({ ...formData, process: newArr });
  };
  const addProcess = () => setFormData({ ...formData, process: [...formData.process, { title: '', text: '', img: '', color: formData.color }] });
  const removeProcess = (index) => setFormData({ ...formData, process: formData.process.filter((_, i) => i !== index) });

  // Block Text Handler (Deep Dive)
  const handleBlockChange = (index, field, value) => {
    const newArr = [...formData.blocktext];
    newArr[index] = { ...newArr[index], [field]: value };
    setFormData({ ...formData, blocktext: newArr });
  };
  const handleBlockBulletChange = (blockIndex, bulletIndex, value) => {
    const newArr = [...formData.blocktext];
    const newBullets = [...newArr[blockIndex].bullets];
    newBullets[bulletIndex] = value;
    newArr[blockIndex] = { ...newArr[blockIndex], bullets: newBullets };
    setFormData({ ...formData, blocktext: newArr });
  };
  const addBlockBullet = (blockIndex) => {
    const newArr = [...formData.blocktext];
    newArr[blockIndex].bullets = [...(newArr[blockIndex].bullets || []), ''];
    setFormData({ ...formData, blocktext: newArr });
  };
  const removeBlockBullet = (blockIndex, bulletIndex) => {
    const newArr = [...formData.blocktext];
    newArr[blockIndex].bullets = newArr[blockIndex].bullets.filter((_, i) => i !== bulletIndex);
    setFormData({ ...formData, blocktext: newArr });
  };

  const addBlock = () => setFormData({ ...formData, blocktext: [...formData.blocktext, { title: '', text: '', bullets: [''] }] });
  const removeBlock = (index) => setFormData({ ...formData, blocktext: formData.blocktext.filter((_, i) => i !== index) });


  if (loading) return <div className="p-10 text-center text-white">Loading Service Data...</div>;

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <Toaster />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">{isNew ? 'Create New Service' : `Edit: ${formData.title}`}</h1>
          <p className="text-gray-400 text-sm">Manage service details, SEO, and content structure.</p>
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
      <div className="flex items-center gap-2 p-1 bg-white/5 rounded-2xl border border-white/10">
        <button
          onClick={() => setActiveTab('details')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'details' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          <Compass size={18} /> Basic Info
        </button>
        <button
          onClick={() => setActiveTab('process')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'process' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          <Workflow size={18} /> Process & Strategy
        </button>
        <button
          onClick={() => setActiveTab('explore')}
          className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all ${activeTab === 'explore' ? 'bg-blue-600 text-white shadow-lg' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
        >
          <Layers size={18} /> Explore & SEO
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-300">

        {/* TAB 1: DETAILS */}
        {activeTab === 'details' && (
          <div className="space-y-6">
            {/* Core Identity */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Identity</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Title</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} placeholder="e.g. Web Development" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Slug</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} placeholder="e.g. web-development" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Theme Color (Hex)</label>
                  <div className="flex gap-2">
                    <input type="color" className="h-12 w-12 rounded bg-transparent cursor-pointer border-none p-0" value={formData.color} onChange={e => setFormData({ ...formData, color: e.target.value })} />
                    <input type="text" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 text-white focus:border-blue-500/50 outline-none" value={formData.color} onChange={e => setFormData({ ...formData, color: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">CTA Text</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.cta} onChange={e => setFormData({ ...formData, cta: e.target.value })} placeholder="e.g. Explore Services" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase">Short Description</label>
                <textarea rows={3} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none resize-none" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
              </div>
            </div>

            {/* Media */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <ImageUploader label="Icon (SVG)" value={formData.icon} onChange={val => setFormData({ ...formData, icon: val })} />
              <ImageUploader label="Hero Image" value={formData.heroImg} onChange={val => setFormData({ ...formData, heroImg: val })} />
            </div>

            {/* Intro Section */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Intro Section</h3>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Intro Heading</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.intro.heading} onChange={e => setFormData({ ...formData, intro: { ...formData.intro, heading: e.target.value } })} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Intro Text</label>
                  <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.intro.text} onChange={e => setFormData({ ...formData, intro: { ...formData.intro, text: e.target.value } })} />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Intro Bullets</label>
                  {formData.intro.bullets.map((bullet, i) => (
                    <div key={i} className="flex gap-2">
                      <input type="text" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:border-blue-500/50 outline-none text-sm" value={bullet} onChange={e => handleArrayChange('intro.bullets', i, e.target.value)} />
                      <button type="button" onClick={() => removeArrayItem('intro.bullets', i)} className="p-2 text-red-400 hover:bg-white/5 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => addArrayItem('intro.bullets')} className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">+ Add Bullet</button>
                </div>
              </div>
            </div>

            {/* Hero Promise */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">Our Promise</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Promise Title</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.heropromisetitle} onChange={e => setFormData({ ...formData, heropromisetitle: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Promise Description</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.promisedescription} onChange={e => setFormData({ ...formData, promisedescription: e.target.value })} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: PROCESS */}
        {activeTab === 'process' && (
          <div className="space-y-6">

            {/* Process Steps */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Our Method</h3>
                <button type="button" onClick={addProcess} className="px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded-lg text-sm font-medium hover:bg-blue-600/30 transition-colors">+ Add Step</button>
              </div>
              <div className="space-y-4">
                {formData.process.map((step, i) => (
                  <div key={i} className="bg-white/5 rounded-xl p-4 border border-white/10 relative group">
                    <button type="button" onClick={() => removeProcess(i)} className="absolute top-4 right-4 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={16} /></button>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs text-gray-500">Step Title</label>
                        <input type="text" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" value={step.title} onChange={e => handleProcessChange(i, 'title', e.target.value)} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs text-gray-500">Image</label>
                        <ImageUploader value={step.img} onChange={val => handleProcessChange(i, 'img', val)} />
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <label className="text-xs text-gray-500">Description</label>
                        <textarea rows={2} className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white text-sm" value={step.text} onChange={e => handleProcessChange(i, 'text', e.target.value)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Detailed Blocks (Deep Dive) */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-bold text-white">Strategy Details (SEO Block)</h3>
                <button type="button" onClick={addBlock} className="px-3 py-1.5 bg-emerald-600/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-600/30 transition-colors">+ Add Detail Block</button>
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Side Image for Blocks</label>
                <ImageUploader value={formData.blockImg} onChange={val => setFormData({ ...formData, blockImg: val })} />
              </div>

              <div className="space-y-6">
                {formData.blocktext.map((block, i) => (
                  <div key={i} className="bg-emerald-900/10 rounded-xl p-4 border border-emerald-500/10 relative">
                    <button type="button" onClick={() => removeBlock(i)} className="absolute top-4 right-4 text-red-400 hover:text-red-300"><Trash2 size={16} /></button>
                    <div className="space-y-4 pr-8">
                      <input type="text" placeholder="Block Title" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-white font-bold" value={block.title} onChange={e => handleBlockChange(i, 'title', e.target.value)} />
                      <textarea rows={2} placeholder="Block Description" className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-300 text-sm" value={block.text} onChange={e => handleBlockChange(i, 'text', e.target.value)} />

                      <div className="space-y-2">
                        <label className="text-xs text-emerald-500/70 font-bold uppercase tracking-wider">Features / Bullets</label>
                        {block.bullets && block.bullets.map((bullet, bulletIdx) => (
                          <div key={bulletIdx} className="flex gap-2">
                            <input type="text" className="flex-1 bg-black/40 border border-emerald-500/20 rounded-lg px-3 py-1 text-white text-xs" value={bullet} onChange={e => handleBlockBulletChange(i, bulletIdx, e.target.value)} />
                            <button type="button" onClick={() => removeBlockBullet(i, bulletIdx)} className="text-red-400"><Trash2 size={12} /></button>
                          </div>
                        ))}
                        <button type="button" onClick={() => addBlockBullet(i)} className="text-xs text-emerald-400 hover:underline">+ Add Feature</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EXPLORE & SEO */}
        {activeTab === 'explore' && (
          <div className="space-y-6">
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-6">
              <h3 className="text-lg font-bold text-white mb-4 border-b border-white/5 pb-2">Footer & SEO Stats</h3>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">SEO Alt Text</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.alt} onChange={e => setFormData({ ...formData, alt: e.target.value })} placeholder="Image Alt Text..." />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Explore Title</label>
                  <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none" value={formData.exploretitile} onChange={e => setFormData({ ...formData, exploretitile: e.target.value })} />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Explore Links (Sub-services)</label>
                  {formData.explorepoints.points.map((point, i) => (
                    <div key={i} className="flex gap-2">
                      <input type="text" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:border-blue-500/50 outline-none text-sm" value={point} onChange={e => handleArrayChange('explorepoints.points', i, e.target.value)} />
                      <button type="button" onClick={() => removeArrayItem('explorepoints.points', i)} className="p-2 text-red-400 hover:bg-white/5 rounded-lg"><Trash2 size={16} /></button>
                    </div>
                  ))}
                  <button type="button" onClick={() => addArrayItem('explorepoints.points')} className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">+ Add Link</button>
                </div>
              </div>
            </div>

            {/* Top Overview Points */}
            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-bold text-white mb-4">Service Card Highlights</h3>
              <div className="space-y-3">
                {formData.points.map((point, i) => (
                  <div key={i} className="flex gap-2">
                    <input type="text" className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-white focus:border-blue-500/50 outline-none text-sm" value={point} onChange={e => handleArrayChange('points', i, e.target.value)} placeholder="Feature Highlight..." />
                    <button type="button" onClick={() => removeArrayItem('points', i)} className="p-2 text-red-400 hover:bg-white/5 rounded-lg"><Trash2 size={16} /></button>
                  </div>
                ))}
                <button type="button" onClick={() => addArrayItem('points')} className="text-sm text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1">+ Add Highlight</button>
              </div>
            </div>
          </div>
        )}

      </form>
    </div>
  );
}
