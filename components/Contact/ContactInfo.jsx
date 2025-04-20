import Link from "next/link";

export default function ContactInfo() {
    return (
        // <!-- CONTACT INFO SECTION START -->
        <div className="ul-section-spacing ul-container">
            <div className="ul-contact-infos">
                {/* <!-- single contact info --> */}
                <div className="ul-contact-info">
                    <div className="icon"><i className="flaticon-location"></i></div>
                    <div className="txt">
                        <h6 className="title">Our Address</h6>
                        <p className="descr mb-0">2715 Ash Dr. San Jose, South Dakota 83475</p>
                    </div>
                </div>

                {/* <!-- single contact info --> */}
                <div className="ul-contact-info">
                    <div className="icon"><i className="flaticon-email"></i></div>
                    <div className="txt">
                        <h6 className="title">Email Address</h6>
                        <p className="descr mb-0">
                            <Link href="mailto:info@ticstube.com">info@ticstube.com</Link>
                            <Link href="mailto:contact@ticstube.com">contact@ticstube.com</Link>
                        </p>
                    </div>
                </div>

                {/* <!-- single contact info --> */}
                <div className="ul-contact-info">
                    <div className="icon"><i className="flaticon-customer-support"></i></div>
                    <div className="txt">
                        <h6 className="title">Hours of Operation</h6>
                        <p className="descr mb-0">
                            <span>Sunday-Fri: 9 AM – 6 PM</span><br/>
                            <span>Saturday: 9 AM – 4 PM</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        // {/* <!-- CONTACT INFO SECTION END --> */}
    );
}
