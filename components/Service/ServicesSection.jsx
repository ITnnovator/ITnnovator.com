"use client";
import Link from "next/link";
import { services } from "@/data/servicesData";

export default function ServicesSection() {
  // Filter and sort main services alphabetically
  const mainServices = services
    .filter((service) => service.type === "main_service")
    .sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="ul-section-spacing">
      <div className="ul-case-study-container">
        <div className="row ul-bs-row row-cols-lg-3 row-cols-sm-2 row-cols-1 g-5">
          {/* <!-- single service --> */}
          {mainServices.map((service,key) => (
            <div className="col" key={service.id}>
              <div className="ul-case-study-item ul-inner-case-study-item">
                <div className="img">
                  <img src={`/${service.img}`} alt="Case Study Image" />
                </div>
                <div className="txt">
                  <span className="ul-case-study-item-category">
                    {service.tags}
                  </span>
                  <h3 className="ul-case-study-item-title">{service.title}</h3>
                </div>
                <div className="ul-case-study-item-bottom">
                  <span className="ul-case-study-item-index">{String(key + 1).padStart(2, '0')}</span>
                  <Link
                    href={`/services/${service.slug}`}
                    className="ul-case-study-item-btn"
                  >
                    <i className="flaticon-next-1"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
