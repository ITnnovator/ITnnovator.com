export default function OurServices({ services = [] }) {
    return (
        <section className="js-animate-fadeinup w-full px-6 mx-auto md:flex-row justify-items-center max-w-7xl xl:px-8 gap-x-8 js-animate-fadein py-14 lg:py-10 xl:py-10">
            <div className="pt-20 pb-4 w-[94%] wider:max-w-[90rem] px-5 xl:px-8 mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">Our Expertise</h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">Comprehensive software development services tailored to your needs.</p>
            </div>

            <div className="flex [@media(min-width:375px)]:flex-row w-full rounded-2xl border border-[#151515] overflow-hidden mt-8 flex-wrap">
                {services.length > 0 ? (
                    services.map((service) => (
                        <a
                            key={service._id}
                            className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white"
                            href={`/services/${service.slug}`}
                        >
                            <div className="flex items-center w-full px-[7%] md:px-[10%]">
                                <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                                    {service.title}
                                </div>
                            </div>
                        </a>
                    ))
                ) : (
                    <div className="text-white p-8">No services found.</div>
                )}
            </div>
        </section>
    );
}
