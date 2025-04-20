import Link from "next/link";

export default function InnerBlogDetail() {
    return (
        // <!-- BLOG SECTION START -->
        <div className="ul-blog-details ul-section-spacing">
            <div className="ul-container">
                <div className="row ul-bs-row gy-5">
                    {/* <!-- left/blog details --> */}
                    <div className="col-lg-8 col-md-7">
                        <div className="ul-blog-details ul-inner-blog-2 mb-0">
                            <div className="ul-blog-2 ul-blog-inner">
                                <div className="ul-blog-img ul-inner-blog-img">
                                    <img src="webImages/blog-b-1.jpg" alt="Blog Image" />
                                    <span className="blog-tag">Marketing</span>
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
                                    <h2 className="ul-inner-blog-2-title">2024 Top SEO Features for Your Marketing Designs</h2>
                                    <div className="ul-service-details-txt ul-blog-details-txt">
                                        <p>When to Use Lorem Ipsum generally, lorem ipsum is best suited to keeping template fo looking bare or minimizing the distractions of the draft copy. Second, use lorem ipsum if you think placeholder text will distracting. in voluptate velit esse. Cursus libero viverra.</p>
                                        <p>One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.</p>
                                        <blockquote>Mosico has been an invaluable partner to us. Any talent we've worked with ha shown a deep understanding of digital experiences. They're seamlessl integrate with or team and meet the level of craft that we hold ourselves accountable with our team and meet to. They're seamlessl integrate with our team and meet</blockquote>
                                        <p>One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.</p>
                                        <div className="ul-blog-details-inner-img">
                                            <img src="webImages/blog-4.jpg" alt="image"/>
                                            <img src="webImages/blog-5.jpg" alt="image"/>
                                        </div>
                                        <p>One of the most remarkable applications of AI in healthcare is in diagnostics. Machine and learning algorithms are capable of analyzing vast amounts of medical data with speed to unprecedente speed and accuracy. This has led to earlier and more precise disease speed detection, greatly enhancing the chances of successful treatment.</p>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- actions --> */}
                            <div className="ul-blog-details-actions">
                                {/* <!-- tags --> */}
                                <div className="tags-wrapper">
                                    <h4 className="actions-title">Tags: </h4>
                                    <div className="ul-blog-sidebar-tags tags">
                                        <Link href="#">Reseller</Link>
                                        <Link href="#">Hosting</Link>
                                        <Link href="#">WP Hosting</Link>
                                    </div>
                                </div>

                                {/* <!-- share --> */}
                                <div className="shares-wrapper">
                                    <h4 className="actions-title">Share: </h4>
                                    <div className="share-options">
                                        <Link href="#"><i className="flaticon-facebook"></i></Link>
                                        <Link href="#"><i className="flaticon-twitter"></i></Link>
                                        <Link href="#"><i className="flaticon-linkedin-big-logo"></i></Link>
                                        <Link href="#"><i className="flaticon-instagram"></i></Link>
                                    </div>
                                </div>
                            </div>

                            <div className="ul-blog-details-bottom">
                                {/* <!-- reviews --> */}
                                <div className="ul-blog-details-reviews">
                                    <h3 className="ul-service-details-inner-title text-black">02 Comments</h3>

                                    {/* <!-- single review --> */}
                                    <div className="ul-blog-details-review">
                                        {/* <!-- reviewer image --> */}
                                        <div className="ul-blog-details-review-reviewer-img">
                                            <img src="webImages/user.jpg" alt="Reviewer Image"/>
                                        </div>

                                        <div className="ul-blog-details-review-txt">
                                            <div className="header">
                                                <div className="left">
                                                    <h4 className="reviewer-name">Leslie Alexander</h4>
                                                    <h5 className="review-date">March 20, 2023 at 2:37 pm</h5>
                                                </div>

                                                <div className="right"><button className="ul-blog-details-review-reply-btn">Reply</button></div>
                                            </div>

                                            <p>Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla pharetra pharetra pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla</p>
                                        </div>
                                    </div>

                                    {/* <!-- single review --> */}
                                    <div className="ul-blog-details-review">
                                        {/* <!-- reviewer image --> */}
                                        <div className="ul-blog-details-review-reviewer-img">
                                            <img src="webImages/user-5.jpg" alt="Reviewer Image"/>
                                        </div>

                                        <div className="ul-blog-details-review-txt">
                                            <div className="header">
                                                <div className="left">
                                                    <h4 className="reviewer-name">Ralph Edwards</h4>
                                                    <h5 className="review-date">March 20, 2023 at 2:37 pm</h5>
                                                </div>

                                                <div className="right">
                                                    <button className="ul-blog-details-review-reply-btn">Reply</button>
                                                </div>
                                            </div>

                                            <p>Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla. Integer non quam commodo, scelerisque felis id, eleifend turpis. Phasellus in nulla quis erat tempor tristique eget vel purus. Nulla pharetra pharetra pharetra. Praesent varius eget justo ut lacinia. Phasellus pharetra, velit viverra lacinia consequat, ipsum odio mollis dolor, nec facilisis arcu arcu ultricies sapien. Quisque ut dapibus nunc. Vivamus sit amet efficitur velit. Phasellus eget fermentum mauris. Suspendisse nec dignissim nulla</p>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- review form --> */}
                                <div className="ul-blog-details-review-form-wrapper">
                                    <h3 className="ul-service-details-inner-title text-black">Leave a Comment</h3>
                                    <p>Your email address will not be published. Required fields are marked *</p>
                                    <div className="ul-team-details-contact">
                                        <form action="#" className="ul-contact-form">
                                            <div className="row row-cols-2 row-cols-xxs-1 ul-bs-row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <input type="text" name="name" id="ul-blog-comment-name" placeholder="Your Name"/>
                                                    </div>
                                                </div>
                                                <div className="col">
                                                    <div className="form-group">
                                                        <input type="email" name="email" id="ul-blog-comment-email" placeholder="Email Address"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <input type="text" name="subject" id="ul-blog-comment-subject" placeholder="Subject"/>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <textarea name="message" id="ul-blog-comment-msg" placeholder="Type your message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <button className="ul-btn ul-btn--2"><span>Post Comment</span> <i className="flaticon-top-right"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- sidebar --> */}
                    <div className="col-lg-4 col-md-5">
                        <div className="ul-inner-sidebar">
                            {/* <!-- single widget /search --> */}
                            <div className="ul-inner-sidebar-widget ul-inner-sidebar-search">
                                <h3 className="ul-inner-sidebar-widget-title">Search</h3>
                                <div className="ul-inner-sidebar-widget-content">
                                    <form action="#" className="ul-blog-search-form">
                                        <input type="search" name="blog-search" id="ul-blog-search" placeholder="Search Here"/>
                                        <button type="submit"><span className="icon"><i className="flaticon-search"></i></span></button>
                                    </form>
                                </div>
                            </div>

                            {/* <!-- single widget / Categories --> */}
                            <div className="ul-inner-sidebar-widget categories">
                                <h3 className="ul-inner-sidebar-widget-title">Categories</h3>
                                <div className="ul-inner-sidebar-widget-content">
                                    <div className="ul-inner-sidebar-categories">
                                        <Link href="blog-2.html">Charity <span>(08)</span></Link>
                                        <Link href="blog-2.html">Crowdfunding <span>(11)</span></Link>
                                        <Link href="blog-2.html">Industries <span>(18)</span></Link>
                                        <Link href="blog-2.html">Innovations <span>(11)</span></Link>
                                        <Link href="blog-2.html">Technology <span>(07)</span></Link>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- single widget / Recent Posts --> */}
                            <div className="ul-inner-sidebar-widget posts">
                                <h3 className="ul-inner-sidebar-widget-title">Recent Posts</h3>
                                <div className="ul-inner-sidebar-widget-content">
                                    <div className="ul-inner-sidebar-posts">
                                        {/* <!-- single post --> */}
                                        <div className="ul-inner-sidebar-post">
                                            <div className="img">
                                                <img src="webImages/blog-2.jpg" alt="Post Image"/>
                                            </div>

                                            <div className="txt">
                                                <h4 className="title"><Link href="blog-details.html">There are many vario ns of passages of</Link></h4>
                                                <span className="date"> <span>May 12, 2025</span></span>
                                            </div>
                                        </div>

                                        {/* <!-- single post --> */}
                                        <div className="ul-inner-sidebar-post">
                                            <div className="img">
                                                <img src="webImages/blog-1.jpg" alt="Post Image"/>
                                            </div>

                                            <div className="txt">
                                                <h4 className="title"><Link href="blog-details.html">There are many vario ns of passages of</Link></h4>
                                                <span className="date"> <span>May 12, 2025</span></span>
                                            </div>
                                        </div>

                                        {/* <!-- single post --> */}
                                        <div className="ul-inner-sidebar-post">
                                            <div className="img">
                                                <img src="webImages/blog-3.jpg" alt="Post Image"/>
                                            </div>

                                            <div className="txt">
                                                <h4 className="title"><Link href="blog-details.html">There are many vario ns of passages of</Link></h4>
                                                <span className="date"> <span>May 12, 2025</span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- single widget / Tags --> */}
                            <div className="ul-inner-sidebar-widget tags">
                                <h3 className="ul-inner-sidebar-widget-title">Tag Cloud</h3>
                                <div className="ul-inner-sidebar-widget-content">
                                    <div className="ul-inner-sidebar-tags">
                                        <Link href="blog-2.html">Crowdfunding</Link>
                                        <Link href="blog-2.html">Innovations</Link>
                                        <Link href="blog-2.html">Justice</Link>
                                        <Link href="blog-2.html">Lead</Link>
                                        <Link href="blog-2.html">Startup</Link>
                                        <Link href="blog-2.html">Technology</Link>
                                        <Link href="blog-2.html">Market</Link>
                                        <Link href="blog-2.html">Court</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <!-- BLOG SECTION END -->
    );
}
