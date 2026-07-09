import CaseSection from "@/components/CaseSection";
import CTA from "@/components/CTA";
import OurServices from "@/components/OurServices";
import dbConnect from "@/lib/db";
import { getServices } from '@/app/lib/data';
import Case from "@/models/Case";
import Link from "next/link";

export const revalidate = 0;

export const metadata = {
  title: "Selected Work | Itnnovator",
  description: "Browse our portfolio of web development, e-commerce, SEO and design projects. Real results for real businesses.",
};

export default async function CasesPage() {
  const services = await getServices();

  await dbConnect();
  const casesData = await Case.find({}).sort({ createdAt: -1 }).lean();
  const cases = JSON.parse(JSON.stringify(casesData));

  return (
    <div className="bg-black text-white overflow-hidden">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative pt-10 pb-20 lg:pb-28 px-6 lg:px-12">
        {/* BG glows */}
        <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-malibu/8 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[30vw] h-[30vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-10 h-[1px] bg-white/20" />
            <span className="text-malibu font-mono uppercase tracking-widest text-sm">Portfolio</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-end">
            <h1 className="text-5xl md:text-7xl xl:text-[7rem] font-bold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
              Selected <br />
              <span className="text-malibu italic font-serif font-light">Work</span>
            </h1>
            <div className="lg:max-w-md">
              <p className="text-xl text-white/60 font-light leading-relaxed mb-6">
                We are constantly adding new projects and case studies to our portfolio.{" "}
                <Link href="/contact" className="text-malibu hover:text-white transition-colors border-b border-malibu/30 hover:border-white">
                  Contact us
                </Link>{" "}
                if you'd like to explore more of our work.
              </p>
              {/* Stats row */}
              <div className="flex gap-8 pt-6 border-t border-white/10">
                {[
                  { num: "50+", label: "Projects" },
                  { num: "12+", label: "Industries" },
                  { num: "98%", label: "Satisfaction" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="text-2xl font-bold text-white">{s.num}</div>
                    <div className="text-xs text-white/40 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASES GRID ─────────────────────────────────── */}
      <CaseSection cases={cases} />

      {/* ── MORE CASES BANNER ─────────────────────────── */}
      <section className="py-16 lg:py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-malibu/40 via-purple-500/40 to-malibu/40">
            <div className="bg-[#0a0a0c] rounded-[23px] px-10 py-14 text-center">
              <div className="w-12 h-12 rounded-full bg-malibu/10 border border-malibu/20 flex items-center justify-center text-malibu mx-auto mb-6">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 5v14M5 12h14" /></svg>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                More Cases Coming Soon
              </h3>
              <p className="text-white/50 text-lg leading-relaxed max-w-xl mx-auto mb-8">
                We're constantly updating our portfolio. Want to see more work or discuss a custom project?
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-malibu text-black font-bold hover:shadow-[0_0_30px_rgba(130,157,255,0.5)] hover:scale-105 transition-all duration-300"
              >
                Contact Us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Our services */}
      <OurServices services={services} />
    </div>
  );
}
