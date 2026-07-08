import CTA from "@/components/CTA";
import OurClients from "@/components/OurClients";
import Link from "next/link";
import dbConnect from "@/lib/db";
import Service from "@/models/Service";

export const revalidate = 0;

export const metadata = {
  title: "Digital Services | Itnnovator",
  description: "Comprehensive digital services — web development, e-commerce, SEO, UI/UX design, AI automation and more. Your end-to-end digital growth partner.",
};

export default async function ServicePage() {
  await dbConnect();
  const services = await Service.find({ serviceType: 'primary' })
    .sort({ sortOrder: 1, createdAt: -1 })
    .lean();

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center px-6 lg:px-12 pt-10 pb-20">
        {/* BG glows */}
        <div className="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-malibu/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <div className="flex flex-col gap-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-white/20" />
              <span className="text-malibu font-mono uppercase tracking-widest text-sm">Our Services</span>
            </div>

            <h1 className="text-5xl md:text-7xl xl:text-[7rem] font-bold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
              Digital Services That <br />
              <span className="text-malibu italic font-serif font-light">Drive Growth</span>
            </h1>

            <p className="text-xl text-white/60 font-light leading-relaxed max-w-xl">
              At <strong className="text-white font-medium">Itnnovator</strong>, we provide comprehensive digital solutions — from strategic planning and design to development, e-commerce, SEO, and growth marketing.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-malibu text-black font-bold hover:shadow-[0_0_30px_rgba(130,157,255,0.5)] hover:scale-105 transition-all duration-300 text-base">
                Start a Project
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300 text-base">
                Explore Services
              </a>
            </div>

            {/* Mini stats */}
            <div className="flex gap-8 pt-4 border-t border-white/10">
              {[
                { num: "50+", label: "Projects Delivered" },
                { num: "5+", label: "Years Experience" },
                { num: "98%", label: "Client Satisfaction" },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-white">{s.num}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-0 bg-gradient-to-br from-malibu/20 to-purple-500/20 rounded-[2rem] blur-[60px]" />
              <picture className="relative block w-full aspect-[25/27] rounded-[1.5rem] overflow-hidden border border-white/10">
                <img
                  width="750"
                  height="810"
                  src="/webImages/services-hero-750x810.jpg"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  alt="Itnnovator Digital Services"
                  loading="eager"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              </picture>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────────── */}
      <section id="services" className="w-full py-20 lg:py-32 relative">
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-malibu/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl px-6 xl:px-8 mx-auto relative z-10">

          {/* Section header */}
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-malibu font-mono uppercase tracking-widest text-sm mb-3 block">What We Do</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Our Expertise</h2>
            </div>
            <div className="h-[1px] flex-1 mx-8 bg-gradient-to-r from-malibu/40 to-transparent hidden md:block" />
            <Link href="/contact" className="text-malibu text-sm font-semibold uppercase tracking-widest hover:text-white transition-colors shrink-0">
              All Services →
            </Link>
          </div>

          {services.length === 0 ? (
            <div className="text-white/50 text-center text-xl py-20">No services found. Please add services in the admin panel.</div>
          ) : (
            <ul className="w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li
                  key={service._id}
                  className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-malibu/60 hover:to-purple-500/60 transition-all duration-500"
                >
                  <div className="relative h-full bg-[#0a0a0c] rounded-[23px] p-8 flex flex-col hover:bg-[#0d0d10] transition-colors duration-500 overflow-hidden">
                    {/* Corner glow */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-malibu/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                    {/* Icon */}
                    {service.icon ? (
                      <div className="w-14 h-14 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center mb-8 group-hover:border-malibu/40 group-hover:bg-malibu/10 group-hover:scale-110 transition-all duration-500">
                        <img
                          width="28" height="28"
                          src={service.icon}
                          className="w-7 h-7 object-contain"
                          alt={`${service.title} icon`}
                          loading="lazy"
                        />
                      </div>
                    ) : (
                      <div className="w-14 h-14 bg-malibu/10 border border-malibu/20 rounded-2xl flex items-center justify-center mb-8 text-2xl group-hover:scale-110 transition-transform duration-500">
                        ⚙️
                      </div>
                    )}

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-bold text-white group-hover:text-malibu transition-colors duration-300 leading-tight">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base text-white/50 leading-relaxed line-clamp-3 mb-8 flex-grow">
                      {service.description || (service.overview ? service.overview.replace(/<[^>]+>/g, '').trim() : 'More details coming soon.')}
                    </p>

                    {/* Features */}
                    {service.features && service.features.length > 0 && (
                      <ul className="space-y-2 mb-8">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                            <span className="w-4 h-4 shrink-0 mt-0.5 rounded-full bg-malibu/20 border border-malibu/30 flex items-center justify-center">
                              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="text-malibu"><polyline points="20 6 9 17 4 12" /></svg>
                            </span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <div className="mt-auto">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white text-sm font-semibold hover:bg-malibu hover:border-malibu hover:text-black transition-all duration-300"
                      >
                        Explore {service.title}
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ── TEAM PHOTO BANNER ─────────────────────────────── */}
      <section aria-label="Itnnovator Team" className="px-6 lg:px-12 py-8">
        <div className="relative max-w-7xl mx-auto rounded-[1.5rem] overflow-hidden border border-white/10">
          <img
            src="/webImages/pixelhenrik.jpg"
            width={2000}
            height={1137}
            alt="Itnnovator Digital Solutions Team"
            className="w-full h-full object-cover aspect-[2000/1137]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-white/60 text-sm font-mono uppercase tracking-widest">Behind the work</p>
            <h3 className="text-white text-2xl md:text-3xl font-bold mt-1">A team that ships — and keeps shipping.</h3>
          </div>
        </div>
      </section>

      {/* ── DATA-DRIVEN SECTION ────────────────────────────── */}
      <section className="py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-malibu font-mono uppercase tracking-widest text-sm mb-4 block">Our Approach</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">
              Beyond Guesswork: <br />
              <span className="text-white/50">Data-Driven Results</span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed mb-6">
              Exceptional digital presence requires more than aesthetics. At <strong className="text-white">Itnnovator</strong> we combine data-driven insights with expert <Link href="/services/seo-digital-marketing" className="text-malibu hover:text-white transition-colors">SEO</Link>, strategic UX/UI design, and robust <Link href="/services/web-development" className="text-malibu hover:text-white transition-colors">web development</Link>.
            </p>
            <p className="text-lg text-white/60 leading-relaxed mb-10">
              Partnering with us means gaining a collaborative team — not just a service provider. We develop strategic roadmaps and ensure every decision is grounded in measurable data.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-malibu text-black font-bold hover:shadow-[0_0_30px_rgba(130,157,255,0.5)] transition-all duration-300">
              Start your project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Process pills */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "📊", title: "Analytics First", desc: "We measure before we build." },
              { icon: "🎯", title: "Outcome Driven", desc: "KPIs defined from day one." },
              { icon: "⚡", title: "Fast Delivery", desc: "Agile sprints, real momentum." },
              { icon: "🔒", title: "Secure & Stable", desc: "Production-grade from the start." },
              { icon: "🌱", title: "Scalable Systems", desc: "Built to grow with your business." },
              { icon: "🤝", title: "Transparent", desc: "Clear scope, timelines & comms." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-malibu/30 hover:bg-malibu/5 transition-all duration-300 group">
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="text-white font-bold text-base mb-1 group-hover:text-malibu transition-colors">{item.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients */}
      <OurClients />

      {/* CTA */}
      <CTA />
    </div>
  );
}
