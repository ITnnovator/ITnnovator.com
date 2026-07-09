import Link from "next/link";

export const metadata = {
  title: "Career Opportunities | Itnnovator",
  description: "Join the Itnnovator team and help build better digital experiences.",
};

export default function CareerPage() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.18),_transparent_28%)] pointer-events-none" />
      <div className="absolute left-[-10%] top-[10%] w-[480px] h-[480px] bg-malibu/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-0 w-[520px] h-[520px] bg-purple-900/10 rounded-full blur-[160px] pointer-events-none" />

      <main className="relative z-10 max-w-7xl mx-auto px-6 xl:px-8 py-20 lg:py-28">
        <section className="max-w-4xl mx-auto text-center">
          <p className="text-malibu font-mono uppercase tracking-[0.25em] text-sm mb-6">Join the team</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-malibu">
            Build meaningful digital products with an outcomes-first team.
          </h1>
          <p className="mt-8 text-lg md:text-xl text-white/70 leading-relaxed">
            Itnnovator is hiring talented people who want to shape modern web experiences, drive performance, and deliver reliable growth for ambitious brands.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-malibu px-8 py-4 text-black font-semibold shadow-[0_0_30px_rgba(130,157,255,0.35)] hover:shadow-[0_0_40px_rgba(130,157,255,0.55)] transition-all duration-300"
            >
              Talk to us
            </Link>
            <a
              href="mailto:careers@itnnovator.com"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-8 py-4 text-white font-semibold hover:border-malibu/40 hover:bg-white/10 transition-all duration-300"
            >
              careers@itnnovator.com
            </a>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-3">
          {[
            {
              title: "What we value",
              description: "Problem solving, craft, ownership, and the ability to turn strategy into measurable digital impact.",
            },
            {
              title: "Why Itnnovator",
              description: "A lean team, high quality standards, fast decision-making, and work that ships for real businesses.",
            },
            {
              title: "Remote friendly",
              description: "Work from anywhere with flexible schedules, async collaboration, and a support-first culture.",
            },
          ].map((card) => (
            <div key={card.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(0,0,0,0.15)] backdrop-blur-2xl transition-all duration-300 hover:border-malibu/30 hover:bg-white/10">
              <h2 className="text-2xl font-semibold text-white mb-4">{card.title}</h2>
              <p className="text-white/70 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </section>

        <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/5 p-10 lg:p-14 shadow-[0_0_45px_rgba(50,57,146,0.15)]">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="text-malibu uppercase tracking-[0.25em] text-xs font-medium">Open roles</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-white">Current opportunities</h2>
              <p className="mt-4 text-white/70 leading-relaxed">
                We’re looking for individuals who can contribute to strategy, product, development, and growth work for ambitious clients.
              </p>
              <ul className="mt-8 space-y-4 text-white/80">
                <li className="rounded-3xl border border-white/10 bg-black/50 p-5">Full-stack Developer</li>
                <li className="rounded-3xl border border-white/10 bg-black/50 p-5">Product Designer</li>
                <li className="rounded-3xl border border-white/10 bg-black/50 p-5">Growth Marketing Specialist</li>
              </ul>
            </div>

            <div className="rounded-[1.75rem] bg-black/70 p-8 border border-white/10">
              <h3 className="text-2xl font-semibold text-white">How to apply</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                Send a short note describing your experience, your favorite project, and why you want to build with Itnnovator.
              </p>
              <div className="mt-8 space-y-4 text-white/75 text-sm leading-relaxed">
                <p className="font-medium text-white">What we look for</p>
                <ul className="space-y-3 pl-4 list-disc">
                  <li>Clear communication and ownership</li>
                  <li>Strong product judgment</li>
                  <li>Experience shipping polished digital work</li>
                </ul>
              </div>
              <div className="mt-8">
                <a href="mailto:careers@itnnovator.com" className="inline-flex items-center justify-center rounded-full bg-malibu px-8 py-4 text-black font-semibold transition-all duration-300 hover:shadow-[0_0_30px_rgba(130,157,255,0.35)]">
                  Email the team
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 grid gap-8 lg:grid-cols-3">
          {[
            {
              label: "Team type",
              value: "Small, fast-moving, and dedicated to craftsmanship.",
            },
            {
              label: "Culture",
              value: "Transparent feedback, reliable delivery, and learning in every sprint.",
            },
            {
              label: "Benefits",
              value: "Flexible hours, remote-first collaboration, and real ownership.",
            },
          ].map((item) => (
            <div key={item.label} className="rounded-[2rem] border border-white/10 bg-black/60 p-8 text-white/80">
              <p className="uppercase text-sm tracking-[0.22em] text-malibu mb-3">{item.label}</p>
              <p className="text-lg font-semibold text-white">{item.value}</p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}
