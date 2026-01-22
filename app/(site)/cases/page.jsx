import CaseSection from "@/components/CaseSection";
import CTA from "@/components/CTA";
import OurServices from "@/components/OurServices";
import Link from "next/link";
import dbConnect from "@/lib/db";
import Case from "@/models/Case";

export const revalidate = 0;

export default async function CasesPage() {
  await dbConnect();
  const casesData = await Case.find({}).sort({ createdAt: -1 }).lean();
  // Serialize for Client Component
  const cases = JSON.parse(JSON.stringify(casesData));

  return (
    <>
      {/* Hero Section */}
      <section className="pb-14 lg:pb-20 xl:pb-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="max-w-[780px] prose-editor">
            <h1 className="mb-5 lg:mb-10 text-4xl md:text-8xl leading-[1.1] font-bold text-white">
              Case Selection
            </h1>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] prose-blockquote:text-white">
              <p>
                We are constantly adding new projects and case studies to our portfolio.
                <a href="/contact">Contact us</a> if you’d like to explore more of our work or request a custom showcase.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Section */}
      <CaseSection cases={cases} />

      {/* Contact Section */}
      <section className="pb-14 lg:pb-20 xl:pb-32">
        <div className="max-w-7xl px-5 xl:px-8 mx-auto">
          <div className="mx-auto text-center max-w-[780px] prose-editor">
            <h3 className="mb-5 lg:mb-10 text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
              More cases coming
            </h3>

            <div className="prose max-w-none text-base md:text-xl font-light leading-[1.4] md:leading-[1.4] lg:leading-[1.4] text-white/80 prose-a:text-malibu prose-a:no-underline prose-a:font-light hover:prose-a:underline prose-p:mb-[1.38em] prose-ul:text-inherit prose-ul:list-disc prose-ul:list-outside prose-strong:text-inherit prose-h2:text-inherit prose-h2:text-3xl prose-h2:leading-tight md:prose-h2:text-[3.25rem] md:prose-h2:leading-[1.23] prose-h2:font-bold prose-h2:mb-[0.5em] prose-h3:text-inherit prose-h3:text-2xl prose-h3:leading-tight md:prose-h3:text-[2.18rem] md:prose-h3:leading-[1.4] prose-h3:font-bold prose-h3:mb-[0.9em] prose-h4:text-inherit prose-h4:text-xl prose-h4:leading-tight md:prose-h4:text-2xl md:prose-h4:leading-tight prose-h4:font-bold prose-h4:mb-[0.9em] prose-h5:text-inherit prose-h5:text-lg prose-h5:leading-tight md:prose-h5:text-xl md:prose-h5:leading-tight prose-h5:font-bold prose-h5:mb-[0.9em] prose-h6:text-inherit prose-h6:text-base prose-h6:leading-tight md:prose-h6:text-lg md:prose-h6:leading-tight prose-h6:font-bold prose-h6:mb-[0.9em] mx-auto prose-blockquote:text-white">
              <p>
                We are constantly updating our portfolio.
                <a href="/contact"> Contact us</a> if you would like to see more cases.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTA />

      {/* Blog Section (Hidden as per original) */}
      <section className="js-animate-fadeinup max-w-7xl mx-auto lg:rounded-[1.25rem] px-6 xl:px-8 pb-12 md:pb-16 py-14 lg:py-20 xl:py-32 hidden">
        <h2 className="mb-[0.7em] lg:mb-[0.9em] text-3xl md:text-[2.62rem] lg:text-[3.25rem] leading-[1.28] md:leading-[1.1] font-bold text-white">
          Senaste från vår blogg
        </h2>
        {/* ... (Blog content hidden) ... */}
      </section>

      {/* Our services */}
      <OurServices />
    </>
  );
}
