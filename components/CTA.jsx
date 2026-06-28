import Link from "next/link";

export default function CTA() {
    return (
        <section className="js-animate-fadeinup mx-auto px-6 xl:px-8 max-w-4xl text-center py-14 lg:py-10 xl:py-10">
            <div className="w-[12rem] md:w-[15rem] lg:w-[18rem] mx-auto mb-10 ">
                <img
                    width="296"
                    height="296"
                    src="/webImages/3D_ITN.png"
                    className="w-full h-auto rounded-full"
                    alt="Itnnovator — founder portrait"
                    decoding="async"
                    sizes="(max-width: 296px) 100vw, 296px"
                />
            </div>

            <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Ready to Build Something That Works?
            </h2>

            <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                <p>
                    Talk to Itnnovator about your project and get a clear, practical plan forward.
                </p>
                <p className="mt-8 flex justify-center">
                    <a href="/contact" className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white transition-all duration-300 bg-white/5 border border-white/20 rounded-full hover:bg-malibu hover:border-malibu hover:text-black hover:shadow-[0_0_30px_rgba(130,157,255,0.6)] hover:scale-105">
                        <span className="relative z-10 flex items-center">
                            <span>Contact Itnnovator</span>
                            <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </a>
                </p>
            </div>
        </section>
    );
}
