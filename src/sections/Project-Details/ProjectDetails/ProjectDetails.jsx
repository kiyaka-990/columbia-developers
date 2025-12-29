/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from "next/link";
import { useState } from "react";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
import Image from "next/image";

const ProjectDetails = () => {
    const [popup, setPopup] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const openPopup = () => {
        setPopup(true);
        const iframe = document.getElementById("youtube-video");
        if (iframe) {
            // Updated to a neutral construction/engineering showcase placeholder
            iframe.src = "https://www.youtube.com/embed/Mp8IXI1kzvQ?si=UQVMsmBriHPfD6Vf";
        }
        setIsActive(true);
        document.body.style.overflow = 'hidden';
    };

    return (
        <div>
            <div className="project-details-area space-top overflow-hidden">
                <div className="container">
                    <div className="row gy-30 gx-30">
                        <div className="col-12">
                            <div className="single-page">
                                <div className="project-page-thumb mb-50">
                                    <Image className="w-100 rounded-20" src="/main-assets/img/project/project_details1_1.png" alt="Columbia Infrastructure Project" width={1362} height={600}/>
                                    
                                    <aside className="sidebar-area">
                                        <div className="widget widget_project_info style2">
                                            <h3 className="widget_title">Technical Specifications</h3>
                                            <ul className="project-info-list border-0 p-0 m-0">
                                                <li><strong>Project Lead<span>:</span></strong> <span>Columbia Developers Ltd</span></li>
                                                <li><strong>Category<span>:</span></strong> <span>Hydraulic & Civil Works</span></li>
                                                <li><strong>Location<span>:</span></strong> <span>Nairobi Metropolitan, Kenya</span></li>
                                                <li><strong>Duration<span>:</span></strong> <span>24 Months</span></li>
                                                <li><strong>Status<span>:</span></strong> <span>Handed Over</span></li>
                                                <li><strong>Scope<span>:</span></strong> <span>Full EPC (Engineering, Procurement, Construction)</span></li>
                                            </ul>
                                        </div>
                                    </aside>
                                </div>
                                <h2 className="sec-title mb-25">Major Hydraulic System & Structural Development</h2>
                                <p className="mb-50">
                                    Columbia Developers Limited was commissioned to deliver a comprehensive civil and hydraulic infrastructure package for a major industrial development. Leveraging our decades of experience since 1991, we executed the design and implementation of high-capacity drainage systems, reinforced concrete structures, and specialized water management facilities. This project highlights our ability to navigate complex geological conditions while maintaining the structural integrity required for large-scale urban infrastructure.
                                </p>
                                
                                <div className="row gy-4 justify-content-center">
                                    <div className="col-xl-4 col-lg-6">
                                        <div className="service-card style4">
                                            <div className="service-card_icon">
                                                <Image src="/main-assets/img/icon/service-icon1-1.png" alt="Civil icon" width={60} height={60}/>
                                            </div>
                                            <div className="service-card_content">
                                                <h4 className="service-card_title"><Link href="#">Structural Engineering</Link></h4>
                                                <p className="service-card_text">Reinforced concrete works and heavy-load foundations for industrial use.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6">
                                        <div className="service-card style4">
                                            <div className="service-card_icon">
                                                <Image src="/main-assets/img/icon/service-icon1-2.png" alt="Hydraulic icon" width={60} height={60}/>
                                            </div>
                                            <div className="service-card_content">
                                                <h4 className="service-card_title"><Link href="#">Hydraulic Systems</Link></h4>
                                                <p className="service-card_text">Advanced water distribution and sewerage management networks.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6">
                                        <div className="service-card style4">
                                            <div className="service-card_icon">
                                                <Image src="/main-assets/img/icon/service-icon1-3.png" alt="Procurement icon" width={60} height={60}/>
                                            </div>
                                            <div className="service-card_content">
                                                <h4 className="service-card_title"><Link href="#">Materials Sourcing</Link></h4>
                                                <p className="service-card_text">Global procurement of industrial-grade engineering components.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <blockquote>
                                    <p>“The technical precision displayed by Columbia Developers in the hydraulic installation was exemplary. Their ability to deliver on-site solutions to complex engineering bottlenecks saved us significant lead time.”</p>
                                    <cite>Senior Consultant</cite>
                                    <span className="desig">Regional Infrastructure Board</span>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="video-area overflow-hidden">
                <div className="video-wrap mt-20">
                    <Image src="/main-assets/img/project/project_details1_2.png" alt="Engineering Walkthrough" width={1920} height={700}/>
                    <a onClick={openPopup} className="play-btn style3"><i className="ri-play-fill"></i></a>
                </div>
                <div className="container">
                    <p className="mt-40 mb-0">
                        Our commitment to ISO-standard safety protocols and rigorous quality control ensures that every project under the Columbia Developers banner is built for longevity. We don't just build structures; we build the backbone of regional development.
                    </p>
                </div>
            </div>

            <div className="pt-60 pb-60 overflow-hidden">
                <div className="container">
                    <div className="row justify-content-between align-items-center gy-40">
                        <div className="col-lg-6">
                            <div className="title-area text-md-start text-left">
                                <h2 className="sec-title">Project Milestones & Impact</h2>
                            </div>
                            <div className="process-thumb2-1">
                                <Image className="rounded-20" src="/main-assets/img/normal/process-thumb2-1.png" alt="Infrastructure Impact" width={606} height={450}/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="process-grid-list style2">
                                <div className="process-grid-list-bg-text">
                                    CORE
                                </div>
                                <div className="process-grid">
                                    <div className="process-grid-number">01</div>
                                    <div className="process-grid-details">
                                        <h3 className="process-grid-title">Technical Accuracy</h3>
                                        <p className="process-grid-text">Zero-deviation compliance with structural and hydraulic blueprints.</p>
                                    </div>
                                </div>
                                <div className="process-grid">
                                    <div className="process-grid-number">02</div>
                                    <div className="process-grid-number">02</div>
                                    <div className="process-grid-details">
                                        <h3 className="process-grid-title">Environmental HSE</h3>
                                        <p className="process-grid-text">Full adherence to National Environment Management Authority (NEMA) standards.</p>
                                    </div>
                                </div>
                                <div className="process-grid">
                                    <div className="process-grid-number">03</div>
                                    <div className="process-grid-details">
                                        <h3 className="process-grid-title">Cost Optimization</h3>
                                        <p className="process-grid-text">Efficient resource management resulting in a 10% budget optimization for the client.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive}></PopupVideo>
        </div>
    );
};

export default ProjectDetails;