"use client";

import { useEffect } from "react";

export default function Header() {
    useEffect(() => {
        const nav = document.querySelector("#page-header");
        if (!nav) return;

        const toggleStick = () => {
            if (window.scrollY > 10) {
                nav.classList.add("is-stuck");
            } else {
                nav.classList.remove("is-stuck");
            }
        };

        window.addEventListener("scroll", toggleStick, { passive: true });
        toggleStick(); // run once on load

        return () => {
            window.removeEventListener("scroll", toggleStick);
        };
    }, []);
    return (
        <>
            <div className="fixed h-[6rem] md:h-[8rem] left-0 top-0 z-[70] flex justify-between pl-5 md:pl-12 text-white mix-blend-difference">
                <div className="lg:flex lg:items-center">
                    <a
                        href="/"
                        className="block w-52 main_logo animated-lg heart-svg-large-wrapper"
                    >
                        <img
                            className="w-full h-auto block"
                            src="/webImages/logo.png"
                            alt="Itnnovator — Digital Solutions Logo"
                            width="82"
                            height="47"
                        />
                    </a>
                    <h1
                        id="js-heading-one-scroll"
                        className="leading-none relative lg:top-0.5 mt-3 lg:ml-4 ml-1"
                    >
                        Digital Partner / Build. Launch. Grow.
                    </h1>
                </div>
            </div>

            <nav className="hidden md:flex fixed h-[8rem] right-32 top-0 z-[60] md:ml-auto max-w-[calc(100%-30rem)] justify-end items-center text-white mix-blend-difference" style={{ zIndex: " 99;" }}>
                <ul className="flex justify-end text-normal text-lg">
                    <li className="px-5 relative">
                        <a
                            className="transition-colors duration-300 ease-in-out hover:text-gray-300"
                            href="/contact"
                        >
                            Contact us
                        </a>
                    </li>
                </ul>
            </nav>

            <div className="fixed h-[4rem] md:h-[8rem] right-6 md:right-12 top-0 z-[70] flex justify-between items-center py-10 text-white mix-blend-difference">
                <button
                    type="button"
                    id="js-menu-toggler"
                    className="group py-0.5 pr-7 relative md:text-lg after:content-['_'] after:absolute after:w-full after:h-px after:bg-white after:left-0 after:bottom-0"
                >
                    Menu
                    <span
                        className="absolute h-[0.07rem] w-[1rem] md:h-0.5 md:w-[1.0625rem] right-0 top-1/2 -mt-px bg-white block group-[.is-active]:rotate-45 transition-transform duration-200 ease-in-out"
                        aria-hidden="true"
                    ></span>
                    <span
                        className="absolute w-[0.07rem] h-[0.96rem] md:h-4 md:w-0.5 right-2 top-1/2 -mt-2 bg-white block group-[.is-active]:rotate-45 transition-transform duration-200 ease-in-out"
                        aria-hidden="true"
                    ></span>
                </button>
            </div>

            <header
                id="page-header"
                className="fixed left-0 top-0 z-[60] w-full flex justify-between items-center pointer-events-none group-[.nav-active]:pointer-events-auto"
            >
                <nav className="w-full flex justify-between items-center relative px-12 py-10">
                    <div
                        id="js-menu-holder"
                        className="-translate-y-full bg-black border-b-2 border-gray-900 absolute top-0 left-0 w-full h-[100dvh] md:h-screen z-50  pt-[8.3rem] flex text-white"
                    >
                        <div className="w-full flex flex-col justify-between">
                            <div className="flex-1 flex items-center max-h-full overflow-y-visible px-12 xl:pl-0 lg:pr-[5rem] 2xl:pr-[20rem]">
                                <ul
                                    id="js-menu-list"
                                    className="relative text-silver-chalice max-w-sm 2x:max-w-md xl:mx-auto w-full text-[2.25rem] md:text-[3.25rem] font-bold pt-4"
                                >
                                    <li className="js-menu-item flex py-2 mt-0 last:text-2xl last:mt-5">
                                        <div className="js-menu-item--wrapper flex w-full">
                                            <a
                                                href="/cases"
                                                className="hover:text-white text-white md:text-silver-chalice group-[.hover]:text-white"
                                            >
                                                Cases
                                            </a>
                                        </div>
                                    </li>

                                    <li className="js-menu-item flex has-children group py-2 mt-0 last:text-2xl last:mt-5">
                                        <div className="js-menu-item--wrapper flex w-full">
                                            <a
                                                href="/services"
                                                className="hover:text-white text-white md:text-silver-chalice group-[.hover]:text-white"
                                            >
                                                Services
                                            </a>
                                            <span className="js-submenu-toggler text-royal-blue ml-auto md:ml-0 md:opacity-0 pl-0 group-[.hover]:opacity-100 group-[.hover]:pl-6 transition-all duration-500 ease-in-out">
                                                <svg
                                                    className="inline-block w-10 h-auto md:w-full"
                                                    preserveAspectRatio="none"
                                                    width="67"
                                                    height="37"
                                                    viewBox="0 0 67 37"
                                                    aria-hidden="true"
                                                >
                                                    <use href="/webImages/icons.svg#arrow-right-big"></use>
                                                </svg>
                                            </span>
                                        </div>

                                        <div className="submenu opacity-0 md:opacity-100 flex flex-col items-center md:justify-center bg-black md:bg-transparent fixed md:absolute min-h-full w-48 text-[1.425rem] md:text-[1.625rem] left-0 md:left-full top-0 w-full p-6 md:p-8 md:p-0 whitespace-nowrap font-semibold">
                                            <div className="flex items-center md:hidden self-start pt-20">
                                                <span className="js-submenu-close rotate-180 text-royal-blue md:opacity-0 pl-0 transition-all duration-500 ease-in-out">
                                                    <svg
                                                        className="inline-block w-10 h-auto"
                                                        preserveAspectRatio="none"
                                                        width="67"
                                                        height="37"
                                                        viewBox="0 0 67 37"
                                                        aria-hidden="true"
                                                    >
                                                        <use href="/webImages/icons.svg#arrow-right-big"></use>
                                                    </svg>
                                                </span>
                                                <div className="text-white text-[2.25rem] ml-6">
                                                    Services
                                                </div>
                                            </div>

                                            <ul className="w-full ml-[8rem] md:ml-0 py-0">
                                                <li className="py-1 group/item">
                                                    <a href="/services/web-development" className="hover:text-white">
                                                        Web Devlopment
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – Custom website development
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/ecommerce" className="hover:text-white">
                                                        E-commerce
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – Online store development
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/seo" className="hover:text-white">
                                                        SEO
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – Search engine optimization
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/product-design" className="hover:text-white">
                                                        Product Design
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – Intuitive UX & UI design
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/brand-systems" className="hover:text-white">
                                                        Brand Systems
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transitionall duration-500 ease-in-out">
                                                        – Scalable logos & visual identity
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/strategy" className="hover:text-white">
                                                        Strategy
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – In-depth analysis & planning
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/content" className="hover:text-white">
                                                        Content
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – Strategic storytelling & copywriting
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/growth" className="hover:text-white">
                                                        Growth
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – Data-driven marketing & leads
                                                    </span>
                                                </li>

                                                <li className="py-1 group/item">
                                                    <a href="/services/management" className="hover:text-white">
                                                        Management
                                                    </a>
                                                    <span className="hidden lg:inline text-lg 2xl:text-xl font-normal text-white/50 opacity-0 group-hover/item:opacity-100 group-hover/item:pl-2 transition-all duration-500 ease-in-out">
                                                        – Ongoing support & management
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className="js-menu-item flex py-2 mt-0 last:text-2xl last:mt-5">
                                        <div className="js-menu-item--wrapper flex w-full">
                                            <a
                                                href="/about"
                                                className="hover:text-white text-white md:text-silver-chalice group-[.hover]:text-white"
                                            >
                                                About Us
                                            </a>
                                        </div>
                                    </li>

                                    <li className="js-menu-item flex py-2 mt-0 last:text-2xl last:mt-5">
                                        <div className="js-menu-item--wrapper flex w-full">
                                            <a
                                                href="/team"
                                                className="hover:text-white text-white md:text-silver-chalice group-[.hover]:text-white"
                                            >
                                                Our Team
                                            </a>
                                        </div>
                                    </li>

                                    <li className="js-menu-item flex py-2 mt-0 last:text-2xl last:mt-5">
                                        <div className="js-menu-item--wrapper flex w-full">
                                            <a
                                                href="/contact"
                                                className="hover:text-white text-white md:text-silver-chalice group-[.hover]:text-white"
                                            >
                                                Contact
                                            </a>
                                        </div>
                                    </li>

                                    <li className="js-menu-item flex py-2 mt-0 last:text-2xl last:mt-5">
                                        <div className="js-menu-item--wrapper flex w-full">

                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div
                                id="js-bottom-header"
                                className="opacity-0 -translate-y-4 flex justify-between items-end pb-16 md:pb-20 px-6 md:px-12"
                            >
                                <div className="text-base md:text-lg lg:text-xl leading-relaxed md:leading-relaxed lg:leading-relaxed pt-10 -ml-8">
                                    <ul className="flex flex-col md:flex-row flex-wrap capitalize">
                                        <li className="px-8">
                                            <a
                                                target="_blank"
                                                className="js-hover-circle-animation inline-flex items-center hover-child-underline-animation text-inherit"
                                                href="https://www.facebook.com/itnnovator"
                                            >
                                                <span className="child relative inline-block">
                                                    Facebook
                                                </span>
                                                <span className="pl-4">
                                                    <svg
                                                        preserveAspectRatio="none"
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 13 13"
                                                        aria-hidden="true"
                                                    >
                                                        <use href="/webImages/icons.svg#arrow-right-up"></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="px-8">
                                            <a
                                                target="_blank"
                                                className="js-hover-circle-animation inline-flex items-center hover-child-underline-animation text-inherit"
                                                href="https://www.linkedin.com/company/itnnovator"
                                            >
                                                <span className="child relative inline-block">
                                                    LinkedIn
                                                </span>
                                                <span className="pl-4">
                                                    <svg
                                                        preserveAspectRatio="none"
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 13 13"
                                                        aria-hidden="true"
                                                    >
                                                        <use href="/webImages/icons.svg#arrow-right-up"></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        </li>
                                        <li className="px-8">
                                            <a
                                                target="_blank"
                                                className="js-hover-circle-animation inline-flex items-center hover-child-underline-animation text-inherit"
                                                href="https://www.instagram.com/itnnovator"
                                            >
                                                <span className="child relative inline-block">
                                                    Instagram
                                                </span>
                                                <span className="pl-4">
                                                    <svg
                                                        preserveAspectRatio="none"
                                                        width="13"
                                                        height="13"
                                                        viewBox="0 0 13 13"
                                                        aria-hidden="true"
                                                    >
                                                        <use href="/webImages/icons.svg#arrow-right-up"></use>
                                                    </svg>
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-lg xl:text-xl min-w-[8rem] leading-none md:pb-1.5">
                                    <span className="block mb-2 xl:mb-3">
                                        Interested in
                                        <br />
                                        working together?
                                    </span>
                                    <a
                                        href="/contact"
                                        className="js-hover-circle-animation inline-block py-2 text-malibu relative after:absolute after:content-['_'] after:w-full after:h-px after:bg-malibu after:left-0 after:bottom-0"
                                    >
                                        <span>Contact us</span>
                                        <span className="pl-2">
                                            <svg
                                                className="inline-block"
                                                preserveAspectRatio="none"
                                                width="17"
                                                height="17"
                                                viewBox="0 0 17 17"
                                                aria-hidden="true"
                                            >
                                                <use href="/webImages/icons.svg#arrow-right"></use>
                                            </svg>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}
