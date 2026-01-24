'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageUpload from '@/components/admin/ImageUpload';

export default function ServiceForm({ initialData = {}, isEdit = false, onSuccess }) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('general');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    title: initialData.title || '',
    slug: initialData.slug || '',
    icon: initialData.icon || '',
    alt: initialData.alt || '',
    description: initialData.description || '',
    points: initialData.points || [''],
    cta: initialData.cta || 'Explore Services',
    heroImg: initialData.heroImg || '',
    herotitle: initialData.herotitle || '',
    color: initialData.color || '#000000',
    intro: {
      heading: initialData.intro?.heading || '',
      text: initialData.intro?.text || '',
      bullets: initialData.intro?.bullets || [''],
    },
    process: initialData.process || [
      { title: '', color: '', img: '', text: '' }
    ],
    blockImg: initialData.blockImg || '',
    blocktext: initialData.blocktext || [
      { title: '', text: '', bullets: [''] }
    ],
    heropromisetitle: initialData.heropromisetitle || '',
    promisedescription: initialData.promisedescription || '',
    exploretitile: initialData.exploretitile || '',
    explorepoints: {
      points: initialData.explorepoints?.points || [''],
    },
    active: initialData.active !== undefined ? initialData.active : true,
    order: initialData.order || 0,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value,
      }));
    }
  };

  const handleArrayChange = (index, value, arrayName, parentName = null) => {
    setFormData(prev => {
      if (parentName) {
        const newParent = { ...prev[parentName] };
        const newArray = [...newParent[arrayName]];
        newArray[index] = value;
        newParent[arrayName] = newArray;
        return { ...prev, [parentName]: newParent };
      } else {
        const newArray = [...prev[arrayName]];
        newArray[index] = value;
        return { ...prev, [arrayName]: newArray };
      }
    });
  };

  const addArrayItem = (arrayName, parentName = null) => {
    setFormData(prev => {
      if (parentName) {
        const newParent = { ...prev[parentName] };
        const newArray = [...newParent[arrayName], ''];
        newParent[arrayName] = newArray;
        return { ...prev, [parentName]: newParent };
      } else {
        return { ...prev, [arrayName]: [...prev[arrayName], ''] };
      }
    });
  };

  const removeArrayItem = (index, arrayName, parentName = null) => {
    setFormData(prev => {
      if (parentName) {
        const newParent = { ...prev[parentName] };
        const newArray = newParent[arrayName].filter((_, i) => i !== index);
        newParent[arrayName] = newArray;
        return { ...prev, [parentName]: newParent };
      } else {
        return { ...prev, [arrayName]: prev[arrayName].filter((_, i) => i !== index) };
      }
    });
  };

  // Handlers for Complex Nested Arrays (Process & Blocktext)
  const handleComplexArrayChange = (index, field, value, arrayName) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      newArray[index] = { ...newArray[index], [field]: value };
      return { ...prev, [arrayName]: newArray };
    });
  };

  const handleComplexArrayBulletChange = (itemIndex, bulletIndex, value, arrayName) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      const newBullets = [...newArray[itemIndex].bullets];
      newBullets[bulletIndex] = value;
      newArray[itemIndex] = { ...newArray[itemIndex], bullets: newBullets };
      return { ...prev, [arrayName]: newArray };
    });
  };

  const addComplexArrayItem = (arrayName, template) => {
    setFormData(prev => ({ ...prev, [arrayName]: [...prev[arrayName], template] }));
  };

  const removeComplexArrayItem = (index, arrayName) => {
    setFormData(prev => ({ ...prev, [arrayName]: prev[arrayName].filter((_, i) => i !== index) }));
  };

  const addComplexArrayBullet = (itemIndex, arrayName) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      const newBullets = [...newArray[itemIndex].bullets, ''];
      newArray[itemIndex] = { ...newArray[itemIndex], bullets: newBullets };
      return { ...prev, [arrayName]: newArray };
    });
  };

  const removeComplexArrayBullet = (itemIndex, bulletIndex, arrayName) => {
    setFormData(prev => {
      const newArray = [...prev[arrayName]];
      const newBullets = newArray[itemIndex].bullets.filter((_, i) => i !== bulletIndex);
      newArray[itemIndex] = { ...newArray[itemIndex], bullets: newBullets };
      return { ...prev, [arrayName]: newArray };
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!result.success) {
        throw new Error(result.error);
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

  return (
    <form onSubmit={handleSubmit} className="h-full flex flex-col">
      <div className="border-b border-white/10 flex-shrink-0">
        <nav className="-mb-px flex">
          <button
            type="button"
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === 'general'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }`}
            onClick={() => setActiveTab('general')}
          >
            General Info
          </button>
          <button
            type="button"
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === 'details'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }`}
            onClick={() => setActiveTab('details')}
          >
            Deep Details
          </button>
          <button
            type="button"
            className={`flex-1 py-4 px-1 text-center border-b-2 font-medium text-sm transition-colors ${activeTab === 'extra'
              ? 'border-blue-500 text-blue-400'
              : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
              }`}
            onClick={() => setActiveTab('extra')}
          >
            Extra Blocks
          </button>
        </nav>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {error && (
          <div className="bg-red-500/10 border border-red-500/20 text-red-500 p-3 rounded mb-4 text-sm">
            {error}
          </div>
        )}

        {/* TAB 1: GENERAL INFO */}
        {activeTab === 'general' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Title</label>
                <input type="text" name="title" value={formData.title} onChange={handleChange} required className="input-dark" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Slug</label>
                <input type="text" name="slug" value={formData.slug} onChange={handleChange} required className="input-dark" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Short Description</label>
              <textarea name="description" value={formData.description} onChange={handleChange} required rows="4" className="input-dark resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <ImageUpload
                  label="Icon"
                  value={formData.icon}
                  onChange={(url) => setFormData(prev => ({ ...prev, icon: url }))}
                />
              </div>
              <div>
                <ImageUpload
                  label="Hero Image"
                  value={formData.heroImg}
                  onChange={(url) => setFormData(prev => ({ ...prev, heroImg: url }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Icon Alt Text</label>
                <input type="text" name="alt" value={formData.alt} onChange={handleChange} className="input-dark" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Theme Color</label>
                <div className="flex gap-2">
                  <input type="color" name="color" value={formData.color} onChange={handleChange} className="h-10 w-12 bg-transparent border-0 p-0 cursor-pointer" />
                  <input type="text" name="color" value={formData.color} onChange={handleChange} className="input-dark flex-1" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Key Points</label>
              <div className="space-y-2">
                {formData.points.map((point, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handleArrayChange(index, e.target.value, 'points')}
                      className="input-dark flex-1"
                      placeholder="Key Point"
                    />
                    <button type="button" onClick={() => removeArrayItem(index, 'points')} className="text-gray-500 hover:text-red-400 px-2">X</button>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => addArrayItem('points')} className="mt-2 text-xs text-blue-400 hover:text-blue-300">+ Add Point</button>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex items-center">
                <input type="checkbox" name="active" checked={formData.active} onChange={handleChange} className="h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-blue-500/50" />
                <label className="ml-2 block text-sm text-gray-300">Active Service</label>
              </div>
              <div className="flex items-center gap-3">
                <label className="text-sm font-medium text-gray-400">Sort Order</label>
                <input type="number" name="order" value={formData.order} onChange={handleChange} className="input-dark w-20 text-center" />
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: DETAILS (Intro & Process) */}
        {activeTab === 'details' && (
          <div className="space-y-8">
            {/* Intro Section */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="font-bold text-white mb-4">Intro Section</h3>
              <div className="grid gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Intro Heading</label>
                  <input type="text" name="intro.heading" value={formData.intro.heading} onChange={handleChange} className="input-dark" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Intro Text</label>
                  <textarea name="intro.text" value={formData.intro.text} onChange={handleChange} rows="4" className="input-dark resize-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Intro Bullets</label>
                  <div className="space-y-2">
                    {formData.intro.bullets.map((bullet, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={bullet}
                          onChange={(e) => handleArrayChange(index, e.target.value, 'bullets', 'intro')}
                          className="input-dark flex-1"
                        />
                        <button type="button" onClick={() => removeArrayItem(index, 'bullets', 'intro')} className="text-gray-500 hover:text-red-400 px-2">X</button>
                      </div>
                    ))}
                  </div>
                  <button type="button" onClick={() => addArrayItem('bullets', 'intro')} className="mt-2 text-xs text-blue-400 hover:text-blue-300">+ Add Bullet</button>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-white">Process Steps</h3>
                <button type="button" onClick={() => addComplexArrayItem('process', { title: '', color: '', img: '', text: '' })} className="text-xs bg-blue-600/20 text-blue-400 px-3 py-1.5 rounded-lg hover:bg-blue-600/30 transition">+ Add Step</button>
              </div>
              <div className="space-y-4">
                {formData.process.map((step, index) => (
                  <div key={index} className="p-4 rounded-lg bg-black/20 border border-white/5">
                    <div className="flex justify-between mb-3">
                      <span className="text-xs font-bold text-gray-500 uppercase">Step {index + 1}</span>
                      <button type="button" onClick={() => removeComplexArrayItem(index, 'process')} className="text-gray-500 hover:text-red-400"><XIcon /></button>
                    </div>
                    <div className="grid grid-cols-2 gap-3 mb-3">
                      <input
                        type="text"
                        placeholder="Step Title"
                        value={step.title}
                        onChange={(e) => handleComplexArrayChange(index, 'title', e.target.value, 'process')}
                        className="input-dark"
                      />
                      <ImageUpload
                        label="Step Image"
                        value={step.img}
                        onChange={(url) => handleComplexArrayChange(index, 'img', url, 'process')}
                      />
                    </div>
                    <textarea
                      placeholder="Description"
                      value={step.text}
                      onChange={(e) => handleComplexArrayChange(index, 'text', e.target.value, 'process')}
                      rows="2"
                      className="input-dark resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: EXTRA BLOCKS */}
        {activeTab === 'extra' && (
          <div className="space-y-8">
            {/* Promise Section */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="font-bold text-white mb-4">Hero Promise</h3>
              <div className="grid gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Promise Title</label>
                  <input type="text" name="heropromisetitle" value={formData.heropromisetitle} onChange={handleChange} className="input-dark" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Promise Description</label>
                  <textarea name="promisedescription" value={formData.promisedescription} onChange={handleChange} rows="3" className="input-dark resize-none" />
                </div>
              </div>
            </div>

            {/* Content Blocks */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="font-bold text-white mb-4">Detailed Info Blocks</h3>
              <div className="mb-4">
                <ImageUpload
                  label="Shared Block Image"
                  value={formData.blockImg}
                  onChange={(url) => setFormData(prev => ({ ...prev, blockImg: url }))}
                />
              </div>

              <div className="space-y-4">
                {formData.blocktext.map((block, index) => (
                  <div key={index} className="p-4 rounded-lg bg-black/20 border border-white/5">
                    <div className="flex justify-between mb-3">
                      <span className="text-xs font-bold text-gray-500 uppercase">Block {index + 1}</span>
                      <button type="button" onClick={() => removeComplexArrayItem(index, 'blocktext')} className="text-gray-500 hover:text-red-400"><XIcon /></button>
                    </div>
                    <input
                      type="text"
                      placeholder="Block Title"
                      value={block.title}
                      onChange={(e) => handleComplexArrayChange(index, 'title', e.target.value, 'blocktext')}
                      className="input-dark mb-3"
                    />
                    <textarea
                      placeholder="Block Text"
                      value={block.text}
                      onChange={(e) => handleComplexArrayChange(index, 'text', e.target.value, 'blocktext')}
                      rows="2"
                      className="input-dark mb-3 resize-none"
                    />

                    <div className="pl-3 border-l-2 border-white/10">
                      <label className="text-[10px] font-bold text-gray-500 uppercase mb-2 block">Bullets</label>
                      <div className="space-y-2">
                        {block.bullets.map((bullet, bIndex) => (
                          <div key={bIndex} className="flex gap-2">
                            <input
                              type="text"
                              value={bullet}
                              onChange={(e) => handleComplexArrayBulletChange(index, bIndex, e.target.value, 'blocktext')}
                              className="input-dark text-xs py-1.5"
                              placeholder="Bullet point"
                            />
                            <button type="button" onClick={() => removeComplexArrayBullet(index, bIndex, 'blocktext')} className="text-gray-500 hover:text-red-400 px-1">x</button>
                          </div>
                        ))}
                      </div>
                      <button type="button" onClick={() => addComplexArrayBullet(index, 'blocktext')} className="mt-2 text-xs text-blue-400 hover:text-blue-300">+ Add Bullet</button>
                    </div>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => addComplexArrayItem('blocktext', { title: '', text: '', bullets: [''] })} className="mt-4 w-full py-2 border border-dashed border-white/20 rounded-lg text-sm text-gray-400 hover:text-white hover:border-white/40">+ Add Info Block</button>
            </div>

            {/* Explore Section */}
            <div className="p-4 rounded-xl bg-white/5 border border-white/5">
              <h3 className="font-bold text-white mb-4">Explore Section</h3>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Explore Title</label>
                <input type="text" name="exploretitile" value={formData.exploretitile} onChange={handleChange} className="input-dark" />
              </div>
              <label className="block text-xs font-semibold text-gray-400 uppercase mb-2">Explore Points</label>
              <div className="grid grid-cols-2 gap-3">
                {formData.explorepoints.points.map((point, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handleArrayChange(index, e.target.value, 'points', 'explorepoints')}
                      className="input-dark flex-1"
                    />
                    <button type="button" onClick={() => removeArrayItem(index, 'points', 'explorepoints')} className="text-gray-500 hover:text-red-400 px-2">X</button>
                  </div>
                ))}
              </div>
              <button type="button" onClick={() => addArrayItem('points', 'explorepoints')} className="mt-3 text-xs text-blue-400 hover:text-blue-300">+ Add Explore Point</button>
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
      `}</style>
    </form>
  );
}

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
)
