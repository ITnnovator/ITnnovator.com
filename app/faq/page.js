import Faqs from "@/components/Faq/Faqs";
import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: "FAQ | ITN",
  description: "Discover the digital solutions we provide.",
};

export default function FaqPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="Faq's" />

      {/* Faqs */}
      <Faqs />
    </>
  );
}
