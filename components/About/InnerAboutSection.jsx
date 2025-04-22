export default function InnerAboutSection() {
    return (
        // <!-- ABOUT SECTION START -->
        <section className="ul-inner-about ul-section-spacing pb-0 wow animate__fadeInUp">
            <div className="ul-container">
                {/* <!-- txt --> */}
                <div className="row row-cols-md-2 row-cols-1 align-items-start gy-4 ul-inner-about-row">
                    <div className="col">
                        <div className="ul-inner-about-txt-left">
                            <span className="ul-section-sub-title">About us</span>
                            <h2 className="ul-section-title">Empowering Innovation Through Digital Expertise</h2>

                            <div className="ul-inner-about-stats">
                                <div className="ul-inner-about-stat">
                                    <h3 className="stat-number">+98%</h3>
                                    <p className="stat-text">By optimizing your website for search engines.</p>
                                </div>
                                <div className="ul-inner-about-stat">
                                    <h3 className="stat-number">+67%</h3>
                                    <p className="stat-text">Rise in revenue as more visitors convert into paying.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="ul-inner-about-points">
                            <div className="ul-inner-about-point">
                                <img src="webImages/about-point-icon-1.png" alt="Icon" className="ul-inner-about-point-icon" />
                                <div>
                                    <h4 className="ul-inner-about-point-title">Community & Industry Involvement</h4>
                                    <p className="ul-inner-about-point-descr">Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.</p>
                                </div>
                            </div>
                            <div className="ul-inner-about-point">
                                <img src="webImages/about-point-icon-2.png" alt="Icon" className="ul-inner-about-point-icon" />
                                <div>
                                    <h4 className="ul-inner-about-point-title">Awards & Recognition</h4>
                                    <p className="ul-inner-about-point-descr">Our e-commerce solutions are designed to create seamless online shopping experiences. From user-friendly website design to secure payment processing and inventory management.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="ul-inner-about-img">
                    <img src="webImages/about-img.jpg" alt="Image" />
                </div>
            </div>
        </section>

        /* <!-- ABOUT SECTION END --> */
    );
}
