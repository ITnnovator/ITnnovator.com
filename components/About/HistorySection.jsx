export default function HistorySection() {
    return (
        // <!-- HISTORY SECTION START -->
        <section className="ul-history ul-section-spacing wow animate__fadeInUp">
            <div className="ul-container">
                <div className="row row-cols-md-2 row-cols-1 gy-4 ul-history-row align-items-center">
                    {/* <!-- txt --> */}
                    <div className="col">
                        <div className="ul-history-txt">
                            <div className="ul-section-heading">
                                <div className="left">
                                    <span className="ul-section-sub-title">Who We Are</span>
                                    <h2 className="ul-section-title">Our Mission & Vision</h2>
                                </div>
                            </div>

                            <div className="ul-history-milestones">
                                {/* <!-- single milestone --> */}
                                <div className="ul-history-milestone">
                                    <h3 className="ul-history-milestone-title">Our Mission</h3>
                                    <p className="ul-history-milestone-descr">
                                        At ITnnovator, our mission is to empower businesses with innovative digital solutions. We aim to simplify technology and make it accessible for companies of all sizes.
                                    </p>
                                </div>
                                {/* <!-- single milestone --> */}
                                <div className="ul-history-milestone">
                                    <h3 className="ul-history-milestone-title">Our Vision</h3>
                                    <p className="ul-history-milestone-descr">
                                        We envision becoming a leading tech partner for startups and enterprises, delivering impactful results through creativity, strategy, and cutting-edge technology.
                                    </p>
                                </div>
                                {/* <!-- single milestone --> */}
                                <div className="ul-history-milestone">
                                    <h3 className="ul-history-milestone-title">Core Values</h3>
                                    <p className="ul-history-milestone-descr">
                                        Innovation, reliability, and client-centricity are the core values we live by. We’re committed to building solutions that drive growth and long-term success.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col">
                        <div className="ul-history-img">
                            <img src="webImages/history-img.jpg" alt="Image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // {/* <!-- HISTORY SECTION END --> */}

    );
}
