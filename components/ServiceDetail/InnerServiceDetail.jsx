"use client";
import Link from "next/link";

export default function InnerServiceDetail({ service, allServices }) {
    if (!service) return null;

    // Get and sort main services alphabetically
    const mainServices = allServices
        .filter((s) => s.type === "main_service")
        .sort((a, b) => a.title.localeCompare(b.title));

    return (
        <section className="ul-service-details ul-section-spacing">
            <div className="ul-container">
                <div className="row ul-bs-row flex-column-reverse flex-md-row">
                    {/* Sidebar */}
                    <div className="col-md-4 wow animate__fadeInUp">
                        <div className="ul-service-details-sidebar">
                            <ul className="ul-service-details-sidebar-links">
                                {mainServices.map((item) => {
                                    const isActive =
                                        item.slug === service.slug || // current main
                                        (service.type === "sub_service" &&
                                            item.id === service.typeof); // or parent of current sub
                                    return (
                                        <li key={item.id}>
                                            <Link
                                                href={`/services/${item.slug}`}
                                                className={isActive ? "active" : ""}
                                            >
                                                {item.title} <i className="flaticon-top-right"></i>
                                            </Link>
                                        </li>
                                    );
                                })}
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
                                    <p className="ul-service-details-descr">
                                        {service.details || "More information will be available soon."}
                                    </p>

                                    {/* Show sub-services if this is a main service */}
                                    {service.type === "main_service" && (
                                        <ul className="p-0">
                                            {allServices
                                                .filter(
                                                    (sub) =>
                                                        sub.type === "sub_service" &&
                                                        sub.typeof === service.id
                                                )
                                                .sort((a, b) => a.title.localeCompare(b.title))
                                                .map((sub, idx) => (
                                                    <li key={idx}>
                                                        <Link href={`/services/${sub.slug}`}>
                                                            {sub.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}