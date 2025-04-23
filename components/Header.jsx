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
                  <Link
                    href="/services"
                    className={isActive("/services") ? "active" : ""}
                  >
                    Services
                  </Link>
                  <Link
                    href="/blog"
                    className={isActive("/blog") ? "active" : ""}
                  >
                    Blog
                  </Link>
                  <div className="megamenu-container">
                    <Link
                      href="/contact"
                      className={isActive("/contact") ? "active" : ""}
                    >
                      Contact
                    </Link>
                    <div className="mega-menu">
                      <div className="container">
                        <div className="lightbg_menu row">
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="ul-mega-menu-item">
                              <h4> <Link href="/"> <span><img src="/webImages/icons/web-development.png" alt="" /></span>  Website Development </Link></h4>
                              <ul className="ul-mega-menu-list">
                                <li>
                                  <Link href="/">Static & Dynamic Websites</Link>
                                </li>
                                <li>
                                  <Link href="/"> WordPress & Shopify </Link>
                                </li>
                                <li>
                                  <Link href="/">E-commerce Development</Link>
                                </li>
                                <li><Link href="/"> Landing Pages </Link></li>
                                <li><Link href="/"> Website Maintenance & Support  </Link></li>
                              </ul>
                            </div>
                            <div className="ul-mega-menu-item menu-padding-top">
                              <h4>Services</h4>
                              <ul className="ul-mega-menu-list">
                                <li>
                                  <Link href="/services">Service 1</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 2</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 3</Link>
                                </li>
                              </ul>
                            </div>
                            <div className="ul-mega-menu-item menu-padding-top">
                              <h4>Services</h4>
                              <ul className="ul-mega-menu-list">
                                <li>
                                  <Link href="/services">Service 1</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 2</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 3</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="ul-mega-menu-item">
                              <h4>Services</h4>
                              <ul className="ul-mega-menu-list">
                                <li>
                                  <Link href="/services">Service 1</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 2</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 3</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="ul-mega-menu-item">
                              <h4>Services</h4>
                              <ul className="ul-mega-menu-list">
                                <li>
                                  <Link href="/services">Service 1</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 2</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 3</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                            <div className="ul-mega-menu-item">
                              <h4>Services</h4>
                              <ul className="ul-mega-menu-list">
                                <li>
                                  <Link href="/services">Service 1</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 2</Link>
                                </li>
                                <li>
                                  <Link href="/services">Service 3</Link>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
