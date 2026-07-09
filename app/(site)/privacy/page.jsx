import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Itnnovator",
  description: "Read Itnnovator's privacy practices and how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_24%)] pointer-events-none" />
      <div className="absolute right-[-5%] top-[12%] w-[480px] h-[480px] bg-malibu/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute left-[-6%] bottom-[-10%] w-[520px] h-[520px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 xl:px-8 py-20 lg:py-28">
        <section className="text-center max-w-3xl mx-auto">
          <span className="text-malibu uppercase tracking-[0.3em] text-sm font-medium mb-4 inline-block">Privacy policy</span>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-malibu leading-tight">
            Your data is treated with care.
          </h1>
          <p className="mt-8 text-lg text-white/70 leading-relaxed">
            We collect only what we need, keep it secure, and never sell your information. This policy explains how your data is used when you interact with Itnnovator.
          </p>
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          {[
            {
              title: "What we collect",
              items: [
                "Contact details provided through forms.",
                "Browser and device data for site performance.",
                "Cookies for preferences and analytics.",
              ],
            },
            {
              title: "How we use it",
              items: [
                "Respond to inquiries and project requests.",
                "Improve site experience and service delivery.",
                "Maintain security and reliable operations.",
              ],
            },
          ].map((panel) => (
            <div key={panel.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_40px_rgba(255,255,255,0.05)]">
              <h2 className="text-2xl font-semibold text-white mb-5">{panel.title}</h2>
              <ul className="space-y-4 text-white/70">
                {panel.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-malibu" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Cookies and tracking</h2>
            <p className="text-white/70 leading-relaxed">
              Cookies help us remember preferences and analyze traffic. We only use them to make the site faster and more useful, never to share personal data with third parties for profit.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-black/60 p-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your rights</h2>
            <p className="text-white/70 leading-relaxed">
              You can ask us for a copy of your data or request updates. If you want more detail, we’re happy to answer questions through our contact channel.
            </p>
          </div>
        </section>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-white/5 p-10 lg:p-14">
          <h2 className="text-3xl font-bold text-white">Questions about privacy?</h2>
          <p className="mt-4 text-white/70 leading-relaxed">
            Reach out directly if you want to understand how we handle your information or how our systems protect your data.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-malibu px-8 py-4 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,157,255,0.35)]">
              Contact us
            </Link>
            <a href="mailto:info@itnnovator.com" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white font-semibold hover:border-malibu/40 hover:bg-white/10 transition-all duration-300">
              info@itnnovator.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
