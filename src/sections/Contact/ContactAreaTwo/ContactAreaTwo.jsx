"use client";

import React, { useState, useRef, useEffect } from 'react';

const ContactDropdown = () => (
    <div className="col-md-6">
        <div className="form-group">
            <select 
                name="subject" 
                id="subject" 
                className="single-select nice-select form-select"
                defaultValue=""
                required
            >
                <option value="" disabled hidden>Your Inquiry</option>
                <option value="Residential Development">Residential Development</option>
                <option value="Commercial Construction">Commercial Construction</option>
                <option value="Project Management">Project Management</option>
                <option value="Real Estate Consultancy">Real Estate Consultancy</option>
                <option value="Joint Venture Opportunities">Joint Venture Opportunities</option>
                <option value="Interior Design & Fit-out">Interior Design & Fit-out</option>
            </select>
        </div>
    </div>
);

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState(null); // 'sending', 'success', 'error'
    const [sdkLoaded, setSdkLoaded] = useState(false);

    // Dynamically load EmailJS SDK to avoid build errors in environments without the npm package
    useEffect(() => {
        if (typeof window !== 'undefined' && !window.emailjs) {
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
            script.async = true;
            script.onload = () => setSdkLoaded(true);
            document.body.appendChild(script);
        } else if (window.emailjs) {
            setSdkLoaded(true);
        }
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        
        if (!sdkLoaded || !window.emailjs) {
            console.error("EmailJS SDK not loaded yet.");
            return;
        }

        setStatus('sending');

        // Replace these with your actual EmailJS IDs from your dashboard
        const SERVICE_ID = 'service_imfbdzz';
        const TEMPLATE_ID = 'template_jaz95b9';
        const PUBLIC_KEY = 'gd5Jel5psHgIcjRnm';

        window.emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log('Email successfully sent to info@columbiadevelopers.co.ke');
                setStatus('success');
                e.target.reset();
            }, (error) => {
                console.error('Email failed:', error);
                setStatus('error');
            });
    };

    return (
        <section className="contact-area-2 space overflow-hidden" id="contact-sec">
            <div className="container">
                <div
                    className="contact-wrap2 space overflow-hidden shape-mockup-wrap background-image"
                    style={{ backgroundImage: "url('/main-assets/img/bg/contact-bg4-1.png')" }}
                >
                    <div
                        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
                        style={{
                            backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')",
                            top: '0px',
                            left: '0px'
                        }}
                    ></div>
                    
                    <div className="row gy-60 justify-content-lg-between justify-content-center align-items-center">
                        <div className="col-lg-4">
                            <div className="contact-info-wrap text-white">
                                <div className="title-area mb-30">
                                    <span className="sub-title text-theme">Our Location</span>
                                    <h3 className="sec-title text-white">Visit Our Karen Office</h3>
                                </div>
                                <div className="contact-info-list">
                                    <div className="contact-info d-flex align-items-center mb-20">
                                        <i className="ri-map-pin-2-fill me-3 text-theme"></i>
                                        <p className="mb-0">Megaco Hse, Mukinduri Rd, Karen, Nairobi</p>
                                    </div>
                                    <div className="contact-info d-flex align-items-center mb-20">
                                        <i className="ri-phone-fill me-3 text-theme"></i>
                                        <p className="mb-0">+254 (0) 020-205 3648</p>
                                    </div>
                                    <div className="contact-info d-flex align-items-center">
                                        <i className="ri-mail-fill me-3 text-theme"></i>
                                        <p className="mb-0">info@columbiadevelopers.co.ke</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-7">
                            <div className="contact-form-wrap">
                                <div className="title-area">
                                    <span className="sub-title text-theme">
                                        Request Consultation <i className="ri-arrow-right-down-line"></i>
                                    </span>
                                    <h2 className="sec-title">Have a project in mind?</h2>
                                </div>

                                {status === 'success' ? (
                                    <div className="alert alert-success p-4 border-0 rounded-3 text-center" style={{ backgroundColor: 'rgba(25, 135, 84, 0.1)', color: '#198754' }}>
                                        <i className="ri-checkbox-circle-fill display-4 d-block mb-3"></i>
                                        <h4>Message Sent!</h4>
                                        <p>Your inquiry has been sent to info@columbiadevelopers.co.ke. We will respond shortly.</p>
                                        <button onClick={() => setStatus(null)} className="btn btn-sm mt-2" type="button">Send Another</button>
                                    </div>
                                ) : (
                                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                                        {status === 'error' && (
                                            <div className="alert alert-danger mb-4">
                                                Something went wrong. Please try again or email us directly at info@columbiadevelopers.co.ke.
                                            </div>
                                        )}
                                        <div className="row gy-4">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="text" className="form-control" name="user_name" placeholder="Your Name" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="email" className="form-control" name="user_email" placeholder="Email Address" required />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <input type="tel" className="form-control" name="user_phone" placeholder="Phone Number" required />
                                                </div>
                                            </div>
                                            
                                            <ContactDropdown />

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <textarea name="message" cols="30" rows="3" className="form-control" placeholder="Briefly describe your project..." required></textarea>
                                                </div>
                                            </div>
                                            <div className="form-btn col-12">
                                                <button className="btn w-100" type="submit" disabled={status === 'sending' || !sdkLoaded}>
                                                    {status === 'sending' ? 'Sending...' : 'Submit Inquiry'} 
                                                    <i className="ri-arrow-right-up-line ms-2"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;