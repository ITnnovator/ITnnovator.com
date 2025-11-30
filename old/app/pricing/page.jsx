import InnerBanner from "@/components/InnerBanner";
import Price from "@/components/PricePage/Price";

export const metadata = {
  title: "404 | ITnnovator",
  description: "Discover the digital solutions we provide.",
};

export default function PricingPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="Price" />

      {/* Pricing Section */}
      <Price />
    </>
  );
}
