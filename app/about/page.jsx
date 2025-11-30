import CTA from "@/components/CTA";
import OurClients from "@/components/OurClients";
import Link from "next/link";

export default function About() {
  return (
    <>
      <section className="w-full relative max-w-7xl mx-auto mb-12 px-6 lg:px-8">
        <div className="block md:text-lg mb-6">
          <span>
            <span>
              <a href="/"> Home </a>
            </span>
            /
            <span className="breadcrumb_last" aria-current="page">
              <strong>About Itnnovator</strong>
            </span>
          </span>
        </div>

        <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
          About Itnnovator
        </h1>

        <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12">
          {/* Text column */}
          <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
            <div>
              <div>
                <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                  <p>
                    Itnnovator isn’t just a vendor—we’re a partner invested in
                    your success. We build long-term relationships, ship with
                    care and speed, and stay accountable to measurable outcomes.
                    Our success is defined by yours.
                  </p>
                </div>

                <ul className="relative mt-6 lg:mt-8">
                  <li className="flex mb-3 text-base font-bold md:text-lg">
                    <svg
                      className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                      preserveAspectRatio="none"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      aria-hidden="true"
                    >
                      <use href="/webImages/icons.svg#ticker"></use>
                    </svg>
                    Branding &amp; Design
                  </li>
                  <li className="flex mb-3 text-base font-bold md:text-lg">
                    <svg
                      className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                      preserveAspectRatio="none"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      aria-hidden="true"
                    >
                      <use href="/webImages/icons.svg#ticker"></use>
                    </svg>
                    Content
                  </li>
                  <li className="flex mb-3 text-base font-bold md:text-lg">
                    <svg
                      className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                      preserveAspectRatio="none"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      aria-hidden="true"
                    >
                      <use href="/webImages/icons.svg#ticker"></use>
                    </svg>
                    Full-stack Development
                  </li>
                  <li className="flex mb-3 text-base font-bold md:text-lg">
                    <svg
                      className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                      preserveAspectRatio="none"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      aria-hidden="true"
                    >
                      <use href="/webImages/icons.svg#ticker"></use>
                    </svg>
                    E-commerce
                  </li>
                  <li className="flex mb-3 text-base font-bold md:text-lg">
                    <svg
                      className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                      preserveAspectRatio="none"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      aria-hidden="true"
                    >
                      <use href="/webImages/icons.svg#ticker"></use>
                    </svg>
                    Search Engine Optimization
                  </li>
                  <li className="flex mb-3 text-base font-bold md:text-lg">
                    <svg
                      className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                      preserveAspectRatio="none"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      aria-hidden="true"
                    >
                      <use href="/webImages/icons.svg#ticker"></use>
                    </svg>
                    Growth
                  </li>
                  <li className="flex mb-3 text-base font-bold md:text-lg">
                    <svg
                      className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                      preserveAspectRatio="none"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      aria-hidden="true"
                    >
                      <use href="/webImages/icons.svg#ticker"></use>
                    </svg>
                    Care &amp; Support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image column */}
          <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
            <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
              <img
                width="750"
                height="810"
                src="/webImages/3D_ITN.png"
                alt="Itnnovator — founder"
                className="w-full h-full lg:h-auto object-cover"
                loading="eager"
                decoding="async"
              />
            </picture>
            {/* <div className="image-shadow-top-hero"></div>
            <div className="image-shadow-bottom-hero"></div> */}
          </div>
        </div>
      </section>

      {/* Points */}
      <section className="py-14 lg:py-20 xl:py-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto max-w-[900px] prose-editor">
            <h2 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
              Experience &amp; expertise
            </h2>

            <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em]  prose-blockquote:text-white">
              <h5>
                With years across marketing, product design, and engineering, we
                turn ideas into reliable digital products. Our team stays on top
                of the latest tech and best practices—so you don’t have to.
              </h5>

              <h4>A full-service offering</h4>
              <p>
                From strategy to launch, Itnnovator covers the entire digital
                stack. Need a new website, an online store, brand assets, or
                performance marketing? We plan, design, build, and optimize—end
                to end.
              </p>

              <h4>We care</h4>
              <p>
                You’re not just a client—you’re a partner. We listen first, map
                goals to measurable outcomes, and tailor each engagement to your
                team, timelines, and budget.
              </p>

              <h4>Together, we ship great work</h4>
              <p>
                Collaboration is our superpower. Your vision plus our craft
                creates products that look sharp, load fast, and convert. Let’s
                start something that moves the needle.
              </p>

              <p>
                Ready to talk? <a href="/contact">Contact us</a> and let’s
                bring your next idea to life.
              </p>

              <p>
                <em>
                  <strong>Best regards,</strong>
                </em>
                <br />
                The Itnnovator Team&nbsp;
                <a href="/">digital agency</a>
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
