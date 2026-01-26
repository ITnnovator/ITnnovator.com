import Link from 'next/link';
import { notFound, redirect } from 'next/navigation';
export const dynamic = 'force-dynamic';
export const revalidate = 0;
import dbConnect from "@/lib/db";
import Service from "@/models/Service";
import Case from "@/models/Case"; // Ensure Case model is registered
import CTA from "@/components/CTA";

// Components
import ServiceHero from '@/components/services/ServiceHero';
import ServiceTOC from '@/components/services/ServiceTOC';
import ServiceOverview from '@/components/services/ServiceOverview';
import ServiceAudience from '@/components/services/ServiceAudience';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceScope from '@/components/services/ServiceScope';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceTools from '@/components/services/ServiceTools';
import ServiceWhyUs from '@/components/services/ServiceWhyUs';
import ServiceFAQ from '@/components/services/ServiceFAQ';
import ServiceCases from '@/components/services/ServiceCases';

// Metadata Generation
export async function generateMetadata({ params }) {
  await dbConnect();
  const awaitedParams = await params;
  const service = await Service.findOne({ slug: awaitedParams.slug }).lean();

  if (!service) return { title: 'Service Not Found' };

  // SEO Safeguards
  const canonical = service.canonicalUrl || `https://itnnovator.com/services/${service.slug}`;

  // Robots Logic
  let robots = 'index, follow';
  if (service.noindex) {
    robots = 'noindex, nofollow';
  } else if (service.serviceType !== 'primary' && !service.canonicalUrl) {
    // Non-primary services without explicit canonical should not be indexed to avoid cannibalization
    robots = 'noindex, nofollow';
  }

  return {
    title: service.metaTitle || `${service.title} | Itnnovator`,
    description: service.metaDescription || service.description,
    robots,
    alternates: {
      canonical,
    },
    openGraph: {
      title: service.ogTags?.title || service.metaTitle || service.title,
      description: service.ogTags?.description || service.metaDescription || service.description,
      images: service.ogTags?.image ? [{ url: service.ogTags.image }] : (service.heroImg ? [{ url: service.heroImg }] : []),
      type: 'website',
    },
  };
}

export default async function ServiceDetail({ params }) {
  const awaitedParams = await params;
  await dbConnect();

  // Fetch Service with populated Case Studies and Related Services
  let serviceDoc = await Service.findOne({ slug: awaitedParams.slug })
    .populate('relatedCaseStudies')
    .populate({
      path: 'relatedServices',
      select: 'title slug icon description'
    })
    .lean();

  if (!serviceDoc) {
    // 301 Redirect Fallback for Legacy URLs
    // Check if any service claims this slug via 'redirectFrom'
    const legacyPath = `/services/${awaitedParams.slug}`;
    const redirectTarget = await Service.findOne({ redirectFrom: legacyPath }).select('slug').lean();

    if (redirectTarget) {
      redirect(`/services/${redirectTarget.slug}`);
    } else {
      notFound();
    }
  }

  // Serialization
  const service = JSON.parse(JSON.stringify(serviceDoc));

  // 301 Redirect Logic (if accessed via old slug that is now in redirectFrom)
  // This logic is ideally handled in middleware, but here is a safety check:
  // (Not implementing specific redirectFrom check here as it requires checking ALL services)

  // Construct TOC Sections
  const tocSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'audience', label: 'Who Is This For?' },
    { id: 'scope', label: 'What\'s Included' },
    { id: 'process', label: 'Our Process' },
    { id: 'tools', label: 'Tools & Tech' },
    { id: 'why-us', label: 'Why Choose Us' },
    { id: 'faq', label: 'FAQ' },
  ].filter(sec => {
    // Optional: Filter out empty sections if needed, but for now we render all placeholders
    return true;
  });

  return (
    <>
      <ServiceHero service={service} />

      <div className="bg-[#0a0a0c] min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16">

          {/* Sidebar (Desktop TOC) */}
          <aside className="hidden lg:block w-72 shrink-0 sticky top-32 self-start h-fit">
            <ServiceTOC sections={tocSections} />
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 min-w-0 space-y-24">

            {/* Overview */}
            <section id="overview" className="scroll-mt-32">
              <ServiceOverview content={service.overview || service.description} />
              <ServiceFeatures features={service.features} />
            </section>

            {/* Audience */}
            <section id="audience" className="scroll-mt-32">
              <ServiceAudience items={service.whoIsFor} />
            </section>

            {/* Scope */}
            <section id="scope" className="scroll-mt-32">
              <ServiceScope items={service.whatsIncluded} />
            </section>

          </div>
        </div>
      </div>

      {/* Full Width Sections */}
      <div id="process" className="scroll-mt-20">
        <ServiceProcess steps={service.processSteps} />
      </div>

      <div id="tools" className="scroll-mt-20">
        <ServiceTools items={service.tools} />
      </div>

      <div id="why-us" className="scroll-mt-20">
        <ServiceWhyUs items={service.whyChooseUs} />
      </div>

      <div id="cases" className="scroll-mt-20">
        <ServiceCases cases={service.relatedCaseStudies} />
      </div>

      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="py-20 bg-[#0a0a0c]">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-white mb-12">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.relatedServices.map((rel, i) => (
                <Link key={i} href={`/services/${rel.slug}`} className="block p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand/50 hover:bg-white/10 transition-all group">
                  {rel.icon && (
                    <div className="w-12 h-12 mb-6 opacity-80 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <img src={rel.icon} alt="" className="w-full h-full object-contain filter brightness-0 invert" />
                    </div>
                  )}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand transition-colors">{rel.title}</h3>
                  <p className="text-gray-400 leading-relaxed line-clamp-3">{rel.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <div id="faq" className="scroll-mt-20">
        <ServiceFAQ items={service.faqs} />
      </div>

      <CTA />
    </>
  );
}
