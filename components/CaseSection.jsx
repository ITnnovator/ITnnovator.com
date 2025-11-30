"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Link from "next/link";
import { CASES, CATEGORIES } from "@/data/casesData";

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

export default function CaseSection() {
    // derive initial from current hash
    const [activeCat, setActiveCat] = useState(() =>
        typeof window === "undefined"
            ? "all"
            : normalizeCategoryId(window.location.hash || DEFAULT_HASH)
    );

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
        if (activeCat === "all") return CASES;
        return CASES.filter((c) => c.categories.includes(activeCat));
    }, [activeCat]);

    return (
        <section className="case w-full pb-14 lg:pb-20 xl:pb-32 js-case-filtering">
            <div className="px-5 xl:px-[3.5rem] 2xl:px-16">
                {/* Mobile select */}
                <div className="md:hidden relative mb-8 js-case-filtering-mobile-dropdown">
                    <select
                        className="w-full px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] bg-black text-white appearance-none outline-none"
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
                <div className="hidden md:flex flex-wrap gap-4 mb-12">
                    {CATEGORIES.map((c) => {
                        const cat = normalizeCategoryId(`#${c.id}`);
                        const active = activeCat === cat;
                        return (
                            <button
                                key={c.id}
                                type="button"
                                onClick={() => setCategory(cat)}
                                data-active={active}
                                className="px-6 py-3 text-sm font-medium rounded-full border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] transition-all duration-300 bg-[rgba(19,19,20,0.5)] hover:bg-[rgba(19,19,20,0.8)] data-[active=true]:border-[rgba(255,255,255,0.8)] data-[active=true]:bg-[rgba(19,19,20,1)] data-[active=true]:translate-y-[-2px] data-[active=true]:shadow-[0_5px_15px_rgba(0,0,0,0.15)] text-white hover:text-white no-underline"
                                aria-pressed={active}
                            >
                                {c.label}
                            </button>
                        );
                    })}
                </div>

                {/* Grid */}
                <div className="w-full grid gap-[3.125rem] md:grid-cols-2 xl:grid-cols-3">
                    {filtered.map((item) => (
                        <CaseCard key={item.slug} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CaseCard({ item }) {
    return (
        <div className="flex flex-col">
            <a
                href={`/cases/${item.slug}`}
                className="relative flex flex-col justify-between h-full overflow-hidden rounded-[1.25rem] transition duration-300 border border-solid border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.5)] shadow-[0_0_50px_rgba(12,32,58,0.2)] group/img"
            >
                {/* Background/cover image */}
                <img
                    src={item.topImg}
                    width={868}
                    height={640}
                    className="absolute h-full w-full left-0 top-0 object-cover transition duration-500 blur-[0px] grayscale opacity-10 group-hover/img:opacity-20 group-hover/img:grayscale-0 group-hover/img:blur-[0px] transform scale-[1.1] group-hover/img:scale-[1.3]"
                    alt={item.title}
                    loading="lazy"
                    decoding="async"
                />

                {/* Text block */}
                <div className="pr-[2rem] pt-[3rem] pb-[3rem] md:pr-[2.75rem] md:pt-[3.5rem] md:pb-[4rem] w-[85.5%] ml-auto">
                    <h3 className="mb-[0.75rem] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                        {item.title}
                    </h3>
                    <ul className="flex flex-wrap font-bold text-[0.8125rem]" style={{ color: "#829dff" }}>
                        {item.tags.map((t) => (
                            <li className="mr-3" key={t}>
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Device frame + inner image */}
                <div className="flex flex-col items-center w-full relative justify-center">
                    <div className="relative w-full h-full">
                        <div className="w-[94%] ml-auto relative before:content-[''] before:absolute before:bg-[#131314] before:h-[25px] before:rounded-tl before:-top-[1.5625rem] before:left-0 before:right-0 shadow-[-5px_-20px_30px_rgba(0,0,0,1)]">
                            <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[0.625rem]" />
                            <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-5" />
                            <div className="absolute bg-[#ccc] opacity-20 w-[0.375rem] h-[0.375rem] rounded-full -top-4 left-[1.875rem]" />
                            <img
                                src={item.innerImg}
                                width={680}
                                height={480}
                                className="rounded-br-[1.20rem] object-cover w-full shadow-[0_0_100px_rgba(0,0,0,1)]"
                                alt={item.title}
                                loading="lazy"
                                decoding="async"
                            />
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
