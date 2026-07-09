import Link from "next/link";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";

export const revalidate = 0; // Ensure dynamic data fetching

export async function generateMetadata({ params }) {
    const { slug } = await params;
    await dbConnect();
    const blog = await Blog.findOne({ slug });
    if (!blog) return { title: "Blog Not Found" };

    return {
        title: blog.metaTitle || `${blog.title} | Itnnovator Insights`,
        description: blog.metaDescription || blog.excerpt,
        alternates: {
            canonical: blog.canonicalUrl || `/blog/${slug}`,
        },
        robots: blog.noindex
            ? { index: false, follow: true }
            : { index: true, follow: true },
        openGraph: {
            title: blog.metaTitle || blog.title,
            description: blog.metaDescription || blog.excerpt,
            images: [blog.coverImage || '/og.jpg']
        }
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    await dbConnect();
    const blog = await Blog.findOne({ slug });

    if (!blog) notFound();

    return (
        <main className="grow bg-black text-white overflow-hidden">
            {/* ── HERO SECTION ─────────────────────────────────── */}
            <section className="relative w-full pt-20 pb-0 px-6 lg:px-12">
                {/* BG glows */}
                <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-malibu/8 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute top-[20%] left-[-5%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Breadcrumb */}
                    <div className="block text-sm md:text-base mb-12">
                        <span className="text-white/60">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            {" / "}
                            <Link href="/blog" className="hover:text-white transition-colors">Insights</Link>
                            {" / "}
                            <span className="text-white/40">{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                        </span>
                    </div>

                    {/* Header Meta */}
                    <div className="mb-12">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-10 h-[1px] bg-white/20" />
                            <span className="text-malibu font-mono uppercase tracking-widest text-sm">Article</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1] tracking-tight mb-8 text-white max-w-4xl">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap gap-3 mb-8">
                            {blog.tags && blog.tags.map((tag, i) => (
                                <span key={i} className="text-xs uppercase tracking-widest font-semibold text-malibu bg-malibu/10 border border-malibu/30 px-3 py-1.5 rounded-full">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-malibu to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                                    {blog.author.charAt(0).toUpperCase()}
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{blog.author}</p>
                                    <p className="text-sm text-white/50">{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                                </div>
                            </div>
                            {blog.readTime && (
                                <div className="flex items-center gap-2 text-white/60 text-sm">
                                    <span>•</span>
                                    <span>{blog.readTime} min read</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Featured Image */}
                <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mt-16 mb-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-malibu/20 to-purple-500/20 rounded-2xl blur-[80px]" />
                    <img
                        src={blog.coverImage || '/webImages/blog-placeholder.jpg'}
                        alt={blog.title}
                        className="relative w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 rounded-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-2xl" />
                </div>
            </section>

            {/* ── CONTENT SECTION ─────────────────────────────────── */}
            <section className="relative w-full py-16 lg:py-24 px-6 lg:px-12">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-malibu/5 rounded-full blur-[150px] pointer-events-none" />

                <div className="max-w-3xl mx-auto relative z-10">
                    <article
                        className="prose prose-invert prose-lg md:prose-xl max-w-none 
                                   prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed prose-p:mb-6
                                   prose-headings:text-white prose-headings:font-bold prose-headings:mt-12 prose-headings:mb-6
                                   prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                                   prose-a:text-malibu prose-a:no-underline hover:prose-a:underline 
                                   prose-strong:text-white prose-strong:font-semibold
                                   prose-code:text-malibu prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded
                                   prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:p-4
                                   prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10 prose-img:border prose-img:border-white/10
                                   prose-blockquote:border-l-malibu prose-blockquote:text-white/70 prose-blockquote:not-italic
                                   prose-li:text-white/70 prose-li:my-2"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* Article Footer */}
                    <div className="mt-16 pt-12 border-t border-white/10">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                            <div>
                                <p className="text-white/60 text-sm mb-4">Share this article</p>
                                <div className="flex gap-4">
                                    <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(`https://itnnovator.com/blog/${slug}`)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-malibu/20 hover:border-malibu/40 transition-all duration-300">
                                        Twitter
                                    </Link>
                                    <Link href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://itnnovator.com/blog/${slug}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-malibu/20 hover:border-malibu/40 transition-all duration-300">
                                        LinkedIn
                                    </Link>
                                </div>
                            </div>
                            <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-all duration-300 group">
                                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Articles
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── RELATED ARTICLES CTA ─────────────────────────────────── */}
            <section className="relative w-full py-20 lg:py-24 px-6 lg:px-12">
                <div className="absolute inset-0 bg-gradient-to-br from-malibu/5 via-transparent to-purple-500/5" />

                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Ready to Transform Your Business?
                    </h2>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
                        Let's discuss how our insights and services can help bring your digital vision to life.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-malibu text-black font-bold hover:shadow-[0_0_30px_rgba(130,157,255,0.5)] hover:scale-105 transition-all duration-300">
                        Get In Touch
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
