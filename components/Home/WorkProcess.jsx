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
                                <p className="ul-work-process-single-descr">In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
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
                                <p className="ul-work-process-single-descr">In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
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
                                <p className="ul-work-process-single-descr">In a free hour, when our power of choice is untrammelled and when nothing prevents dolor sit amet, consectetur</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        /* <!-- WORK PROCESS SECTION END -->  */
    );
}
