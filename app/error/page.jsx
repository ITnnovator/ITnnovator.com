import Error from "@/components/Error/Error";
import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: "404 | ITN",
  description: "Discover the digital solutions we provide.",
};

export default function ErrorPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="4O4 Error" />

      {/* Error Section */}
      <Error />
    </>
  );
}
