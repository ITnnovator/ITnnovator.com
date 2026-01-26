'use client';

export default function ServiceOverview({ content }) {
  if (!content) return null;
  
  return (
    <div className="prose prose-invert max-w-none prose-lg text-gray-300 leading-relaxed">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
