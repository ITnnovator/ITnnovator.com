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
                  <div className="megamenu-wrapper">
                    <Link
                      href="/contact"
                      className={isActive("/contact") ? "active" : ""}
                    >
                      Contact
                    </Link>
                    <div class="mega_menu">
                      <div class="container">
                        <div class="lightbg_menu row">
                          {/* <!-- Left Banner / Title Column --> */}
                          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                            <div class="category_intro">
                              <h4 class="main-title">Built to Win</h4>
                              <p>
                                Transforming business with our future-ready tech
                                solutions. Get custom products for accelerated
                                digital transformation across industries
                                globally.
                              </p>
                              <div class="menu_image">
                                <img
                                  src="/static/your-image.webp"
                                  alt="mobile app development company"
                                  width="100%"
                                  loading="lazy"
                                />
                              </div>
                            </div>
                          </div>

                          {/* <!-- Menu Column Template --> */}
                          <div class="col-xxl-3 col-xl-3 col-lg-3 col-md-3 col-12">
                            {/* <!-- Category Block --> */}
                            <div class="category_block">
                              <h4>
                                <a href="/mobile-app-development">
                                  Mobile App Development
                                </a>
                              </h4>
                              <ul class="menu_items">
                                <li>
                                  <a href="/iphone-app-development">
                                    iOS App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/android-app-development">
                                    Android App Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/cross-platform-app-development">
                                    Cross Platform App Development
                                  </a>
                                </li>
                              </ul>
                            </div>

                            {/* <!-- Repeat category_block for other categories --> */}
                            <div class="category_block">
                              <h4>
                                <a href="/game-development">Game Development</a>
                              </h4>
                              <ul class="menu_items">
                                <li>
                                  <a href="/2d-game-development">
                                    2D Game Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/3d-game-development">
                                    3D Game Development
                                  </a>
                                </li>
                                <li>
                                  <a href="/web3-game-development">
                                    Web3 Game Development
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          {/* <!-- Repeat columns as needed --> */}
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
