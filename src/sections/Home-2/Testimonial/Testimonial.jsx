'use client';
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image"; 


const Testimonial = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    dots: false,
                },
            },
        ],
    };
    return (
        <div className="testimonial-area-2 overflow-hidden shape-mockup-wrap">
            <div className="testimonial-anim-shape2-1 section-animation-shape1-1 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", right: '0px', top: '0px' }}>
            </div>
            <div className="testimonial_shape_2-1 shape-mockup jump d-xxl-block d-none" style={{ bottom: '0px', right: '10%' }}>
                <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="Decorative Shape" width={90} height={331}/>
            </div>
            <div className="testimonial_shape_2-2">
                <Image src="/main-assets/img/bg/testimonial-bg-shape2-1.png" alt="Background Shape" width={1293} height={800}/>
            </div>
            <div className="testimonial_shape_2-3 movingX">
                <Image src="/main-assets/img/bg/testimonial-bg-shape2-2.png" alt="Decorative Element" width={125} height={41}/>
            </div>
            <div className="testimonial_shape_2-4 movingX">
            </div>

            <div className="testimonial_bg_thumb2-1 background-image" style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg2-1.png')" }}>
            </div>
            {/* NOTE: Consider updating testimonial_2-1.png to a picture relevant to construction/logistics */}
            <div className="testimonial_thumb2-1 background-image" style={{ backgroundImage: "url('/main-assets/img/normal/testimonial_2-1.png')" }}>
            </div>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-xl-9">
                        <div className="testi-wrap2">
                            <div className="title-area">
                                <span className="sub-title text-theme">
                                    <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="Icon" width={60} height={60}/>
                                    Client Trust & Feedback
                                </span>
                                <h2 className="sec-title text-white">HEAR FROM OUR PARTNERS IN SUCCESS</h2>
                            </div>
                            <Slider {...settings} className="row global-carousel testi-slider2" data-slide-show="1" data-dots="true" data-xl-dots="true" data-ml-dots="true">
                                
                                {/* Testimonial 1: Focus on Construction */}
                                <div className="col-12">
                                    <div className="testi-card style2">
                                        <div className="testi-card-thumb">
                                            <Image src="/main-assets/img/testimonial/testi_2_1.png" alt="Client Photo" width={70} height={70}/>
                                            <div className="quote-icon">
                                                <Image src="/main-assets/img/icon/quote2.svg" alt="Quote Icon" width={60} height={60}/>
                                            </div>
                                        </div>
                                        <div className="testi-card_content">
                                            <h4 className="testi-card_title">Project Excellence!</h4>
                                            <p className="testi-card_text">Ga&apos;als Agencies delivered our complex commercial construction project with precision. Their attention to structural integrity and adherence to the timeline exceeded all expectations. Highly recommended for major works.</p>
                                            <div className="testi-card-profile">
                                                <h4 className="testi-profile-title">James Otieno</h4>
                                                <span className="testi-profile-desig">CEO, Skyline Developers Ltd.</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Testimonial 2: Focus on Logistics */}
                                <div className="col-12">
                                    <div className="testi-card style2">
                                        <div className="testi-card-thumb">
                                            <Image src="/main-assets/img/testimonial/testi_2_2.png" alt="Client Photo" width={70} height={70}/>
                                            <div className="quote-icon">
                                                <Image src="/main-assets/img/icon/quote2.svg" alt="Quote Icon" width={60} height={60}/>
                                            </div>
                                        </div>
                                        <div className="testi-card_content">
                                            <h4 className="testi-card_title">Logistics Mastered!</h4>
                                            <p className="testi-card_text">We rely on Ga&apos;als for all our cross-border transportation of heavy machinery. They are efficient, professional, and ensure every shipment is delivered safely and exactly on schedule. A superb logistics partner.</p>
                                            <div className="testi-card-profile">
                                                <h4 className="testi-profile-title">Aisha Farah</h4>
                                                <span className="testi-profile-desig">Operations Manager, Regional Mining Co.</span>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                                
                                {/* Testimonial 3: Focus on Supply/Procurement */}
                                <div className="col-12">
                                    <div className="testi-card style2">
                                        <div className="testi-card-thumb">
                                            <Image src="/main-assets/img/testimonial/testi_2_3.png" alt="Client Photo" width={70} height={70}/>
                                            <div className="quote-icon">
                                                <Image src="/main-assets/img/icon/quote2.svg" alt="Quote Icon" width={60} height={60}/>
                                            </div>
                                        </div>
                                        <div className="testi-card_content">
                                            <h4 className="testi-card_title">Reliable Supply Chain!</h4>
                                            <p className="testi-card_text">We needed specialized materials quickly for a time-sensitive build. Ga&apos;als Agencies sourced, purchased, and delivered everything right to our site, maintaining excellent quality control throughout the process. A reliable supply partner.</p>
                                            <div className="testi-card-profile">
                                                <h4 className="testi-profile-title">David Njoroge</h4>
                                                <span className="testi-profile-desig">Procurement Manager, Green Earth Projects</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;