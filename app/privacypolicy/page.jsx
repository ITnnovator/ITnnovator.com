import InnerBanner from "@/components/InnerBanner";
import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | ITnnovator",
  description: "Learn more about our team and mission.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="Privacy Policy" />

      <PrivacyPolicy />
    </>
  );
}
