export default function Testimonial({ testimonials = [] }) {
    return (
        <section className="js-animate-fadeinup max-w-[66rem] xl:max-w-[83rem] mx-auto px-6 xl:px-8 review-bg-gradient rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden group">
            {/* Subtle glow behind the testimonials */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-900/20 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="relative py-28 z-10">
                <button
                    className="js-flikity-prev-button text-white/50 hover:text-white disabled:opacity-30 absolute right-14 z-10 bottom-24 md:bottom-[10rem] transition-colors duration-300 transform hover:scale-110"
                    aria-label="Previous testimonial"
                >
                    <svg
                        className="inline-block w-10 h-auto md:w-full drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
                        preserveAspectRatio="none"
                        width="37"
                        height="20"
                        viewBox="0 0 67 37"
                        aria-hidden="true"
                        style={{ transform: 'rotate(180deg)' }}
                    >
                        <use href="/webImages/icons.svg#arrow-right-big"></use>
                    </svg>
                </button>

                <div className="js-review-carousel review-carousel pb-20 md:pb-10">
                    {testimonials.length > 0 ? (
                        testimonials.map((testimonial) => (
                            <div key={testimonial._id} className="w-full">
                                <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                                    <h3 className="mb-6 md:mb-8 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-white tracking-tight pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-serif before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:text-white/10 before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                        {testimonial.title || (testimonial.quote ? (testimonial.quote.length > 50 ? testimonial.quote.substring(0, 50) + "..." : testimonial.quote) : "Great Service")}
                                    </h3>
                                    <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                        <div className="text-lg md:text-2xl leading-[1.6] mb-10 md:mb-14 font-light text-gray-300 italic" dangerouslySetInnerHTML={{ __html: testimonial.quote }}></div>
                                        <div className="flex">
                                            <div className="flex-1 md:pr-16 lg:pr-0">
                                                <div className="flex lg:pt-2 mb-4 lg:mb-5 text-[#FFE99A]">
                                                    {Array.from({ length: 5 }).map((_, i) => (
                                                        <span key={i} className="pr-1">
                                                            <svg
                                                                preserveAspectRatio="none"
                                                                width="22"
                                                                height="22"
                                                                viewBox="0 0 25 25"
                                                                aria-hidden="true"
                                                                className={i < (testimonial.rating || 5) ? "drop-shadow-[0_0_8px_rgba(255,233,154,0.5)]" : "opacity-20"}
                                                            >
                                                                <use href="/webImages/icons.svg#star"></use>
                                                            </svg>
                                                        </span>
                                                    ))}
                                                </div>
                                                <span className="block font-semibold text-xl lg:text-2xl text-white tracking-wide">
                                                    {testimonial.name}
                                                </span>
                                                <span className="block text-lg lg:text-xl text-gray-400 font-light mt-1">
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
                    className="js-flikity-next-button text-white/50 hover:text-white disabled:opacity-30 absolute right-0 bottom-24 md:bottom-[10rem] z-10 transition-colors duration-300 transform hover:scale-110"
                    aria-label="Next testimonial"
                >
                    <svg
                        className="inline-block w-10 h-auto md:w-full drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]"
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
