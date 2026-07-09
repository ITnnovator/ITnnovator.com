import Link from "next/link";

export const metadata = {
  title: "Terms of Service | Itnnovator",
  description: "Review the terms of service for using the Itnnovator website.",
};

export default function TermsPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(168,85,247,0.16),_transparent_30%)] pointer-events-none" />
      <div className="absolute left-[-5%] top-[20%] w-[520px] h-[520px] bg-malibu/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-[-8%] bottom-[-10%] w-[560px] h-[560px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 xl:px-8 py-20 lg:py-28">
        <section className="text-center max-w-3xl mx-auto">
          <span className="text-malibu uppercase tracking-[0.3em] text-sm font-medium mb-4 inline-block">Terms of service</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-malibu leading-tight">
            Clear terms for using Itnnovator services.
          </h1>
          <p className="mt-8 text-lg text-white/70 leading-relaxed">
            These terms describe how the website may be used, how we protect our intellectual property, and what to expect when you engage with Itnnovator online.
          </p>
        </section>

        <section className="mt-16 space-y-8">
          {[
            {
              title: "Acceptance of terms",
              details: "By accessing this website, you agree to follow these terms and the policies we reference throughout the site.",
            },
            {
              title: "Intellectual property",
              details: "All content, design, and assets are owned by Itnnovator or our licensors and are protected by copyright and trademark law.",
            },
            {
              title: "Use restrictions",
              details: "You may not copy, republish, or use our content in ways that violate our rights or the rights of our partners.",
            },
            {
              title: "Liability",
              details: "The site is provided as-is. We are not liable for indirect damages or losses except as required by applicable law.",
            },
            {
              title: "Policy updates",
              details: "We may update these terms periodically. Your continued use of the site means you accept the latest version.",
            },
          ].map((section) => (
            <div key={section.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <h2 className="text-2xl font-semibold text-white mb-4">{section.title}</h2>
              <p className="text-white/70 leading-relaxed">{section.details}</p>
            </div>
          ))}
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-black/60 p-10 lg:p-14">
          <h2 className="text-3xl font-bold text-white">Need help understanding these terms?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            We’re happy to answer questions about usage, privacy, or how our site works. Reach out for clarity on anything below.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-malibu px-8 py-4 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,157,255,0.35)]">
              Contact us
            </Link>
            <a href="mailto:info@itnnovator.com" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white font-semibold hover:border-malibu/40 hover:bg-white/10 transition-all duration-300">
              Email support
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
