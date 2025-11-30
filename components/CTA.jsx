import Link from "next/link";

export default function CTA() {
    return (
        <section className="js-animate-fadeinup mx-auto px-6 xl:px-8 max-w-4xl text-center py-14 lg:py-20 xl:py-32">
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
                Looking for a digital partner?
            </h2>

            <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                <p>
                    <a href="#" target="_blank" rel="noopener">
                        Book a discovery call with us
                    </a>
                    <br />
                    Prefer a direct line? <a href="tel:+923313775851">+92 331 3775851</a> · or
                    email <a href="mailto:info@itnnovator.com">info@itnnovator.com</a>
                </p>
            </div>
        </section>
    );
}
