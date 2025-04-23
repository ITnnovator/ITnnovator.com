import Link from "next/link";

export default function InnerBlogSection() {
    return (
        <div className="ul-section-spacing">
            <div className="ul-container">
                <div className="row ul-bs-row row-cols-md-3 row-cols-2 row-cols-xxs-1 g-4">
                    {/* <!-- single blog --> */}
                    <div className="col">
                        <div className="ul-inner-blog">
                            <div className="ul-inner-blog-img">
                                <img src="/webImages/blog-3.jpg" alt="image"/>
                                <span className="blog-tag">Marketing</span>
                            </div>
                            <div className="ul-inner-blog-txt">
                                <span className="date">12 January 2024</span>
                                <h3 className="title"><Link href="/blogdetail">2025 Top SEO Features for Your Marketing Designs</Link></h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single blog --> */}
                    <div className="col">
                        <div className="ul-inner-blog">
                            <div className="ul-inner-blog-img">
                                <img src="/webImages/blog-4.jpg" alt="image" />
                                <span className="blog-tag">Marketing</span>
                            </div>
                            <div className="ul-inner-blog-txt">
                                <span className="date">12 January 2024</span>
                                <h3 className="title"><Link href="/blogdetail">How to Integrate Marketing Tools into Your Design</Link></h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single blog --> */}
                    <div className="col">
                        <div className="ul-inner-blog">
                            <div className="ul-inner-blog-img">
                                <img src="/webImages/blog-5.jpg" alt="image"/>
                                <span className="blog-tag">Marketing</span>
                            </div>
                            <div className="ul-inner-blog-txt">
                                <span className="date">12 January 2024</span>
                                <h3 className="title"><Link href="/blogdetail">Innovative Business Marketing Designs for Success</Link></h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single blog --> */}
                    <div className="col">
                        <div className="ul-inner-blog">
                            <div className="ul-inner-blog-img">
                                <img src="/webImages/blog-6.jpg" alt="image"/>
                                <span className="blog-tag">Marketing</span>
                            </div>
                            <div className="ul-inner-blog-txt">
                                <span className="date">12 January 2024</span>
                                <h3 className="title"><Link href="/blogdetail">2024 Top SEO Features for Your Marketing Designs</Link></h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single blog --> */}
                    <div className="col">
                        <div className="ul-inner-blog">
                            <div className="ul-inner-blog-img">
                                <img src="/webImages/blog-7.jpg" alt="image"/>
                                <span className="blog-tag">Marketing</span>
                            </div>
                            <div className="ul-inner-blog-txt">
                                <span className="date">12 January 2024</span>
                                <h3 className="title"><Link href="/blogdetail">How to Integrate Marketing Tools into Your Design</Link></h3>
                            </div>
                        </div>
                    </div>

                    {/* <!-- single blog --> */}
                    <div className="col">
                        <div className="ul-inner-blog">
                            <div className="ul-inner-blog-img">
                                <img src="/webImages/blog-3.jpg" alt="image"/>
                                <span className="blog-tag">Marketing</span>
                            </div>
                            <div className="ul-inner-blog-txt">
                                <span className="date">12 January 2024</span>
                                <h3 className="title"><Link href="/blogdetail">2025 Top SEO Features for Your Marketing Designs</Link></h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- pagination --> */}
                <div className="ul-pagination">
                    <ul>
                        <li><Link href="#"><i className="flaticon-back"></i></Link></li>
                        <li className="pages">
                            <Link href="#" className="active">1</Link>
                            <Link href="#">2</Link>
                            <Link href="#">3</Link>
                        </li>
                        <li><Link href="#"><i className="flaticon-next-1"></i></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
