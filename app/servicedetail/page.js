import InnerBanner from "@/components/InnerBanner";
import InnerServiceDetail from "@/components/ServiceDetail/InnerServiceDetail";

export const metadata = {
  title: "Our Contact | ITN",
  description: "Discover the digital solutions we provide.",
};

export default function ServiceDetail() {
  return (
    <>
      {/* <!-- INNER BANNER SECTION --> */}
      <InnerBanner title="Service Detail" />

      {/* <!-- SERVICE DETAILS SECTION --> */}
      <InnerServiceDetail />
    </>
  );
}
