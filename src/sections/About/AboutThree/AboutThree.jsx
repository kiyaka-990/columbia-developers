"use client";
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const AboutThree = () => {
    const { ref: counterRef, inView: counterInView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div className="about-area-2 space-top overflow-hidden" ref={counterRef}>
            <div className="container">
                <div className="row gx-60 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="about-thumb2 mb-60 mb-xl-0">
                            <div className="about-img-1">
                                <Image 
                                    src="/main-assets/img/normal/about_2-1.png" 
                                    alt="Columbia Developers Site Engineering" 
                                    width={550} 
                                    height={720} 
                                    className="rounded-3"
                                /> 
                            </div>
                            <div className="about-counter-wrap style2 jump-reverse shadow-lg">
                                <div className="about-counter-wrap-bg">
                                    <Image src="/main-assets/img/normal/about_shape_2-2.png" alt="Shape background" width={158} height={314}/>
                                </div>
                                <div className="about-counter-icon">
                                    <Image
                                        src="/main-assets/img/hero/hero_experience_wrap_icon_1_1.png"
                                        alt="Engineering Icon" width={60} height={83}
                                    />
                                </div>
                                <h3 className="about-counter-number">
                                    <span className="counter-number">
                                        {counterInView ? <CountUp start={0} end={33} duration={3} /> : "0"}
                                    </span>+ 
                                </h3>
                                <p className="about-counter-text">Years of Engineering Excellence</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="title-area mb-25">
                            <span className="sub-title">
                                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="Icon" width={30} height={30}/>
                                ABOUT COLUMBIA DEVELOPERS
                            </span>
                            <h2 className="sec-title">
                                REDEFINING THE SKYLINE WITH MASTERFUL ENGINEERING
                            </h2>
                            <p className="sec-text">
                                Columbia Developers stands as a pillar of reliability in East Africa's construction landscape. Since 1991, we have integrated innovative civil engineering practices with robust procurement logistics to deliver infrastructure that stands the test of time. 
                            </p>
                        </div>
                        <div className="checklist mb-35">
                            <ul className="list-unstyled">
                                <li className="d-flex align-items-start mb-3">
                                    <Image src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="Check Icon" width={25} height={25} className="me-3 mt-1"/>
                                    <span><strong>Turnkey Infrastructure:</strong> End-to-end management of complex civil and structural projects.</span>
                                </li>
                                <li className="d-flex align-items-start mb-3">
                                    <Image src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="Check Icon" width={25} height={25} className="me-3 mt-1"/>
                                    <span><strong>Global Procurement:</strong> Direct sourcing of high-grade industrial machinery and materials.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="row g-4">
                            <div className="col-md-6">
                                <div className="about-grid-wrap p-4 bg-light rounded-3 h-100">
                                    <div className="icon mb-3">
                                        <Image src="/main-assets/img/icon/about-grid-icon1-1.svg" alt="Mission Icon" width={40} height={40}/>
                                    </div>
                                    <div className="about-grid-details">
                                        <h4 className="title h5 mb-2">Our Mission</h4>
                                        <p className="text small mb-0">
                                            To set new benchmarks in structural integrity and project transparency while fostering sustainable development in our communities.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="about-grid-wrap p-4 bg-light rounded-3 h-100">
                                    <div className="icon mb-3">
                                        <Image src="/main-assets/img/icon/about-grid-icon1-2.svg" alt="Vision Icon" width={40} height={40}/>
                                    </div>
                                    <div className="about-grid-details">
                                        <h4 className="title h5 mb-2">Our Vision</h4>
                                        <p className="text small mb-0">
                                            To be the foremost engineering partner in Africa, recognized for bridging the gap between visionary design and tangible reality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="btn-group mt-40 d-flex gap-3">
                            <Link href="/pages/innerpage/service" className="btn style3 px-4 py-2">
                                VIEW OUR SERVICES <i className="ri-arrow-right-up-line"></i>
                            </Link>
                            <Link href="/pages/innerpage/contact" className="btn style2 px-4 py-2">
                                GET A QUOTE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutThree;