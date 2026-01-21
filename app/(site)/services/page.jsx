import CTA from "@/components/CTA";
import OurClients from "@/components/OurClients";
import Link from "next/link";

export default function Service() {
  return (
    <>
      {/*  */}
      <section className="w-full relative max-w-7xl mx-auto mb-12 px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="block md:text-lg mb-6">
          <span>
            <span>
              <a href="/"> Home </a>
            </span>
            /
            <span className="breadcrumb_last" aria-current="page">
              <strong> Services</strong>
            </span>
          </span>
        </div>

        {/* Page title */}
        <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
          Digital Services That Drive Growth
        </h1>

        <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12">
          {/* Text column */}
          <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
            <div>
              <div className="heading-color">
                <h2 className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold">
                  Your End-to-End Digital Partner
                </h2>

                <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                  <p>
                    At <strong className="text-white/80">Itnnovator</strong>, we provide comprehensive digital solutions designed to elevate your online presence and drive measurable results. From strategic planning and design to development, e-commerce, SEO, and growth marketing—we connect vision with execution to move the metrics that matter most to your business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
            <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
              <img
                width="750"
                height="810"
                src="/webImages/services-hero-750x810.jpg"
                className="w-full h-full lg:h-auto object-cover"
                alt="Itnnovator Digital Services - Web development, SEO, e-commerce, and growth marketing solutions"
                loading="eager"
                decoding="async"
                sizes="(max-width: 750px) 100vw, 750px"
              />
            </picture>
            <div className="image-shadow-top-hero"></div>
            <div className="image-shadow-bottom-hero"></div>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="w-full py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <ul className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-3">
            {/* Strategy */}
            <li className="mb-6 md:mb-20">
              <img
                width="32"
                height="32"
                src="/webImages/services/analys.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator Strategy – In-depth analysis & planning"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/strategy">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Strategy
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                In-depth analysis and planning that turn business goals into an actionable roadmap. We prioritize high-impact work using market research, analytics, and technical audits.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Market & competitor research
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Analytics & KPI framework
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical & SEO audit
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/strategy" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Strategy</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* Web Development */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/webbutveckling.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator Web Development – Custom website development"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/web-development">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Web Development
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Custom website development built for speed, security, and SEO. We deliver clean architecture, intuitive CMS workflows, and a flawless experience on every device.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Frontend development
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Backend & APIs
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  CMS & headless
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/web-development" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Development</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* Product Design */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/uiuxdesign.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator Product Design – Intuitive UX & UI design"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/product-design">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Product Design
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Intuitive UX and polished UI that turn complex workflows into simple, conversion-focused experiences—validated with research and usability testing.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Wireframing & prototyping
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Design systems
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Usability testing
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/product-design" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Discover Product Design</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* Brand Systems */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/branding.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator Brand Systems – Scalable logos & visual identity"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/brand-systems">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Brand Systems
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Scalable logo systems, color, type, and guidelines that keep your brand consistent across web, mobile, and print—built digital-first.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Brand strategy
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Visual identity system
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Brand guidelines
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/brand-systems" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>View Brand Systems</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* E-commerce */}
            <li className="mb-6 md:mb-20">
              <img
                width="34"
                height="34"
                src="/webImages/services/ecommerce.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator E-commerce – Online store development"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/ecommerce">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  E-commerce
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Online store development that’s fast, secure, and conversion-focused. We streamline product discovery, checkout, and integrations to grow revenue.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  WooCommerce / Shopify
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Custom commerce platforms
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Conversion optimization
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/ecommerce" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>View E-commerce</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* SEO */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="35"
                src="/webImages/services/seo.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator SEO – Search engine optimization"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/seo">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  SEO
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Search engine optimization that improves crawl health, targets intent-led keywords, and builds authority for sustainable organic growth.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical SEO audit
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Keyword strategy
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  On-page & off-page SEO
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/seo" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Learn About SEO</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* Content */}
            <li className="mb-6 md:mb-20">
              <img
                width="32"
                height="32"
                src="/webImages/services/content.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator Content – Strategic storytelling & copywriting"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/content">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Content
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Strategic storytelling and SEO copywriting that build authority and convert—delivered with a consistent voice across web, email, and ads.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Content planning
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  SEO content creation
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Multi-channel content
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/content" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Content</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* Growth */}
            <li className="mb-6 md:mb-20">
              <img
                width="35"
                height="36"
                src="/webImages/services/growth-1.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator Growth – Data-driven marketing & leads"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/growth">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Growth
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Data-driven marketing that scales traffic, leads, and revenue. We combine PPC, paid social, and CRO with clear attribution and reporting.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w/full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  PPC & paid social
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  CRO & experiments
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Attribution & dashboards
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/growth" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Explore Growth</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>

            {/* Management */}
            <li className="mb-6 md:mb-20">
              <img
                width="32"
                height="32"
                src="/webImages/services/forvaltning.svg"
                className="w-6 sm:w-[2.25rem] mb-6"
                alt="Itnnovator Management – Ongoing support & management"
                loading="lazy"
                decoding="async"
              />
              <a className="js-hover-circle-animation" target="_self" href="/services/management">
                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                  Management
                </h3>
              </a>

              <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
                Ongoing support and management that keep your site fast, secure, and reliable. We handle updates, uptime, backups, and incident response.
              </div>

              <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Technical maintenance
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Security & backups
                </li>
                <li className="flex font-bold mb-3 text-base md:text-lg">
                  <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" aria-hidden="true">
                    <use href="/webImages/icons.svg#ticker"></use>
                  </svg>
                  Priority support
                </li>
              </ul>

              <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                <a href="/services/management" target="_self" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                  <span>Learn About Management</span>
                  <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                    <svg className="inline-block" width="22" height="15" aria-hidden="true">
                      <use href="/webImages/icons.svg#arrow-right"></use>
                    </svg>
                  </span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>


      {/*  */}
      <section aria-label="Itnnovator Team Portrait">
        <div className="relative mx-6 lg:mx-0">
          <div className="relative flex items-center lg:max-w-[79.75rem] mx-auto rounded-[1.25rem] overflow-hidden">
            <img
              src="/webImages/pixelhenrik.jpg"
              width={2000}
              height={1137}
              alt="Itnnovator Digital Solutions Team - Experts in web development, SEO, and digital growth strategies"
              className="w-full h-full object-cover aspect-[2000/1137]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(max-width: 1024px) 100vw, 79.75rem"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
          </div>
        </div>
      </section>

      {/*  */}
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto max-w-[780px] prose-editor">
            <h2 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Beyond Guesswork: Data-Driven Results
            </h2>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] prose-blockquote:text-white">
              <p>
                Exceptional digital presence requires more than just aesthetics. At <strong>Itnnovator</strong> we combine data-driven insights with expert <a href="/seo">SEO</a>, strategic UX/UI design, and robust <a href="/development">web development</a> to create experiences that deliver speed, conversions, and scalable growth.
              </p>
              <p>
                Partnering with Itnnovator means gaining a collaborative team, not just a service provider. We work alongside you to develop strategic roadmaps, implement continuous testing, and ensure every decision is grounded in measurable data to transform visitors into loyal customers.
              </p>
              <p>
                Move beyond assumptions and achieve tangible results. Let's elevate your brand visibility and dominate search rankings.
                <br />
                <a href="/contact">Start your project →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <OurClients />

      {/* CTA */}
      <CTA />
    </>
  );
}
