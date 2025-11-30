import CTA from "@/components/CTA";
import HomeCases from "@/components/HomeCases";
import OurClients from "@/components/OurClients";
import OurOffer from "@/components/OurOffer";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import TypoAnimation from "@/components/TypoAnimation";

export default function Home() {
  return (
    <>
      {/* Video Banner */}
      <section className="js-animate-fadein js-hero-block flex items-end min-h-[calc(100svh-5rem)] py-[5.125rem] md:min-h-screen md:h-full md:pt-[6.5rem] md:pb-[8.5rem] lg:pb-[8.5rem] 2xl:pb-[14.5rem]">
        <div className="js-hero-block--content relative w-[94%] wider:max-w-[90rem] wider:max-w-[90rem] px-5 xl:px-8 mx-auto">
          {/* Hero headline */}
          <h2
            className="w-full leading-none tracking-tight text-[4.375rem] font-[900] mb-4 -ml-[4px] md:mb-6 md:text-[5rem] lg:[font-size:_clamp(16px,calc(12vw),15.5rem)] lg:-ml-[9px]"
            style={{ mixBlendMode: "difference" }}
          >
            <span className="bg-gradient-to-t from-[#FFE99A] to-[#A1BDE7] bg-clip-text text-transparent mix-blend-difference sm:whitespace-nowrap [&_.typed-cursor]:font-normal [&_.typed-cursor.typed-cursor--blink]:text-[0]">
              Dare to <br className="block sm:hidden" />
              <TypoAnimation />
            </span>
          </h2>

          <p className="w-full max-w-[57.4375rem] text-white m-0 font-200 text-lg/[1.39] md:text-xl lg:text-[1.4375rem]">
            We build websites, apps, and growth systems that turn clicks into customers.
          </p>

          <div className="flex flex-wrap gap-x-10 gap-y-8 pt-[1.625rem] lg:block lg:pt-[2.125rem]">
            <a
              href="/case"
              className="lg:min-w-[10rem] inline-flex items-center font-[400] md:text-[1.375rem] rounded-[1.25rem] md:text-xl text-malibu js-hover-circle-animation hover-child-underline-animation">
              <span className="relative inline-block child after:!bg-malibu">See our work</span>
              <span className="pl-4">
                <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
                  <use href="/webImages/icons.svg#arrow-right"></use>
                </svg>
              </span>
            </a>

            <a
              href="/services"
              className="lg:min-w-[10rem] inline-flex justify-center items-center px-3 mx-0.5 sm:mx-2 font-[400] md:text-[1.375rem] rounded-[1.25rem] sm:px-6 md:px-2 md:text-xl text-white js-hover-circle-animation hover-child-underline-animation">
              <span className="relative inline-block child after:!bg-white">Our services</span>
              <span className="pl-4">
                <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
                  <use href="/webImages/icons.svg#arrow-right"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>

        <div className="js-hero-block--bg absolute inset-0 h-full w-full -z-10">
          <video loop autoPlay muted playsInline className="object-cover object-center w-full h-full">
            <source src="/webImages/pixel-intro-dark.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div
            className="pointer-events-none overlay absolute inset-0"
            style={{ background: 'linear-gradient(to top, black, transparent)' }}
            aria-hidden="true"></div>
        </div>
      </section>

      {/* About  */}
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="w-[94%] wider:max-w-[90rem] px-5 xl:px-8 mx-auto flex flex-wrap gap-10 justify-between">
          <div className="flex flex-col gap-y-6 w-full max-w-[50rem] md:gap-y-11">
            <h1 className="text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Your End-to-End Digital Solutions Partner | Itnnovator
            </h1>

            <div
              className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
              <p>Itnnovator is your dedicated team for <strong>comprehensive digital growth</strong>. We specialize in crafting results-driven online experiences, from <strong>custom web development</strong> and high-converting <strong>e-commerce stores on Shopify & WooCommerce</strong> to strategic <strong>SEO</strong> and <strong>data-driven digital marketing</strong> that generates qualified leads.</p>
              <p>Our full-service approach means we handle your entire digital presence—<strong>strategy, design, development, and growth</strong>—ensuring a seamless, powerful, and scalable solution tailored to your business goals. Partner with us to build, launch, and grow your digital future.</p>
            </div>

            <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
              <a href="/contact" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Start Your Project </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="/webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>

              <a href="/services" target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                <span> Explore Our Services </span>
                <span
                  className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="/webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>

          <ul className="flex flex-col gap-y-10 w-full max-w-[40rem] md:gap-y-11 lg:flex-1">
            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="/webImages/branding-design-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="Itnnovator Branding and UI/UX Design Services - Create a memorable brand" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h2 className="text-xl md:text-2xl font-bold">Brand & Digital Design</h2>
                <p className="md:text-lg">We build memorable brand identities and intuitive UI/UX designs that engage users and drive conversions for your business.</p>
              </div>
            </li>

            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="55" height="55" src="/webImages/webbutveckling-ehandel-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="Itnnovator Web Development & E-commerce - Fast, secure websites and online stores" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h2 className="text-xl md:text-2xl font-bold">Web & E-commerce Development</h2>
                <p className="md:text-lg">Our developers build fast, secure, and scalable websites and e-commerce solutions on WordPress, Shopify, and modern stacks.</p>
              </div>
            </li>

            <li className="flex items-start gap-x-6 md:gap-x-11">
              <img width="56" height="56" src="/webImages/analys-seo-growth-icon.svg"
                className="block w-8 sm:w-[3.5rem]" alt="Itnnovator SEO & Digital Marketing - Grow your traffic and leads" decoding="async" />
              <div className="flex flex-col gap-y-2.5 md:pt-2.5">
                <h2 className="text-xl md:text-2xl font-bold">SEO & Digital Marketing</h2>
                <p className="md:text-lg">We amplify your online visibility with expert SEO strategies and targeted digital marketing campaigns that deliver measurable growth and ROI.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Cases */}
      <HomeCases />

      {/* Our Clients */}
      <OurClients />

      {/* Testimonial */}
      <Testimonial />

      {/* Everything in Web development */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img
                width="900"
                height="530"
                src="/webImages/hemsidor-wordpress-900x530.png"
                className="w-full h-auto rounded-xl"
                alt="Itnnovator WordPress Development - Custom, fast, and scalable websites built by experts."
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                End-to-End Web Development
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white">
                <p>From strategy to launch, we build fast, secure, and scalable custom websites on WordPress, Shopify, and modern frameworks. Unlock your digital potential with Itnnovator as your technical partner.</p>
              </div>

              <a
                href="/web-development"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> See Our Development Process </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="/webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce in WooCommerce */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img
                width="900"
                height="546"
                src="/webImages/e-commerce-woocomerce-900x546.png"
                className="w-full h-auto rounded-xl"
                alt="Itnnovator WooCommerce Development - Scalable online stores with secure payments and seamless WordPress integration."
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Scalable WooCommerce Solutions
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white">
                <p>Launch a powerful online store with WooCommerce. We build scalable e-commerce platforms with seamless WordPress integration, secure payments, and flexible shipping—perfect for growing businesses.</p>
              </div>

              <a
                href="/e-commerce"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Build Your Online Store </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="/webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section >

      {/* Applications in Laravel */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img
                width="900"
                height="553"
                src="/webImages/laravel-applikationer-900x553.png"
                className="w-full h-auto rounded-xl"
                alt="Itnnovator Custom Application Development - Secure, scalable web applications and APIs built by experts."
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Custom Web Applications
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white">
                <p>We build secure, scalable custom applications—from API backends and customer portals to booking systems and internal tools. Our experts deliver clean code, seamless third-party integrations, and robust solutions tailored to your business needs.</p>
              </div>

              <a
                href="/custom-development"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Start Your Project </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="/webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SEO agency */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:pr-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden float-right w-full md:w-max">
              <img
                width="900"
                height="473"
                src="/webImages/wordwide-seo.jpg"
                className="w-full h-auto rounded-xl"
                alt="Itnnovator SEO Services - Technical SEO, content strategy, and growth optimization for higher rankings"
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                SEO & Growth Marketing
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white">
                <p>Drive sustainable growth with our full-funnel SEO strategy. We optimize technical performance, create search-driven content, and build authority to increase your visibility, traffic, and conversions.</p>
              </div>

              <a
                href="/seo-services"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Boost Your Visibility </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="/webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Data-driven web agency */}
      <section className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex md:flex-row justify-end md:flex-row-reverse md:pl-6">
          <div className="md:w-1/2 overflow-x-visible">
            <figure className="js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max">
              <img
                width="900"
                height="473"
                src="/webImages/data-driven-website.jpg"
                className="w-full h-auto rounded-xl"
                alt="Itnnovator Data-Driven Digital Agency - Analytics, conversion optimization, and growth strategies"
              />
            </figure>
          </div>

          <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
              <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                Data-Driven Digital Strategy
              </h2>

              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white">
                <p>We leverage analytics and insights to design and optimize every digital experience. From research and tracking to experiments and reporting—we ensure your website converts better and scales with confidence.</p>
              </div>

              <a
                href="/data-analytics"
                target="_self"
                className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
              >
                <span> Optimize Your Performance </span>
                <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                  <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                    <use href="/webImages/icons.svg#arrow-right"></use>
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offer */}
      <OurOffer />

      {/* CTA */}
      <CTA />

      {/* Our services */}
      <OurServices />

    </>
  );
}