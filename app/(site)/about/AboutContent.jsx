"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { BarChart3, Search, Scale, Zap, Target, Rocket, Quote } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

function Counter({ from, to }) {
    const nodeRef = useRef();
    const isInView = useInView(nodeRef, { once: true, margin: "-50px" });

    useEffect(() => {
        if (!isInView) return;

        const node = nodeRef.current;
        const duration = 2500;
        const startTime = performance.now();

        const animate = (time) => {
            const elapsed = time - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
            const current = Math.floor(from + (to - from) * ease);

            if (node) {
                node.textContent = current.toLocaleString();
            }

            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };

        requestAnimationFrame(animate);
    }, [from, to, isInView]);

    return <span ref={nodeRef}>{from}</span>;
}

export default function AboutContent() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <div ref={containerRef} className="bg-black text-white selection:bg-malibu selection:text-black overflow-hidden perspective-[1000px]">

            {/* --- HERO SECTION --- */}
            <section className="relative min-h-[90vh] flex flex-col justify-center px-6 lg:px-12 pt-32 pb-20">
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-malibu/10 rounded-full blur-[150px] mix-blend-screen opacity-60 animate-pulse" style={{ animationDuration: '8s' }} />
                    <div className="absolute bottom-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[120px] mix-blend-screen opacity-50" />
                </div>

                <div className="relative z-10 max-w-[100rem] mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={staggerContainer}
                        className="flex flex-col gap-6 order-2 lg:order-1"
                    >
                        <motion.div variants={fadeIn} className="flex items-center gap-4 text-white/50 text-sm md:text-base tracking-wider uppercase font-medium">
                            <span className="w-12 h-[1px] bg-white/20"></span>
                            About Itnnovator
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="text-5xl sm:text-7xl md:text-8xl lg:text-[6rem] xl:text-[7rem] font-bold leading-[0.9] tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">
                            Reliable <br />
                            <span className="italic font-serif font-light text-malibu">Digital Growth</span>
                        </motion.h1>

                        <motion.div variants={fadeIn} className="max-w-2xl">
                            <p className="text-xl text-white/70 font-light leading-relaxed mb-6">
                                <strong className="text-white font-medium">Itnnovator</strong> is a digital product and growth company helping businesses design, build, and scale reliable digital systems. We specialize in web development, e-commerce solutions, UI/UX design, SEO-driven growth, automation, and long-term technical support.
                            </p>
                            <p className="text-lg text-white/50 font-light leading-relaxed mb-6">
                                We build production-ready websites, scalable platforms, and growth infrastructure designed to remain fast, secure, and maintainable as businesses grow. Our approach prioritizes clarity, performance, and long-term reliability over short-term experimentation.
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-r from-malibu/20 to-purple-500/20 rounded-full blur-[100px] animate-pulse"></div>
                            <img
                                src="/webImages/3D_ITN.png"
                                alt="ITnnovator 3D Logo"
                                className="relative z-10 w-full h-auto object-contain drop-shadow-[0_0_80px_rgba(59,130,246,0.4)] animate-float"
                                style={{ animation: "float 6s ease-in-out infinite" }}
                            />
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* --- MISSION & VISION (Glassmorphism + Icons) --- */}
            <section className="relative py-20 lg:py-32 px-6 lg:px-12 z-20">
                <div className="max-w-[100rem] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
                    <motion.div
                        whileHover={{ y: -10, transition: { duration: 0.4 } }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={fadeIn}
                        className="group relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-malibu/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="mb-10">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-malibu group-hover:scale-110 transition-transform duration-500">
                                    <Target size={32} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                    To help businesses build digital products that are <span className="text-white">reliable, scalable, and aligned with real business goals</span>. We focus on execution quality, technical stability, and long-term value rather than short-term trends.
                                </p>
                            </div>
                            <span className="text-sm font-mono text-white/30 uppercase tracking-widest">01 — Purpose</span>
                        </div>
                    </motion.div>

                    <motion.div
                        whileHover={{ y: -10, transition: { duration: 0.4 } }}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{ ...fadeIn, hidden: { opacity: 0, y: 50 } }}
                        className="group relative p-8 md:p-12 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tl from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out" />
                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div className="mb-10">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                                    <Rocket size={32} />
                                </div>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
                                <p className="text-lg md:text-xl text-white/70 leading-relaxed">
                                    To be a <span className="text-white">long-term digital partner</span> for teams that value transparency, quality, and sustainable growth. We aim to support companies from early planning through launch, optimization, and scale.
                                </p>
                            </div>
                            <span className="text-sm font-mono text-white/30 uppercase tracking-widest">02 — Future</span>
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* --- HOW WE WORK (Parallax + Glassmorphism + Icons) --- */}
            <section className="py-20 lg:py-40 px-6 lg:px-12 relative overflow-hidden">
                <div className="absolute top-1/2 left-0 w-full h-full bg-gradient-to-b from-transparent via-malibu/5 to-transparent opacity-30 pointer-events-none" />

                <div className="max-w-[100rem] mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <span className="text-malibu font-mono uppercase tracking-widest text-sm mb-4 block">Process</span>
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                            Built for <br />
                            <span className="text-white/50">Production.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-white/60 leading-relaxed max-w-lg mb-12">
                            We prioritize stability, performance, and maintainability from day one. Every system we build is designed to handle real traffic, real users, and real business demands—without requiring constant rewrites or fragile workarounds.
                        </p>
                        <div className="h-1 w-24 bg-gradient-to-r from-malibu to-transparent rounded-full"></div>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                        <motion.div style={{ y: y1 }} className="flex flex-col gap-6 pt-12">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 group">
                                <div className="w-12 h-12 bg-malibu/10 rounded-2xl flex items-center justify-center mb-6 text-malibu group-hover:scale-110 transition-transform duration-300">
                                    <BarChart3 size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Outcome Driven</h3>
                                <p className="text-white/50 text-sm leading-relaxed">We define success metrics before writing code or launching campaigns, ensuring every decision supports measurable business outcomes.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 group">
                                <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
                                    <Scale size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Scalable</h3>
                                <p className="text-white/50 text-sm leading-relaxed">We design architectures that grow with your business—using maintainable systems and performance-first foundations.</p>
                            </div>
                        </motion.div>

                        <motion.div style={{ y: y2 }} className="flex flex-col gap-6">
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 group">
                                <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
                                    <Search size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Transparent</h3>
                                <p className="text-white/50 text-sm leading-relaxed">We work with clear scopes, timelines, and communication. Clients always know what’s being built, why it matters, and what comes next.</p>
                            </div>
                            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-colors duration-500 group">
                                <div className="w-12 h-12 bg-orange-500/10 rounded-2xl flex items-center justify-center mb-6 text-orange-400 group-hover:scale-110 transition-transform duration-300">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-3">Practical</h3>
                                <p className="text-white/50 text-sm leading-relaxed">We favor proven solutions over experimentation, focusing on execution quality and systems that work reliably in production.</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- WHAT WE ACTUALLY DO --- */}
            <section className="py-20 lg:py-32 px-6 lg:px-12 bg-black z-10 relative">
                <div className="max-w-[100rem] mx-auto">
                    <div className="max-w-4xl mx-auto text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">What We Actually Do</h2>
                        <div className="text-lg md:text-xl text-white/80 font-light leading-relaxed space-y-6">
                            <p>
                                Itnnovator works with startups, growing companies, and internal teams to build and improve digital products that support real business operations.
                            </p>
                            <p>
                                Our services include <Link href="/services/web-development" className="text-white hover:text-malibu transition-colors underline decoration-malibu/50">custom web development</Link>, <Link href="/services/ecommerce-solutions" className="text-white hover:text-malibu transition-colors underline decoration-malibu/50">e-commerce platform development</Link>, <Link href="/services/ui-ux-design" className="text-white hover:text-malibu transition-colors underline decoration-malibu/50">UI/UX design</Link> for conversion and usability, <Link href="/services/seo-digital-marketing" className="text-white hover:text-malibu transition-colors underline decoration-malibu/50">SEO and digital marketing systems</Link>, <Link href="/services/ai-automation" className="text-white hover:text-malibu transition-colors underline decoration-malibu/50">automation workflows</Link>, and <Link href="/contact" className="text-white hover:text-malibu transition-colors underline decoration-malibu/50">ongoing maintenance and support</Link>.
                            </p>
                            <p>
                                We are often brought in when existing websites become slow, hard to maintain, or ineffective at generating leads or sales. Our role is to simplify complex systems, improve performance, and create digital foundations that teams can confidently build on.
                            </p>
                            <p>
                                Itnnovator is a digital services company providing web development, e-commerce solutions, UI/UX design, SEO and digital marketing, automation, and ongoing technical support. We work with startups, growing businesses, and established teams to build reliable digital systems that support real business operations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- STATS & LEADERSHIP (Modernized) --- */}
            <section className="py-20 lg:py-32 px-6 lg:px-12 relative overflow-hidden bg-black">

                {/* Background Decor */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-[20%] left-[-10%] w-[1000px] h-[1000px] bg-malibu/5 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-900/5 rounded-full blur-[150px] opacity-20"></div>
                </div>

                <div className="relative z-10 max-w-[100rem] mx-auto space-y-24">

                    {/* Stats Row - Animated & Modern */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
                        {[
                            { num: 5, suffix: "+", label: "Years Building Production Systems" },
                            { num: 50, suffix: "+", label: "Digital Projects Delivered" }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative p-8 lg:p-12 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm flex flex-col items-center justify-center text-center hover:bg-white/[0.08] hover:border-white/10 transition-all duration-500 group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                                <div className="relative text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 group-hover:to-malibu transition-all duration-500">
                                    <Counter from={0} to={stat.num} />{stat.suffix}
                                </div>
                                <div className="relative text-white/50 text-sm md:text-base font-medium uppercase tracking-widest leading-relaxed">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Leadership & Capabilities - Modern Layout */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
                        {/* Leadership Text */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-malibu/20 to-purple-500/20 rounded-[2rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                            <div className="relative h-full p-10 lg:p-14 rounded-[2rem] bg-zinc-900/40 border border-white/5 backdrop-blur-xl flex flex-col justify-center">
                                <Quote className="w-12 h-12 text-malibu mb-8 opacity-50" />
                                <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-white/90 mb-10 tracking-wide">
                                    "Our focus is on building digital systems that remain fast, stable, and scalable over time—so teams can grow without constantly rebuilding their foundations."
                                </blockquote>
                                <div className="flex items-center gap-4">
                                    <div className="h-[2px] w-12 bg-gradient-to-r from-malibu to-purple-500"></div>
                                    <span className="text-sm uppercase tracking-[0.2em] font-bold text-white/40">Leadership Team</span>
                                </div>
                            </div>
                        </div>

                        {/* Capabilities Tags */}
                        <div className="flex flex-col justify-center">
                            <div className="mb-8 flex items-center gap-4">
                                <div className="w-2 h-2 rounded-full bg-malibu animate-pulse"></div>
                                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-malibu">Capabilities</h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {[
                                    { name: "Web Development", link: "/services/web-development" },
                                    { name: "E-commerce Solutions", link: "/services/ecommerce-solutions" },
                                    { name: "SEO & Digital Marketing", link: "/services/seo-digital-marketing" },
                                    { name: "UI/UX Design", link: "/services/ui-ux-design" },
                                    { name: "Mobile App Development", link: "/services/mobile-app-development" },
                                    { name: "Web Apps & Dashboards", link: "/services/web-apps-dashboards" },
                                    { name: "AI & Automation", link: "/services/ai-automation" },
                                    { name: "Maintenance & Support", link: "/contact" }
                                ].map((tag, i) => (
                                    <Link
                                        key={i}
                                        href={tag.link}
                                        className="px-6 py-4 rounded-xl border border-white/5 bg-white/[0.02] text-sm md:text-base font-light text-white/80 transition-all duration-300 hover:border-malibu hover:text-malibu hover:bg-malibu/10 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)] hover:-translate-y-1"
                                    >
                                        {tag.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}
