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
                  <div className="megamenu-container-1">
                    <Link
                      href="/services"
                      className={isActive("/services") ? "active" : "" }
                    >
                      Services
                    </Link>
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
                                  <Link href="/">Website Development</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Static & Dynamic Websites
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/"> WordPress & Shopify </Link>
                                  </li>
                                  <li>
                                    <Link href="/">E-commerce Development</Link>
                                  </li>
                                  <li>
                                    <Link href="/"> Landing Pages </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
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
                                  <Link href="/">Mobile App Development</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Android App Development
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/"> iOS App Development </Link>
                                  </li>
                                  {/* <li>
                                    <Link href="/">
                                      Cross-Platform Apps (Flutter/React Native)
                                    </Link>
                                  </li> */}
                                  <li>
                                    <Link href="/">
                                      
                                      UI/UX for Mobile Apps
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
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
                                  <Link href="/">Graphics Designing</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">Logo Designing</Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Business Card & Stationery Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Social Media Post Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/"> Brochures & Flyers </Link>
                                  </li>
                                  <li>
                                    <Link href="/">Banner & Poster Design</Link>
                                  </li>
                                  <li>
                                    <Link href="/">
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
                                  <Link href="/">UI/UX Designing</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Wireframing & Prototyping
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      
                                      Mobile & Web UI Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Dashboard Interface Design
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      
                                      User Flow Optimization
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">Usability Testing</Link>
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
                                  <Link href="/">
                                    Search Engine Optimization (SEO)
                                  </Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">On-Page SEO</Link>
                                  </li>
                                  <li>
                                    <Link href="/"> Off-Page SEO</Link>
                                  </li>
                                  <li>
                                    <Link href="/">Technical SEO</Link>
                                  </li>
                                  <li>
                                    <Link href="/">Keyword Research </Link>
                                  </li>
                                  <li>
                                    <Link href="/">Competitor Analysis</Link>
                                  </li>
                                  <li>
                                    <Link href="/">Local SEO</Link>
                                  </li>
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
                                  <Link href="/">Digital Marketing</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Pay-Per-Click Advertising (Google Ads)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Social Media Ads (Meta, Instagram)
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">Email Marketing</Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Conversion Rate Optimization
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">Retargeting Campaigns</Link>
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
                                  <Link href="/">Social Media Management</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Account Setup & Optimization
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Content Creation & Scheduling
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Monthly Calendars & Strategy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/"> Hashtag Research</Link>
                                  </li>
                                  <li>
                                    <Link href="/">
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
                                  <Link href="/">E-commerce Solutions</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Shopify, WooCommerce Setup
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      
                                      Product Upload & Catalog Management
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Payment Gateway Integration
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Custom Features & Plugins
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      nventory Management Systems
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
                                  <Link href="/">Branding & Identity</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">Brand Strategy</Link>
                                  </li>
                                  <li>
                                    <Link href="/">Logo & Visual Identity</Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Color Palette & Typography
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">Brand Guidelines</Link>
                                  </li>
                                  <li>
                                    <Link href="/">Rebranding Services</Link>
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
                                  <Link href="/">
                                    Custom Software Development
                                  </Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Business Automation Tools
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">CRM & ERP Systems</Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Inventory Management Systems
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Cloud-Based Applications
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
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
                                  <Link href="/">IT Consulting</Link>
                                </h4>
                                <ul className="ul-mega-menu-list">
                                  <li>
                                    <Link href="/">
                                      Digital Transformation Strategy
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Tech Stack Recommendations
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
                                      Infrastructure & Security Audit
                                    </Link>
                                  </li>
                                  <li>
                                    <Link href="/">
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
