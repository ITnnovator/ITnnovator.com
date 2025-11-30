'use client';

import { useEffect } from 'react';
import Link from "next/link";

export default function Faqs() {
  useEffect(() => {
    const accordionContainers = document.querySelectorAll('.ul-accordion');

    accordionContainers.forEach((accordionContainer) => {
      const accordionItems = accordionContainer.querySelectorAll('.ul-single-accordion-item');

      accordionItems.forEach((accordionItem) => {
        const header = accordionItem.querySelector('.ul-single-accordion-item__header');

        header.addEventListener('click', () => {
          const isOpen = accordionItem.classList.contains('open');

          accordionItems.forEach((item) => item.classList.remove('open'));

          if (!isOpen) {
            accordionItem.classList.add('open');
          }
        });
      });
    });

    // Cleanup (optional, for safety)
    return () => {
      accordionContainers.forEach((accordionContainer) => {
        const accordionItems = accordionContainer.querySelectorAll('.ul-single-accordion-item');
        accordionItems.forEach((accordionItem) => {
          const header = accordionItem.querySelector('.ul-single-accordion-item__header');
          header.replaceWith(header.cloneNode(true)); // remove all listeners
        });
      });
    };
  }, []);
  return (
    // <!-- FAQ SECTION START -->
    <section className="ul-inner-faq ul-section-spacing">
      <div className="ul-container">
        <div className="row row-cols-md-2 row-cols-1 ul-bs-row align-items-start">
          <div className="col">
            <div className="ul-inner-faq-txt">
              <div className="ul-accordion">
                <div className="ul-single-accordion-item open">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What web development services do you offer?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      We provide complete website solutions including static & dynamic websites, CMS development (WordPress/Shopify), e-commerce platforms, landing pages, and ongoing maintenance with 24/7 support.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        Can you develop both iOS and Android apps?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Absolutely! We specialize in native Android and iOS development, plus cross-platform solutions using Flutter/React Native for cost-effective apps that work seamlessly on both platforms.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What's included in your UI/UX design services?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Our end-to-end UI/UX process includes wireframing, prototyping, mobile & web interface design, dashboard creation, user flow optimization, and usability testing to ensure exceptional digital experiences.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        How can your AI services help my business?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      We develop custom AI solutions including chatbots, predictive analytics, computer vision, and NLP systems that automate processes, enhance decision-making, and improve customer experiences.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What e-commerce platforms do you work with?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      We're experts in Shopify and WooCommerce development, offering complete solutions from setup to product management, payment gateway integration, and custom plugin development.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        How does your SEO service work?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Our comprehensive SEO approach combines technical optimization, content strategy, keyword research, and link building to improve your search rankings and drive qualified traffic.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item d-lg-none">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What graphic design services do you provide?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Our design team creates logos, business cards, social media graphics, brochures, banners, and product packaging that strengthen your brand identity across all touchpoints.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item d-lg-none">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        Can you develop custom business software?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Yes! We build tailored solutions including CRM/ERP systems, inventory management, business automation tools, and cloud applications that integrate with your existing infrastructure.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item d-lg-none">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What's your digital marketing approach?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      We combine PPC advertising, social media campaigns, email marketing, and conversion optimization to create data-driven strategies that deliver measurable ROI.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item d-lg-none">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        Do you offer branding services?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Absolutely. From brand strategy and logo design to complete visual identity systems and guidelines, we help establish memorable brands that resonate with your audience.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item d-lg-none">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What IT consulting services do you provide?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Our consultants help with digital transformation strategies, tech stack selection, infrastructure audits, and project roadmapping to align technology with your business goals.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item d-lg-none">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        How can I get started with your services?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Simply contact us for a free consultation. We'll discuss your needs, propose solutions, and create a customized plan that fits your budget and timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col d-none d-md-block">
            <div className="ul-inner-faq-txt">
              <div className="ul-accordion">
                <div className="ul-single-accordion-item open">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What graphic design services do you provide?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Our design team creates logos, business cards, social media graphics, brochures, banners, and product packaging that strengthen your brand identity across all touchpoints.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        Can you develop custom business software?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Yes! We build tailored solutions including CRM/ERP systems, inventory management, business automation tools, and cloud applications that integrate with your existing infrastructure.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What's your digital marketing approach?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      We combine PPC advertising, social media campaigns, email marketing, and conversion optimization to create data-driven strategies that deliver measurable ROI.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        Do you offer branding services?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Absolutely. From brand strategy and logo design to complete visual identity systems and guidelines, we help establish memorable brands that resonate with your audience.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        What IT consulting services do you provide?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Our consultants help with digital transformation strategies, tech stack selection, infrastructure audits, and project roadmapping to align technology with your business goals.
                    </p>
                  </div>
                </div>

                <div className="ul-single-accordion-item">
                  <div className="ul-single-accordion-item__header">
                    <div className="left">
                      <h3 className="ul-single-accordion-item__title">
                        How can I get started with your services?
                      </h3>
                    </div>
                    <span className="icon">
                      <i className="flaticon-plus"></i>
                    </span>
                  </div>

                  <div className="ul-single-accordion-item__body">
                    <p>
                      Simply contact us for a free consultation. We'll discuss your needs, propose solutions, and create a customized plan that fits your budget and timeline.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- cta --> */}
        <div className="ul-faq-cta ul-section-spacing pb-0">
          <h2 className="ul-section-title">Still Have Questions?</h2>
          <p className="ul-faq-cta-descr">
            We're here to help you navigate your digital transformation journey. Whether you need technical advice or want to discuss a project, our experts are ready to assist.
          </p>
          <Link href="contact" className="ul-btn">
            <span>
              Ask Any Question <i className="flaticon-top-right"></i>
            </span>
          </Link>
        </div>
      </div>
    </section>
    // <!-- FAQ SECTION END -->
  );
}
