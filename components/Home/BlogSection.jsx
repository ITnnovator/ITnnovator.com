'use client';

export default function BlogSection() {

    return (
        // <!-- BLOG SECTION START -->
        <section className="ul-blogs ul-section-spacing pb-0">
            <div className="ul-container">
                {/* <!-- section heading --> */}
                <div className="ul-section-heading">
                    <div className="left">
                        <span className="ul-section-sub-title">latest news & blog</span>
                        <h2 className="ul-section-title">Explore News & Blog</h2>
                    </div>

                    <a href="blog.html" className="ul-btn"><span>View All Blogs <i className="flaticon-top-right"></i></span></a>
                </div>


                {/* <!-- blogs --> */}
                <div className="row ul-bs-row row-cols-lg-2 row-cols-1 ul-blogs-row">
                    <div className="col">
                        <div className="ul-blog-wrapper">
                            {/* <!-- single blog --> */}
                            <div className="ul-blog ul-blog-horizontal">
                                <div className="ul-blog-img">
                                    <img src="webImages/blog-2.jpg" alt="Blog Image" />
                                    <div className="date">
                                        <span className="number">20</span>
                                        <span className="txt">Dec</span>
                                    </div>
                                </div>
                                <div className="ul-blog-txt">
                                    <div className="ul-blog-infos">
                                        {/* <!-- single info --> */}
                                        <div className="ul-blog-info">
                                            <span className="icon"><i className="flaticon-price-tag"></i></span>
                                            <span className="text font-normal text-[14px] text-etGray">Technology</span>
                                        </div>
                                        {/* <!-- single info --> */}
                                        <div className="ul-blog-info">
                                            <span className="icon"><i className="flaticon-bubble-chat"></i></span>
                                            <span className="text font-normal text-[14px] text-etGray">0 Comments</span>
                                        </div>
                                    </div>
                                    <a href="blog-details.html" className="ul-blog-title">What's the Holding Back the It Solution</a>
                                    <div className="ul-blog-author">
                                        <div className="author-img">
                                            <img src="webImages/user-2.jpg" alt="Blog Author Image" />
                                        </div>
                                        <div className="author-txt">
                                            <span className="title">By Admin</span>
                                            <span className="author-name">Ronald Walker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- single blog --> */}
                            <div className="ul-blog ul-blog-horizontal">
                                <div className="ul-blog-img">
                                    <img src="webImages/blog-1.jpg" alt="Blog Image" />
                                    <div className="date">
                                        <span className="number">20</span>
                                        <span className="txt">Dec</span>
                                    </div>
                                </div>
                                <div className="ul-blog-txt">
                                    <div className="ul-blog-infos">
                                        {/* <!-- single info --> */}
                                        <div className="ul-blog-info">
                                            <span className="icon"><i className="flaticon-price-tag"></i></span>
                                            <span className="text font-normal text-[14px] text-etGray">Technology</span>
                                        </div>
                                        {/* <!-- single info --> */}
                                        <div className="ul-blog-info">
                                            <span className="icon"><i className="flaticon-bubble-chat"></i></span>
                                            <span className="text font-normal text-[14px] text-etGray">0 Comments</span>
                                        </div>
                                    </div>
                                    <a href="blog-details.html" className="ul-blog-title">Powerful Server and Platform</a>
                                    <div className="ul-blog-author">
                                        <div className="author-img">
                                            <img src="webImages/user-3.jpg" alt="Blog Author Image" />
                                        </div>
                                        <div className="author-txt">
                                            <span className="title">By Admin</span>
                                            <span className="author-name">Ronald Walker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single blog --> */}
                    <div className="col">
                        <div className="ul-blog-wrapper">
                            <div className="ul-blog">
                                <div className="ul-blog-img">
                                    <img src="webImages/blog-3.jpg" alt="Blog Image" />
                                    <div className="date">
                                        <span className="number">15</span>
                                        <span className="txt">Dec</span>
                                    </div>
                                </div>
                                <div className="ul-blog-txt">
                                    <div className="ul-blog-infos">
                                        {/* <!-- single info --> */}
                                        <div className="ul-blog-info">
                                            <span className="icon"><i className="flaticon-price-tag"></i></span>
                                            <span className="text font-normal text-[14px] text-etGray">Technology</span>
                                        </div>
                                        {/* <!-- single info --> */}
                                        <div className="ul-blog-info">
                                            <span className="icon"><i className="flaticon-bubble-chat"></i></span>
                                            <span className="text font-normal text-[14px] text-etGray">0 Comments</span>
                                        </div>
                                    </div>
                                    <a href="blog-details.html" className="ul-blog-title">Keep Your Business Safe & Ensure High Availability.</a>
                                    <p className="ul-blog-excerpt">From luxury and economy cars and find out which best suits your lifestyle economy cars and find</p>
                                    <div className="ul-blog-author">
                                        <div className="author-img">
                                            <img src="webImages/user-4.jpg" alt="Blog Author Image" />
                                        </div>
                                        <div className="author-txt">
                                            <span className="title">By Admin</span>
                                            <span className="author-name">Ronald Walker</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- vector --> */}
            <img src="webImages/blog-vector.png" alt="vector" className="ul-blogs-vector" />
        </section>
        /* <!-- BLOG SECTION END --> */
    );
}
