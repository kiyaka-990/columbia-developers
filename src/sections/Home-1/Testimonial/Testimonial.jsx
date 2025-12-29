"use client";

import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
    };

    const sliderRef = useRef(null);

    const goToPrev = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const goToNext = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    return (
        <div
            className="testimonial-area-1 home-one-testimonial overflow-hidden space bg-smoke shape-mockup-wrap background-image"
            style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg1-1.png')" }}
        >
            <div
                className="testimonial_shape_1-1 shape-mockup jump d-xxl-block d-none"
                style={{ top: '0px', right: '4%' }}
            >
                <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="img" width={90} height={331}/>
            </div>
            <div className="container">
                <div className="row gx-100 gy-60 flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="title-area">
                            <span className="sub-title">
                                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60} />
                                CLIENT FEEDBACK
                            </span>
                            <h2 className="sec-title">Trusted by Leading Partners in East Africa</h2>
                        </div>

                        <Slider
                            {...settings}
                            className="row global-carousel testi-slider1"
                            ref={sliderRef}
                        >
                            {/* Testimonial 1: Infrastructure */}
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="quote icon" width={20}  height={20}/>
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="Director Profile" width={70} height={70}/>
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Exceptional Project Delivery</h4>
                                        <p className="testi-card_text">
                                            &quot;Columbia Developers handled our commercial complex development with unmatched professionalism. Their ability to integrate civil engineering expertise with timely delivery makes them a top-tier partner in the Kenyan market.&quot;
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Eng. David M.</h4>
                                            <span className="testi-profile-desig">
                                                Technical Director, Nairobi Urban Infra
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2: Logistics & Supply Chain */}
                            <div className="col-lg-6">
                                <div className="testi-card">
                                    <div className="quote-icon">
                                        <Image src="/main-assets/img/icon/quote.svg" alt="quote icon" width={20} height={20}/>
                                    </div>
                                    <div className="testi-card-thumb">
                                        <Image src="/main-assets/img/testimonial/testi_1_2.png" alt="Procurement Profile" width={70} height={70}/>
                                    </div>
                                    <div className="testi-card_content">
                                        <h4 className="testi-card_title">Reliable Logistics Support</h4>
                                        <p className="testi-card_text">
                                            &quot;The logistics team at Columbia Developers was instrumental in sourcing and delivering specialized equipment for our site. Their port clearance services saved us weeks of potential downtime.&quot;
                                        </p>
                                        <div className="testi-card-profile">
                                            <h4 className="testi-profile-title">Sarah Kamau</h4>
                                            <span className="testi-profile-desig">
                                                Head of Sourcing, Regional Power Solutions
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>

                        <div className="btn-wrap mt-70">
                            <div className="icon-box">
                                <button onClick={goToPrev} className="slick-arrow style2 default">
                                    <i className="ri-arrow-left-down-line"></i>
                                </button>
                                <button onClick={goToNext} className="slick-arrow style2 default">
                                    <i className="ri-arrow-right-up-line"></i>
                                </button>
                            </div>
                            <div className="client-group-thumb">
                                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="Partner logos" width={175} height={65} />
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number">
                                    <span className="counter-number">150</span>+
                                </h3>
                                <p className="testi-counter-text">Successful Deliveries</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div
                            className="testimonial-card background-image"
                            style={{
                                backgroundImage: "url('/main-assets/img/bg/testimonial-card-bg1-1.png')",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "center",
                                overflow: 'hidden'
                            }}
                        >
                            <h3 className="testimonial-card-title">
                                Partner with Columbia Developers Today
                            </h3>
                            <p className="testimonial-card-text">
                                Whether you are planning a high-rise development or need a reliable supply chain for raw materials, our team is ready to deliver.
                            </p>
                            <div className="btn-group">
                                <Link href="/pages/innerpage/contact" className="btn style6">
                                    Get Started <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;