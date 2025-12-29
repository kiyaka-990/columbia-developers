import ContactDropdown from "../../Common/ContactDropdown";

const Contact = () => {
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
                        {/* Office Details Column */}
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

                        {/* Form Column */}
                        <div className="col-xl-7">
                            <div className="contact-form-wrap">
                                <div className="title-area">
                                    <span className="sub-title text-theme">
                                        Request Consultation <i className="ri-arrow-right-down-line"></i>
                                    </span>
                                    <h2 className="sec-title">Have a project in mind?</h2>
                                </div>
                                <form
                                    action="mail.php"
                                    method="POST"
                                    className="contact-form ajax-contact"
                                >
                                    <div className="row gy-4">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    name="name"
                                                    id="name"
                                                    placeholder="Your Name"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    name="email"
                                                    id="email"
                                                    placeholder="Email Address"
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input
                                                    type="tel"
                                                    className="form-control"
                                                    name="number"
                                                    id="number"
                                                    placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <ContactDropdown />

                                        <div className="col-12">
                                            <div className="form-group ">
                                                <textarea
                                                    name="message"
                                                    id="message"
                                                    cols="30"
                                                    rows="3"
                                                    className="form-control"
                                                    placeholder="Briefly describe your project (Location, Scale, Type)..."
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div className="form-btn col-12">
                                            <button className="btn w-100">
                                                Submit Inquiry <i className="ri-arrow-right-up-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <p className="form-messages mb-0 mt-3"></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;