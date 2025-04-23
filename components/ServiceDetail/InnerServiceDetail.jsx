"use client";
import Link from "next/link";

export default function InnerServiceDetail({ service, allServices }) {
    if (!service) return null;

    return (
        <section className="ul-service-details ul-section-spacing">
            <div className="ul-container">
                <div className="row ul-bs-row flex-column-reverse flex-md-row">
                    {/* Sidebar */}
                    <div className="col-md-4 wow animate__fadeInUp">
                        <div className="ul-service-details-sidebar">
                            <ul className="ul-service-details-sidebar-links">
                                {allServices.map((item) => (
                                    <li key={item.id}>
                                        <Link
                                            href={`/services/${item.slug}`}
                                            className={item.slug === service.slug ? "active" : ""}
                                        >
                                            {item.title} <i className="flaticon-top-right"></i>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="ul-service-details-sidebar-cta">
                                <div className="ul-service-details-sidebar-cta-icon">
                                    <i className="flaticon-customer-support"></i>
                                </div>
                                <h2 className="ul-service-details-sidebar-cta-title">
                                    Don't Hesitate to Contact Us
                                </h2>
                                <p className="ul-service-details-sidebar-cta-descr">
                                    At our IT solution company, we are committed to exceptional
                                </p>
                                <Link
                                    href="/contact"
                                    className="ul-service-details-sidebar-cta-btn"
                                >
                                    Get in Touch <i className="flaticon-top-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Main content */}
                    <div className="col-md-8 wow animate__fadeInUp">
                        <div>
                            {service.img && (
                                <div className="ul-service-details-img">
                                    <img src={`/${service.img}`} alt={service.title} />
                                </div>
                            )}

                            <div className="ul-service-details-txt">
                                <h2 className="ul-service-details-title">Overview</h2>
                                <p className="ul-service-details-descr">
                                    {service.description}
                                </p>

                                <div className="ul-service-details-inner-block">
                                    <h3 className="ul-service-details-inner-title">Details</h3>
                                    <p className="ul-service-details-descr">{service.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
