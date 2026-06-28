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

                {/* Desktop Grid (Hidden on Mobile) */}
                <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-12 md:gap-y-16 mt-4">
                    {displayClients && displayClients.length > 0 ? (
                        displayClients.map((client) => (
                            <div key={client._id} className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%] group">
                                <img
                                    src={client.logo}
                                    className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[7rem] md:max-h-[3rem] xl:max-w-[7.5rem] opacity-60 group-hover:opacity-100 transform group-hover:scale-110 transition-all duration-300 ease-out"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                    alt={`Client logo: ${client.name}`}
                                />
                            </div>
                        ))
                    ) : (
                        <div className="text-white">No clients found.</div>
                    )}
                </div>

                {/* Mobile Marquee (Hidden on Desktop) */}
                <div className="md:hidden w-full overflow-hidden relative">
                    <div className="animate-marquee flex items-center gap-10">
                        {/* First Set */}
                        {displayClients && displayClients.length > 0 && displayClients.map((client) => (
                            <div key={`mobile-${client._id}`} className="flex justify-center items-center shrink-0 w-[8rem]">
                                <img
                                    src={client.logo}
                                    className="object-contain w-full h-auto max-h-[3rem]"
                                    style={{ filter: 'brightness(0) invert(1)' }}
                                    alt={`Client logo: ${client.name}`}
                                />
                            </div>
                        ))}
                        {/* Duplicate Set for Seamless Loop */}
                        {displayClients && displayClients.length > 0 && displayClients.map((client) => (
                            <div key={`mobile-duplicate-${client._id}`} className="flex justify-center items-center shrink-0 w-[8rem]">
                                <img
                                    src={client.logo}
                                    className="object-contain w-full h-auto max-h-[3rem]"
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
