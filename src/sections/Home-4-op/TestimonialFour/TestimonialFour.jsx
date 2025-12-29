import Image from "next/image";
const TestimonialFour = () => {
    return (
        <div className="testimonial-area-4 overflow-hidden space bg-smoke" style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg4-1.png')" }}>
            <div className="testimonial_shape_1-1 shape-mockup jump d-xxl-block d-none" data-top="0" data-right="4%">
                <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="img" width={90} height={131}/>
            </div>
            <div className="container">
                <div className="row gx-100 gy-60 flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="title-area">
                            <span className="sub-title text-theme">Ga&apos;als Success Stories <i className="ri-arrow-right-down-line"></i></span>
                            <h2 className="sec-title">What our partners say</h2>
                        </div>
                        <div className="row global-carousel testi-slider1" data-slide-show="1">
                            {/* --- Testimonial 1: Construction Focus --- */}
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="img" width={60} height={60} />
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="img" width={70} height={70}/>
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Delivered On Time and Budget!</h4>
                                        <p className="testi-card_text">Ga&apos;als managed the entire site preparation and foundation work flawlessly. Their adherence to the tight construction schedule and commitment to safety standards were exceptional. We finished ahead of the initial projected timeline.</p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Marcus V.</h4>
                                            <span className="testi-profile-desig">Project Manager at CityDevelop</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --- Testimonial 2: Construction Focus --- */}
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="img" width={60} height={60}/>
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_2.png" alt="img" width={70} height={70}/>
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Superior Quality and Craftsmanship!</h4>
                                        <p className="testi-card_text">The structural framing handled by Ga&apos;als was top-notch. Their attention to detail in material selection and execution guaranteed the long-term integrity of our commercial building. A truly professional outfit.</p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Sofia P.</h4>
                                            <span className="testi-profile-desig">Director of Acquisitions, Terra Group</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* --- Testimonial 3: Construction Focus --- */}
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="img" width={60} height={60} />
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="img" width={70} height={70}/>
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Smooth Subcontractor Coordination!</h4>
                                        <p className="testi-card_text">Ga&apos;als excelled at coordinating various trades on site, minimizing downtime and friction. Their proactive site management was key to avoiding costly schedule overlaps and ensuring seamless transitions between construction phases.</p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">James H.</h4>
                                            <span className="testi-profile-desig">Lead Architect, High Rise Designs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrap mt-70">
                            <div className="icon-box">
                                <button data-slick-prev=".testi-slider1" className="slick-arrow style2 default"><i className="ri-arrow-left-down-line"></i></button>
                                <button data-slick-next=".testi-slider1" className="slick-arrow style2 default"><i className="ri-arrow-right-up-line"></i></button>
                            </div>
                            <div className="client-group-thumb">
                                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="img" width={175} height={61}/>
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number"><span className="counter-number">200</span>+</h3>
                                <p className="testi-counter-text">Successful Ga&apos;als Projects</p>
                            </div>
                        </div>
                    </div>
                    {/* --- FAQ/Accordion Section: Construction Focus --- */}
                    <div className="col-xl-6">
                        <div className="accordion-area style2 accordion" id="faqAccordion">

                            <div className="accordion-card active">
                                <div className="accordion-header" id="collapse-item-1">
                                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1"> What is the typical process for a new construction project with Ga&apos;als?</button>
                                </div>
                                <div id="collapse-1" className="accordion-collapse collapse show" aria-labelledby="collapse-item-1" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">Our process involves initial site assessment and feasibility study, detailed design and permitting, establishing a critical path schedule, construction execution, and final handover and closeout.</p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card ">
                                <div className="accordion-header" id="collapse-item-2">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-2"> How does Ga&apos;als ensure safety compliance on site?</button>
                                </div>
                                <div id="collapse-2" className="accordion-collapse collapse " aria-labelledby="collapse-item-2" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">We implement strict, site-specific safety plans, conduct daily safety briefings, require mandatory PPE (Personal Protective Equipment) for all personnel, and adhere rigorously to all local and national construction safety regulations. </p>
                                    </div>
                                </div>
                            </div>


                            <div className="accordion-card ">
                                <div className="accordion-header" id="collapse-item-3">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="false" aria-controls="collapse-3"> What types of projects does Ga&apos;als specialize in (residential, commercial, industrial)?</button>
                                </div>
                                <div id="collapse-3" className="accordion-collapse collapse " aria-labelledby="collapse-item-3" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">Ga&apos;als has expertise spanning commercial infrastructure, multi-family residential developments, and light industrial facilities. We evaluate each project&apos;s scope to ensure we can deliver the highest quality within our specialized sectors.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-card ">
                                <div className="accordion-header" id="collapse-item-4">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="false" aria-controls="collapse-4"> How does Ga&apos;als handle material procurement and supply chain management?</button>
                                </div>
                                <div id="collapse-4" className="accordion-collapse collapse " aria-labelledby="collapse-item-4" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">We leverage a strong network of pre-qualified suppliers and sub-contractors. Our team employs proactive inventory management and forecasting to mitigate risks of delays and ensure cost control on all critical materials.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="accordion-card ">
                                <div className="accordion-header" id="collapse-item-5">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="false" aria-controls="collapse-5"> Does Ga&apos;als provide post-construction warranty or support?</button>
                                </div>
                                <div id="collapse-5" className="accordion-collapse collapse " aria-labelledby="collapse-item-5" data-bs-parent="#faqAccordion">
                                    <div className="accordion-body">
                                        <p className="faq-text">Yes, all projects come with a standard one-year warranty on workmanship and materials, per industry standards. We also offer extended maintenance and support packages upon project completion.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialFour;