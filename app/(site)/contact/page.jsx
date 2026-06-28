import ContactGravityForm from "@/components/ContactGravityForm";

export const metadata = {
  title: "Contact Us | Itnnovator",
  description: "Get in touch with Itnnovator. Tell us about your project and we'll reply with the fastest path to impact.",
};

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen relative overflow-hidden">

      {/* Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-malibu/8 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 xl:px-8 py-20 lg:py-32">

        {/* Hero Header */}
        <div className="mb-20 lg:mb-28">
          <span className="text-malibu font-mono uppercase tracking-widest text-sm mb-4 block">Get In Touch</span>
          <h1 className="text-5xl md:text-7xl xl:text-8xl font-bold leading-[1.0] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
            Say <span className="text-malibu italic font-serif font-light">Hello!</span>
          </h1>
        </div>

        {/* Main 2-col layout */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-20 items-start">

          {/* Left: Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-10">
            <p className="text-xl text-white/60 font-light leading-relaxed">
              We'd love to hear from you at <strong className="text-white font-medium">Itnnovator</strong>. Tell us about your goals and we'll reply with the fastest path to impact.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {[
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  ),
                  label: "Email",
                  value: "info@itnnovator.com",
                  href: "mailto:info@itnnovator.com",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.02 2.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92v2z" /></svg>
                  ),
                  label: "Phone",
                  value: "+92 331 3775851",
                  href: "tel:+923313775851",
                },
                {
                  icon: (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.657 16.657L13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  ),
                  label: "Location",
                  value: "Pakistan (Remote globally)",
                  href: null,
                },
              ].map((item, i) => (
                <div key={i} className="group flex items-start gap-5 p-5 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-malibu/30 hover:bg-malibu/5 transition-all duration-300">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-malibu/10 border border-malibu/20 text-malibu flex items-center justify-center group-hover:bg-malibu group-hover:text-black transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-white/30 uppercase tracking-widest font-mono mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-white/80 hover:text-malibu transition-colors text-base font-medium">{item.value}</a>
                    ) : (
                      <p className="text-white/80 text-base font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response time badge */}
            <div className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <p className="text-emerald-400 text-sm font-medium">Typically reply within 24 hours</p>
            </div>

            {/* Social links */}
            <div>
              <p className="text-xs text-white/30 uppercase tracking-widest font-mono mb-4">Follow Us</p>
              <div className="flex gap-3">
                {[
                  { label: "LinkedIn", href: "https://www.linkedin.com/company/itnnovator", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg> },
                  { label: "Facebook", href: "https://www.facebook.com/itnnovator", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                  { label: "Instagram", href: "https://www.instagram.com/itnnovator", icon: <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-malibu hover:border-malibu/50 hover:bg-malibu/10 transition-all duration-300">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5">
              <div className="bg-[#0a0a0c] rounded-[23px] p-8 md:p-12">
                <h2 className="text-2xl font-bold text-white mb-8">Send a Message</h2>
                <ContactGravityForm />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
