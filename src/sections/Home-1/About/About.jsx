"use client";

import Link from "next/link";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const About = () => {
    const { ref: counterRef, inView: counterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    // Theme Columbia Red Filter (#E31E24) for icons
    const iconFilter = { 
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
    };

    return (
        <div className="about-area-1 space overflow-hidden shape-mockup-wrap" ref={counterRef} id="about-sec">
            {/* Background shapes */}
            <div
                className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
                style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}
                aria-hidden="true"
            ></div>

            <div
                className="about_shape_1-1 shape-mockup jump-reverse"
                style={{ bottom: '0px', right: '0px' }}
                aria-hidden="true"
            >
                <Image src="/main-assets/img/normal/about_shape_1-2.png" alt="" height={495} width={372}/>
            </div>

            <div className="container">
                <div className="row gx-60 align-items-center">
                    <div className="col-xl-6">
                        <div className="about-thumb1 mb-40 mb-lg-0">
                            <div className="about-img-1">
                                <Image 
                                    src="/main-assets/img/normal/about_1-1.png" 
                                    alt="Columbia Developers Civil Works" 
                                    height={550} 
                                    width={450} 
                                    className="rounded-4"
                                />
                            </div>
                            <div className="about-counter-wrap jump" role="status" aria-live="polite">
                                <h3 className="about-counter-number">
                                    <span className="counter-number">
                                        {counterInView && (
                                            <CountUp end={33} duration={3} decimals={0} />
                                        )}
                                    </span>
                                    +
                                </h3>
                                <p className="about-counter-text">Years of Engineering Mastery</p>
                                <div className="about-counter-shape" aria-hidden="true">
                                    <Image src="/main-assets/img/normal/about_shape_1-1.png" alt="" height={45} width={255}/>
                                </div>
                                <div className="client-group-thumb">
                                    <Image src="/main-assets/img/normal/client_group_1-1.png" alt="Our regional partners" height={54} width={206}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-6">
                        <div className="about-content-wrap1">
                            <div className="title-area mb-25">
                                <span className="sub-title">
                                    <Image 
                                        src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                        alt="" 
                                        height={30} 
                                        width={30} 
                                        style={iconFilter}
                                    />
                                    THE COLUMBIA STANDARD
                                </span>
                                <h2 className="sec-title">Engineering Excellence with Decades of Integrity</h2>
                                <p className="sec-text">
                                    Columbia Developers Limited is a premier engineering firm specializing in high-tier building construction, specialized procurement, and complex hydraulic works. We don't just build structures; we engineer the infrastructure that drives East Africa's economy.
                                </p>
                            </div>

                            <div className="checklist mb-35">
                                <ul className="list-unstyled" aria-label="Our core capabilities">
                                    <li className="mb-3 d-flex align-items-center">
                                        <Image
                                            src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                                            alt="" height={25} width={25}
                                            style={iconFilter}
                                            className="me-2"
                                        />
                                        Leading Civil Engineering & Turnkey Infrastructure
                                    </li>
                                    <li className="mb-3 d-flex align-items-center">
                                        <Image
                                            src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                                            alt="" height={25} width={25}
                                            style={iconFilter}
                                            className="me-2"
                                        />
                                        Strategic Procurement & Global Logistics Solutions
                                    </li>
                                </ul>
                            </div>

                            <div className="about-grid-wrap mb-4">
                                <div className="icon" role="img" aria-label="Mission Icon">
                                    <Image 
                                        src="/main-assets/img/icon/about-grid-icon1-1.svg" 
                                        alt="" 
                                        height={50} 
                                        width={50}
                                        style={iconFilter} 
                                    />
                                </div>
                                <div className="about-grid-details">
                                    <h4 className="title h5">Our Mission</h4>
                                    <p className="text">
                                        To set new benchmarks in structural integrity and project transparency while fostering sustainable development across the continent.
                                    </p>
                                </div>
                            </div>

                            <div className="about-grid-wrap mb-4">
                                <div className="icon" role="img" aria-label="Vision Icon">
                                    <Image 
                                        src="/main-assets/img/icon/about-grid-icon1-2.svg" 
                                        alt="" 
                                        height={50} 
                                        width={50}
                                        style={iconFilter} 
                                    />
                                </div>
                                <div className="about-grid-details">
                                    <h4 className="title h5">Our Vision</h4>
                                    <p className="text">
                                        To be the most trusted name in property development, shaping the regional skyline through technical innovation and reliability.
                                    </p>
                                </div>
                            </div>

                            <div className="btn-group mt-40">
                                <Link href="/pages/innerpage/about" className="btn style3" aria-label="View our profile">
                                    View Company Profile 
                                    <i className="ri-arrow-right-up-line ms-2"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;