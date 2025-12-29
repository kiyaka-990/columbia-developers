import Link from "next/link";
import Image from "next/image";

const Contact = () => {
    // Ga'als Specific Contact Information
    const mainOfficeCity = "Nairobi, Kenya";
    const officeAddress = "Kipande Road, Westlands, Nairobi, Kenya"; // Example address
    const officePhoneNumber = "+254 714 861 896"; // CEO's number used as primary contact
    const alternatePhoneNumber = "+254 700 123 456"; // Example secondary number
    const supportEmail = "info@gaals.co.ke"; // Personalized email

    return (
        <section className="contact-area-1 space bg-title overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/contact-bg1-1.png')" }} id="contact-sec">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite style-gray background-image" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')", top: '0px' }}>
            </div>
            <div className="container">
                <div className="row gy-60 flex-row-reverse justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-xl-5">
                        <div className="contact-thumb1-1">
                            <Image src="/main-assets/img/normal/contact_1-1.png" alt="Construction Contact Image" width={606} height={450} />
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="title-area">
                            <span className="sub-title"><Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60} /><span className="text-white">GET IN TOUCH</span></span> {/* Personalized Subtitle */}
                            <h2 className="sec-title text-white">READY TO START YOUR NEXT PROJECT?</h2> {/* Personalized Title */}
                            <p className="text-white">
                               Reach out to Ga&apos;als Construction today to discuss your vision, request a quote, or learn more about our engineering and building solutions.
                            </p> {/* Personalized Description */}
                        </div>
                        <div className="row gy-60">
                            <div className="col-lg-6">
                                <div className="contact-grid-wrap">
                                    <div className="contact-grid-icon">
                                        <Image src="/main-assets/img/icon/contact-icon1-1.svg" alt="Location Icon" width={60} height={60}/>
                                    </div>
                                    <div className="contact-grid-details">
                                        <h4 className="contact-grid-title">Main Office</h4> {/* Personalized Title */}
                                        <p className="contact-grid-text">{officeAddress}</p> {/* Personalized Address */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-grid-wrap">
                                    <div className="contact-grid-icon">
                                        <Image src="/main-assets/img/icon/contact-icon1-2.svg" alt="Phone Icon" width={60} height={60}/>
                                    </div>
                                    <div className="contact-grid-details">
                                        <h4 className="contact-grid-title">Call Us Anytime</h4> {/* Personalized Title */}
                                        <p className="contact-grid-text"><Link href={`tel:${officePhoneNumber.replace(/\s/g, '')}`}>{officePhoneNumber}</Link></p> {/* Personalized Phone 1 */}
                                        <p className="contact-grid-text"><Link href={`tel:${alternatePhoneNumber.replace(/\s/g, '')}`}>{alternatePhoneNumber}</Link></p> {/* Personalized Phone 2 */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-grid-wrap">
                                    <div className="contact-grid-icon">
                                        <Image src="/main-assets/img/icon/contact-icon1-3.svg" alt="Email Icon" width={60} height={60}/>
                                    </div>
                                    <div className="contact-grid-details">
                                        <h4 className="contact-grid-title">Email Inquiry</h4> {/* Personalized Title */}
                                        <p className="contact-grid-text">We aim to respond to all inquiries quickly.</p> {/* Personalized Text */}
                                        <p className="contact-grid-text"><Link href={`mailto:${supportEmail}`}>{supportEmail}</Link></p> {/* Personalized Email */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="contact-grid-wrap">
                                    <div className="contact-grid-icon">
                                        <Image src="/main-assets/img/icon/contact-icon1-4.svg" alt="Social Media Icon" width={60} height={60}/>
                                    </div>
                                    <div className="contact-grid-details">
                                        <h4 className="contact-grid-title">Get Connected</h4>
                                        <div className="social-btn style5 mt-10">
                                            <Link href="https://www.twitter.com/gaalsconstruction" target="_blank"><i className="ri-twitter-x-line"></i></Link> {/* Example social link */}
                                            <Link href="https://instagram.com/gaalsconstruction" target="_blank"><i className="ri-instagram-line"></i></Link> {/* Example social link */}
                                            <Link href="https://facebook.com/gaalsconstruction" target="_blank"><i className="ri-facebook-fill"></i></Link> {/* Example social link */}
                                            <Link href="https://linkedin.com/company/gaalsconstruction" target="_blank"><i className="ri-linkedin-fill"></i></Link> {/* Example social link */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;