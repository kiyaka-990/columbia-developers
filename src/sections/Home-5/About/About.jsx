'use client';
import Link from "next/link";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
import { useState } from "react";

const About = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);

    // Update with your actual corporate reel or project showcase link
    const openPopup = () => {
        setPopup(true);
        const iframe = document.getElementById("youtube-video");
        if (iframe) {
            iframe.src = "https://www.youtube.com/embed/Mp8IXI1kzvQ?si=UQVMsmBriHPfD6Vf";
        }
        setIsActive(true);
        document.body.style.overflow = 'hidden';
    };

    return (
        <>
            <div className="about-area-5 space shape-mockup-wrap" id="about-sec">
                <div className="about-bg-shape5-1 shape-mockup" style={{ top: '-170px', right: '0px' }}>
                    <img src="/main-assets/img/bg/about-bg-shape5-1.png" alt="Columbia Decorative Shape" />
                </div>
                <div className="container">
                    <div className="row gx-100 align-items-center">
                        <div className="col-xl-5">
                            <div className="about-thumb5 mb-40 mb-xl-0">
                                <div className="about-img-1 mb-40">
                                    <img src="/main-assets/img/normal/about_5-1.png" alt="Columbia Site Operations" className="rounded-4" />
                                </div>
                                <p>We engineer infrastructure that stands the test of time. With over 33 years of technical expertise, we deliver precision-led civil and building works across the region.</p>
                                <div className="btn-group mt-30">
                                    <Link href="/pages/innerpage/about" className="btn">DISCOVER OUR JOURNEY <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="about-wrap5">
                                <div className="title-area mb-40">
                                    <span className="sub-title text-theme">ABOUT COLUMBIA <i className="ri-arrow-right-down-line"></i></span>
                                    <h2 className="sec-title">Engineering Solutions for a Developing World</h2>
                                    <p className="sec-text">Columbia Developers Limited bridges the gap between complex engineering concepts and physical reality. We specialize in large-scale building construction and specialized hydraulic systems.
                                    </p>
                                    <div className="checklist mb-35 mt-30">
                                        <ul>
                                            <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="icon" />Precision-Led Construction & Site Management
                                            </li>
                                            <li><img src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="icon" />Expert Engineering Design & Structural Integrity</li>
                                        </ul>
                                    </div>
                                    <div className="btn-wrap">
                                        <div className="cta-grid-wrap">
                                            <div className="icon-btn">
                                                <i className="ri-phone-fill" style={{color: '#E31E24'}}></i>
                                            </div>
                                            <div className="media-body">
                                                <Link className="link" href="tel:+254700000000">+254 725 178209</Link>
                                                <h6 className="title">Need Engineering Consultation?</h6>
                                            </div>
                                        </div>
                                        <div className="about-author-wrap">
                                            <div className="author-thumb">
                                                <img src="/main-assets/img/normal/about_3-4.png" alt="Director" />
                                            </div>
                                            <div className="media-body">
                                                <div className="author-sign">
                                                    {/* Replace with Columbia Director's signature image if available */}
                                                    <img src="/main-assets/img/normal/about_4-sign.png" alt="Signature" />
                                                </div>
                                                <div className="author-text">Management, Columbia Developers</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-thumb5 mt-60 d-inline-block">
                                    <div className="video-wrap about-img-2">
                                        <img src="/main-assets/img/normal/about_5-2.png" alt="Project Video Thumbnail" className="rounded-4" />
                                        <a onClick={openPopup} className="play-btn style6"><i className="ri-play-fill"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
        </>
    );
};

export default About;