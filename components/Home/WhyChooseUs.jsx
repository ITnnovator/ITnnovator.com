'use client';

export default function WhyChooseUs() {

    return (
        // <!-- WHY CHOOSE US SECTION START -->
        <section className="ul-why-choose-us ul-section-spacing">
            <div className="ul-container">
                <div className="row row-cols-md-2 row-cols-1 gy-5 align-items-center">
                    {/* <!-- img --> */}
                    <div className="col">
                        <div className="ul-why-choose-us-img">
                            <img src="/webImages/why-choose-us-img.png" alt="Image" className="main-img" />

                            {/* <!-- video btn --> */}
                            <div className="ul-why-choose-us-video-btn-wrapper">
                                <a href="https://youtu.be/GGf1JjSAKP4?si=pbLrA5XD3ru35wq7" data-fslightbox className="ul-why-choose-us-video-btn"><i className="flaticon-play-button-arrowhead"></i></a>
                            </div>

                            {/* <!-- vectors --> */}
                            <div className="ul-why-choose-us-vectors">
                                <img src="/webImages/why-choose-us-vector.png" alt="vector" className="vector-1" />
                                <img src="/webImages/why-choose-us-vector-2.png" alt="vector" className="vector-2" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- txt --> */}
                    <div className="col">
                        <div className="ul-why-choose-us-txt">
                            <div className="ul-section-heading">
                                <div className="left">
                                    <span className="ul-section-sub-title">Why Choose Us</span>
                                    <h2 className="ul-section-title">Unlock the Full Potential of Your Brand with ITnnovator</h2>
                                </div>
                            </div>
                            <div className="ul-why-choose-us-points">
                                {/* <!-- single point --> */}
                                <div className="ul-why-choose-us-point">
                                    <div className="ul-why-choose-us-point-icon">
                                        <i className="flaticon-satisfaction"></i>
                                    </div>
                                    <div className="ul-why-choose-us-point-txt">
                                        <h3 className="ul-why-choose-us-point-title">Quality Result</h3>
                                        <p className="ul-why-choose-us-point-descr">We build high-performing websites, mobile apps, and marketing strategies that boost your online visibility and drive real business growth.</p>
                                    </div>
                                </div>

                                {/* <!-- single point --> */}
                                <div className="ul-why-choose-us-point">
                                    <div className="ul-why-choose-us-point-icon">
                                        <i className="flaticon-teamwork"></i>
                                    </div>
                                    <div className="ul-why-choose-us-point-txt">
                                        <h3 className="ul-why-choose-us-point-title">Expert Team</h3>
                                        <p className="ul-why-choose-us-point-descr">Our experienced developers, designers, and digital marketers collaborate to craft tailored solutions that match your brand’s vision and goals.</p>
                                    </div>
                                </div>

                                {/* <!-- single point --> */}
                                <div className="ul-why-choose-us-point">
                                    <div className="ul-why-choose-us-point-icon">
                                        <i className="flaticon-targeted"></i>
                                    </div>
                                    <div className="ul-why-choose-us-point-txt">
                                        <h3 className="ul-why-choose-us-point-title">Proven Success Rate</h3>
                                        <p className="ul-why-choose-us-point-descr">With a strong track record of delivering measurable results, ITnnovator ensures every project meets high standards and exceeds expectations.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /* <!-- WHY CHOOSE US SECTION END --> */
    );
}
