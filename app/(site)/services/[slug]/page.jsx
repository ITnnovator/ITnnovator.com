import Link from "next/link";
import CTA from "@/components/CTA";
import dbConnect from "@/lib/db";
import Service from "@/models/Service";

export default async function ServiceDetail({ params }) {
  const awaitedParams = await params;
  await dbConnect();
  const service = await Service.findOne({ slug: awaitedParams.slug }).lean();

  if (!service)
    return <div className="text-white p-10">Service not found.</div>;

  return (
    <>
      {/* Breadcrumb */}
      <section className="w-full relative  max-w-7xl mx-auto mb-12 px-6 lg:px-8">
        <div className="block md:text-lg mb-6">
          <span>
            <span>
              <a href="/">Home </a>
            </span>
            /
            <span>
              <a href="/services"> Services </a>
            </span>
            /
            <span className="breadcrumb_last" aria-current="page">
              <strong> {service.title}</strong>
            </span>
          </span>
        </div>

        <h1 className="w-full mb-2 text-5xl font-bold md:mb-6 xl:mb-12 md:text-6xl xl:text-8xl">
          {service.title}
        </h1>

        <div className="flex flex-col text-white md:flex-row justify-items-center md:gap-x-8 xl:gap-x-12 ">
          <div className="order-2 md:order-1 pt-6 md:p-6 lg:p-12 md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] js-animate-fadeinup">
            <div>
              <div>
                <h2
                  className="mb-4 lg:mb-6 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold "
                  style={{ color: "#829dff" }}
                >
                  Overview
                </h2>

                <div
                  className=" prose max-w-none text-base md:text-xl font-light leading-[1.4]
                          md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu
                          prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em]
                          prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside
                          prose-strong:text-inherit whitespace-pre-wrap"
                >
                  <p>{service.description}</p>
                </div>

                {service.features && service.features.length > 0 && (
                  <ul className="relative mt-6 lg:mt-8">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex mb-3 text-base font-bold md:text-lg">
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
          <div className="md:w-[calc(50%_-_(1rem))] xl:w-[calc(50%_-_(1.5rem))] relative mt-8 md:mt-0 js-animate-fadeinup flex order-1 md:order-2 flex-col items-center justify-center h-full">
            {service.heroImage ? (
              <picture className="block mx-auto relative overflow-hidden w-full aspect-[25/27] rounded-[1.25rem] md:w-[calc(100%_-_4rem)] xl:w-[calc(100%_-_5rem)]">
                <img
                  width="750"
                  height="810"
                  src={service.heroImage}
                  className=" w-full h-full lg:h-auto object-cover"
                  alt={service.title}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            ) : (
                <div className="w-full aspect-[25/27] rounded-[1.25rem] bg-white/10 flex items-center justify-center text-white/20">
                    No Image
                </div>
            )}
            <div className="image-shadow-top-hero"></div>
            <div className="image-shadow-bottom-hero"></div>
          </div>
        </div>
      </section>

      {/* Sticky process - Only show if steps exist */}
      {service.process && service.process.length > 0 && (
        <section className="js-scroll-block js-scroll-block-bg">
          <div className="js-scroll-block-pin flex absolute h-screen w-full flex-col justify-center">
            <div className="w-full h-[100%] relative">
              <div className="js-scroll-heading-inside">
                <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.18em] leading-[1.28] font-bold text-white">
                  Our process
                </h2>
              </div>
              <div className="hidden md:flex fixed top-[50%] right-[2rem] transform translate-x-[-50%] translate-y-[-50%]">
                <svg width="50" height="45" viewBox="0 0 50 130">
                  <rect className="scroll" x="0" y="5" rx="35" ry="35" width="70" height="120" stroke="#ffffff" fill="none"></rect>
                  <circle className="circle--shape" cx="35" cy="32" r="8" fill="#FFFFFF"></circle>
                </svg>
              </div>

              <div className="relative h-screen mr-auto md:px-20 flex items-center justify-center md:w-[60%]">
                {service.process.map((step, i) => (
                  <div key={i} className="js-scroll-block-photo hidden md:block md:absolute md:w-[100%] h-[100%]">
                      <div className="flex items-center flex-col justify-center h-full pr-12 pt-12 pb-12 pl-20">
                      <div className="relative js-scroll-img-no-bg-wrap js-scroll-img-wide-bg-wrap  js-scroll-img-wrap-wide-hinside-wrap">
                          {step.image && (
                              <picture className="block mx-auto px-6 xl:px-8">
                                <img width="950" height="699" src={step.image} className="js-scroll-img-no-bg" alt={step.title} loading="lazy" decoding="async" />
                              </picture>
                          )}
                          <div className="image-shadow-top"></div>
                          <div className="image-shadow-bottom"></div>
                      </div>
                      </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-screen h-screen z-[-2]">
               {service.process.map((_, i) => <span key={i} className="js-scroll-block-bg-color"></span>)}
            </div>
          </div>

          <div className="js-scroll-block-progress-bar-wrapper bg-gray-800 w-md h-[0.1rem] fixed z-50 w-[20rem] bottom-[1.25rem] rounded-full left-1/2 transform -translate-x-1/2 opacity-0">
            <div className="js-scroll-block-progress-bar bg-white w-0 h-[0.1rem] relative z-100"></div>
          </div>
          <div className="js-scroll-block-fixed-top pointer-events-none js-scroll-block-fixed-top-bg"></div>
          <div className="js-scroll-block-fixed-bottom pointer-events-none js-scroll-block-fixed-bottom-bg"></div>

          <div className="relative md:w-[40%] w-full md:ml-auto z-[1]">
            <div className="js-scroll-block-content-wrapper  js-scroll-block-content-wrapper-bg  w-full md:w-[80%] mr-32">
              {service.process.map((step, i) => (
                  <div key={i} className="js-scroll-block-content ">
                  <div className="max-w-md">
                      <div className="md:hidden relative block mx-auto">
                      <div className="image-shadow-top"></div>
                      <div className="image-shadow-bottom"></div>
                      {step.image && <img width="950" height="699" src={step.image} className="w-full h-auto rounded-[0.9rem] md:rounded-[1.25rem] lg:rounded-[1.75rem]" alt={step.title} loading="lazy" decoding="async" />}
                      </div>
                  </div>
                  <div className="mt-4 mb-2 md:mb-8 text-base md:text-lg" style={{ color: "#a8e4d7" }}>
                      0{i + 1}<span className="opacity-50">/0{service.process.length}</span>
                  </div>
                  <h3 className="leading-[1.28] md:leading-[1.1] break-words hyphens-auto text-3xl md:text-[2.5rem] lg:text-[3rem] xl:text-[4rem]" style={{ color: "#a8e4d7" }}>
                      {step.title}
                  </h3>
                  <p className="mt-3 md:mt-4 text-base text-100 md:text-xl" style={{ color: "#FFFFFF" }}>
                      {step.text}
                  </p>
                  </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
