'use client';

import { useState, useEffect, useRef } from 'react';
import { Plus, Trash2, Edit, X, Loader2, Image as ImageIcon, GripVertical } from 'lucide-react';
// import { upload } from '@vercel/blob/client'; // Unused
import toast from 'react-hot-toast';
import { Reorder, useDragControls } from 'framer-motion';

// Separate SortableItem to handle drag controls properly
const SortableItem = ({ item, index }) => {
  const controls = useDragControls();

  return (
    <Reorder.Item
      value={item}
      id={item._id}
      className="relative"
      layout
      dragListener={false}
      dragControls={controls}
      whileDrag={{ scale: 1.02, zIndex: 50, cursor: 'grabbing' }}
    >
      <div className="bg-[#111116] border border-white/5 rounded-xl p-4 flex items-center gap-4 hover:border-white/20 transition-colors select-none">
        <div
          className="text-white/30 cursor-grab active:cursor-grabbing p-2 hover:text-white hover:bg-white/5 rounded transition-colors touch-none"
          onPointerDown={(e) => controls.start(e)}
        >
          <GripVertical size={20} />
        </div>
        <div className="h-12 w-12 bg-gray-900 rounded-lg overflow-hidden shrink-0">
          <img src={item.imageDesktop || item.topImg} className="w-full h-full object-cover pointer-events-none" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold text-white">{item.title}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-xs text-gray-500">{item.year}</span>
            {item.status === 'draft' && <span className="text-[10px] bg-yellow-500/10 text-yellow-500 px-1.5 py-0.5 rounded uppercase">Draft</span>}
          </div>
        </div>
        <div className="text-xs text-gray-500 font-mono">
          Order: {Number(index) + 1}
        </div>
      </div>
    </Reorder.Item>
  );
};

export default function CasesManager() {
  const [cases, setCases] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'sort'

  // Track files to be uploaded on save: { fieldName: File }
  const [pendingUploads, setPendingUploads] = useState({});

  // Form State
  const initialFormState = {
    _id: null, // Track ID for edits
    title: '', slug: '', description: '', status: 'published',
    imageDesktop: '', imageMobile: '', innerImg: '', hero: '',
    client: '', year: '', link: '', categories: '', services: '',
    s1_heading: '', s1_text: '',
    s2_heading: '', s2_text: '', s2_img: '',
    s3_heading: '', s3_text: '', s3_img: ''
  };

  const [formData, setFormData] = useState(initialFormState);

  // Load cases on mount
  useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const res = await fetch('/api/cases');
      const data = await res.json();
      setCases(data);
    } catch (error) {
      console.error('Error fetching cases:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this case?')) return;
    try {
      const res = await fetch(`/api/cases/${id}`, { method: 'DELETE' });
      if (!res.ok) throw new Error('Failed to delete');
      toast.success('Case deleted');
      fetchCases();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEdit = (item) => {
    setPendingUploads({}); // Clear any pending uploads
    setFormData({
      _id: item._id, // Add ID to track mode
      title: item.title,
      slug: item.slug,
      description: item.description || '',
      status: item.status || 'published',
      imageDesktop: item.imageDesktop || item.topImg || '',
      imageMobile: item.imageMobile || item.topImg || '',
      innerImg: item.innerImg || '',
      hero: item.hero || '',

      client: item.client || '',
      year: item.year || '',
      link: item.link || '',
      categories: item.categories ? item.categories.join(', ') : '',
      services: item.services ? item.services.join(', ') : '',

      s1_heading: item.sectionone?.heading || '',
      s1_text: item.sectionone?.text || '',

      s2_heading: item.sectiontwo?.heading || '',
      s2_text: item.sectiontwo?.text || '',
      s2_img: item.sectiontwo?.img || '',

      s3_heading: item.sectionthree?.heading || '',
      s3_text: item.sectionthree?.text || '',
      s3_img: item.sectionthree?.img || '',
    });
    setIsFormOpen(true);
  };

  const handleClose = () => {
    setIsFormOpen(false);
    setFormData(initialFormState); // Reset form
    setPendingUploads({});
  };

  // Only store file locally for now; upload happens on Submit
  const handleFileSelect = (e, field) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Create a local preview URL
    const previewUrl = URL.createObjectURL(file);

    // Update pending uploads
    setPendingUploads(prev => ({ ...prev, [field]: file }));

    // Update visual preview immediately
    setFormData(prev => ({ ...prev, [field]: previewUrl }));
  };

  // Helper to actually upload a single file
  const uploadFile = async (file) => {
    // Universal Server-Side Upload (FormData)
    // NOTE: This limits uploads to ~4.5MB on Vercel Serverless Functions.
    // Client-side uploads (unlimited size) are currently disabled due to library incompatibility (missing handleUpload).
    const form = new FormData();
    form.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: form });

    if (!res.ok) {
      if (res.status === 413) {
        throw new Error('Image too large (Max 4.5MB for server uploads). Please optimize it.');
      }
      throw new Error('Upload failed');
    }
    const data = await res.json();
    return data.url;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // 1. Process all pending file uploads first
      const uploadedUrls = {};
      const uploadFields = Object.keys(pendingUploads);

      if (uploadFields.length > 0) {
        for (const field of uploadFields) {
          const file = pendingUploads[field];
          if (file) {
            const url = await uploadFile(file);
            uploadedUrls[field] = url;
          }
        }
      }

      // 2. Prepare Final Data (merge uploaded URLs into formData)
      const finalData = { ...formData, ...uploadedUrls };

      // Construct payload to match schema
      const payload = {
        title: finalData.title,
        slug: finalData.slug,
        description: finalData.description,
        status: finalData.status,

        imageDesktop: finalData.imageDesktop,
        imageMobile: finalData.imageMobile,
        topImg: finalData.imageDesktop, // Fallback legacy
        innerImg: finalData.hero, // Use Hero for Inner too (unified)
        hero: finalData.hero,

        client: finalData.client,
        year: finalData.year,
        link: finalData.link,

        categories: finalData.categories.split(',').map(s => s.trim()).filter(Boolean),
        services: finalData.services.split(',').map(s => s.trim()).filter(Boolean),

        sectionone: {
          heading: finalData.s1_heading,
          text: finalData.s1_text
        },
        sectiontwo: {
          heading: finalData.s2_heading,
          text: finalData.s2_text,
          img: finalData.s2_img
        },
        sectionthree: {
          heading: finalData.s3_heading,
          text: finalData.s3_text,
          img: finalData.s3_img
        }
      };

      const isEdit = !!finalData._id;
      const url = isEdit ? `/api/cases/${finalData._id}` : '/api/cases';
      const method = isEdit ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || `Failed to ${isEdit ? 'update' : 'create'} case`);
      }

      toast.success(`Case study ${isEdit ? 'updated' : 'created'} successfully`);
      handleClose();
      fetchCases();
    } catch (error) {
      console.error(error);
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 1. Update local state immediately (fast)
  const handleReorder = (newOrder) => {
    setCases(newOrder);
  };

  // 2. Debounced Auto-Save
  const isFirstRun = useRef(true);
  useEffect(() => {
    // Skip initial render to avoid double-save
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }

    const timer = setTimeout(() => {
      if (cases.length > 0) {
        saveOrder(cases);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, [cases]);

  const saveOrder = async (orderToSave) => {
    try {
      const payload = {
        items: orderToSave.map((item, index) => ({
          _id: item._id,
          order: index
        }))
      };
      // Silent save
      await fetch('/api/cases/reorder', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
    } catch (error) {
      console.error('Failed to save order', error);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Selected Work (Cases)</h1>
          <p className="text-gray-400 mt-2 text-sm">Manage your portfolio projects shown on the homepage.</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-[#111116] border border-white/10 rounded-lg p-1 flex">
            <button onClick={() => setViewMode('grid')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'grid' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}>Grid</button>
            <button onClick={() => setViewMode('sort')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${viewMode === 'sort' ? 'bg-white text-black shadow' : 'text-gray-400 hover:text-white'}`}>Sort Order</button>
          </div>
          <button
            onClick={() => { setIsFormOpen(true); setFormData(initialFormState); setPendingUploads({}); }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"
          >
            <Plus size={18} /> Add New Case
          </button>
        </div>
      </div>

      {/* View Content */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div key={item._id} className="group bg-[#111116] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col h-full relative">
              <div className="h-48 bg-gray-900 relative overflow-hidden">
                <img src={item.imageDesktop || item.topImg} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />

                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button onClick={() => handleEdit(item)} className="p-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-500"><Edit size={16} /></button>
                  <button onClick={() => handleDelete(item._id)} className="p-2 bg-red-500/80 text-white rounded-lg hover:bg-red-500"><Trash2 size={16} /></button>
                </div>

                {/* Draft Badge */}
                {item.status === 'draft' && (
                  <div className="absolute bottom-2 left-2 bg-yellow-500/20 text-yellow-500 border border-yellow-500/20 px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    Draft
                  </div>
                )}
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-white">{item.title}</h3>
                  <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">{item.year}</span>
                </div>
                <p className="text-gray-400 text-sm line-clamp-2 mb-4 flex-1">{item.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {item.categories && item.categories.map((cat, i) => (
                    <span key={i} className="text-[10px] text-gray-500 border border-white/10 px-2 py-0.5 rounded-md">{cat}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto min-h-[80vh] pb-20">
          <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-3 rounded-lg mb-6 text-sm flex items-center gap-2">
            <GripVertical size={18} />
            Drag items using the handle <GripVertical size={14} className="inline" /> to reorder. Changes saved automatically.
          </div>
          <Reorder.Group axis="y" values={cases} onReorder={handleReorder} className="space-y-4 pb-40">
            {cases.map((item, i) => (
              <SortableItem key={item._id} item={item} index={i} />
            ))}
          </Reorder.Group>
        </div>
      )}

      {/* Add Case Modal Sidepanel */}
      {isFormOpen && (
        <div className="fixed inset-0 z-[100] flex justify-end">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={handleClose} />
          <div className="relative w-full max-w-2xl bg-[#111116] h-full border-l border-white/10 p-6 overflow-y-auto shadow-2xl animate-in slide-in-from-right duration-300">
            <div className="flex items-center justify-between mb-8 sticky top-0 bg-[#111116] z-10 py-4 border-b border-white/10">
              <h2 className="text-xl font-bold text-white">{formData._id ? 'Edit Case' : 'Add New Case Study'}</h2>
              <button onClick={handleClose} className="text-gray-400 hover:text-white"><X size={24} /></button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 pb-10">

              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/5 pb-2">1. Basic Info</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase">Title</label>
                    <input required type="text" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="Project Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase">Slug</label>
                    <input required type="text" value={formData.slug} onChange={e => setFormData({ ...formData, slug: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="project-slug" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase">Status</label>
                    <select value={formData.status} onChange={e => setFormData({ ...formData, status: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none">
                      <option value="published">Published</option>
                      <option value="draft">Draft</option>
                    </select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase">Description (List View)</label>
                  <textarea required rows={3} value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" placeholder="Short description..." />
                </div>
              </div>

              {/* List View Images */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/5 pb-2">2. List Images</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase">Desktop Image</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors bg-black/20 relative group h-32 flex items-center justify-center">
                      <input type="file" accept="image/*" onChange={(e) => handleFileSelect(e, 'imageDesktop')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      {formData.imageDesktop ? <img src={formData.imageDesktop} className="max-h-full max-w-full rounded-lg object-contain" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Desktop</div>}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase">Mobile Image</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors bg-black/20 relative group h-32 flex items-center justify-center">
                      <input type="file" accept="image/*" onChange={(e) => handleFileSelect(e, 'imageMobile')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      {formData.imageMobile ? <img src={formData.imageMobile} className="max-h-full max-w-full rounded-lg object-contain" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Mobile</div>}
                    </div>
                  </div>
                </div>
              </div>

              {/* Detail Page Images */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/5 pb-2">3. Detail Page Assets</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-gray-400 uppercase">Detail Cover Image (Hero)</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors bg-black/20 relative group h-48 flex items-center justify-center">
                      <input type="file" accept="image/*" onChange={(e) => handleFileSelect(e, 'hero')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                      {formData.hero ? <img src={formData.hero} className="max-h-full max-w-full rounded-lg object-contain" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-8 w-8 mb-2" /> Upload Cover</div>}
                    </div>
                    <p className="text-[10px] text-gray-500">This image will be used as the main hero banner on the detail page.</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Info */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/5 pb-2">4. Project Details (Sidebar)</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Client</label><input type="text" value={formData.client} onChange={e => setFormData({ ...formData, client: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" /></div>
                  <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Year</label><input type="text" value={formData.year} onChange={e => setFormData({ ...formData, year: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" /></div>
                </div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Project Link</label><input type="text" value={formData.link} onChange={e => setFormData({ ...formData, link: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" /></div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Categories (Tags)</label><input type="text" value={formData.categories} onChange={e => setFormData({ ...formData, categories: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="e.g. API, Frontend" /></div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Services Provided</label><input type="text" value={formData.services} onChange={e => setFormData({ ...formData, services: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" placeholder="e.g. UX Design, SEO" /></div>
              </div>

              {/* Section 1 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/5 pb-2">5. Section 1 (Intro)</h3>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Heading</label><input type="text" value={formData.s1_heading} onChange={e => setFormData({ ...formData, s1_heading: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" /></div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Text</label><textarea rows={3} value={formData.s1_text} onChange={e => setFormData({ ...formData, s1_text: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" /></div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/5 pb-2">6. Section 2 (Details)</h3>
                <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors bg-black/20 relative group h-24 flex items-center justify-center">
                  <input type="file" accept="image/*" onChange={(e) => handleFileSelect(e, 's2_img')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  {formData.s2_img ? <img src={formData.s2_img} className="max-h-full max-w-full rounded-lg object-contain" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Section 2 Image</div>}
                </div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Heading</label><input type="text" value={formData.s2_heading} onChange={e => setFormData({ ...formData, s2_heading: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" /></div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Text</label><textarea rows={3} value={formData.s2_text} onChange={e => setFormData({ ...formData, s2_text: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" /></div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-blue-400 uppercase tracking-widest border-b border-white/5 pb-2">7. Section 3 (Responsive/Conclusion)</h3>
                <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors bg-black/20 relative group h-24 flex items-center justify-center">
                  <input type="file" accept="image/*" onChange={(e) => handleFileSelect(e, 's3_img')} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10" />
                  {formData.s3_img ? <img src={formData.s3_img} className="max-h-full max-w-full rounded-lg object-contain" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-5 w-5 mb-1" /> Section 3 Image</div>}
                </div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Heading</label><input type="text" value={formData.s3_heading} onChange={e => setFormData({ ...formData, s3_heading: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" /></div>
                <div className="space-y-2"><label className="text-xs font-semibold text-gray-400 uppercase">Text</label><textarea rows={3} value={formData.s3_text} onChange={e => setFormData({ ...formData, s3_text: e.target.value })} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" /></div>
              </div>

              <button type="submit" disabled={isLoading} className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors mt-8 text-lg shadow-lg shadow-blue-900/20">
                {isLoading ? <Loader2 className="animate-spin mx-auto" /> : (formData._id ? 'Update Case Study' : 'Save Changes')}
              </button>

            </form>
          </div>
        </div>
      )}
    </div>
  );
}
