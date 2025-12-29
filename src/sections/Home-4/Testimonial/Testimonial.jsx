"use client";

import { useRef, useState } from "react";
import { Accordion } from "react-bootstrap";
import Slider from "react-slick";
import Image from "next/image";

const Testimonial = () => {
    const sliderRef = useRef(null);

    const settings = {
        arrows: false,
        dots: false,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev();
    };

    const handleNext = () => {
        sliderRef.current.slickNext();
    };

    return (
        <div
            className="testimonial-area-4 home-one-testimonial overflow-hidden space bg-smoke shape-mockup-wrap background-image"
            style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg4-1.png')" }}
        >
            <div
                className="testimonial_shape_1-1 shape-mockup jump d-xxl-block d-none"
                data-top="0"
                data-right="4%"
            >
                <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="img" width={90} height={331}/>
            </div>
            <div className="container">
                <div className="row gx-100 gy-60 flex-row-reverse">
                    {/* slider section */}
                    <div className="col-xl-6">
                        {/* slider title area */}
                        <div className="title-area">
                            <span className="sub-title text-theme">
                                Client Feedback <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">What our partners say</h2>
                        </div>
                        <Slider
                            {...settings}
                            ref={sliderRef}
                            className="row global-carousel testi-slider1"
                            data-slide-show="1"
                        >
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="img" width={60} height={60}/>
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="img" width={70} height={70}/>
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Exceptional Project Delivery!</h4>
                                        <p className="testi-card_text">
                                            Ga&apos;als Agencies completed our commercial complex ahead of schedule and within budget. Their attention to quality and compliance with all engineering standards was outstanding. Highly recommend their construction team.
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Sarah Ochieng</h4>
                                            <span className="testi-profile-desig">
                                                Director, Urban Developers Ltd.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="img" width={60} height={60}/>
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_2.png" alt="img" width={70} height={70}/>
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Reliable Logistics Partner!</h4>
                                        <p className="testi-card_text">
                                            The movement of our specialized equipment requires precision and trustworthy handlers. Ga&apos;als provided an end-to-end logistics solution, ensuring zero delays and perfect condition upon arrival. Their tracking system is top-notch.
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">James Mwangi</h4>
                                            <span className="testi-profile-desig">
                                                 Operations Manager, Global Cargo
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="img" width={60} height={60} />
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="img" width={70} height={70} />
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Seamless Supply Chain!</h4>
                                         <p className="testi-card_text">
                                            We rely on Ga&apos;als for consistent and verified material supply. Their ability to source high-demand goods quickly and manage the entire chain, from order to site delivery, has drastically improved our efficiency.
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">David Mutua.</h4>
                                            <span className="testi-profile-desig">
                                               Procurement Officer, Tech Build
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        {/* carousel navigation button */}
                        <div className="btn-wrap mt-70">
                            <div className="icon-box">
                                <button
                                    data-slick-prev=".testi-slider1"
                                    className="slick-arrow style2 default"
                                    onClick={handlePrev}
                                >
                                    <i className="ri-arrow-left-down-line"></i>
                                </button>
                                <button
                                    data-slick-next=".testi-slider1"
                                    className="slick-arrow style2 default"
                                    onClick={handleNext}
                                >
                                    <i className="ri-arrow-right-up-line"></i>
                                </button>
                            </div>

                            {/* bottom right section */}
                            <div className="client-group-thumb">
                                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="img" width={175} height={61}/>
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number">
                                    <span className="counter-number">50</span>+
                                </h3>
                                <p className="testi-counter-text">Projects Delivered</p>
                            </div>
                        </div>
                    </div>

                    {/* accordion section */}
                    <div className="col-xl-6">
                        <div id="faqAccordion">
                            <Accordion
                                defaultActiveKey="1"
                                className="accordion-area style2 accordion"
                            >
                                <Accordion.Item eventKey="1" className="accordion-card">
                                    <Accordion.Header>
                                         How Do You Ensure Quality on Construction Sites?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            We adhere to strict quality assurance protocols, including regular site inspections, use of certified materials sourced through our reliable supply chain, and continuous adherence to international building codes and client specifications.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="2"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                         What Logistics Services Do You Offer for Large Cargo?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            We specialize in heavy haulage, specialized transport, and last-mile delivery. Our services include route planning, securing necessary transit permits, real-time GPS tracking, and providing dedicated teams for safe and secure delivery of large, complex cargo.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="3"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                       Can You Source Specialized Construction Materials?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            Absolutely. Our extensive supply network allows us to source specialized, certified materials and equipment for any project scale. We manage the procurement, inspection, and timely delivery directly to your site, ensuring compliance and cost-effectiveness.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="4"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                        What Are Your Safety and Environmental Standards?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            Safety is our highest priority. We strictly adhere to local and international health, safety, and environment (HSE) guidelines. Our projects and operations undergo rigorous risk assessments to ensure a zero-harm policy for personnel, property, and the environment.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item
                                    eventKey="5"
                                    className="accordion-card custom-border"
                                >
                                    <Accordion.Header>
                                         How Are Contract Terms and Payments Structured?
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <p className="faq-text">
                                            We begin with a transparent, detailed contract outlining all scope, costs, and timelines. Payments are typically milestone-based, linked to measurable project completion phases or cargo delivery milestones, ensuring clear accountability and mutual agreement throughout the engagement.
                                        </p>
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
