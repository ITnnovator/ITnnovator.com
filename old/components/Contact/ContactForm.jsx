'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    phone: '',
                    message: '',
                });
            } else {
                toast.error(data.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="ul-contact-from-section">
            <div className="ul-contact-form-2-container">
                <h3 className="ul-contact-form-2-container__title">Get in Touch</h3>
                <form onSubmit={handleSubmit} className="ul-contact-form-2">
                    <div className="grid">
                        {/* Name */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Full Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="field-icon">
                                    <i className="flaticon-user"></i>
                                </span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="info@example.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="field-icon">
                                    <i className="flaticon-email"></i>
                                </span>
                            </div>
                        </div>

                        {/* Subject */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input
                                    type="text"
                                    name="subject"
                                    id="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="field-icon">
                                    <i className="flaticon-writing"></i>
                                </span>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="form-group">
                            <div className="position-relative">
                                <input
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    placeholder="+9253 457 7840"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <span className="field-icon">
                                    <i className="flaticon-telephone-1"></i>
                                </span>
                            </div>
                        </div>

                        {/* Message */}
                        <div className="form-group">
                            <div className="position-relative">
                                <textarea
                                    name="message"
                                    id="message"
                                    placeholder="Write Message..."
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
}
