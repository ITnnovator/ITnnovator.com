import Link from "next/link";

export default function InnerBanner() {
    return (
        // <!-- BREADCRUMBS SECTION START -->
        <section className="ul-breadcrumb ul-section-spacing">
            <div className="ul-container">
                <ul className="ul-breadcrumb-nav">
                    <li><Link href="/">Home</Link></li>
                    <li><span className="separator"><i className="flaticon-right"></i></span></li>
                    <li>About Company</li>
                </ul>
                <h2 className="ul-breadcrumb-title">About Company</h2>
            </div>
        </section>
        // <!-- BREADCRUMBS SECTION END -->
    );
}
