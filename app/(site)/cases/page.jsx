import CaseSection from "@/components/CaseSection";
import CTA from "@/components/CTA";
import OurServices from "@/components/OurServices";
import Link from "next/link";

export default function cases() {
  return (
    <>
      {/* Hero Section */}
      <section className="pb-14 lg:pb-20 xl:pb-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="max-w-[780px] prose-editor">
            <h1 className="mb-5 lg:mb-10 text-4xl md:text-8xl leading-[1.1] font-bold text-white">
              Case Selection
            </h1>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] prose-blockquote:text-white">
              <p>
                We are constantly adding new projects and case studies to our portfolio.
                <a href="/contact">Contact us</a> if you’d like to explore more of our work or request a custom showcase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Section */}
      <CaseSection />

      {/* Contact Section */}
      <section className="pb-14 lg:pb-20 xl:pb-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto text-center max-w-[780px] prose-editor">
            <h3 className="mb-5 lg:mb-10 text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
              More cases coming
            </h3>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] mx-auto prose-blockquote:text-white">
              <p>
                We are constantly updating our portfolio.
                <a href="/contact"> Contact us</a> if you would like to see more cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Blog Section */}
      <section className="js-animate-fadeinup max-w-7xl mx-auto lg:rounded-[1.25rem] px-6 xl:px-8 pb-12 md:pb-16 py-14 lg:py-20 xl:py-32 hidden">
        <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
          Senaste från vår blogg
        </h2>
        <div className="sm:flex sm:flex-wrap sm:-mx-3 md:-mx-4 lg:-mx-5 xl:-mx-[1.375rem]">
          <div className="sm:w-1/2 lg:w-1/3 sm:px-3 md:px-4 lg:px-5 xl:px-[1.375rem] mb-10">
            <div className="sm:max-w-[23.5rem">
              <a href="#">
                <img
                  width="374"
                  height="304"
                  src="/webImages/cases/pigment-insights-juni-juli-2025-hero-banner-v1-374x304.webp"
                  className="rounded-[1.25rem] w-full hover:opacity-60 transition-opacity duration-300 ease-linear wp-post-image"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="pl-5 pt-5">
                <ul
                  className="flex flex-wrap font-bold text-[0.8rem] mb-2"
                  style={{ color: "#ffeed4" }}
                >
                  <li className="mr-3 uppercase">
                    <a
                      className="hover:underline"
                      href="#"
                    >
                      Insights
                    </a>
                  </li>
                </ul>
                <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
                  <a href="#">
                    Pigment Insights &#8211; Juli/Augusti 2025
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/3 sm:px-3 md:px-4 lg:px-5 xl:px-[1.375rem] mb-10">
            <div className="sm:max-w-[23.5rem">
              <a href="#">
                <img
                  width="374"
                  height="304"
                  src="/webImages/cases/figma-payload-gar-samman-374x304.webp"
                  className="rounded-[1.25rem] w-full hover:opacity-60 transition-opacity duration-300 ease-linear wp-post-image"
                  alt="Figma och Payload går samman"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="pl-5 pt-5">
                <ul
                  className="flex flex-wrap font-bold text-[0.8rem] mb-2"
                  style={{ color: "#ffeed4" }}
                >
                  <li className="mr-3 uppercase">
                    <a
                      className="hover:underline"
                      href="#"
                    >
                      Teknik
                    </a>
                  </li>
                </ul>
                <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
                  <a href="#">
                    Payload blir en del av Figma
                  </a>
                </h4>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/3 sm:px-3 md:px-4 lg:px-5 xl:px-[1.375rem] mb-10">
            <div className="sm:max-w-[23.5rem">
              <a href="#">
                <img
                  width="374"
                  height="304"
                  src="/webImages/cases/payload-cms-headless-374x304.webp"
                  className="rounded-[1.25rem] w-full hover:opacity-60 transition-opacity duration-300 ease-linear wp-post-image"
                  alt="Payload Headless CMS"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="pl-5 pt-5">
                <ul
                  className="flex flex-wrap font-bold text-[0.8rem] mb-2"
                  style={{ color: "#ffeed4" }}
                >
                  <li className="mr-3 uppercase">
                    <a
                      className="hover:underline"
                      href="#"
                    >
                      Teknik
                    </a>
                  </li>
                </ul>
                <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-bold text-white">
                  <a href="#">
                    Hittat: Ett rikitgt bra Headless CMS
                  </a>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="#"
            target="_self"
            className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
          >
            <span> See all Cases </span>
            <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
              <svg
                className="inline-block"
                preserveAspectRatio="none"
                width="22"
                height="15"
                aria-hidden="true"
              >
                <use href="/webImages/icons.svg#arrow-right"></use>
              </svg>
            </span>
          </a>
        </div>
      </section>

      {/* Our services */}
      <OurServices />
    </>
  );
}
