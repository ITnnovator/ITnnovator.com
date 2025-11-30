import Link from "next/link";

export default function Sidebar() {
    return (
        // <!-- SIDEBAR SECTION START -->
        <div className="ul-sidebar">
            {/* <!-- header --> */}
            <div className="ul-sidebar-header">
                <div className="ul-sidebar-header-logo">
                    <Link href="/">
                        <img
                            src="/webImages/itnnovatorLogoLight.png"
                            alt="itnnovatorLogoLight"
                            className="logo"
                        />
                    </Link>
                </div>
                {/* <!-- sidebar closer --> */}
                <button className="ul-sidebar-closer">
                    <i className="flaticon-close-1"></i>
                </button>
            </div>

            <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>

            {/* <!-- sidebar footer --> */}
            <div className="ul-sidebar-footer">
                <span className="ul-sidebar-footer-title">Follow us</span>

                <div className="ul-sidebar-footer-social">
                    <Link href="https://www.facebook.com/itnnovator" target="_blank">
                        <i className="flaticon-facebook"></i>
                    </Link>
                    <Link href="https://www.instagram.com/itnnovator" target="_blank">
                        <i className="flaticon-instagram"></i>
                    </Link>
                    <Link href="https://www.linkedin.com/company/itnnovator" target="_blank">
                        <i className="flaticon-linkedin-big-logo"></i>
                    </Link>
                </div>
            </div>
        </div>
        // <!-- SIDEBAR SECTION END -->
    );
}
