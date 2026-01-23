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
        <>
            <main className="grow">
                <div className="max-w-7xl mx-auto px-6 xl:px-8">
                    <div className="block md:text-lg mb-6">
                        <span>
                            <span>
                                <Link href="/"> Home </Link>
                            </span>
                            /
                            <span className="breadcrumb_last" aria-current="page">
                                <strong> Insights</strong>
                            </span>
                        </span>
                    </div>
                    <div className="max-w-[780px] prose-editor pt-10">
                        <h1 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                            Insights & Articles
                        </h1>

                        <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 mb-12 lg:mb-16">
                            <p>
                                Explore our latest thoughts on technology, design, and digital innovation.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="max-w-[94rem] mx-auto px-6 xl:px-8 pb-12 md:pb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.length > 0 ? (
                            blogs.map((item) => (
                                <Link href={`/blog/${item.slug}`} key={item._id} className="group block mb-12 sm:mb-16 md:mb-20 lg:mb-40">
                                    <div className="js-decoration-holder decoration-holder relative z-[1]">
                                        <div className="border border-[#303030] rounded-[1.25rem] overflow-hidden text-center transition-transform duration-500 group-hover:-translate-y-2">
                                            <div className="relative z-[1]">
                                                <img
                                                    src={item.coverImage || '/webImages/blog-placeholder.jpg'}
                                                    alt={item.title}
                                                    className="w-full h-auto aspect-[4/3] object-cover"
                                                />
                                                <span className="absolute w-full bottom-0 h-[100px] left-0 bg-gradient-to-t from-black via-black/80 to-transparent"></span>
                                            </div>
                                            <div className="relative z-10 pb-6 md:pb-7 lg:pb-8 xl:pb-10 px-4 -mt-[80px] flex flex-col items-center">
                                                <div className="flex gap-2 flex-wrap justify-center mb-3">
                                                    {item.tags && item.tags.slice(0, 2).map((tag, i) => (
                                                        <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-malibu bg-black/50 backdrop-blur-sm px-2 py-1 rounded border border-white/5">{tag}</span>
                                                    ))}
                                                </div>
                                                <h2 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight group-hover:text-malibu transition-colors line-clamp-2">{item.title}</h2>
                                                <p className="text-gray-300 text-sm md:text-base line-clamp-2 mb-4 max-w-xs mx-auto">{item.excerpt}</p>

                                                <span className="text-xs font-bold text-white/60 uppercase tracking-widest border-t border-white/5 pt-3 mt-auto w-full max-w-[200px]">
                                                    {new Date(item.createdAt).toLocaleDateString()}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-white/50 text-xl">No insights published yet.</p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </>
    );
}
