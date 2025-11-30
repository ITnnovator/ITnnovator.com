"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";

export default function ContactGravityForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
        consent: false,
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.consent) {
            toast.error("Please agree to the privacy policy before submitting.");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    phone: formData.phone,
                    subject: "New Inquiry",
                    message: formData.message,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success("Message sent successfully!"); 
                setFormData({
                    firstName: "",
                    lastName: "",
                    email: "",
                    phone: "",
                    message: "",
                    consent: false,
                });
            } else {
                toast.error(data.error || "Something went wrong.");
            }
        } catch (error) {
            toast.error("Failed to send message. Please try again.");
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            id="gform_1"
            className="gform"
            method="post"
            action="#"
            data-formid="1"
        >
            <div className="gform-body gform_body">
                <div
                    id="gform_fields_1"
                    className="gform_fields top_label form_sublabel_below description_below validation_below"
                >
                    <div
                        id="field_1_1"
                        className="gfield gfield--type-text gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                    >
                        <label
                            className="gfield_label gform-field-label"
                            htmlFor="input_1_1"
                        >
                            First Name
                            <span className="gfield_required">
                                <span className="gfield_required gfield_required_text">
                                    (Required)
                                </span>
                            </span>
                        </label>
                        <div className="ginput_container ginput_container_text">
                            <input
                                name="firstName"
                                type="text"
                                className="large"
                                placeholder="First Name"
                                value={formData.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div
                        id="field_1_3"
                        className="gfield gfield--type-text gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                    >
                        <label
                            className="gfield_label gform-field-label"
                            htmlFor="input_1_3"
                        >
                            Last Name
                            <span className="gfield_required">
                                <span className="gfield_required gfield_required_text">
                                    (Required)
                                </span>
                            </span>
                        </label>
                        <div className="ginput_container ginput_container_text">
                            <input
                                name="lastName"
                                type="text"
                                className="large"
                                placeholder="Last Name"
                                value={formData.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div
                        id="field_1_4"
                        className="gfield gfield--type-email gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                    >
                        <label
                            className="gfield_label gform-field-label"
                            htmlFor="input_1_4"
                        >
                            Email
                            <span className="gfield_required">
                                <span className="gfield_required gfield_required_text">
                                    (Required)
                                </span>
                            </span>
                        </label>
                        <div className="ginput_container ginput_container_email">
                            <input
                                name="email"
                                type="email"
                                className="large"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div
                        id="field_1_5"
                        className="gfield gfield--type-phone gfield--width-half label-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                    >
                        <label
                            className="gfield_label gform-field-label"
                            htmlFor="input_1_5"
                        >
                            Mobile
                            <span className="gfield_required">
                                <span className="gfield_required gfield_required_text">
                                    (Required)
                                </span>
                            </span>
                        </label>
                        <div className="ginput_container ginput_container_phone">
                            <input
                                name="phone"
                                type="tel"
                                className="large"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div
                        id="field_1_6"
                        className="gfield gfield--type-textarea gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                    >
                        <label
                            className="gfield_label gform-field-label"
                            htmlFor="input_1_6"
                        >
                            Message
                            <span className="gfield_required">
                                <span className="gfield_required gfield_required_text">
                                    (Required)
                                </span>
                            </span>
                        </label>
                        <div className="ginput_container ginput_container_textarea">
                            <textarea
                                name="message"
                                id="input_1_6"
                                className="textarea large"
                                placeholder="How can we help?"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="10"
                                cols="50"
                            ></textarea>
                        </div>
                    </div>

                    <fieldset
                        id="field_1_7"
                        className="gfield gfield--type-consent gfield--type-choice legend-hidden gfield_contains_required field_sublabel_below gfield--no-description field_description_below field_validation_below gfield_visibility_visible"
                    >
                        <legend className="gfield_label gform-field-label gfield_label_before_complex">
                            Consent
                            <span className="gfield_required">
                                <span className="gfield_required gfield_required_text">
                                    (Required)
                                </span>
                            </span>
                        </legend>
                        <div className="ginput_container ginput_container_consent">
                            <input
                                name="consent"
                                id="input_1_7_1"
                                type="checkbox"
                                checked={formData.consent}
                                onChange={handleChange}
                                required
                            />
                            <label
                                className="gform-field-label gform-field-label--type-inline gfield_consent_label"
                                htmlFor="input_1_7_1"
                            >
                                I have read Itnnovator’s &nbsp;
                                <a className="underline" href="/privacy-policy">
                                    privacy policy
                                </a>
                                .
                            </label>
                            <input type="hidden" name="input_7.2" />
                            <input
                                type="hidden"
                                name="input_7.3"
                                value="1"
                                className="gform_hidden"
                            />
                        </div>
                    </fieldset>
                </div>
            </div>
            <div className="gform-footer gform_footer top_label">
                <button
                    className="js-hover-circle-animation inline-block text-base md:text-lg text-malibu contact-submit-button js-contact-submit-button"
                    id="gform_submit_button_1"
                    type="submit"
                    disabled={loading}
                >
                    <span className="text-xl">
                        {" "}
                        {loading ? "Sending..." : "Send Message"}
                    </span>
                    <span className="pl-1 pr-1 transition-all duration-200 ease-linear">
                        <svg
                            className="inline-block"
                            preserveAspectRatio="none"
                            width="22"
                            height="15"
                            aria-hidden="true"
                        >
                            <use href="/webImages/icons.svg#arrow-right"></use>
                        </svg>
                    </span>
                </button>
            </div>
        </form>
    );
}
