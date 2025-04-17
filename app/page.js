"use client";

import AboutSection from "@/components/Home/AboutSection";
import Banner from "@/components/Home/Banner";
import ServiceSection from "@/components/Home/ServiceSection";
import Ticker from "@/components/Home/Ticker";

export default function HomePage() {
  return (
    <>
      {/* Home Banner */}
      <Banner />

      {/* About Section */}
      <AboutSection />

      {/* Ticker Section */}
      <Ticker />

      {/* Ticker Section */}
      <ServiceSection />
    </>
  );
}
