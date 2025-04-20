export default function ContactForm() {
    return (
        // <!-- CONTACT FORM -->
        <div className="ul-contact-from-section">
            <div className="ul-contact-form-2-container">
                <h3 className="ul-contact-form-2-container__title">Get in Touch</h3>
                <form action="#" className="ul-contact-form-2">
                    <div className="grid">
                        {/* <!-- firstname --> */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input type="text" name="firstname" id="firstname" placeholder="First Name"/>
                                <span className="field-icon"><i className="flaticon-user"></i></span>
                            </div>
                        </div>

                        {/* <!-- lastname --> */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input type="text" name="lastname" id="lastname" placeholder="Last Name"/>
                                <span className="field-icon"><i className="flaticon-user"></i></span>
                            </div>
                        </div>

                        {/* <!-- phone --> */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input type="tel" name="phone-number" id="phone-number" placeholder="Phone Number"/>
                                <span className="field-icon"><i className="flaticon-telephone-1"></i></span>
                            </div>
                        </div>
                        {/* <!-- email --> */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input type="email" name="email" id="email" placeholder="Enter Email Address"/>
                                <span className="field-icon"><i className="flaticon-email"></i></span>
                            </div>
                        </div>
                        {/* <!-- message --> */}
                        <div className="form-group">
                            <div className="position-relative">
                                <textarea name="message" id="message" placeholder="Write Message..."></textarea>
                            </div>
                        </div>
                    </div>
                    {/* <!-- submit btn --> */}
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </div>
    );
}
