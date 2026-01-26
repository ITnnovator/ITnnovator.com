import { getClients } from '@/app/lib/data';

export default async function OurClients({ clients }) {
    // If clients prop is not provided (undefined), fetch from DB.
    // If provided (even distinct from empty array? No, usually just undefined if missing), use it.
    const displayClients = clients || await getClients();

    return (
        <section className="pb-14 lg:pb-20 xl:pb-32 lg:pt-20">
            <div className="max-w-7xl px-5 xl:px-8 mx-auto flex text-center flex-col gap-y-10 md:gap-y-20">
                <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white text-center">
                    Clients & Partners
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto text-center -mt-6">
                    Itnnovator works with startups, growing companies, and established teams across multiple industries.
                </p>

                {/* Desktop Grid (Hidden on Mobile) */}
                <div className="hidden md:flex md:flex-wrap md:justify-center md:items-center md:gap-x-10 md:gap-y-20">
                    {displayClients && displayClients.length > 0 ? (
                        displayClients.map((client) => (
                            <div key={client._id} className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
                                <img
                                    src={client.logo}
                                    className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
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
