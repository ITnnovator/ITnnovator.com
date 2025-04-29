"use client";

import AboutSection from "@/components/Home/AboutSection";
import Banner from "@/components/Home/Banner";
import BlogSection from "@/components/Home/BlogSection";
import ClientSection from "@/components/Home/ClientSection";
import Faq from "@/components/Home/Faq";
import Offerings from "@/components/Home/Offerings";
import ServiceSection from "@/components/Home/ServiceSection";
import TestimonialSwiper from "@/components/Home/TestimonialSwiper";
import Ticker from "@/components/Home/Ticker";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import WorkProcess from "@/components/Home/WorkProcess";

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

      {/* WhyChooseUs Section */}
      <WhyChooseUs />

      {/* WorkProcess Section */}
      <WorkProcess />

      {/* Offerings Section */}
      <Offerings />

      {/* Faq Section */}
      <Faq />

      {/* TestimonialSwiper Section */}
      <TestimonialSwiper />

      {/* BlogSection Section */}
      {/* <BlogSection /> */}

      {/* ClientSection Section */}
      <ClientSection />
    </>
  );
}
