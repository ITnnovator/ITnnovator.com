import Faq from "@/components/Home/Faq";
import InnerBanner from "@/components/InnerBanner";
import ServicesSection from "@/components/Service/ServicesSection";
import TestimonialService from "@/components/Service/TestimonialService";

export const metadata = {
  title: "Our Services | ITN",
  description: "Discover the digital solutions we provide.",
};

export default function ServicesPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner />

      {/* Services Section */}
      <ServicesSection />

      {/* FAQ Section */}
      <Faq />

      {/* Testimonial Section */}
      <TestimonialService />
    </>
  );
}
