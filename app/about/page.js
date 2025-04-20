import HistorySection from "@/components/About/HistorySection";
import InnerAboutSection from "@/components/About/InnerAboutSection";
import StatsSection from "@/components/About/StatsSection";
import ClientSection from "@/components/Home/ClientSection";
import TestimonialSwiper from "@/components/Home/TestimonialSwiper";
import WorkProcess from "@/components/Home/WorkProcess";
import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: "About Us | ITN",
  description: "Learn more about our team and mission.",
};

export default function AboutPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="About Us" />

      {/* Inner About Section */}
      <InnerAboutSection />

      {/* Work Process Section */}
      <WorkProcess />

      {/* <!-- STATS SECTION  --> */}
      <StatsSection />

      {/* <!-- History SECTION  --> */}
      <HistorySection />

      {/* TestimonialSwiper Section */}
      <TestimonialSwiper />

      {/* <!-- CLIENTS SECTION --> */}
      <ClientSection />

    </>
  );
}
