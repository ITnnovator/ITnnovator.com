import CTA from "@/components/CTA";
import HomeCases from "@/components/HomeCases";
import OurClients from "@/components/OurClients";
import { getServices, getCases, getTestimonials, getClients } from '@/app/lib/data';
import OurOffer from "@/components/OurOffer";
import OurServices from "@/components/OurServices";
import Testimonial from "@/components/Testimonial";
import TypoAnimation from "@/components/TypoAnimation";

export const dynamic = 'force-dynamic';

// ... imports
import HeroModel from '@/models/Hero';
import dbConnect from '@/lib/db';

async function getHeroData() {
  await dbConnect();
  // Fetch active hero, fallback to default if none
  const hero = await HeroModel.findOne({ isActive: true }).sort({ createdAt: -1 });
  if (!hero) {
    return { type: 'video', url: '/webImages/pixel-intro-dark.mp4' };
  }
  return { type: hero.type, url: hero.url };
}

export default async function Home() {
  const services = await getServices();
  const cases = await getCases(5);
  const testimonials = await getTestimonials();
  const clients = await getClients();
  const hero = await getHeroData();

  return (
    <main className="font-outfit antialiased text-white selection:bg-[#ff0033] selection:text-white pb-32">
      {/* Dynamic Hero Section */}
      <section className="js-animate-fadein js-hero-block flex items-end min-h-[calc(100svh-5rem)] py-[5.125rem] md:min-h-screen md:h-full md:pt-[6.5rem] md:pb-[8.5rem] lg:pb-[8.5rem] 2xl:pb-[14.5rem]">
        {/* ... (existing content wrapper) ... */}
        <div className="js-hero-block--content relative w-[94%] wider:max-w-[90rem] wider:max-w-[90rem] px-5 xl:px-8 mx-auto">
          {/* Hero headline */}
          {/* Hero headline */}
          <h1
            className="w-full leading-tight md:leading-none tracking-tight text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[900] md:font-bold mb-4 -ml-[4px] md:mb-6 lg:-ml-[9px] break-words"
            style={{ mixBlendMode: "difference" }}
          >
            <span className="bg-gradient-to-t from-[#FFE99A] to-[#A1BDE7] bg-clip-text mix-blend-difference sm:whitespace-nowrap [&_.typed-cursor]:font-normal [&_.typed-cursor.typed-cursor--blink]:text-[0]">
              <TypoAnimation /> digital products with Itnnovator.
            </span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-white mb-4 block text-left lg:text-left" style={{ width: "70%" }}>
            Itnnovator is a digital product and growth company helping businesses design, build, and scale high-performance web platforms.
          </h2>

          {/* Trust Microcopy */}
          <div className="text-sm text-gray-400 mt-4 mb-2">
            Itnnovator (not “Innovator”) is a distinct brand focused on measurable digital outcomes.
          </div>

          <div className="flex flex-wrap gap-x-10 gap-y-8 pt-[1rem] lg:pt-[1.5rem]">
            <a
              href="/contact"
              className="lg:min-w-[10rem] inline-flex items-center font-[400] md:text-[1.375rem] rounded-[1.25rem] md:text-xl text-malibu js-hover-circle-animation hover-child-underline-animation">
              <span className="relative inline-block child after:!bg-malibu">Start a Project</span>
              <span className="pl-4">
                <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
                  <use href="/webImages/icons.svg#arrow-right"></use>
                </svg>
              </span>
            </a>

            <a
              href="/services"
              className="lg:min-w-[10rem] inline-flex justify-center items-center px-3 mx-0.5 sm:mx-2 font-[400] md:text-[1.375rem] rounded-[1.25rem] sm:px-6 md:px-2 md:text-xl text-white js-hover-circle-animation hover-child-underline-animation">
              <span className="relative inline-block child after:!bg-white">Explore Services</span>
              <span className="pl-4">
                <svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" aria-hidden="true">
                  <use href="/webImages/icons.svg#arrow-right"></use>
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Dynamic Background Media */}
        <div className="js-hero-block--bg absolute inset-0 h-full w-full -z-10">
          {hero.type === 'video' ? (
            <video loop autoPlay muted playsInline className="object-cover object-center w-full h-full">
              <source src={hero.url} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
          ) : (
            <img src={hero.url} alt="Hero Banner" className="object-cover object-center w-full h-full" />
          )}

          <div
            className="pointer-events-none overlay absolute inset-0"
            style={{ background: 'linear-gradient(to top, black, transparent)' }}
            aria-hidden="true"></div>
        </div>
      </section>

      {/* About  */}
     <section className="py-14 lg:py-20 xl:py-32 relative">
  <div className="w-[94%] wider:max-w-[90rem] px-5 xl:px-8 mx-auto flex flex-wrap gap-10 justify-between">
    
    <div className="flex flex-col gap-y-6 w-full max-w-[50rem] md:gap-y-11">
      <div>
        <h2 className="text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white mb-4">
          Our Primary Services
        </h2>
        {/* Animated colorful line */}
        <div className="h-1.5 w-24 bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 rounded-full shadow-[0_0_15px_rgba(139,92,246,0.5)] animate-pulse"></div>
      </div>

      <div
        className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-white"
      >
        <p>
          These are Itnnovator’s core digital services — built for businesses that need real outcomes, not vague “creative solutions.”<br />
          We deliver performance-first websites, custom web applications, and SEO systems that improve speed, usability, conversions, and long-term growth.
        </p>
        <p>
          If you need a reliable partner to build, optimize, or scale your digital presence end-to-end, start here.
        </p>
      </div>

      <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
        <a
          href="/services"
          target="_self"
          className="group inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 backdrop-blur-sm text-lg font-medium text-white shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
        >
          <span> View All Services </span>
          <span className="pl-3 transform group-hover:translate-x-1 transition-transform duration-200">
            <svg className="inline-block w-4 h-4" viewBox="0 0 13 13" fill="currentColor">
              <use href="/webImages/icons.svg#arrow-right"></use>
            </svg>
          </span>
        </a>
      </div>
    </div>

    <ul className="flex flex-col gap-y-6 w-full max-w-[40rem] lg:flex-1 mt-4 lg:mt-0">
      {services.slice(0, 3).map((service, idx) => (
        <li key={service._id} className="group relative flex items-start gap-x-6 md:gap-x-8 p-6 rounded-2xl transition-all duration-500 hover:bg-white/[0.03] border border-transparent hover:border-white/10 overflow-hidden">
          {/* Animated left border on hover */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:h-full rounded-r-full shadow-[0_0_10px_rgba(139,92,246,0.6)]"></div>
          
          <div className="p-3 rounded-xl bg-white/5 border border-white/10 group-hover:bg-white/10 transition-colors duration-300 shadow-lg shrink-0 flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16">
            {service.icon?.includes('.svg#') ? (
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-malibu opacity-80 group-hover:opacity-100 transition-opacity" fill="currentColor">
                <use href={service.icon}></use>
              </svg>
            ) : (
              <img
                width="55"
                height="55"
                src={service.icon || "/webImages/webbutveckling-ehandel-icon.svg"}
                className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                alt={service.title}
              />
            )}
          </div>
          
          <div className="flex flex-col gap-y-2.5 pt-1">
            <h3 className="text-xl md:text-2xl font-bold">
              <a className="text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all duration-300" href={`/services/${service.slug}`}>
                {service.title}
              </a>
            </h3>
            <p className="text-gray-400 text-base md:text-lg line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
              {service.description || service.hero?.subheadline || "Custom digital solutions built for modern business needs."}
            </p>
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>


      {/* Cases */}
      <HomeCases cases={cases} />

      {/* Our Clients */}
      <OurClients clients={clients} />

      {/* Testimonial */}
      <section className="pt-5 pb-4 w-[94%] wider:max-w-[90rem] px-5 xl:px-8 mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">What Clients Say</h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">Teams partner with Itnnovator for clarity, execution, and dependable delivery.</p>
      </section>
      <Testimonial testimonials={testimonials} />

      {/* Promotional Services Highlight Reel (Dynamic) */}
      {(services.filter(s => s.isFeatured).length > 0 ? services.filter(s => s.isFeatured) : services.slice(0, 5)).map((service, index) => {
        const isReversed = index % 2 === 0;
        return (
          <section key={service._id} className="py-14 lg:py-20 xl:py-32" style={{ background: "#000000" }}>
            <div className={`max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col flex ${isReversed ? 'md:flex-row-reverse md:pl-6' : 'md:flex-row md:pr-6 justify-end'}`}>
              <div className="md:w-1/2 overflow-x-visible">
                <figure className={`js-animate-up block relative z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full md:w-max ${isReversed ? '' : 'float-right'}`}>
                  <img
                    width="900"
                    height="530"
                    src={service.hero?.image || service.blockImg || service.icon || "/webImages/hemsidor-wordpress-900x530.png"}
                    className="w-full h-auto rounded-xl object-cover"
                    alt={`${service.title} - ${service.hero?.headline || ''}`}
                  />
                </figure>
              </div>

              <div className="py-6 md:w-1/2 w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
                <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-white">
                  <h2 className="0 text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
                    {service.hero?.headline || service.herotitle || service.title}
                  </h2>

                  <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white">
                    <p>{service.description || service.hero?.subheadline || 'Professional digital services to scale your operations.'}</p>
                  </div>

                  <a
                    href={`/services/${service.slug}`}
                    target="_self"
                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                  >
                    <span> {service.cta || `Explore ${service.title}`} </span>
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
        );
      })}

      {/* Our Offer */}
      <OurOffer services={services} />

      {/* CTA */}
      <CTA />

      {/* Our services */}
      <OurServices services={services} />

    </main>
  );
}