"use client";

import NotFound from "@/app/not-found";
import CTA from "@/components/CTA";
import { CASES } from "@/data/casesData";
import { use, useEffect } from "react"; 

export default function CaseDetail({ params }) {
  const { slug } = use(params);

  const caseIndex = CASES.findIndex((c) => c.slug === slug);
  const caseData = CASES[caseIndex];

  if (!caseData) {
    return <NotFound />;
  }

  // Prev / Next
  const prevCase = CASES[caseIndex - 1] || null;
  const nextCase = CASES[caseIndex + 1] || null;

  useEffect(() => {
    // helper: generate random dark color
    function randomColor() {
      const hue = Math.floor(Math.random() * 360); // any hue
      const saturation = Math.floor(Math.random() * 40) + 40; // 40–80%
      const lightness = Math.floor(Math.random() * 20) + 20; // 20–40% (dark)
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // helper: generate random light color
    function randomLightColor() {
      const hue = Math.floor(Math.random() * 360); // any hue
      const saturation = Math.floor(Math.random() * 30) + 70; // 70–100%
      const lightness = Math.floor(Math.random() * 20) + 80; // 80–100% (light)
      return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    }

    // select all containers (your markup)
    const caseContainers = document.querySelectorAll(".cases_container > div");
    if (caseContainers.length > 0) {
      caseContainers.forEach((el) => {
        el.style.background = randomColor();
      });
    }

    const caseInnerColor = document.querySelector(".case_inner_color");
    if (caseInnerColor) {
      caseInnerColor.style.background = randomLightColor();
    }
  }, []); // run once on mount

  useEffect(() => {
    const SPEED = 42; // px/sec — tweak to taste
    const imgs = Array.from(document.querySelectorAll('img[data-auto-scroll]'));
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    function setup(img) {
      const vp = img.parentElement; // the viewport (overflow hidden)
      const scale = img.clientWidth / img.naturalWidth || 1;
      const rendered = img.naturalHeight * scale; // rendered pixel height
      const distance = Math.max(0, rendered - vp.clientHeight);
      const duration = distance > 0 ? distance / SPEED : 0;

      // push vars to CSS animation
      img.style.setProperty('--bmDist', distance + 'px');
      img.style.setProperty('--bmDur', duration + 's');

      // retrigger animation after variable changes
      img.style.animation = 'none';
      void img.offsetWidth; // reflow
      img.style.animation = '';
    }

    function setupAll() {
      imgs.forEach((img) => setup(img));
    }

    imgs.forEach((img) => {
      if (img.complete) {
        setup(img);
      } else {
        img.addEventListener('load', () => setup(img), { once: true });
      }
    });

    window.addEventListener('resize', setupAll);

    return () => {
      window.removeEventListener('resize', setupAll);
    };
  }, []);

  return (
    <>
      {/* <!-- Banner --> */}
      <section
        className="w-full pt-[8.3rem] px-6 lg:px-8 xl:px-12 bg-black"
      >
        <div className="max-w-[120rem] mx-auto">
          <picture className="flex items-end w-full relative z-0 rounded-xl mx-auto overflow-hidden aspect-[15/12] md:aspect-[9/4] xl:max-h-[calc(100vh_-_150px)]">
            <div className="block md:text-lg text-black absolute text-black left-4 top-4 z-20 md:top-8 md:left-10">
              <span>
                <a href="/"> Home </a> / <a href="/cases"> Case</a> /
                <span className="breadcrumb_last" aria-current="page">
                  <strong>{caseData.title}</strong>
                </span>
              </span>
            </div>
            <img
              width="1700"
              height="697"
              src={caseData.hero}
              className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-y-1/2 -translate-x-1/2 object-cover"
              alt={caseData.title}
              loading="eager"
              decoding="async"
            />
            <div className="z-10 px-4 py-3 m-3 text-white bg-black lg:px-6 lg:py-5 lg:m-6 rounded-xl">
              <h1 className="text-lg md:text-xl lg:text-2xl font-bold">
                {caseData.title}
              </h1>
            </div>
          </picture>
        </div>
      </section>

      {/* <!-- Case Description --> */}
      <section
        className="w-full pt-14 lg:pt-20 xl:pt-32 bg-black"
      >
        <div className="flex flex-col mx-auto md:flex-row justify-items-center px-6 lg:px-8 xl:px-12 2xl:px-8 gap-x-8 text-white max-w-7xl">
          <div className="md:w-[calc(66.6666%_-_(1.5rem))] js-animate-fadeinup">
            <p className="font-bold text-white text-2xl md:text-3xl xl:text-4xl !leading-snug w-full max-w-xl mb-6 md:mb-8">
              {caseData.sectionone.heading}
            </p>
            <div className="prose max-w-xl text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
              <p>{caseData.sectionone.text}</p>
            </div>
          </div>

          <aside className="sidebar mt-8 md:mt-[0.2rem] md:w-[calc(33.3333%_-_(1.5rem))] max-w-sm js-animate-fadeinup">
            <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white prose-a:text-inherit prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-0 prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em]">
              <h4>{caseData.Sidebar[0].title}</h4>
              <p>{caseData.Sidebar[0].text}</p>
              <h4>{caseData.Sidebar[1].title}</h4>
              <p>{caseData.Sidebar[1].year}</p>
              <h4>{caseData.Sidebar[2].title}</h4>
              <div>
                <div>{caseData.sidebarr.vad[0]}</div>
                <div>
                  {caseData.sidebarr.vad[1]}
                  <br />
                  {caseData.sidebarr.vad[2]}
                  <br />
                  {caseData.sidebarr.vad[3]}
                  <br />
                  {caseData.sidebarr.vad[4]}
                  <br />
                  {caseData.sidebarr.vad[5]}
                  <br />
                  {caseData.sidebarr.vad[6]}
                </div>
              </div>
              <h4>{caseData.Sidebar[3].title}</h4>
              <p><a href={caseData.Sidebar[3].link} target="_blank" rel="noopener">{caseData.Sidebar[3].link}</a></p>
            </div>
          </aside>
        </div>
      </section>

      {/* <!-- Image + text block --> */}
      <section className="case_inner_color grid gap-y-10 md:gap-y-16 relative h-full w-full py-14 lg:py-20 xl:py-32">
        <div
          className="bg-black absolute top-0 left-0 h-[12rem] w-full bg-black"
        ></div>
        <picture className="js-animate-up block relative z-10 w-full h-full max-w-7xl mx-auto px-6 xl:px-8 drop-shadow-lg overflow-hidden">
          <img
            width="1200"
            height="1247"
            src={caseData.sectiontwo.img}
            className="w-full h-auto rounded-xl"
            alt={caseData.title}
            decoding="async"
          />
        </picture>
        <div className="w-full max-w-xl mx-auto px-6 xl:px-8 js-animate-fadeinup">
          <h3 className="mb-[0.7em] text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-black">
            {caseData.sectiontwo.heading}
          </h3>
          <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-black prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
            <p>{caseData.sectiontwo.text}</p>
          </div>
        </div>
      </section>

      {/* <!-- Mobile device (reuses your existing classes) --> */}
      <section className="py-14 lg:py-20" style={{ background: "#eae6e1" }}>
        <div className="max-w-7xl px-6 xl:px-8 mx-auto md:gap-x-14 xl:gap-x-20 flex-col lg:flex justify-center items-centermd:pr-6">
          <div className="bm-inner py-6">
            <figure
              className="bm-phone block z-10 h-auto max-w-7xl mx-auto xl:px-0 overflow-hidden w-full"
              style={{ position: "relative;" }}
            >
              <div className="bm-phone-notch"></div>
              <div className="bm-viewport mobile">
                <img
                  src={caseData.sectionthree.img}
                  alt={caseData.title}
                  className="bm-img"
                  data-auto-scroll
                  loading="lazy"
                />
              </div>
            </figure>
          </div>

          <div className="py-6 md:py-16 mx-auto w-full flex md:flex-1 md:shrink-0 lg:max-w-[28.75rem] only:mx-auto only:py-0">
            <div className="flex flex-col gap-y-3 md:gap-y-[2.37rem] my-auto text-black">
              <h3 className="0 text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-black">
                Responsiv design
              </h3>
              <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-black prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit">
                {caseData.sectionthree.text}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Prev / Next */}
      <section className="flex flex-col w-full px-6 mx-auto mb-12 text-white md:flex-row justify-items-center max-w-7xl xl:px-8 gap-x-8 md:mb-16 xl:mb-24">
        <div className="flex flex-col md:flex-row gap-4 w-full pt-3 mt-10">
          {prevCase && (
            <a
              href={`/cases/${prevCase.slug}`}
              className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 pr-6 xl:pr-8 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] group hover:text-malibu hover:border-malibu/70 transition-colors"
            >
              <svg
                width="15"
                height="15"
                className="mr-4 rotate-180"
                aria-label="false"
              >
                <use href="/webImages/icons.svg#arrow-right"></use>
              </svg>
              <span>Föregående Case</span>
            </a>
          )}

          <a
            href="/cases"
            className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] hover:text-malibu hover:border-malibu/70 transition-colors"
          >
            <svg
              width="15"
              height="15"
              className="mr-4 rotate-180"
              aria-label="false"
            >
              <use href="/webImages/icons.svg#case-icon"></use>
            </svg>
            <span>All Case</span>
          </a>

          {nextCase && (
            <a
              href={`/cases/${nextCase.slug}`}
              className="flex items-center justify-center border border-white/40 text-base md:text-lg py-6 pl-6 xl:pl-8 md:py-8 lg:py-12 w-full md:w-[calc(33.3333%_-_(2rem/3))] group hover:text-malibu hover:border-malibu/70 transition-colors"
            >
              <span>Nästa Case</span>
              <svg width="15" height="15" className="ml-4" aria-label="false">
                <use href="/webImages/icons.svg#arrow-right"></use>
              </svg>
            </a>
          )}
        </div>
      </section>
    </>
  );
}
