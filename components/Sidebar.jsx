import Link from "next/link";

export default function Sidebar() {
    return (
        // <!-- SIDEBAR SECTION START -->
        <div className="ul-sidebar">
            {/* <!-- header --> */}
            <div className="ul-sidebar-header">
                <div className="ul-sidebar-header-logo">
                    <Link href="/">
                        <img src="/webImages/logo.svg" alt="logo" className="logo" />
                    </Link>
                </div>
                {/* <!-- sidebar closer --> */}
                <button className="ul-sidebar-closer"><i className="flaticon-close-1"></i></button>
            </div>

            <div className="ul-sidebar-header-nav-wrapper d-block d-lg-none"></div>


            {/* <!-- sidebar footer --> */}
            <div className="ul-sidebar-footer">
                <span className="ul-sidebar-footer-title">Follow us</span>

                <div className="ul-sidebar-footer-social">
                    <a href="#"><i className="flaticon-facebook"></i></a>
                    <a href="#"><i className="flaticon-twitter"></i></a>
                    <a href="#"><i className="flaticon-instagram"></i></a>
                    <a href="#"><i className="flaticon-linkedin-big-logo"></i></a>
                </div>
            </div>
        </div>
        // <!-- SIDEBAR SECTION END -->
    );
}
