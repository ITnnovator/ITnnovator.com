"use client";
import Link from "next/link";

export default function ServicesSection() {
    return (
        // <!-- SERVICES SECTION START -->
        <section className="ul-inner-services ul-section-spacing overflow-hidden">
            <div className="ul-inner-services-container">
                <div className="row row-cols-md-3 row-cols-2 row-cols-xxs-1 ul-bs-row">
                    {/* <!-- single slide --> */}
                    <div className="col wow animate__fadeInUp">
                        <div className="ul-inner-service">
                            <div className="ul-inner-service-txt">
                                <div className="ul-inner-service-icon">
                                    <i className="flaticon-settings-1"></i>
                                </div>
                                <div className="ul-inner-service-content">
                                    <h3 className="ul-inner-service-title"><Link href="/servicedetail">Digital Marketing</Link></h3>
                                    <p className="ul-inner-service-descr">Lorem dolor amet consectetur read adipiscing any more elit.</p>
                                    <Link ref="/servicedetail" className="ul-inner-service-link">Read More <i className="flaticon-next-1"></i></Link>
                                </div>
                            </div>

                            <div className="ul-inner-service-img">
                                <img src="webImages/inner-service-1.jpg" alt="Image" className=""/>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single slide --> */}
                    <div className="col wow animate__fadeInUp">
                        <div className="ul-inner-service">
                            <div className="ul-inner-service-txt">
                                <div className="ul-inner-service-icon">
                                    <i className="flaticon-seo"></i>
                                </div>
                                <div className="ul-inner-service-content">
                                    <h3 className="ul-inner-service-title"><Link ref="/servicedetail">SEO Analytics</Link></h3>
                                    <p className="ul-inner-service-descr">Lorem dolor amet consectetur read adipiscing any more elit.</p>
                                    <Link ref="/servicedetail" className="ul-inner-service-link">Read More <i className="flaticon-next-1"></i></Link>
                                </div>
                            </div>

                            <div className="ul-inner-service-img">
                                <img src="webImages/inner-service-2.jpg" alt="Image" className=""/>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single slide --> */}
                    <div className="col wow animate__fadeInUp">
                        <div className="ul-inner-service">
                            <div className="ul-inner-service-txt">
                                <div className="ul-inner-service-icon">
                                    <i className="flaticon-content-marketing"></i>
                                </div>
                                <div className="ul-inner-service-content">
                                    <h3 className="ul-inner-service-title"><Link ref="/servicedetail">Social Marketing</Link></h3>
                                    <p className="ul-inner-service-descr">Lorem dolor amet consectetur read adipiscing any more elit.</p>
                                    <Link ref="/servicedetail" className="ul-inner-service-link">Read More <i className="flaticon-next-1"></i></Link>
                                </div>
                            </div>

                            <div className="ul-inner-service-img">
                                <img src="webImages/inner-service-3.jpg" alt="Image" className="" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- single slide --> */}
                    <div className="col wow animate__fadeInUp">
                        <div className="ul-inner-service">
                            <div className="ul-inner-service-txt">
                                <div className="ul-inner-service-icon">
                                    <i className="flaticon-email-1"></i>
                                </div>
                                <div className="ul-inner-service-content">
                                    <h3 className="ul-inner-service-title"><Link ref="/servicedetail">Email Marketing</Link></h3>
                                    <p className="ul-inner-service-descr">Lorem dolor amet consectetur read adipiscing any more elit.</p>
                                    <Link ref="/servicedetail" className="ul-inner-service-link">Read More <i className="flaticon-next-1"></i></Link>
                                </div>
                            </div>

                            <div className="ul-inner-service-img">
                                <img src="webImages/inner-service-4.jpg" alt="Image" className="" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- single slide --> */}
                    <div className="col wow animate__fadeInUp">
                        <div className="ul-inner-service">
                            <div className="ul-inner-service-txt">
                                <div className="ul-inner-service-icon">
                                    <i className="flaticon-coding"></i>
                                </div>
                                <div className="ul-inner-service-content">
                                    <h3 className="ul-inner-service-title"><Link ref="/servicedetail">Web Development</Link></h3>
                                    <p className="ul-inner-service-descr">Lorem dolor amet consectetur read adipiscing any more elit.</p>
                                    <Link ref="/servicedetail" className="ul-inner-service-link">Read More <i className="flaticon-next-1"></i></Link>
                                </div>
                            </div>

                            <div className="ul-inner-service-img">
                                <img src="webImages/inner-service-5.jpg" alt="Image" className="" />
                            </div>
                        </div>
                    </div>

                    {/* <!-- single slide --> */}
                    <div className="col wow animate__fadeInUp">
                        <div className="ul-inner-service">
                            <div className="ul-inner-service-txt">
                                <div className="ul-inner-service-icon">
                                    <i className="flaticon-web-design"></i>
                                </div>
                                <div className="ul-inner-service-content">
                                    <h3 className="ul-inner-service-title"><Link ref="/servicedetail">UI/UX Design</Link></h3>
                                    <p className="ul-inner-service-descr">Lorem dolor amet consectetur read adipiscing any more elit.</p>
                                    <Link ref="/servicedetail" className="ul-inner-service-link">Read More <i className="flaticon-next-1"></i></Link>
                                </div>
                            </div>

                            <div className="ul-inner-service-img">
                                <img src="webImages/inner-service-6.jpg" alt="Image" className="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // {/* <!-- SERVICES SECTION END --> */}
    );
}
