'use client';

export default function WorkProcess() {

    return (
        // <!-- WORK PROCESS SECTION START -->
        <section className="ul-work-process ul-section-spacing overflow-hidden">
            <div className="ul-container">
                <div className="ul-section-heading text-center justify-content-center">
                    <div className="left">
                        <span className="ul-section-sub-title">Work Process</span>
                        <h2 className="ul-section-title">Our Development Process</h2>
                    </div>
                </div>

                <div className="row ul-bs-row row-cols-md-3 row-cols-2 row-cols-xxs-1 ul-work-process-row">
                    {/* <!-- single process --> */}
                    <div className="col">
                        <div className="ul-work-process-single">
                            <div className="ul-work-process-single-img">
                                <img src="webImages/process-1.jpg" alt="Image" />
                                <div className="ul-work-process-single-index"><span>1</span></div>
                            </div>

                            <div className="ul-work-process-single-txt">
                                <h3 className="ul-work-process-single-title">Define Requirements</h3>
                                <p className="ul-work-process-single-descr">We discuss your goals in detail, understand your vision, and gather all key requirements to build a strategy aligned with your business needs.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single process --> */}
                    <div className="col">
                        <div className="ul-work-process-single">
                            <div className="ul-work-process-single-img">
                                <img src="webImages/process-2.jpg" alt="Image" />
                                <div className="ul-work-process-single-index"><span>2</span></div>
                            </div>

                            <div className="ul-work-process-single-txt">
                                <h3 className="ul-work-process-single-title">Design & Prototyping</h3>
                                <p className="ul-work-process-single-descr">We design user-friendly interfaces based on your needs and present multiple tailored options to ensure the perfect fit for your vision.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single process --> */}
                    <div className="col">
                        <div className="ul-work-process-single">
                            <div className="ul-work-process-single-img">
                                <img src="webImages/process-3.jpg" alt="Image" />
                                <div className="ul-work-process-single-index"><span>3</span></div>
                            </div>

                            <div className="ul-work-process-single-txt">
                                <h3 className="ul-work-process-single-title">Final Solution</h3>
                                <p className="ul-work-process-single-descr">We run a full QA check, share the final product for your approval, and then launch a high-performing solution built to scale.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /* <!-- WORK PROCESS SECTION END -->  */
    );
}
