'use client';

import { useState, useMemo } from 'react';
import { Trash2, CheckSquare, Square, Loader2, Search, X } from 'lucide-react';

export default function AdminList({
    data = [],
    columns = [],
    header, // New prop for page title/content
    CardComponent, // Component to render on mobile (or always if layout='grid')
    layout = 'table', // 'table' | 'grid'
    onDelete, // (id) => void
    onBulkDelete, // (ids) => void
    isLoading,
    emptyMessage = "No items found.",
    searchable = true,
    searchKeys = ['title', 'name']
}) {
    const [selectedIds, setSelectedIds] = useState(new Set());
    const [searchQuery, setSearchQuery] = useState('');

    // Filter Data
    const filteredData = useMemo(() => {
        if (!searchQuery) return data;
        const lowerQuery = searchQuery.toLowerCase();
        return data.filter(item =>
            searchKeys.some(key => {
                const val = key.split('.').reduce((o, i) => o?.[i], item); // Support nested keys like 'contact.name'
                return String(val || '').toLowerCase().includes(lowerQuery);
            })
        );
    }, [data, searchQuery, searchKeys]);

    // Bulk Selection Logic
    const handleSelectAll = () => {
        if (selectedIds.size === filteredData.length) {
            setSelectedIds(new Set());
        } else {
            setSelectedIds(new Set(filteredData.map(d => d._id)));
        }
    };

    const handleSelectOne = (id) => {
        const newSet = new Set(selectedIds);
        if (newSet.has(id)) {
            newSet.delete(id);
        } else {
            newSet.add(id);
        }
        setSelectedIds(newSet);
    };

    const executeBulkDelete = () => {
        if (confirm(`Are you sure you want to delete ${selectedIds.size} items?`)) {
            onBulkDelete(Array.from(selectedIds));
            setSelectedIds(new Set());
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center py-20">
                <Loader2 className="animate-spin text-blue-500" size={32} />
            </div>
        );
    }

    if (!isLoading && filteredData.length === 0 && !searchQuery) {
        return (
            <div className="text-center py-20 bg-[#111116] border border-white/5 rounded-2xl">
                <p className="text-gray-400">{emptyMessage}</p>
            </div>
        );
    }

    return (
        <div className="space-y-4">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mb-6">

                {/* Left Side: Header */}
                {header && (
                    <div className="flex-1">
                        {header}
                    </div>
                )}

                {/* Right Side: Search & Actions */}
                <div className="flex flex-col md:flex-row gap-3 items-start md:items-center w-full md:w-auto">
                    {/* Search */}
                    {searchable && (
                        <div className="relative w-full md:w-72">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" size={16} />
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-[#111116] border border-white/10 rounded-xl pl-10 pr-4 py-2 text-sm text-white focus:border-blue-500/50 outline-none transition-all focus:w-full md:focus:w-80"
                            />
                        </div>
                    )}

                    {/* Bulk Actions */}
                    {selectedIds.size > 0 && (
                        <div className="flex items-center gap-3 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-xl text-blue-400 animate-in fade-in slide-in-from-bottom-2 whitespace-nowrap">
                            <span className="text-sm font-bold">{selectedIds.size} Selected</span>
                            <button
                                onClick={executeBulkDelete}
                                className="flex items-center gap-1 hover:text-white transition-colors"
                            >
                                <Trash2 size={16} /> Delete
                            </button>
                            <button onClick={() => setSelectedIds(new Set())} className="ml-2 opacity-50 hover:opacity-100">
                                <X size={16} />
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Grid Layout (Assuming Always Cards) */}
            {layout === 'grid' && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredData.map(item => (
                        <div key={item._id} className={`relative group ${selectedIds.has(item._id) ? 'ring-2 ring-blue-500' : ''}`}>
                            {/* Selection Checkbox Overlay */}
                            <div className="absolute top-3 left-3 z-10">
                                <input
                                    type="checkbox"
                                    checked={selectedIds.has(item._id)}
                                    onChange={() => handleSelectOne(item._id)}
                                    className="w-5 h-5 rounded border-gray-600 bg-black/50 accent-blue-500 cursor-pointer"
                                />
                            </div>
                            <CardComponent item={item} />
                        </div>
                    ))}
                </div>
            )}

            {/* Table Layout (Table Desktop / Cards Mobile) */}
            {layout === 'table' && (
                <div className="bg-[#111116] border border-white/5 rounded-2xl overflow-hidden">
                    {/* Desktop Table View */}
                    <div className="hidden md:block overflow-x-auto">
                        <table className="w-full text-left text-sm text-gray-400">
                            <thead className="bg-white/5 text-white uppercase font-bold">
                                <tr>
                                    <th className="px-6 py-4 w-10">
                                        <input
                                            type="checkbox"
                                            checked={selectedIds.size === filteredData.length && filteredData.length > 0}
                                            onChange={handleSelectAll}
                                            className="w-4 h-4 rounded border-gray-600 bg-transparent accent-blue-500 cursor-pointer"
                                        />
                                    </th>
                                    {columns.map((col, i) => (
                                        <th key={i} className={`px-6 py-4 ${col.className || ''}`}>{col.header}</th>
                                    ))}
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {filteredData.map((item) => (
                                    <tr key={item._id} className={`hover:bg-white/5 transition-colors ${selectedIds.has(item._id) ? 'bg-blue-500/5' : ''}`}>
                                        <td className="px-6 py-4">
                                            <input
                                                type="checkbox"
                                                checked={selectedIds.has(item._id)}
                                                onChange={() => handleSelectOne(item._id)}
                                                className="w-4 h-4 rounded border-gray-600 bg-transparent accent-blue-500 cursor-pointer"
                                            />
                                        </td>
                                        {columns.map((col, i) => (
                                            <td key={i} className={`px-6 py-4 ${col.className || ''}`}>
                                                {col.render ? col.render(item) : (col.accessor ? item[col.accessor] : '-')}
                                            </td>
                                        ))}
                                        <td className="px-6 py-4 text-right">
                                            <button
                                                onClick={() => onDelete(item._id)}
                                                className="p-2 hover:bg-red-500/20 text-gray-500 hover:text-red-500 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={16} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile Card View */}
                    <div className="md:hidden divide-y divide-white/5">
                        {filteredData.map(item => (
                            <div key={item._id} className={`p-4 flex gap-4 ${selectedIds.has(item._id) ? 'bg-blue-500/5' : ''}`}>
                                {/* Checkbox */}
                                <div className="pt-1">
                                    <input
                                        type="checkbox"
                                        checked={selectedIds.has(item._id)}
                                        onChange={() => handleSelectOne(item._id)}
                                        className="w-5 h-5 rounded border-gray-600 bg-transparent accent-blue-500 cursor-pointer"
                                    />
                                </div>

                                {/* Card Content passed via prop */}
                                <div className="flex-1 min-w-0">
                                    {CardComponent ? <CardComponent item={item} /> : (
                                        <div className="space-y-2">
                                            {/* Default fallback if no CardComponent component provided */}
                                            {columns.map((col, i) => (
                                                <div key={i} className="flex justify-between text-sm">
                                                    <span className="text-gray-500 font-medium">{col.header}:</span>
                                                    <span className="text-gray-300 text-right">{col.render ? col.render(item) : item[col.accessor]}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Mobile Actions */}
                                <div className="flex flex-col gap-2 justify-center pl-2 border-l border-white/5">
                                    <button
                                        onClick={() => onDelete(item._id)}
                                        className="p-2 bg-red-500/10 text-red-400 rounded-lg"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
