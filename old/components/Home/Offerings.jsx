'use client';

import Link from "next/link";

export default function Offerings() {

    return (
        // <!-- OFFERING SECTION START -->
        <section className="ul-offerings ul-section-spacing">
            <div className="ul-container">
                {/* <!-- section heading --> */}
                <div className="ul-section-heading">
                    <div className="left">
                        <span className="ul-section-sub-title">Our offering</span>
                        <h2 className="ul-section-title">Enhance and Pioneer Using Technology Trends</h2>
                    </div>

                    <Link href="services" className="ul-btn ul-btn--2"><span>Know More</span><i className="flaticon-up-right-arrow"></i></Link>
                </div>

                {/* <!-- offerings row --> */}
                <div className="ul-offerings-row row ul-bs-row row-cols-lg-6 row-cols-md-4 row-cols-3 row-cols-xxs-2">
                    {/* <!-- single offering --> */}
                    <div className="col">
                        <div className="ul-offering">
                            <div className="ul-offering-icon"><i className="flaticon-globe"></i></div>
                            <h3 className="ul-offering-title">Website</h3>
                        </div>
                    </div>

                    {/* <!-- single offering --> */}
                    <div className="col">
                        <div className="ul-offering">
                            <div className="ul-offering-icon"><i className="flaticon-android"></i></div>
                            <h3 className="ul-offering-title">Android</h3>
                        </div>
                    </div>

                    {/* <!-- single offering --> */}
                    <div className="col">
                        <div className="ul-offering">
                            <div className="ul-offering-icon"><i className="flaticon-apple"></i></div>
                            <h3 className="ul-offering-title">IOS</h3>
                        </div>
                    </div>

                    {/* <!-- single offering --> */}
                    <div className="col">
                        <div className="ul-offering">
                            <div className="ul-offering-icon"><i className="flaticon-simplicity"></i></div>
                            <h3 className="ul-offering-title">SEO</h3>
                        </div>
                    </div>

                    {/* <!-- single offering --> */}
                    <div className="col">
                        <div className="ul-offering">
                            <div className="ul-offering-icon"><i className="flaticon-web-design"></i></div>
                            <h3 className="ul-offering-title">Graphics</h3>
                        </div>
                    </div>

                    {/* <!-- single offering --> */}
                    <div className="col">
                        <div className="ul-offering">
                            <div className="ul-offering-icon"><i className="flaticon-live-chat"></i></div>
                            <h3 className="ul-offering-title">Marketing</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <!-- OFFERING SECTION END -->
    );
}
