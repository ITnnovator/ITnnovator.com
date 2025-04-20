"use client";
import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function TestimonialService() {

  useEffect(() => {
    if (typeof window !== "undefined") {
      document
        .querySelectorAll(".ul-inner-testimonial-slider")
        .forEach((el) => {
          new Swiper(el, {
            modules: [Autoplay],
            slidesPerView: 2,
            spaceBetween: 27,
            loop: true,
            speed: 700,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            },
          });
        });
    }
  }, []);

  return (
    // <!-- TESTIMONIAL SECTION START -->
    <section className="ul-inner-testimonial ul-section-spacing wow animate__fadeInUp">
      <div className="ul-container">
        <div className="ul-section-heading justify-content-center text-center">
          <div className="left">
            <span className="ul-section-sub-title">Our TESTIMONIALs</span>
            <h2 className="ul-section-title">Satisfied Clients Worldwide</h2>
          </div>
        </div>

        <div className="ul-inner-testimonial-slider swiper">
          <div className="swiper-wrapper">
            {/* <!-- single testimony --> */}
            <div className="swiper-slide">
              <div className="ul-inner-testimony">
                <div className="ul-inner-testimony-reviewer-img">
                  <img src="webImages/user.jpg" alt="Reviewer Image" />
                </div>

                <div className="ul-inner-testimony-txt">
                  <div className="ul-inner-testimony-heading">
                    <div className="ul-inner-testimony-icon">
                      <i className="flaticon-bubble-chat"></i>
                    </div>

                    <div className="ul-inner-testimony-star">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                  </div>
                  <p className="ul-inner-testimony-descr">
                    What do I really want? What does success look like to me?
                    Why do I want a particular thing? How will this achievement
                    change.
                  </p>

                  <div className="ul-inner-testimony-reviewer-info">
                    <span className="ul-inner-testimony-reviewer-name">
                      John Doe
                    </span>
                    <span>/</span>
                    <span className="ul-inner-testimony-reviewer-designation">
                      CEO & Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- single testimony --> */}
            <div className="swiper-slide">
              <div className="ul-inner-testimony">
                <div className="ul-inner-testimony-reviewer-img">
                  <img src="webImages/user-5.jpg" alt="Reviewer Image" />
                </div>

                <div className="ul-inner-testimony-txt">
                  <div className="ul-inner-testimony-heading">
                    <div className="ul-inner-testimony-icon">
                      <i className="flaticon-bubble-chat"></i>
                    </div>

                    <div className="ul-inner-testimony-star">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                  </div>
                  <p className="ul-inner-testimony-descr">
                    What do I really want? What does success look like to me?
                    Why do I want a particular thing? How will this achievement
                    change.
                  </p>

                  <div className="ul-inner-testimony-reviewer-info">
                    <span className="ul-inner-testimony-reviewer-name">
                      John Doe
                    </span>
                    <span>/</span>
                    <span className="ul-inner-testimony-reviewer-designation">
                      CEO & Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- single testimony --> */}
            <div className="swiper-slide">
              <div className="ul-inner-testimony">
                <div className="ul-inner-testimony-reviewer-img">
                  <img src="webImages/user.jpg" alt="Reviewer Image" />
                </div>

                <div className="ul-inner-testimony-txt">
                  <div className="ul-inner-testimony-heading">
                    <div className="ul-inner-testimony-icon">
                      <i className="flaticon-bubble-chat"></i>
                    </div>

                    <div className="ul-inner-testimony-star">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                  </div>
                  <p className="ul-inner-testimony-descr">
                    What do I really want? What does success look like to me?
                    Why do I want a particular thing? How will this achievement
                    change.
                  </p>

                  <div className="ul-inner-testimony-reviewer-info">
                    <span className="ul-inner-testimony-reviewer-name">
                      John Doe
                    </span>
                    <span>/</span>
                    <span className="ul-inner-testimony-reviewer-designation">
                      CEO & Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- single testimony --> */}
            <div className="swiper-slide">
              <div className="ul-inner-testimony">
                <div className="ul-inner-testimony-reviewer-img">
                  <img src="webImages/user-5.jpg" alt="Reviewer Image" />
                </div>

                <div className="ul-inner-testimony-txt">
                  <div className="ul-inner-testimony-heading">
                    <div className="ul-inner-testimony-icon">
                      <i className="flaticon-bubble-chat"></i>
                    </div>

                    <div className="ul-inner-testimony-star">
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                      <i className="flaticon-star"></i>
                    </div>
                  </div>
                  <p className="ul-inner-testimony-descr">
                    What do I really want? What does success look like to me?
                    Why do I want a particular thing? How will this achievement
                    change.
                  </p>

                  <div className="ul-inner-testimony-reviewer-info">
                    <span className="ul-inner-testimony-reviewer-name">
                      John Doe
                    </span>
                    <span>/</span>
                    <span className="ul-inner-testimony-reviewer-designation">
                      CEO & Founder
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // {/* <!-- TESTIMONIAL SECTION END --> */}
  );
}
