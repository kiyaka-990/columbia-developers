import Image from "next/image";
const TestimonialFive = () => {
    return (
        <div className="testimonial-area-5 overflow-hidden space position-relative">
            {/* Background Images - Retaining original paths */}
            <div className="testimonial-bg-thumb5-1" style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg5-1.png')" }}></div>
            <div className="testimonial-bg-thumb5-2" style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg5-2.png')" }}></div>
            <div className="container">
                <div className="row gx-100 gy-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="title-area">
                            <span className="sub-title text-theme">
                                Client Success Stories <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title text-white">Trusted by Industry Leaders</h2>
                        </div>
                        {/* The carousel mechanism relies on these data attributes and class names */}
                        <div className="row global-carousel testi-slider5 dot-style2" data-slide-show="1" data-dots="true">
                            {/* Slide 1 */}
                            <div className="col-lg-6">
                                <div className="testi-card style5">
                                    <div className="testi-card-profile">
                                        <div className="testi-card-thumb">
                                            <Image src="/main-assets/img/testimonial/testi_5_1.png" alt="Caleb Juma" width={70} height={70} />
                                        </div>
                                        <div className="testi-card-profile-details">
                                            <h4 className="testi-profile-title">Eng. Caleb Juma</h4>
                                            <span className="testi-profile-desig">Project Lead, Mzima Holdings</span>
                                        </div>
                                    </div>

                                    <div className="testi-card_content">
                                        <div className="testi-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <p className="testi-card_text">Ga&apos;als delivered our multi-story commercial building on time and significantly under budget. Their rigorous quality control and local supply chain expertise were key to the project&apos;s success. Highly professional and reliable.</p>
                                        <div className="quote-icon">
                                            <Image src="/main-assets/img/icon/quote.svg" alt="Quote Icon" width={60} height={60}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 2 */}
                            <div className="col-lg-6">
                                <div className="testi-card style5">
                                    <div className="testi-card-profile">
                                        <div className="testi-card-thumb">
                                            <Image src="/main-assets/img/testimonial/testi_5_1.png" alt="Amina Hassan" width={70} height={70} />
                                        </div>
                                        <div className="testi-card-profile-details">
                                            <h4 className="testi-profile-title">Ms. Amina Hassan</h4>
                                            <span className="testi-profile-desig">CEO, Safarisha Developers</span>
                                        </div>
                                    </div>

                                    <div className="testi-card_content">
                                        <div className="testi-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <p className="testi-card_text">The execution of our infrastructure project required complex logistics and strict safety adherence. Ga&apos;als&apos; project management team handled every challenge seamlessly, demonstrating their commitment to engineering excellence.</p>
                                        <div className="quote-icon">
                                            <Image src="/main-assets/img/icon/quote.svg" alt="Quote Icon" width={60} height={60} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Slide 3 */}
                            <div className="col-lg-6">
                                <div className="testi-card style5">
                                    <div className="testi-card-profile">
                                        <div className="testi-card-thumb">
                                            <Image src="/main-assets/img/testimonial/testi_5_1.png" alt="David Kimani" width={70} height={70} />
                                        </div>
                                        <div className="testi-card-profile-details">
                                            <h4 className="testi-profile-title">Mr. David Kimani</h4>
                                            <span className="testi-profile-desig">Director, Kilimani Residencies</span>
                                        </div>
                                    </div>

                                    <div className="testi-card_content">
                                        <div className="testi-rating">
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                            <i className="ri-star-fill"></i>
                                        </div>
                                        <p className="testi-card_text">We chose Ga&apos;als for their comprehensive Turnkey EPC solution. They managed everything from design approval in Nairobi to final finishing. The transparency and communication throughout the build were exceptional.</p>
                                        <div className="quote-icon">
                                            <Image src="/main-assets/img/icon/quote.svg" alt="Quote Icon" width={60} height={60}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="testi-client-group5">
                            <div className="client-group-thumb">
                                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="Client Logos" width={175} height={61} />
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number"><span className="counter-number">150</span>+</h3>
                                <p className="testi-counter-text">Completed Projects in East Africa</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialFive;