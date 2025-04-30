import { Plus_Jakarta_Sans, Kumbh_Sans, Quicksand } from "next/font/google";
import "./globals.css";
import BootstrapClient from "./bootstrap-client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Preloader from "@/components/Preloader";
import Sidebar from "@/components/Sidebar";
import Search from "@/components/Search";
import { Toaster } from 'react-hot-toast';
import Script from "next/script";

export const metadata = {
  title: "Innovating the Future of Tech | ITnnovator",
  description: "ITnnovator is a cutting-edge digital agency delivering web design, development, branding, and digital marketing solutions tailored for business growth.",
  keywords: ["ITnnovator", "digital agency", "web development", "branding", "SEO services", "UI/UX", "software development"],
  authors: [{ name: "ITnnovator", url: "https://itnnovator.com" }],
  creator: "ITnnovator",
  publisher: "ITnnovator",
  robots: "index, follow",
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "ITnnovator | Innovating the Future of Tech",
    description: "Transforming brands with design, development, and marketing expertise.",
    url: "https://itnnovator.com",
    siteName: "ITnnovator",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ITnnovator Open Graph Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ITnnovator | Innovating the Future of Tech",
    description: "A top-tier agency delivering innovative digital solutions.",
    creator: "@itnnovator",
    images: ["/og-image.jpg"],
  },
};

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
});

const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh",
  display: "swap",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
  display: "swap",
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        {/* Google Tag Manager */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M6M4F75H');
          `}
        </Script>
      </head>
      <body className={`${plusJakarta.variable} ${kumbh.variable} ${quicksand.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6M4F75H"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/* Toast container */}
        <Toaster position="top-right" reverseOrder={false} />
        <BootstrapClient />
        <Preloader />
        <Sidebar />
        <Search />
        <Header />
        <main id="content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
