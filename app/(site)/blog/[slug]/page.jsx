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
        <>
            <main className="grow">
                <article className="w-full bg-black">
                    {/* Banner / Hero - Matching Case Detail Style */}
                    <section className="w-full pt-[8.3rem] px-6 lg:px-8 xl:px-12 bg-black">
                        <div className="max-w-[120rem] mx-auto">
                            <div className="relative w-full rounded-xl mx-auto overflow-hidden aspect-[21/9] lg:aspect-[21/7] max-h-[600px] group">
                                <div className="absolute top-0 left-0 w-full h-full bg-black/20 z-10 transition-opacity duration-500 group-hover:bg-black/10"></div>

                                {/* Breadcrumbs Overlay */}
                                <div className="block md:text-lg text-white absolute left-4 top-4 z-20 md:top-8 md:left-10 drop-shadow-md">
                                    <span>
                                        <Link href="/"> Home </Link> / <Link href="/blog"> Insights</Link> /
                                        <span className="breadcrumb_last opacity-70 ml-1" aria-current="page">
                                            <strong>{new Date(blog.createdAt).toLocaleDateString()}</strong>
                                        </span>
                                    </span>
                                </div>

                                <img
                                    src={blog.coverImage || '/webImages/blog-placeholder.jpg'}
                                    className="absolute min-w-full min-h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                    alt={blog.title}
                                    priority="true"
                                />

                                {/* Title Block Overlay */}
                                <div className="absolute z-20 bottom-4 left-4 right-4 md:bottom-10 md:left-10 md:right-auto md:max-w-4xl">
                                    <div className="bg-black/90 backdrop-blur-md text-white p-6 md:p-8 rounded-2xl border border-white/5 shadow-2xl">
                                        <div className="flex gap-2 mb-4">
                                            {blog.tags && blog.tags.map((tag, i) => (
                                                <span key={i} className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-malibu border border-malibu/30 px-2 py-1 rounded-md">{tag}</span>
                                            ))}
                                        </div>
                                        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">{blog.title}</h1>
                                        <div className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                                            <div className="w-6 h-6 rounded-full bg-malibu flex items-center justify-center text-black font-bold text-xs">{blog.author.charAt(0)}</div>
                                            <span>By {blog.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Content Section */}
                    <div className="max-w-7xl mx-auto py-14 lg:py-20 xl:py-28 px-6 lg:px-8">
                        <div
                            className="prose prose-invert prose-lg md:prose-2xl max-w-none 
                                       prose-p:text-gray-300 prose-p:font-light prose-p:leading-relaxed 
                                       prose-headings:text-white prose-headings:font-bold prose-headings:text-4xl md:prose-headings:text-6xl 
                                       prose-a:text-malibu prose-a:no-underline hover:prose-a:underline 
                                       prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-10"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        />

                        <div className="mt-20 pt-10 border-t border-white/5 flex justify-between items-center">
                            <Link href="/blog" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors group">
                                <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> Back to Insights
                            </Link>
                        </div>
                    </div>

                </article>
            </main>
        </>
    );
}
