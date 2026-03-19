import '../globals.css';
import "../../styles/main.css";
import "../../styles/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Script from "next/script";
import SparkCursor from "@/components/SparkCursor";
import { Toaster } from "react-hot-toast";
import ScriptRefresh from "@/components/ScriptRefresh";

const GA_ID = "G-0WKTG41R6W"; // replace

export const metadata = {
  metadataBase: new URL("https://itnnovator.com"),
  title: "Software Development Agency | Itnnovator",
  description: "Itnnovator is a leading software development agency specializing in custom web applications, e-commerce, and digital transformation for growing businesses.",
  keywords: ["software development agency", "web development agency", "custom software development services", "e-commerce website development", "SEO services", "UI/UX"],
  authors: [{ name: "Itnnovator", url: "https://itnnovator.com" }],
  creator: "Itnnovator",
  publisher: "Itnnovator",
  robots: "index, follow",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    // apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Software Development Agency | Itnnovator",
    description: "We build high-performance websites, apps, and growth systems that turn clicks into customers.",
    url: "https://itnnovator.com",
    siteName: "Itnnovator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Itnnovator - Software Development Agency",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Agency | Itnnovator",
    description: "Custom software tailored for business growth.",
    creator: "@itnnovator",
    images: ["/og-image.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Itnnovator",
  "url": "https://itnnovator.com",
  "logo": "https://itnnovator.com/webImages/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/itnnovator"
  ]
};

import { getServices } from '@/app/lib/data';

export const revalidate = 0; // Ensure dynamic data fetching globally

export default async function SiteLayout({ children }) {
  const services = await getServices();

  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        id="js-page-body"
        className="home wp-singular page-template-default page page-id-180 bg-black group pt-[8.3rem]"
      >

        <SparkCursor />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <script src="https://itn-annota.vercel.app/embed.js" async></script>

        {/* GA4 (place here) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { anonymize_ip: true });
          `}
        </Script>

        {/* Missing heart-svg required by main.js */}
        <div id="heart-svg" className="heart-svg"></div>

        <div
          id="page-wrapper"
          className="w-full flex flex-col min-h-screen overflow-hidden !filter-none"
        >
          <Header services={services} />
          <br />
          <br />
          <Toaster position="top-right" reverseOrder={false} />
          <ScriptRefresh />

          <main className="grow">{children}</main>

          <Footer />
        </div>

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" />
        <Script src="/lib/main.js" />
      </body>
    </html>
  );
}
