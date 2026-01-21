export default function OurClients({ clients = [] }) {
    return (
        <section className="pb-14 lg:pb-20 xl:pb-32 lg:pt-20">
            <div className="max-w-7xl px-5 xl:px-8 mx-auto flex text-center flex-col gap-y-10 md:gap-y-20">
                <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white text-center">
                    Built on Client Trust
                </h2>

                <div className="js-logo-ticker flex items-center gap-x-10 md:gap-y-20 opacity-0 md:gap-x-0 md:flex-wrap md:justify-center md:opacity-100">
                    {clients.length > 0 ? (
                        clients.map((client) => (
                             <div key={client._id} className="js-logo-item flex justify-center items-center shrink-0 md:basis-auto md:shrink md:w-[20%] xl:w-[16.66%]">
                                <img
                                    src={client.logo}
                                    className="object-contain max-w-[5rem] max-h-[2.5rem] md:max-w-[6rem] md:max-h-[2.925rem] xl:max-w-[6.5rem]"
                                    alt={`Client logo: ${client.name}`}
                                />
                            </div>
                        ))
                    ) : (
                         <div className="text-white">No clients found.</div>
                    )}
                </div>
            </div>
        </section>
    );
}
