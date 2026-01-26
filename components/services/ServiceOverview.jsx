'use client';

export default function ServiceOverview({ content }) {
  if (!content) return null;

  return (
    <div className="relative">
      <h2 className="sr-only">Overview</h2> {/* Semantic only */}
      <div className="prose prose-invert max-w-none prose-lg md:prose-xl leading-relaxed text-gray-300/90 prose-headings:font-bold prose-headings:text-white prose-a:text-brand hover:prose-a:text-brand/80 transition-colors prose-strong:text-white prose-ul:marker:text-brand">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}
