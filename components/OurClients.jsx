import { getClients } from '@/app/lib/data';

export default async function OurClients({ clients }) {
    // If clients prop is not provided (undefined), fetch from DB.
    // If provided (even distinct from empty array? No, usually just undefined if missing), use it.
    const displayClients = clients || await getClients();

    return (
        <section className="pb-14 lg:pb-20 xl:pb-32 lg:pt-20">
            <div className="max-w-7xl px-5 xl:px-8 mx-auto flex flex-col items-center gap-y-6 md:gap-y-12">
                <h2 className="0 text-3xl md:text-5xl font-bold text-white text-center tracking-tight">
                    Clients & Partners
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)] animate-pulse"></div>
                <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto text-center font-light leading-relaxed mb-6">
                    Itnnovator works with startups, growing companies, and established teams across multiple industries.
                </p>

                {/* Unified Marquee Slider (Desktop & Mobile) */}
                <div className="w-full overflow-hidden relative mt-8 flex items-center">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

                    <div className="animate-marquee flex items-center gap-12 md:gap-24">
                        {/* First Set */}
                        {displayClients && displayClients.length > 0 ? displayClients.map((client) => (
                            <div key={`set1-${client._id}`} className="flex justify-center items-center shrink-0 w-[120px] md:w-[160px] group">
                                <img
                                    src={client.logo}
                                    className="object-contain w-full h-auto max-h-[2.5rem] md:max-h-[3.5rem] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                    alt={`Client logo: ${client.name}`}
                                />
                            </div>
                        )) : <div className="text-white">No clients found.</div>}
                        
                        {/* Duplicate Set for Seamless Loop */}
                        {displayClients && displayClients.length > 0 && displayClients.map((client) => (
                            <div key={`set2-${client._id}`} className="flex justify-center items-center shrink-0 w-[120px] md:w-[160px] group">
                                <img
                                    src={client.logo}
                                    className="object-contain w-full h-auto max-h-[2.5rem] md:max-h-[3.5rem] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                    alt={`Client logo: ${client.name}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
