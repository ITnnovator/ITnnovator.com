import Link from "next/link";

export default function Header() {
    return (
        // <!-- HEADER SECTION START -->
        <header className="ul-header">
            <div className="ul-header-bottom to-be-sticky wow animate__slideInDown">
                <div className="ul-header-bottom-wrapper ul-header-container">
                    <div className="logo-container">
                        <Link href="/" className="d-inline-block">
                            <img src="/webImages/logo.svg" alt="logo" className="logo" />
                        </Link>
                    </div>

                    <div className="ul-header-bottom-right">
                        {/* <!-- header nav --> */}
                        <div className="ul-header-nav-wrapper">
                            <div className="to-go-to-sidebar-in-mobile">
                                <nav className="ul-header-nav">
                                    <Link href="/" className="active">Home</Link>
                                    <Link href="/about">About</Link>
                                    <Link href="/services">Services</Link>
                                    <Link href="/blog">Blog</Link>
                                    <Link href="/contact">Contact</Link>
                                </nav>
                            </div>
                        </div>

                        <button className="ul-header-search-opener">
                            <i className="flaticon-search"></i>
                        </button>
                        <Link href="/contact" className="ul-btn d-sm-inline-flex d-xxs-none">
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
        // <!-- HEADER SECTION END -->
    );
}
