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
                        <h6 className="title">Phone Number</h6>
                        <p className="descr mb-0">
                            <Link href="https://api.whatsapp.com/send?phone=923313775851">+92 331 3775851</Link>
                            <Link href="https://api.whatsapp.com/send?phone=923258213946">+92 325 8213946</Link>
                        </p>
                    </div>
                </div>

                {/* <!-- single contact info --> */}
                <div className="ul-contact-info">
                    <div className="icon"><i className="flaticon-email"></i></div>
                    <div className="txt">
                        <h6 className="title">Email Address</h6>
                        <p className="descr mb-0">
                            <Link href="mailto:info@itnnovator.com">info@itnnovator.com</Link>
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
