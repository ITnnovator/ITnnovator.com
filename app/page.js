"use client";

import Link from "next/link";
import { useEffect } from "react";
import Swiper from "swiper";
import 'swiper/css';

export default function HomePage() {
  useEffect(() => {
    // ✅ Swiper initialization
    if (typeof window !== "undefined" && document.querySelector(".ul-banner-slider")) {
      new Swiper(".ul-banner-slider", {
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 700,
        allowTouchMove: false,
      });
    }
  }, []);


  return (
    //  <!-- BANNER SECTION START -->
    <section className="ul-banner">
      <div className="ul-banner-container">
        <div className="ul-banner-txt">
          <span className="ul-banner-sub-title">Amazing Solutions For business</span>
          <h1 className="ul-banner-title">Trusted IT support Designed to Safeguard Your Business</h1>
          <Link href="/services" className="ul-banner-btn">Our Services <i className="flaticon-top-right"></i> </Link>
        </div>

        {/* <!-- vectors --> */}
        <div className="ul-banner-vectors">
          <img src="webImages/banner-vector-2.svg" alt="Vector" className="vector-1" />
          <img src="webImages/banner-vector-3.svg" alt="Vector" className="vector-2" />
        </div>

        {/* <!-- imgs --> */}
        <div className="ul-banner-slider-wrapper">
          {/* <!-- img slider 1 --> */}
          <div className="ul-banner-slider swiper" id="ul-banner-slider-1" aria-label="Banner Slider">
            <div className="swiper-wrapper">
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-1.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-2.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-3.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/service-details.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- img slider 2 --> */}
          <div className="ul-banner-slider swiper" id="ul-banner-slider-2" aria-label="Banner Slider">
            <div className="swiper-wrapper">
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-2.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-3.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/service-details.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-1.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- img slider 3 --> */}
          <div className="ul-banner-slider swiper" id="ul-banner-slider-3" aria-label="Banner Slider">
            <div className="swiper-wrapper">
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-3.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/service-details.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-1.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-2.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>

          {/* <!-- img slider 4 --> */}
          <div className="ul-banner-slider swiper" id="ul-banner-slider-4" aria-label="Banner Slider">
            <div className="swiper-wrapper">
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/service-details.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-1.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-2.jpg" alt="Image" />
                </div>
              </div>
              {/* <!-- single img --> */}
              <div className="swiper-slide">
                <div className="ul-banner-img-slide">
                  <img src="webImages/blog-b-3.jpg" alt="Image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- stats --> */}
        <div className="ul-banner-stats">
          {/* <!-- single stat --> */}
          <div className="ul-banner-stat">
            <span className="ul-banner-stat-number">20.5K</span>
            <span className="ul-banner-stat-text">Projects Done</span>
          </div>
          {/* <!-- single stat --> */}
          <div className="ul-banner-stat">
            <span className="ul-banner-stat-number">100.5K</span>
            <span className="ul-banner-stat-text">Happy Clients</span>
          </div>
          {/* <!-- single stat --> */}
          <div className="ul-banner-stat">
            <span className="ul-banner-stat-number">150.5K</span>
            <span className="ul-banner-stat-text">Team Members</span>
          </div>
          {/* <!-- single stat --> */}
          <div className="ul-banner-stat">
            <a href="https://youtu.be/WUB2pSkwN2M?si=mE9CqwAUIjpYiwGm" data-fslightbox="banner-video"
              className="ul-banner-stat-btn">
              <span className="btn-txt">Play Reel</span>
              <i className="flaticon-play-button-arrowhead"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
    // <!-- BANNER SECTION END --> 
  );
}
