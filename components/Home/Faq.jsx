'use client';

import { useEffect } from 'react';



export default function Faq() {
    useEffect(() => {
        const accordionContainers = document.querySelectorAll('.ul-accordion');
    
        accordionContainers.forEach((accordionContainer) => {
          const accordionItems = accordionContainer.querySelectorAll('.ul-single-accordion-item');
    
          accordionItems.forEach((accordionItem) => {
            const header = accordionItem.querySelector('.ul-single-accordion-item__header');
    
            header.addEventListener('click', () => {
              const isOpen = accordionItem.classList.contains('open');
    
              accordionItems.forEach((item) => item.classList.remove('open'));
    
              if (!isOpen) {
                accordionItem.classList.add('open');
              }
            });
          });
        });
    
        // Cleanup (optional, for safety)
        return () => {
          accordionContainers.forEach((accordionContainer) => {
            const accordionItems = accordionContainer.querySelectorAll('.ul-single-accordion-item');
            accordionItems.forEach((accordionItem) => {
              const header = accordionItem.querySelector('.ul-single-accordion-item__header');
              header.replaceWith(header.cloneNode(true)); // remove all listeners
            });
          });
        };
      }, []);

    return (
        // <!-- FAQ SECTION START -->
        <section className="ul-faq">
            <div className="ul-container">
                <div className="row ul-bs-row ul-faq-row">
                    {/* <!-- img --> */}
                    <div className="col-md-5">
                        <div className="ul-faq-img d-flex justify-content-end">
                            <img src="webImages/faq-img.png" alt="Image" />
                        </div>
                    </div>

                    {/* <!-- txt --> */}
                    <div className="col-md-7">
                        <div className="ul-faq-txt ul-section-spacing">
                            <div>
                                <span className="ul-section-sub-title">Frequently Ask Question</span>
                                <h2 className="ul-section-title">Let's Meet And Work Together Your Project</h2>
                            </div>

                            <div className="ul-faq-accordion ul-accordion">
                                <div className="ul-single-accordion-item open">
                                    <div className="ul-single-accordion-item__header">
                                        <div className="left">
                                            <h3 className="ul-single-accordion-item__title">What services does ITnnovator offer?</h3>
                                        </div>
                                        <span className="icon"><i className="flaticon-right"></i></span>
                                    </div>

                                    <div className="ul-single-accordion-item__body">
                                        <p>We provide a wide range of digital solutions including Web & App Development, SEO, Digital Marketing, Social Media Management, UI/UX Design, Logo Designing, IT Consultancy, WordPress, Shopify, and more.</p>
                                    </div>
                                </div>

                                <div className="ul-single-accordion-item">
                                    <div className="ul-single-accordion-item__header">
                                        <div className="left">
                                            <h3 className="ul-single-accordion-item__title">How long does it take to complete a website or app?</h3>
                                        </div>
                                        <span className="icon"><i className="flaticon-right"></i></span>
                                    </div>

                                    <div className="ul-single-accordion-item__body">
                                        <p>Timelines vary depending on the project scope, but typically a standard website takes 2–4 weeks, while mobile or web apps may take 4–8 weeks. We always share a detailed timeline after the requirement phase.</p>
                                    </div>
                                </div>

                                <div className="ul-single-accordion-item">
                                    <div className="ul-single-accordion-item__header">
                                        <div className="left">
                                            <h3 className="ul-single-accordion-item__title"> Can you help improve our existing website or marketing strategy?</h3>
                                        </div>
                                        <span className="icon"><i className="flaticon-right"></i></span>
                                    </div>

                                    <div className="ul-single-accordion-item__body">
                                        <p>Absolutely! Whether it’s revamping your current website, optimizing it for SEO, or creating a fresh digital marketing plan — we help you get better results with modern, data-driven strategies.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ul-faq-vector">
                <div className="ul-faq-vector-inner"></div>
            </div>
        </section>
        /* <!-- FAQ SECTION END --> */
    );
}
