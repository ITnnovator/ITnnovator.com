import Link from "next/link";
import { SERVICES } from "@/data/servicesData";

export default function ServiceSection() {
    return (
        <section className="w-full py-14 lg:py-20 xl:py-32">
            <div className="max-w-7xl px-5 xl:px-8 mx-auto">
                <ul className="w-full grid gap-12 sm:grid-cols-2 md:grid-cols-3">
                    {SERVICES.map((service, idx) => (
                        <li key={idx} className="mb-6 md:mb-20">
                            <img
                                src={service.icon}
                                alt={service.alt}
                                width="35"
                                height="35"
                                className="w-6 sm:w-[2.25rem] mb-6"
                                loading="lazy"
                                decoding="async"
                            />
                            <a
                                className="js-hover-circle-animation"
                                target="_self"
                                href={`/services/${service.slug}`}
                            >
                                <h3 className="mb-4 inline-block text-2xl md:text-3xl leading-tight md:leading-[1.4] font-bold text-white">
                                    {service.title}
                                </h3>
                            </a>

                            <div className="prose max-w-none text-base md:text-lg font-light leading-[1.4] text-white/80">
                                {service.description}
                            </div>

                            <ul className="relative mt-6 after:absolute after:content-[''] after:w-full after:h-[6rem] after:bg-gradient-to-t from-black after:bottom-0">
                                {service.points.map((point, i) => (
                                    <li key={i} className="flex font-bold mb-3 text-base md:text-lg">
                                        <svg
                                            className="inline-block min-w-[1.2rem] mt-[0.3rem] mr-4"
                                            width="19"
                                            height="19"
                                            viewBox="0 0 19 19"
                                            aria-hidden="true"
                                        >
                                            <use href="/webImages/icons.svg#ticker"></use>
                                        </svg>
                                        {point}
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-x-10 gap-y-2 lg:gap-x-[4.25rem] xl:pt-4">
                                <a
                                    href={`/services/${service.slug}`}
                                    target="_self"
                                    className="js-hover-circle-animation group/link-has-arrow w-max inline-block text-base md:text-lg text-malibu"
                                >
                                    <span>{service.cta}</span>
                                    <span className="pl-1 pr-1 group-hover/link-has-arrow:pl-2 group-hover/link-has-arrow:pr-0 transition-all duration-200 ease-linear">
                                        <svg
                                            className="inline-block"
                                            preserveAspectRatio="none"
                                            width="22"
                                            height="15"
                                            aria-hidden="true"
                                        >
                                            <use href="/webImages/icons.svg#arrow-right"></use>
                                        </svg>
                                    </span>
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
