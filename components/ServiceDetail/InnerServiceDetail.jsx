"use client";
import Link from "next/link";

export default function InnerServiceDetail() {
    return (
        <section className="ul-service-details ul-section-spacing">
        <div className="ul-container">
            <div className="row ul-bs-row flex-column-reverse flex-md-row">
                <div className="col-md-4 wow animate__fadeInUp">
                    <div className="ul-service-details-sidebar">
                        <ul className="ul-service-details-sidebar-links">
                            <li><Link href="/" className="active">Digital Marketing <i className="flaticon-top-right"></i></Link></li>
                            <li><Link href="/">SEO Analytics <i className="flaticon-top-right"></i></Link></li>
                            <li><Link href="/">Social Marketing <i className="flaticon-top-right"></i></Link></li>
                            <li><Link href="/">Email Marketing <i className="flaticon-top-right"></i></Link></li>
                            <li><Link href="/">Web Development <i className="flaticon-top-right"></i></Link></li>
                            <li><Link href="/">UI/UX Design <i className="flaticon-top-right"></i></Link></li>
                        </ul>


                        {/* <!-- call to action card --> */}
                        <div className="ul-service-details-sidebar-cta">
                            <div className="ul-service-details-sidebar-cta-icon"><i className="flaticon-customer-support"></i></div>
                            <h2 className="ul-service-details-sidebar-cta-title">Don't Hesitate to Contact Us</h2>
                            <p className="ul-service-details-sidebar-cta-descr">At our IT solution company, we are committed to exceptional</p>
                            <Link href="contact" className="ul-service-details-sidebar-cta-btn">Get in Touch <i className="flaticon-top-right"></i></Link>
                        </div>
                    </div>
                </div>


                <div className="col-md-8 wow animate__fadeInUp">
                    <div>
                        <div className="ul-service-details-img">
                            <img src="webImages/service-details.jpg" alt="Image"/>
                        </div>
                        <div className="ul-service-details-txt">
                            <h2 className="ul-service-details-title">Overview</h2>
                            <p className="ul-service-details-descr">Effective marketing campaigns are the backbone of any successful business strategy. Our Campaign Management service focuses on designing and executing campaigns that deliver measurable results and drive your success forward. We handle everything from planning.</p>

                            <p className="ul-service-details-descr">CMS provides user-friendly features for easy editing and is compatible with installing plugins and tools that provide even more features for advanced functions. API CMS’s are built to have an excellent user-friendly interface that is easy to use.</p>

                            <div className="ul-service-details-inner-block">
                                <h3 className="ul-service-details-inner-title">Features</h3>
                                <p className="ul-service-details-descr">A content management system (CMS) is an application that is used to manage content, allowing multiple contributors to create, edit and publish. Content in a CMS is typically stored in a database and displayed in a presentation layer based on a set of templates like a website.</p>

                                <ul>
                                    <li>Creating and editing content</li>
                                    <li>Workflows, reporting, and content organization</li>
                                    <li>User & role-based administration and security</li>
                                    <li>Flexibility, scalability, and performance and analysis</li>
                                    <li>Multilingual content capabilities</li>
                                </ul>
                            </div>

                            <div className="ul-service-details-inner-block">
                                <h3 className="ul-service-details-inner-title">Goal</h3>
                                <p className="ul-service-details-descr">Effective marketing campaigns are the backbone of any successful business strategy. Our Campaign Management service focuses on designing and executing campaigns that deliver measurable results and drive your success forward. We handle everything from planning.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    );
}
