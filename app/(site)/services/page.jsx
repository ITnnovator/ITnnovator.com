import CTA from "@/components/CTA";
import OurClients from "@/components/OurClients";
import Link from "next/link";
import dbConnect from "@/lib/db";
import Service from "@/models/Service";

export const revalidate = 0; // Ensure dynamic data fetching

export default async function ServicePage() {
  await dbConnect();
  const services = await Service.find({ serviceType: 'primary' })
    .sort({ sortOrder: 1, createdAt: -1 })
    .lean();

  return (
    <>
      {/*  */}
      <section className="w-full relative max-w-7xl mx-auto mb-12 px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="block md:text-lg mb-6">
          <span>
            <span>
              <Link href="/"> Home </Link>
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
                alt="Itnnovator Digital Services"
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
          {services.length === 0 ? (
            <div className="text-white text-center text-xl">No services found. Please add services in the admin panel.</div>
          ) : (
            <ul className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service) => (
                <li key={service._id} className="mb-6 md:mb-20">
                  {/* Icon */}
                  {service.icon && (
                    <img
                      width="32"
                      height="32"
                      src={service.icon}
                      className="w-6 sm:w-[2.25rem] mb-6 object-contain"
                      alt={`${service.title} icon`}
                      loading="lazy"
                      decoding="async"
                    />
                  )}

                  {/* Title Link */}
                  <Link className="js-hover-circle-animation" href={`/services/${service.slug}`}>
                    <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                      {service.title}
                    </h3>
                  </Link>

                  {/* Description */}
                  <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 line-clamp-3">
                    {service.description}
                  </div>

                  {/* Features Bullets */}
                  {service.features && service.features.length > 0 && (
                    <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex font-bold mb-3 text-base md:text-lg">
                          <svg className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4" width="19" height="19" viewBox="0 0 19 19" aria-hidden="true">
                            <use href="/webImages/icons.svg#ticker"></use>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Read More Link */}
                  <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                    <Link href={`/services/${service.slug}`} className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu">
                      <span>Explore {service.title}</span>
                      <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                        <svg className="inline-block" width="22" height="15" aria-hidden="true">
                          <use href="/webImages/icons.svg#arrow-right"></use>
                        </svg>
                      </span>
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          )}
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
              alt="Itnnovator Digital Solutions Team"
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
                Exceptional digital presence requires more than just aesthetics. At <strong>Itnnovator</strong> we combine data-driven insights with expert <Link href="/services/seo-digital-marketing">SEO</Link>, strategic UX/UI design, and robust <Link href="/services/web-development">web development</Link> to create experiences that deliver speed, conversions, and scalable growth.
              </p>
              <p>
                Partnering with Itnnovator means gaining a collaborative team, not just a service provider. We work alongside you to develop strategic roadmaps, implement continuous testing, and ensure every decision is grounded in measurable data to transform visitors into loyal customers.
              </p>
              <p>
                Move beyond assumptions and achieve tangible results. Let's elevate your brand visibility and dominate search rankings.
                <br />
                <Link href="/contact">Start your project →</Link>
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
