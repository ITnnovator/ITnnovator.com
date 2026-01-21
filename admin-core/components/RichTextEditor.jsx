'use client';

// A simple text area for now, can be upgraded to Quill or TinyMCE later
// Keeping it simple to avoid heavy dependencies for the first version
export default function RichTextEditor({ label, value, onChange, rows = 6 }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
      <textarea
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-malibu focus:border-transparent outline-none transition-all"
        rows={rows}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter content here..."
      />
      <p className="mt-1 text-xs text-gray-400">Supports Markdown or basic HTML.</p>
    </div>
  );
}
