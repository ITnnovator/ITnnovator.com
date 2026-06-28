"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/data/casesData";
import { Loader2 } from "lucide-react";

const HASH_PREFIX = "#";
const DEFAULT_HASH = "#cases_all";

function normalizeCategoryId(hash) {
    // "#cases_api" -> "api"
    if (!hash || !hash.startsWith(HASH_PREFIX)) return "all";
    const id = hash.slice(1); // cases_api
    if (id === "cases_all") return "all";
    return id.replace("cases_", ""); // api
}

function toHashFromCategory(cat) {
    return cat === "all" ? "#cases_all" : `#cases_${cat}`;
}

export default function CaseSection({ cases: initialCases = [] }) {
    const [cases, setCases] = useState(initialCases);
    const [loading, setLoading] = useState(false);

    // derive initial from current hash
    const [activeCat, setActiveCat] = useState(() =>
        typeof window === "undefined"
            ? "all"
            : normalizeCategoryId(window.location.hash || DEFAULT_HASH)
    );

    // No client-side fetch needed if data is passed from server

    // keep state in sync with hash changes (back/forward)
    useEffect(() => {
        const onHash = () => setActiveCat(normalizeCategoryId(window.location.hash));
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, []);

    const setCategory = useCallback((cat) => {
        const hash = toHashFromCategory(cat);
        // push hash without navigating away
        if (typeof window !== "undefined") {
            history.replaceState(null, "", hash);
            setActiveCat(cat);
        }
    }, []);

    const filtered = useMemo(() => {
        if (!cases) return [];
        if (activeCat === "all") return cases;
        // Normalize both sides to lowercase for reliable comparison
        return cases.filter((c) =>
            c.categories &&
            c.categories.some((cat) => cat.toLowerCase() === activeCat.toLowerCase())
        );
    }, [activeCat, cases]);

    if (loading) return <div className="py-20 flex justify-center"><Loader2 className="animate-spin text-white" /></div>;

    return (
        <section className="case w-full pb-14 lg:pb-20 xl:pb-32 js-case-filtering">
            <div className="px-5 xl:px-[3.5rem] 2xl:px-16">
                {/* Mobile select */}
                <div className="md:hidden relative mb-8 js-case-filtering-mobile-dropdown">
                    <select
                        className="w-full px-6 py-4 text-base font-semibold rounded-full border border-white/20 bg-black text-white appearance-none outline-none"
                        value={toHashFromCategory(activeCat)}
                        onChange={(e) => setCategory(normalizeCategoryId(e.target.value))}
                    >
                        {CATEGORIES.map((c) => (
                            <option key={c.id} value={`#${c.id}`}>
                                {c.label}
                            </option>
                        ))}
                    </select>
                    <div
                        className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none"
                        aria-hidden="true"
                    >
                        <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                            <path d="M1 1L6 6L11 1" stroke="white" strokeWidth="2" />
                        </svg>
                    </div>
                </div>

                {/* Desktop tabs */}
                <div className="hidden md:flex flex-wrap gap-3 mb-14">
                    {CATEGORIES.map((c) => {
                        const cat = normalizeCategoryId(`#${c.id}`);
                        const active = activeCat === cat;
                        return (
                            <button
                                key={c.id}
                                type="button"
                                onClick={() => setCategory(cat)}
                                className={`px-8 py-3.5 text-base font-semibold rounded-full border transition-all duration-300 ${
                                    active
                                        ? 'bg-malibu border-malibu text-black shadow-[0_0_25px_rgba(130,157,255,0.5)] scale-105'
                                        : 'border-white/10 bg-white/5 text-white/60 hover:border-malibu/40 hover:text-white hover:bg-white/10'
                                }`}
                                aria-pressed={active}
                            >
                                {c.label}
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                {filtered.length === 0 ? (
                    <div className="text-center py-24 text-white/30">
                        <p className="text-5xl mb-4">🔍</p>
                        <p className="text-lg">No projects found in this category.</p>
                    </div>
                ) : (
                    <div className="w-full grid gap-8 md:grid-cols-2">
                        {filtered.map((item) => (
                            <CaseCard key={item.slug} item={item} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}

function CaseCard({ item }) {
    const coverImg = item.imageDesktop || item.topImg;

    return (
        <div className="group relative p-[1px] rounded-3xl bg-gradient-to-br from-white/10 to-white/5 hover:from-malibu/50 hover:to-purple-500/50 transition-all duration-500">
            <a
                href={`/cases/${item.slug}`}
                className="relative flex flex-col h-full overflow-hidden rounded-[23px] bg-[#0a0a0c] block"
            >
                {/* Background cover image — subtle */}
                {coverImg && (
                    <img
                        src={coverImg}
                        width={868}
                        height={640}
                        className="absolute h-full w-full left-0 top-0 object-cover opacity-10 group-hover:opacity-20 scale-110 group-hover:scale-125 transition-all duration-700"
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-[#0a0a0c]/80 to-transparent" />

                {/* Text block */}
                <div className="relative z-10 p-10 md:p-12">
                    {/* Category tags */}
                    <div className="flex flex-wrap gap-2 mb-6 pr-14">
                        {item.categories && item.categories.map((t) => (
                            <span key={t} className="px-3 py-1.5 rounded-full text-xs font-bold bg-malibu/10 border border-malibu/20 text-malibu uppercase tracking-widest">
                                {t}
                            </span>
                        ))}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight group-hover:text-malibu transition-colors duration-300 mb-3">
                        {item.title}
                    </h3>
                    {item.description && (
                        <p className="text-white/40 text-base leading-relaxed line-clamp-2">{item.description}</p>
                    )}
                </div>

                {/* Browser frame + inner image */}
                <div className="relative z-10 mt-auto">
                    <div className="mx-6 md:mx-10">
                        {/* Browser chrome */}
                        <div className="flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1e] rounded-t-xl border-t border-l border-r border-white/10">
                            <span className="w-3 h-3 rounded-full bg-white/10" />
                            <span className="w-3 h-3 rounded-full bg-white/10" />
                            <span className="w-3 h-3 rounded-full bg-white/10" />
                        </div>
                        <img
                            src={item.innerImg}
                            width={860}
                            height={600}
                            className="w-full object-cover object-top rounded-br-xl border-b border-l border-r border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] group-hover:shadow-[0_20px_60px_rgba(130,157,255,0.2)] transition-shadow duration-500"
                            alt={item.title}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>

                {/* Hover arrow */}
                <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/40 group-hover:bg-malibu group-hover:border-malibu group-hover:text-black transition-all duration-300 z-20">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M7 7h10v10" /></svg>
                </div>
            </a>
        </div>
    );
}
