
import ContactForm from "@/components/Contact/ContactForm";
import ContactInfo from "@/components/Contact/ContactInfo";
import ContactMap from "@/components/Contact/ContactMap";
import InnerBanner from "@/components/InnerBanner";

export const metadata = {
  title: "Our Contact | ITnnovator",
  description: "Discover the digital solutions we provide.",
};

export default function ContactPage() {
  return (
    <>
      {/* <!-- INNER BANNER SECTION --> */}
      <InnerBanner title="Contact Us" />

      {/* <!-- CONTACT INFO SECTION --> */}
      <ContactInfo />

      {/* <!-- CONTACT MAP SECTION --> */}
      <ContactMap />

      {/* <!-- CONTACT FORM SECTION --> */}
      <ContactForm />
    </>
  );
}
