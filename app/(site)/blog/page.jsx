import Link from "next/link";
import dbConnect from "@/lib/db";
import Blog from "@/models/Blog";

export const revalidate = 60; // Revalidate every minute

async function getBlogs() {
    await dbConnect();
    return await Blog.find({}).sort({ createdAt: -1 });
}

export default async function blog() {
    const blogs = await getBlogs();

    return (
        <main className="grow bg-black text-white overflow-hidden">
            {/* ── HERO ─────────────────────────────────────────── */}
            <section className="relative min-h-[60vh] flex items-center px-6 lg:px-12 pt-20 pb-20">
                {/* BG glows */}
                <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-malibu/8 rounded-full blur-[150px] pointer-events-none" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-7xl mx-auto w-full">
                    {/* Breadcrumb */}
                    <div className="block md:text-lg mb-12">
                        <span className="text-white/60">
                            <Link href="/" className="hover:text-white transition-colors">Home</Link>
                            {" / "}
                            <span className="text-white font-semibold">Insights</span>
                        </span>
                    </div>

                    {/* Hero Content */}
                    <div className="max-w-[780px]">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-10 h-[1px] bg-white/20" />
                            <span className="text-malibu font-mono uppercase tracking-widest text-sm">Latest Insights</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6 text-white">
                            Insights & <span className="text-malibu italic font-serif font-light">Articles</span>
                        </h1>

                        <p className="text-xl text-white/60 font-light leading-relaxed max-w-2xl mb-8">
                            Explore our latest thoughts on technology, design, and digital innovation. Stay updated with industry trends and best practices.
                        </p>

                        <div className="flex gap-4">
                            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-malibu text-black font-bold hover:shadow-[0_0_30px_rgba(130,157,255,0.5)] hover:scale-105 transition-all duration-300">
                                Get In Touch
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── BLOG GRID ──────────────────────────────────── */}
            <section className="w-full py-16 lg:py-24 relative">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-malibu/5 rounded-full blur-[150px] pointer-events-none" />
                
                <div className="max-w-[94rem] px-6 xl:px-8 mx-auto relative z-10">
                    {/* Section header */}
                    <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div>
                            <span className="text-malibu font-mono uppercase tracking-widest text-sm mb-3 block">What's New</span>
                            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Featured Articles</h2>
                        </div>
                        <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-malibu/40 to-transparent hidden md:block" />
                    </div>

                    {blogs.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {blogs.map((item) => (
                                <Link href={`/blog/${item.slug}`} key={item._id} className="group block">
                                    <div className="relative p-[1px] rounded-2xl bg-gradient-to-br from-white/10 to-white/5 hover:from-malibu/60 hover:to-purple-500/60 transition-all duration-500 h-full">
                                        <article className="relative h-full bg-[#0a0a0c] rounded-[18px] overflow-hidden hover:bg-[#0d0d10] transition-colors duration-500 flex flex-col">
                                            {/* Image Container */}
                                            <div className="relative w-full aspect-[4/3] overflow-hidden">
                                                <img
                                                    src={item.coverImage || '/webImages/blog-placeholder.jpg'}
                                                    alt={item.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                                                
                                                {/* Tags */}
                                                <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                                                    {item.tags && item.tags.slice(0, 2).map((tag, i) => (
                                                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-malibu bg-black/70 backdrop-blur-sm px-2.5 py-1.5 rounded-full border border-malibu/30">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Content */}
                                            <div className="relative z-10 p-6 md:p-8 flex flex-col flex-grow">
                                                {/* Date */}
                                                <span className="text-xs font-mono text-white/40 uppercase tracking-widest mb-4">
                                                    {new Date(item.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </span>

                                                {/* Title */}
                                                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight group-hover:text-malibu transition-colors duration-300 line-clamp-2">
                                                    {item.title}
                                                </h3>

                                                {/* Excerpt */}
                                                <p className="text-white/60 text-base leading-relaxed line-clamp-2 mb-6 flex-grow">
                                                    {item.excerpt}
                                                </p>

                                                {/* Footer */}
                                                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                                                    <span className="text-malibu text-sm font-semibold uppercase tracking-widest">
                                                        Read Article
                                                    </span>
                                                    <svg className="w-5 h-5 text-malibu group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="col-span-full py-20 text-center">
                            <p className="text-white/50 text-xl">No insights published yet.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ── CTA SECTION ─────────────────────────────────── */}
            <section className="w-full py-20 lg:py-24 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-malibu/5 via-transparent to-purple-500/5" />
                
                <div className="max-w-7xl px-6 xl:px-8 mx-auto relative z-10 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                        Have a Project in Mind?
                    </h2>
                    <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto font-light">
                        Let's discuss how we can help bring your ideas to life. Get in touch with our team today.
                    </p>
                    <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-malibu text-black font-bold hover:shadow-[0_0_30px_rgba(130,157,255,0.5)] hover:scale-105 transition-all duration-300">
                        Start Your Project
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                </div>
            </section>
        </main>
    );
}
