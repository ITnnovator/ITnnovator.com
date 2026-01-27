'use client';

import { useState, useEffect } from 'react';
import { Plus, Trash2, X, Loader2, Image as ImageIcon, FileText, Edit, Calendar } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import AdminList from '@/components/admin/AdminList';

const initialForm = {
    title: '', slug: '', excerpt: '', content: '', coverImage: '', tags: '', author: 'Itnnovator Team'
};

export default function BlogManager() {
    const [blogs, setBlogs] = useState([]);
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState(initialForm);

    useEffect(() => { fetchBlogs(); }, []);

    const fetchBlogs = async () => {
        try {
            const res = await fetch('/api/blogs', { cache: 'no-store' });
            const data = await res.json();
            setBlogs(data);
        } catch (error) {
            console.error(error);
            toast.error('Failed to load blogs');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this blog post?')) return;
        try {
            await fetch(`/api/blogs/${id}`, { method: 'DELETE' });
            toast.success('Blog deleted');
            fetchBlogs();
        } catch (e) {
            toast.error('Failed to delete');
        }
    };

    const handleEdit = (blog) => {
        setFormData({
            ...blog,
            tags: Array.isArray(blog.tags) ? blog.tags.join(', ') : blog.tags
        });
        setIsFormOpen(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const isEdit = !!formData._id;
            const url = isEdit ? `/api/blogs/${formData._id}` : '/api/blogs';
            const method = isEdit ? 'PUT' : 'POST';

            const payload = { ...formData };
            if (typeof payload.tags === 'string') {
                payload.tags = payload.tags.split(',').map(t => t.trim()).filter(Boolean);
            }
            if (!isEdit) delete payload._id;

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const err = await res.json();
                throw new Error(err.error || 'Operation failed');
            }

            toast.success(isEdit ? 'Blog updated' : 'Blog created');
            setFormData(initialForm);
            setIsFormOpen(false);
            fetchBlogs();
        } catch (e) {
            toast.error(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    const handleBulkDelete = async (ids) => {
        try {
            await Promise.all(ids.map(id => fetch(`/api/blogs/${id}`, { method: 'DELETE' })));
            setBlogs(prev => prev.filter(b => !ids.includes(b._id)));
            toast.success(`${ids.length} posts deleted`);
        } catch (e) {
            toast.error('Failed to delete posts');
        }
    };

    // Card Component
    const BlogCard = ({ item }) => (
        <div className="group bg-[#111116] border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all flex flex-col h-full">
            <div className="h-48 bg-gray-900 relative overflow-hidden">
                {item.coverImage ? (
                    <img src={item.coverImage} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <div className="w-full h-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <FileText size={48} />
                    </div>
                )}
                <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-20">
                    <button onClick={(e) => { e.stopPropagation(); handleEdit(item); }} className="p-2 bg-blue-500/80 text-white rounded-lg hover:bg-blue-500"><Edit size={16} /></button>
                </div>
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                    <span className="text-[10px] text-blue-400 border border-blue-500/20 bg-blue-500/5 px-2 py-1 rounded font-mono">
                        {new Date(item.createdAt).toLocaleDateString()}
                    </span>
                    {item.tags && item.tags.length > 0 && <span className="text-[10px] text-gray-500">{item.tags[0]}</span>}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{item.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">{item.excerpt}</p>

                <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-gray-500">
                    <span>By {item.author}</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="space-y-8 animate-in fade-in duration-500">
            <Toaster />
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-white tracking-tight">Blog & Insights</h1>
                    <p className="text-gray-400 mt-2 text-sm">Manage your articles and news.</p>
                </div>
                <button onClick={() => { setFormData(initialForm); setIsFormOpen(true); }} className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl transition-all font-medium"><Plus size={18} /> Add Post</button>
            </div>

            <AdminList
                data={blogs}
                isLoading={isLoading}
                layout="grid"
                CardComponent={BlogCard}
                onDelete={handleDelete}
                onBulkDelete={handleBulkDelete}
                searchKeys={['title', 'author', 'tags']}
            />

            {isFormOpen && (
                <BlogModal
                    isOpen={isFormOpen}
                    onClose={() => setIsFormOpen(false)}
                    formData={formData}
                    setFormData={setFormData}
                    handleSubmit={handleSubmit}
                    isLoading={isLoading}
                />
            )}
        </div>
    );
}

function BlogModal({ onClose, formData, setFormData, handleSubmit, isLoading }) {

    return (
        <div className="fixed inset-0 z-[100] flex justify-end">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
            <div className="relative w-full max-w-2xl bg-[#111116] h-full border-l border-white/10 flex flex-col shadow-2xl animate-in slide-in-from-right">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                    <h2 className="text-xl font-bold text-white">{formData._id ? 'Edit Post' : 'New Blog Post'}</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-white"><X size={24} /></button>
                </div>

                <div className="flex-1 overflow-y-auto p-6">
                    <form id="blogForm" onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-4">
                            <ImageUpload label="Cover Image" value={formData.coverImage} onChange={v => setFormData({ ...formData, coverImage: v })} />

                            <Input label="Title" value={formData.title} onChange={v => setFormData({ ...formData, title: v })} required />

                            <div className="grid grid-cols-2 gap-4">
                                <Input label="Slug (URL Friendly)" value={formData.slug} onChange={v => setFormData({ ...formData, slug: v })} required />
                                <Input label="Author" value={formData.author} onChange={v => setFormData({ ...formData, author: v })} />
                            </div>

                            <Input label="Tags (comma separated)" value={formData.tags} onChange={v => setFormData({ ...formData, tags: v })} placeholder="Tech, AI, Web Dev" />

                            <Input label="Short Excerpt" textarea value={formData.excerpt} onChange={v => setFormData({ ...formData, excerpt: v })} required />

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-gray-400 uppercase">Content (HTML Supported)</label>
                                <textarea required rows={12} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none font-mono" value={formData.content || ''} onChange={e => setFormData({ ...formData, content: e.target.value })} placeholder={`<h1>Post Title</h1>
<h2>Intro / Context</h2>
<p>...</p>

<h2>Main Section 1</h2>
<p>...</p>

<h2>How Itnnovator Approaches [Topic]</h2>
<p>...</p>

<h2>Frequently Asked Questions</h2>
<h3>Question 1?</h3>
<p>...</p>

<h2>Final Thoughts</h2>
<p>...</p>`} />
                                <p className="text-[10px] text-gray-500">Supports Basic HTML tags.</p>
                            </div>
                        </div>
                    </form>
                </div>

                <div className="p-6 border-t border-white/10">
                    <button form="blogForm" type="submit" disabled={isLoading} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors">
                        {isLoading ? 'Saving...' : 'Save Post'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// Helper Components

function Input({ label, type = "text", textarea, value, onChange, required, placeholder }) {
    return (
        <div className="space-y-2">
            <label className="text-xs font-semibold text-gray-400 uppercase">{label}</label>
            {textarea ? (
                <textarea required={required} rows={4} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none resize-none" value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
            ) : (
                <input required={required} type={type} className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:border-blue-500/50 outline-none" value={value || ''} onChange={e => onChange(e.target.value)} placeholder={placeholder} />
            )}
        </div>
    );
}

function ImageUpload({ label, value, onChange }) {
    const [uploading, setUploading] = useState(false);

    const handleFile = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        setUploading(true);
        const form = new FormData();
        form.append('file', file);
        try {
            const res = await fetch('/api/upload', { method: 'POST', body: form });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error);
            onChange(data.url);
        } catch (e) {
            toast.error('Upload failed');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <label className="text-xs font-semibold text-gray-400 uppercase mb-2 block">{label}</label>
            <div className="border-2 border-dashed border-white/10 rounded-xl p-4 text-center cursor-pointer hover:border-blue-500/30 relative bg-black/20 h-48 flex items-center justify-center overflow-hidden group">
                <input type="file" accept="image/*,.svg" onChange={handleFile} className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer" />
                {uploading ? <Loader2 className="animate-spin text-blue-500" /> : (value ? <img src={value} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" /> : <div className="text-gray-500 text-xs flex flex-col items-center"><ImageIcon className="h-8 w-8 mb-2" /> Upload Cover Image</div>)}
            </div>
        </div>
    );
}
