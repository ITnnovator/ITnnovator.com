
import InnerBlogSection from "@/components/Blog/InnerBlogSection";
import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: "Blog  | ITnnovator",
  description: "Learn more about our team and mission.",
};

export default function BlogPage() {
  return (
    <>
      {/* Inner Banner */}
      <InnerBanner title="Blog" />

      {/* <!-- Inner Banner --> */}
      <InnerBlogSection />
    </>
  );
}
