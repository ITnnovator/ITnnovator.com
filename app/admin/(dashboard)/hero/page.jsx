'use client';

import { useState, useEffect } from 'react';
import { Upload, Loader2, Save, Play, Image as ImageIcon } from 'lucide-react';
import toast from 'react-hot-toast';

export default function HeroManager() {
    const [type, setType] = useState('video');
    const [url, setUrl] = useState('');
    // const [headline, setHeadline] = useState(''); // Optional, requested later if needed
    const [isLoading, setIsLoading] = useState(false);
    const [isUploading, setIsUploading] = useState(false);

    useEffect(() => {
        fetchHero();
    }, []);

    const fetchHero = async () => {
        try {
            const res = await fetch('/api/hero');
            const data = await res.json();
            if (data.url) {
                setType(data.type);
                setUrl(data.url);
            }
        } catch (error) {
            console.error('Error fetching hero:', error);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setIsUploading(true);
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await res.json();

            if (!res.ok) throw new Error(data.error);

            setUrl(data.url);

            // Auto-detect type
            if (file.type.startsWith('video/')) setType('video');
            else if (file.type.startsWith('image/')) setType('image');

            toast.success('File uploaded successfully');
        } catch (error) {
            toast.error('Upload failed: ' + error.message);
        } finally {
            setIsUploading(false);
        }
    };

    const handleSave = async () => {
        setIsLoading(true);
        try {
            const res = await fetch('/api/hero', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ type, url }),
            });

            if (!res.ok) throw new Error('Failed to save');

            toast.success('Banner updated successfully!');
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="space-y-8 animate-in fade-in duration-500 max-w-4xl mx-auto">
            <div>
                <h1 className="text-3xl font-bold text-white tracking-tight">Hero Banner</h1>
                <p className="text-gray-400 mt-2 text-sm">Manage the main visual section of your homepage.</p>
            </div>

            <div className="bg-[#111116] border border-white/5 rounded-2xl p-6 md:p-8 space-y-8">

                {/* Type Selection */}
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={() => setType('video')}
                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${type === 'video'
                                ? 'bg-blue-600/10 border-blue-500 text-blue-400'
                                : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                            }`}
                    >
                        <Play className="h-6 w-6" />
                        <span className="font-semibold">Video Background</span>
                    </button>

                    <button
                        onClick={() => setType('image')}
                        className={`p-4 rounded-xl border flex flex-col items-center gap-3 transition-all ${type === 'image'
                                ? 'bg-purple-600/10 border-purple-500 text-purple-400'
                                : 'bg-white/5 border-transparent text-gray-400 hover:bg-white/10'
                            }`}
                    >
                        <ImageIcon className="h-6 w-6" />
                        <span className="font-semibold">Image Background</span>
                    </button>
                </div>

                {/* Upload Section */}
                <div className="space-y-4">
                    <label className="text-sm font-medium text-gray-300">Upload Media</label>
                    <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-white/20 transition-colors bg-black/20 relative group">
                        <input
                            type="file"
                            accept="video/*,image/*"
                            onChange={handleFileUpload}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                        />

                        {isUploading ? (
                            <div className="flex flex-col items-center text-blue-400">
                                <Loader2 className="h-8 w-8 animate-spin mb-2" />
                                <p>Uploading...</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center text-gray-400 group-hover:text-gray-300">
                                <div className="p-3 bg-white/5 rounded-full mb-3">
                                    <Upload className="h-6 w-6" />
                                </div>
                                <p className="font-medium">Click to upload or drag and drop</p>
                                <p className="text-xs mt-1 text-gray-600">MP4, JPG, PNG supported</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Preview */}
                {url && (
                    <div className="space-y-4">
                        <label className="text-sm font-medium text-gray-300">Live Preview</label>
                        <div className="aspect-video w-full rounded-xl overflow-hidden bg-black border border-white/10 relative shadow-2xl">
                            {type === 'video' ? (
                                <video src={url} autoPlay loop muted className="w-full h-full object-cover" />
                            ) : (
                                <img src={url} alt="Banner Preview" className="w-full h-full object-cover" />
                            )}
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                                <p className="text-xs text-white/70 font-mono">{url}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Save Button */}
                <div className="flex justify-end pt-4 border-t border-white/5">
                    <button
                        onClick={handleSave}
                        disabled={isLoading || isUploading || !url}
                        className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? <Loader2 className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
                        Update Banner
                    </button>
                </div>
            </div>
        </div>
    );
}
