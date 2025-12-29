"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Testimonial = () => {
    // Structured Testimonial Data for Ga'als
    const testimonialsData = [
        {
            name: "Eng. Caleb Juma",
            designation: "Project Lead, Mzima Holdings",
            text: "Ga'als delivered our multi-story commercial building on time and significantly under budget. Their rigorous quality control and local supply chain expertise were key to the project's success. Highly professional and reliable.",
            image: "/main-assets/img/testimonial/testi_5_1.png", // Retaining original image path
        },
        {
            name: "Ms. Amina Hassan",
            designation: "CEO, Safarisha Developers",
            text: "The execution of our infrastructure project required complex logistics and strict safety adherence. Ga'als' project management team handled every challenge seamlessly, demonstrating their commitment to engineering excellence.",
            image: "/main-assets/img/testimonial/testi_5_1.png", // Retaining original image path
        },
        {
            name: "Mr. David Kimani",
            designation: "Director, Kilimani Residencies",
            text: "We chose Ga'als for their comprehensive Turnkey EPC solution. They managed everything from design approval in Nairobi to final finishing. The transparency and communication throughout the build were exceptional.",
            image: "/main-assets/img/testimonial/testi_5_1.png", // Retaining original image path
        },
    ];

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 5000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                },
            },
        ],
    };

    return (
        <div className="testimonial-area-5 home-one-testimonial overflow-hidden space position-relative">
            <div
                className="testimonial-bg-thumb5-1 background-image"
                style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg5-1.png')" }}
            ></div>
            <div
                className="testimonial-bg-thumb5-2 background-image"
                style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg5-2.png')" }}
            ></div>
            <div className="container">
                <div className="row gx-100 gy-60">
                    <div className="col-xl-5 col-lg-6">
                        <div className="title-area">
                            <span className="sub-title text-theme">
                                Client Success Stories <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title text-white">Trusted by Industry Leaders</h2>
                        </div>

                        <Slider
                            {...settings}
                            className="row global-carousel testi-slider5 dot-style2"
                        >
                            {/* Dynamically render testimonials to maintain the structure */}
                            {testimonialsData.map((testimonial, index) => (
                                <div className="col-lg-6" key={index}>
                                    <div className="testi-card style5">
                                        <div className="testi-card-profile">
                                            <div className="testi-card-thumb">
                                                <Image src={testimonial.image} alt={testimonial.name} width={70} height={70}/>
                                            </div>
                                            <div className="testi-card-profile-details">
                                                <h4 className="testi-profile-title">{testimonial.name}</h4>
                                                <span className="testi-profile-desig">
                                                    {testimonial.designation}
                                                </span>
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
                                            <p className="testi-card_text">
                                                {testimonial.text}
                                            </p>
                                            <div className="quote-icon">
                                                <Image src="/main-assets/img/icon/quote.svg" alt="Quote Icon" width={60} height={60}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>

                        {/* Custom dots - TODO: custom add here (Left empty to maintain original comments/structure) */}
                    </div>

                    <div className="col-lg-6">
                        <div className="testi-client-group5">
                            <div className="client-group-thumb">
                                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="Client Logos" width={175} height={61} />
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number">
                                    <span className="counter-number">1.5</span>M+
                                </h3>
                                <p className="testi-counter-text">USD Project Value Delivered</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;