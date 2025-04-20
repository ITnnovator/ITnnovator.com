
import InnerBlogDetail from "@/components/BlogDetail/InnerBlogDetail";
import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: "Blog-Detail  | ITN",
  description: "Learn more about our team and mission.",
};

export default function BlogDetail() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="Blog Detail" />

      {/* Blog Detail */}
      <InnerBlogDetail />
    </>
  );
}
