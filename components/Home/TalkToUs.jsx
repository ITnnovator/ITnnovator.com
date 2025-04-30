'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function TalkToUs() {
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const result = await res.json();

            if (res.ok) {
                toast.success('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
            } else {
                toast.error(result.error || 'Something went wrong!');
            }
        } catch (error) {
            console.error(error);
            toast.error('Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="col">
            <div className="ul-contact-form-wrapper">
                <div>
                    <span className="ul-section-sub-title">TALK TO US</span>
                    <h2 className="ul-section-title">How May We Help You!</h2>

                    <form onSubmit={handleSubmit} className="ul-contact-form">
                        <div className="row ul-bs-row row-cols-2 row-cols-xxs-1">
                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="ul-contact-name">Your Name*</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="ul-contact-name"
                                        placeholder="Full Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="ul-contact-email">Your Email*</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="ul-contact-email"
                                        placeholder="info@example.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="ul-contact-subject">Subject*</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="ul-contact-subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <div className="form-group">
                                    <label htmlFor="ul-contact-phone">Your Phone*</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="ul-contact-phone"
                                        placeholder="+1253 457 7840"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <label htmlFor="ul-contact-message">Message*</label>
                                    <textarea
                                        name="message"
                                        id="ul-contact-message"
                                        placeholder="Write Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-12">
                                <div className="form-group">
                                    <button type="submit" disabled={loading}>
                                        {loading ? 'Sending...' : 'Send Message'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
