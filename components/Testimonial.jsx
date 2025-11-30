export default function Testimonial() {
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
                    {/* 1 - E-commerce & UX */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Transformed Our Online Store
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Itnnovator rebuilt our Shopify store from the ground up. The
                                    new
                                    <strong>UX/UI design skyrocketed our conversion rates</strong>
                                    , and their development team ensured everything was fast and
                                    secure. Their ongoing support is exceptional—they're not just
                                    vendors; they're true partners in our growth.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">
                                            Hanna Wikström
                                        </span>
                                        <span className="block text-lg lg:text-xl">
                                            E-commerce Director, HealthBrand
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 2 - Non-Profit & Integration */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Seamless CRM & Donation Integration
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    As a non-profit, we needed a website that integrated complex
                                    donation gateways and our CRM seamlessly.
                                    <strong>
                                        Itnnovator delivered a cost-effective, powerful solution
                                    </strong>
                                    on WordPress that our team can easily manage. They are
                                    friendly, incredibly responsive, and truly understand how to
                                    drive value.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">
                                            Lovisa Sandberg
                                        </span>
                                        <span className="block text-lg lg:text-xl">
                                            Operations Manager, GreenFuture Foundation
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 3 - Web Dev & Communication */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Clear Communication & Stellar Results
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Itnnovator took the time to understand our vision and
                                    translated it into a robust, easy-to-manage website. Their
                                    <strong>
                                        clear communication throughout the web development process
                                    </strong>
                                    was refreshing. We couldn't be happier with the final product
                                    and look forward to a long-term partnership.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">
                                            Jonas Andersson
                                        </span>
                                        <span className="block text-lg lg:text-xl">
                                            CEO, Creative Productions Ltd.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4 - Reliability */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Pragmatic, Reliable & Results-Driven
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Itnnovator consistently delivers what they promise, on time
                                    and on budget. They have a keen interest in improving our
                                    business and provide
                                    <strong>pragmatic, reliable digital solutions</strong> that
                                    just work. They are our first call for any web development or
                                    digital marketing need.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">
                                            Henrik Balkander
                                        </span>
                                        <span className="block text-lg lg:text-xl">
                                            Race Director, Nordic Marathon
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 5 - SaaS & Business Impact */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                They Understand Customer Value
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Itnnovator built our entire SaaS platform and back-office
                                    systems. What sets them apart is their focus on
                                    <strong>business impact and customer value</strong>. They are
                                    flexible, attentive, and take the time to understand our
                                    operations deeply. A fantastic digital partner.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">
                                            Torbjörn Edin
                                        </span>
                                        <span className="block text-lg lg:text-xl">
                                            Co-Founder, FreshBox Kit
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 6 - Long-term Partner */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Our Go-To Digital Partner
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Itnnovator has now built four websites for my various
                                    companies. They
                                    <strong>consistently exceed expectations</strong>, are
                                    incredibly flexible, have a deep understanding of the customer
                                    journey, and always meet deadlines. They are the only digital
                                    agency I recommend.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">
                                            Peter Holm
                                        </span>
                                        <span className="block text-lg lg:text-xl">
                                            Serial Entrepreneur & Investor
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 7 - SEO & Strategy */}
                    <div className="w-full">
                        <div className="max-w-[65rem] md:pr-12 xl:pr-0">
                            <h3 className="mb-5 md:mb-7 lg:mb-8 text-3xl md:text-[2.62rem] lg:text-[3.25rem] xl:text-[4.125rem] leading-[1.2] md:leading-[1.16] font-bold text-royal-blue pl-[3.3rem] md:pl-[4.7rem] lg:pl-[10.7rem] xl:pl-[18.7rem] relative before:absolute before:content-['_“'] before:font-bold before:text-[7rem] before:md:text-[9rem] before:lg:text-[12rem] before:xl:text-[15rem] before:leading-none before:xl:left-44 before:lg:left-16 before:left-0 before:-top-3 before:md:-top-[1rem] before:lg:-top-[1.5rem] before:xl:-top-[1.7rem]">
                                Masterful SEO & Strategic Vision
                            </h3>
                            <div className="pl-14 md:pl-[5rem] lg:pl-[11rem] xl:pl-[19rem]">
                                <p className="text-base md:text-xl leading-[1.39] mb-8 md:mb-11">
                                    Itnnovator's expertise in
                                    <strong>SEO and information architecture</strong> is
                                    outstanding. They built a website that is not only visually
                                    stunning but also perfectly structured for both users and
                                    search engines. Their strategic approach from the very
                                    beginning ensured our online success.
                                </p>
                                <div className="flex">
                                    <div className="flex-1 md:pr-16 lg:pr-0">
                                        <div className="flex lg:pt-2 mb-3 lg:mb-4 text-[#FFE99A]">
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                            <span className="pr-0.5">
                                                <svg
                                                    preserveAspectRatio="none"
                                                    width="25"
                                                    height="25"
                                                    viewBox="0 0 25 25"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#star"></use>
                                                </svg>
                                            </span>
                                        </div>
                                        <span className="block font-bold text-xl lg:text-2xl">
                                            Daniel Remming
                                        </span>
                                        <span className="block text-lg lg:text-xl">
                                            Marketing Director, StayWell Hotels
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* /slides */}
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
