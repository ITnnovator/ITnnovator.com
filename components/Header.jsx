"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // <-- Import this

export default function Header() {
  const pathname = usePathname(); // <-- Get current path

  useEffect(() => {
    // HEADER NAV IN MOBILE
    const ulSidebar = document.querySelector(".ul-sidebar");
    const ulSidebarOpener = document.querySelector(".ul-header-sidebar-opener");
    const ulSidebarCloser = document.querySelector(".ul-sidebar-closer");
    const ulMobileMenuContent = document.querySelector(
      ".to-go-to-sidebar-in-mobile"
    );
    const ulHeaderNavMobileWrapper = document.querySelector(
      ".ul-sidebar-header-nav-wrapper"
    );
    const ulHeaderNavOgWrapper = document.querySelector(
      ".ul-header-nav-wrapper"
    );

    function updateMenuPosition() {
      if (
        !ulMobileMenuContent ||
        !ulHeaderNavMobileWrapper ||
        !ulHeaderNavOgWrapper
      )
        return;

      if (window.innerWidth < 992) {
        ulHeaderNavMobileWrapper.appendChild(ulMobileMenuContent);
      } else {
        ulHeaderNavOgWrapper.appendChild(ulMobileMenuContent);
      }
    }

    updateMenuPosition();
    window.addEventListener("resize", updateMenuPosition);

    if (ulSidebarOpener && ulSidebar) {
      ulSidebarOpener.addEventListener("click", () => {
        ulSidebar.classList.add("active");
      });
    }

    if (ulSidebarCloser && ulSidebar) {
      ulSidebarCloser.addEventListener("click", () => {
        ulSidebar.classList.remove("active");
      });
    }

    const ulHeaderNavMobile = document.querySelector(".ul-header-nav");
    if (ulHeaderNavMobile) {
      const ulHeaderNavMobileItems =
        ulHeaderNavMobile.querySelectorAll(".has-sub-menu");
      ulHeaderNavMobileItems.forEach((item) => {
        if (window.innerWidth < 992) {
          item.addEventListener("click", () => {
            item.classList.toggle("active");
          });
        }
      });
    }

    const ulHeaderSearchOpener = document.querySelector(
      ".ul-header-search-opener"
    );
    const ulHeaderSearchCloser = document.querySelector(".ul-search-closer");
    if (ulHeaderSearchOpener) {
      ulHeaderSearchOpener.addEventListener("click", () => {
        const wrapper = document.querySelector(".ul-search-form-wrapper");
        if (wrapper) wrapper.classList.add("active");
      });
    }

    if (ulHeaderSearchCloser) {
      ulHeaderSearchCloser.addEventListener("click", () => {
        const wrapper = document.querySelector(".ul-search-form-wrapper");
        if (wrapper) wrapper.classList.remove("active");
      });
    }

    const ulHeader = document.querySelector(".to-be-sticky");
    const handleScroll = () => {
      if (ulHeader) {
        if (window.scrollY > 80) {
          ulHeader.classList.add("sticky");
        } else {
          ulHeader.classList.remove("sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", updateMenuPosition);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (href) => pathname === href;

  return (
    <header className="ul-header">
      <div className="ul-header-bottom to-be-sticky wow animate__slideInDown">
        <div className="ul-header-bottom-wrapper ul-header-container">
          <div className="logo-container">
            <Link href="/" className="d-inline-block">
              <img
                src="/webImages/itnnovatorLogoLight.png"
                alt="itnnovatorLogoLight"
                className="logo"
              />
            </Link>
          </div>

          <div className="ul-header-bottom-right">
            <div className="ul-header-nav-wrapper">
              <div className="to-go-to-sidebar-in-mobile">
                <nav className="ul-header-nav">
                  <Link href="/" className={isActive("/") ? "active" : ""}>
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={isActive("/about") ? "active" : ""}
                  >
                    About
                  </Link>
                  <div className="megamenu-container-1 has-sub-menu">
                    <Link
                      href="/services"
                      className={
                        isActive("/services") ? "active" : "service-d-none"
                      }
                    >
                      Services
                    </Link>
                    <a
                      className="d-lg-none d-flex justify-content-between"
                      role="button"
                    >
                      Services <i className="flaticon-right-arrow"></i>
                    </a>
                    <div className="ul-header-submenu d-lg-none">
                      <ul>
                        <li>
                          <a href="/services/web-development">Website Development</a>
                        </li>
                        <li>
                          <a href="/services/app-development">Mobile App Development</a>
                        </li>
                        <li>
                          <a href="/services/graphics-design">Graphics Designing</a>
                        </li>
                        <li>
                          <a href="/services/ui-ux-design">UI/UX Designing</a>
                        </li>
                        <li>
                          <a href="/services/seo-services">Search Engine Optimization (SEO)</a>
                        </li>
                        <li>
                          <a href="/services/digital-marketing">Digital Marketing</a>
                        </li>
                        <li>
                          <a href="/services/social-media-management">Social Media Management</a>
                        </li>
                        <li>
                          <a href="/services/ecommerce-solutions">E-commerce Solutions</a>
                        </li>
                        <li>
                          <a href="/services/branding-identity">Branding & Identity</a>
                        </li>
                        <li>
                          <a href="/services/custom-software-development">Custom Software Development</a>
                        </li>
                        <li>
                          <a href="/services/it-consulting">IT Consulting</a>
                        </li>
                      </ul>
                    </div>
                    <div className="megamenu-container ">
                      <div className="mega-menu">
                        <div className="container">
                          <div className="lightbg_menu row">
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                              <div className="ul-mega-menu-item">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/web-development.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/web-development">Website Development</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/static-dynamic-websites">
                                      Static & Dynamic Websites
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/cms-development">CMS-Based Development (WordPress, Shopify)</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/ecommerce-development">E-commerce Development</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/landing-pages">Landing Pages </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/website-maintenance">
                                      Website Maintenance & Support
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ul-mega-menu-item menu-padding-top">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/mobile-app-development.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/app-development">Mobile App Development</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">
                                      Android App Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">iOS App Development </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Cross-Platform Apps (Flutter/React Native)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">UI/UX for Mobile Apps</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      App Deployment & Support
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ul-mega-menu-item menu-padding-top border-0">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/graphic-design.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/graphics-design">Graphics Designing</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">Logo Designing</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Business Card & Stationery Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Social Media Post Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/"> Brochures & Flyers </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Banner & Poster Design</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Product Packaging Design
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                              <div className="ul-mega-menu-item">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/ui.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/ui-ux-design">UI/UX Designing</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">
                                      Wireframing & Prototyping
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Mobile & Web UI Design</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Dashboard Interface Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">User Flow Optimization</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Usability Testing</Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ul-mega-menu-item menu-padding-top">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/search-engine.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/seo-services">
                                    Search Engine Optimization (SEO)
                                  </Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">On-Page SEO</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Off-Page SEO</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Technical SEO</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Keyword Research </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Competitor Analysis</Link>
                                  </li>
                                  {/* <li>
                                    <Link href="/services/">Local SEO</Link>
                                  </li> */}
                                </ul>
                              </div>
                              <div className="ul-mega-menu-item menu-padding-top border-0">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/social-media.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/digital-marketing">Digital Marketing</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">
                                      Pay-Per-Click Advertising (Google Ads)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Social Media Ads (Meta, Instagram)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Email Marketing</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Conversion Rate Optimization
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Retargeting Campaigns</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                              <div className="ul-mega-menu-item">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/web-development.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/social-media-management">Social Media Management</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">
                                      Account Setup & Optimization
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Content Creation & Scheduling
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Monthly Calendars & Strategy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Hashtag Research</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Page Insights & Reporting
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ul-mega-menu-item menu-padding-top">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/ecommerce.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/ecommerce-solutions">E-commerce Solutions</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">
                                      Shopify, WooCommerce Setup
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Product Upload & Catalog Management
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Payment Gateway Integration
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Custom Features & Plugins
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Inventory Management Systems
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ul-mega-menu-item menu-padding-top border-0">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/branding.png"
                                      alt="web-development"
                                    />
                                  </span>
                                  <Link href="/services/branding-identity">Branding & Identity</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">Brand Strategy</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Logo & Visual Identity</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Color Palette & Typography
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Brand Guidelines</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">Rebranding Services</Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                              <div className="ul-mega-menu-item">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/coding.png"
                                      alt="custom-software-development"
                                    />
                                  </span>
                                  <Link href="/services/custom-software-development">
                                    Custom Software Development
                                  </Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">
                                      Business Automation Tools
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">CRM & ERP Systems</Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Inventory Management Systems
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Cloud-Based Applications
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      API Development & Integration
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                              <div className="ul-mega-menu-item menu-padding-top border-0">
                                <h4>
                                  <span>
                                    <img
                                      src="/webImages/icons/consultant.png"
                                      alt="it-consulting"
                                    />
                                  </span>
                                  <Link href="/services/it-consulting">IT Consulting</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/services/">
                                      Digital Transformation Strategy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Tech Stack Recommendations
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Infrastructure & Security Audit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/services/">
                                      Project Planning & Roadmapping
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/blog"
                    className={isActive("/blog") ? "active" : ""}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/contact"
                    className={isActive("/contact") ? "active" : ""}
                  >
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
            {/* search */}
            {/* <button className="ul-header-search-opener">
              <i className="flaticon-search"></i>
            </button> */}
            <Link
              href="/contact"
              className="ul-btn d-sm-inline-flex d-xxs-none"
            >
              <span>
                Get in Touch <i className="flaticon-top-right"></i>
              </span>
            </Link>
            <button className="ul-header-sidebar-opener d-lg-none d-inline-flex">
              <i className="flaticon-right-arrow"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
