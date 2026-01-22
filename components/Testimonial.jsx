export default function Testimonial({ testimonials = [] }) {
    return (
        <section className="js-animate-fadeinup max-w-[66rem] xl:max-w-[83rem] mx-auto px-6 xl:px-8 review-bg-gradient rounded-[20px]">
            <div className="relative py-28">
                <button
                    className="js-flikity-prev-button text-royal-blue disabled:opacity-50 absolute right-14 z-10 bottom-24 md:bottom-[10rem]"
                    aria-label="Previous testimonial"
                >
                    <svg
                        className="rotate-180 inline-block w-10 h-auto md:w-full"
                        preserveAspectRatio="none"
                        width="37"
                        height="20"
                        viewBox="0 0 67 37"
                        aria-hidden="true"
                    >
                        <use href="/webImages/icons.svg#arrow-right-big"></use>
                    </svg>
                </button>

                <h4 className="text-center mb-[2em]">
                    Client Success Stories: Why Businesses Choose Itnnovator
                </h4>

                <div className="js-review-carousel review-carousel pb-20 md:pb-10">
                    {testimonials.length > 0 ? (
                        testimonials.map((testimonial) => (
                            <div key={testimonial._id} className="w-full">
                                <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                                    <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                        {testimonial.title || (testimonial.quote ? (testimonial.quote.length > 50 ? testimonial.quote.substring(0, 50) + "..." : testimonial.quote) : "Great Service")}
                                    </h3>
                                    <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                        <div className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11" dangerouslySetInnerHTML={{ __html: testimonial.quote }}></div>
                                        <div className="flex">
                                            <div className="flex-1 md:pr-16 lg:pr-0">
                                                <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <span key={i} className="pr-0.5">
                                                            <svg
                                                                preserveAspectRatio="none"
                                                                width="25"
                                                                height="25"
                                                                viewBox="0 0 25 25"
                                                                aria-hidden="true"
                                                                className={i < (testimonial.rating || 5) ? "" : "opacity-30"}
                                                            >
                                                                <use href="/webImages/icons.svg#star"></use>
                                                            </svg>
                                                        </span>
                                                    ))}
                                                </div>
                                                <span className="block font-bold text-xl lg:text-2xl">
                                                    {testimonial.name}
                                                </span>
                                                <span className="block text-lg lg:text-xl">
                                                    {testimonial.role}{testimonial.company ? `, ${testimonial.company}` : ''}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                         <div className="w-full text-center py-20">No testimonials yet.</div>
                    )}                    {/* /slides */}
                </div>

                <button
                    className="js-flikity-next-button text-royal-blue disabled:opacity-50 absolute right-0 bottom-24 md:bottom-[10rem] z-10"
                    aria-label="Next testimonial"
                >
                    <svg
                        className="inline-block w-10 h-auto md:w-full"
                        preserveAspectRatio="none"
                        width="37"
                        height="20"
                        viewBox="0 0 67 37"
                        aria-hidden="true"
                    >
                        <use href="/webImages/icons.svg#arrow-right-big"></use>
                    </svg>
                </button>
            </div>
        </section>
    );
}
