import InnerBanner from "@/components/InnerBanner";
import Team from "@/components/Team/Team";

export const metadata = {
  title: "Team | ITnnovator",
  description: "Discover the digital solutions we provide.",
};

export default function TeamPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="Team" />

      {/* Team Section */}
      <Team />
    </>
  );
}
