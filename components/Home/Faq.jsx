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
                                            <h3 className="ul-single-accordion-item__title">Where should I incorporate my business?</h3>
                                        </div>
                                        <span className="icon"><i className="flaticon-right"></i></span>
                                    </div>

                                    <div className="ul-single-accordion-item__body">
                                        <p>Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.</p>
                                    </div>
                                </div>

                                <div className="ul-single-accordion-item">
                                    <div className="ul-single-accordion-item__header">
                                        <div className="left">
                                            <h3 className="ul-single-accordion-item__title">How long should a business plan be?</h3>
                                        </div>
                                        <span className="icon"><i className="flaticon-right"></i></span>
                                    </div>

                                    <div className="ul-single-accordion-item__body">
                                        <p>Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.</p>
                                    </div>
                                </div>

                                <div className="ul-single-accordion-item">
                                    <div className="ul-single-accordion-item__header">
                                        <div className="left">
                                            <h3 className="ul-single-accordion-item__title">Be Part of a Community</h3>
                                        </div>
                                        <span className="icon"><i className="flaticon-right"></i></span>
                                    </div>

                                    <div className="ul-single-accordion-item__body">
                                        <p>Aonsectetur adipiscing elit Aenean scelerisque augue vitae consequat Juisque eget congue velit in cursus leo sodales the turpis euismod quis sapien euismod quis sapien the. E-learning is suitable for students, professionals, and anyone interested.</p>
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
