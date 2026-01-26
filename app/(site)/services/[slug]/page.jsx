import Link from "next/link";
import CTA from "@/components/CTA";
import dbConnect from "@/lib/db";
import Service from "@/models/Service";
import ProcessSection from "@/components/services/ProcessSection";

export default async function ServiceDetail({ params }) {
  const awaitedParams = await params;
  await dbConnect();
  const serviceDoc = await Service.findOne({ slug: awaitedParams.slug }).lean();

  if (!serviceDoc)
    return <div className="text-white p-10">Service not found.</div>;

  const service = JSON.parse(JSON.stringify(serviceDoc));

  return (
    <>
      {/* Breadcrumb & Hero */}
      <section className="w-full relative max-w-7xl mx-auto mb-12 px-6 lg:px-8">
        <div className="block md:text-lg mb-6">
          <span>
            <span>
              <Link href="/">Home </Link>
            </span>
            /
            <span>
              <Link href="/services"> Services </Link>
            </span>
            /
            <span className="breadcrumb_last" aria-current="page">
              <strong> {service.title}</strong>
            </span>
          </span>
        </div>

        <h1 className="w-full mb-2 text-5xl font-semibold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
          {service.title}
        </h1>

        <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12 ">
          <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
            <div>
              <div>
                <h2
                  className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-medium "
                  style={{ color: service.color || "#829dff" }}
                >
                  {service.intro?.heading || 'Overview'}
                </h2>

                <div
                  className=" prose max-w-none text-base md:text-xl font-light leading-[1.4]
                          md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu
                          prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em]
                          prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside
                          prose-strong:text-inherit"
                >
                  <p>{service.intro?.text || service.description}</p>
                </div>

                {service.intro?.bullets && service.intro.bullets.length > 0 ? (
                  <ul className="relative mt-6 lg:mt-8">
                    {service.intro.bullets.map((bullet, i) => (
                      <li key={i} className="flex mb-3 text-base font-medium md:text-lg">
                        <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                          <use href="/webImages/icons.svg#ticker"></use>
                        </svg>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                ) : (
                  /* Fallback to old points if intro bullets missing */
                  service.points && service.points.length > 0 && (
                    <ul className="relative mt-6 lg:mt-8">
                      {service.points.map((pt, i) => (
                        <li key={i} className="flex mb-3 text-base font-medium md:text-lg">
                          <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                            <use href="/webImages/icons.svg#ticker"></use>
                          </svg>
                          {pt}
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </div>
          </div>
          <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
            <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
              {service.heroImg ? (
                <img
                  width="750"
                  height="810"
                  src={service.heroImg}
                  className=" w-full h-full lg:h-auto object-cover"
                  alt={service.title}
                  loading="eager"
                  decoding="async"
                />
              ) : (
                <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">No Image</div>
              )}
            </picture>
            <div className="image-shadow-top-hero"></div>
            <div className="image-shadow-bottom-hero"></div>
          </div>
        </div>
      </section>

      {/* Sticky process */}
      {service.process && service.process.length > 0 && (
        <ProcessSection key={service.slug} process={service.process} themeColor={service.color} />
      )}

      {/* Intro blurb (Hero Title & Description) */}
      <section className="pt-14 lg:pt-20 xl:pt-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className=" max-w-[900px] prose-editor">
            <h2 className="mb-5 lg:mb-10 text-4xl md:text-8xl leading-[1.1] font-semibold text-white">
              {service.herotitle || service.title}
            </h2>

            <div className="prose max-w-none text-base md:text-xl lg:text-[1.56rem] font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Orange Block (Detailed Info Blocks) */}
      {service.blocktext && service.blocktext.length > 0 && (
        <section className="lg:px-8 py-14 lg:py-20 xl:py-32">
          <div
            style={{ background: "#D24125", color: "#FFFFFF" }}
            className="max-w-7xl mx-auto lg:rounded-[1.25rem] px-6 xl:px-8 pb-12 md:pb-16"
          >
            <div className="max-w-[1031px] mx-auto pt-px">
              {service.blockImg && (
                <div className="js-animate-up -mt-8 lg:-mt-12 xl:-mt-20 mb-10 lg:mb-12 xl:mb-14">
                  <img
                    width="1031"
                    height="586"
                    src={service.blockImg}
                    className="rounded-[1.25rem] shadow-[0_20px_60px_-0_rgba(0,0,0,0.25)]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              <div>
                {service.blocktext.map((block, i) => (
                  <div key={i} className="js-animate-fadeinup pt-10 md:pt-20 first:pt-0">
                    <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-semibold text-inherit">
                      {block.title}
                    </h2>
                    <div className="md:flex md:flex-wrap md:flex-row-reverse">
                      <div className="md:w-3/5 md:pr-8 lg:pr-10 xl:pr-24 text-base md:text-xl leading-[1.4] md:leading-[1.4]">
                        <div>
                          {block.text}
                          <div className="mt-4 mb-5 md:mb-0 md:mt-10">
                            <a href="#" className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-xl text-inherit">
                              <span>Learn more about {service.title}</span>
                              <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                <svg className="inline-block" preserveAspectRatio="none" width="22" height="15" aria-hidden="true">
                                  <use href="/webImages/icons.svg#arrow-right"></use>
                                </svg>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/5 pl-6 md:px-8 lg:px-10 xl:px-14 pt-6 md:pt-0 text-base md:text-lg leading-[1.4] md:leading-[1.4] font-bold">
                        {block.bullets && (
                          <ul>
                            {block.bullets.map((b, bIdx) => (
                              <li key={bIdx} className="mb-2 flex">
                                <svg className="md:mt-0.5" preserveAspectRatio="none" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                                  <use href="/webImages/icons.svg#icon-tick"></use>
                                </svg>
                                <span className="flex-1 pl-3 md:pl-5">{b}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Promise */}
      <section className="pb-14 lg:pb-20 ">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto max-w-[780px] prose-editor">
            <h2 className="mb-5 lg:mb-10 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-semibold text-white">
              {service.heropromisetitle || 'What we promise'}
            </h2>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80">
              <p>{service.promisedescription}</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />

      {/* Explore services */}
      {service.explorepoints?.points && service.explorepoints.points.length > 0 && (
        <section className="w-full px-6 mx-auto md:flex-row justify-items-center max-w-7xl xl:px-8 gap-x-8 js-animate-fadein pb-14 lg:pb-20 xl:pb-32">
          <h4 className="mb-[0.7em] text-xl md:text-2xl leading-tight md:leading-tight font-semibold text-white">
            {service.exploretitile || `Explore more ${service.title} services`}
          </h4>
          <div className="flex [@media(min-width:375px)]:flex-row w-full rounded-2xl border border-[#151515] overflow-hidden mt-8 flex-wrap">
            {service.explorepoints.points.map((pt, i) => (
              <a key={i} className="services-list heart-svg-left border-b -mb-px flex text-base hyphens-auto break-all text-[1.175rem] border-[#151515] odd:border-r md:border-r-0 md:odd:border-r-0 md:[&:nth-child(3n+2)]:border-x md:text-[1rem] lg:text-[1.375rem] py-3 md:py-8 w-full [@media(min-width:375px)]:max-w-[50%] md:w-1/3 text-white " href="#">
                <div className="flex items-center w-full px-[7%] md:px-[10%] ">
                  <div className="js-hover-circle-animation flex flex-row items-center justify-center">
                    {pt}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
