/* eslint-disable react/no-unescaped-entities */
"use client";
import Link from "next/link";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const ServiceDetails = () => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  const openPopup = () => {
    setPopup(true);
    setIsActive(true);
    document.body.style.overflow = 'hidden';
  };

  const progressBarRefs = useRef([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    const bars = [
      { targetValue: 100, duration: 2000 }, // NCA Compliance
      { targetValue: 98, duration: 2000 },  // Technical Precision
      { targetValue: 95, duration: 2000 },  // On-Time Delivery
    ];

    bars.forEach((bar, index) => {
      let startTime = null;
      const updateCounter = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const value = Math.min(
          Math.floor((progress / bar.duration) * bar.targetValue),
          bar.targetValue
        );
        if (counterRefs.current[index]) {
          counterRefs.current[index].innerText = value;
        }
        if (progress < bar.duration) {
          requestAnimationFrame(updateCounter);
        }
      };
      requestAnimationFrame(updateCounter);
    });
  }, []);

  return (
    <>
      <div className="service-details-area space-top overflow-hidden">
        <div className="container3">
          <div className="row gy-30 gx-30">
            <div className="col-12">
              <div className="single-page">
                <div className="service-thumb mb-50">
                  <Image
                    className="w-100"
                    src="/main-assets/img/service/service_details1_1.png"
                    alt="Columbia Civil Engineering" width={1362} height={600}
                  />
                </div>
                <h2 className="sec-title2 mb-25">Tier-1 Civil Engineering & Infrastructure</h2>
                <p className="mb-50">
                  Columbia Developers Limited stands as a cornerstone of Kenyan infrastructure, bringing over three decades of engineering excellence to the built environment. Our expertise spans heavy civil works, hydraulic structural engineering, and large-scale urban development. By operating as a self-sufficient entity—owning our heavy machinery and managing a dedicated procurement wing—we eliminate the dependencies that typically stall major projects. From trunk sewerage networks to reinforced concrete arterial roads, our work is defined by a commitment to British and Kenyan engineering standards (BS/KS) and a relentless focus on structural longevity.
                </p>

                <div className="row gy-4 justify-content-center">
                  <div className="col-xl-4 col-lg-6">
                    <div className="service-card style4">
                      <div className="service-card_icon">
                        <Image src="/main-assets/img/icon/service-icon1-1.png" alt="Civil Works" width={60} height={60} style={{filter: 'hue-rotate(330deg) saturate(3)'}}/>
                      </div>
                      <div className="service-card_content item-decoration">
                        <h4 className="service-card_title">
                          <Link href="#">General Civil & Structural Works</Link>
                        </h4>
                        <p className="service-card_text">
                          High-tolerance reinforced concrete works, earthworks, and structural framing for industrial and public utility projects.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6">
                    <div className="service-card style4">
                      <div className="service-card_icon">
                        <Image src="/main-assets/img/icon/service-icon1-2.png" alt="Hydraulics" width={60} height={60} style={{filter: 'hue-rotate(330deg) saturate(3)'}}/>
                      </div>
                      <div className="service-card_content item-decoration">
                        <h4 className="service-card_title">
                          <Link href="#">Hydraulic & Water Infrastructure</Link>
                        </h4>
                        <p className="service-card_text">
                          Specialized design and execution of sewerage systems, drainage channels, and comprehensive water management solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6">
                    <div className="service-card style4">
                      <div className="service-card_icon">
                        <Image src="/main-assets/img/icon/service-icon1-3.png" alt="EPC" width={60} height={60} style={{filter: 'hue-rotate(330deg) saturate(3)'}}/>
                      </div>
                      <div className="service-card_content item-decoration">
                        <h4 className="service-card_title">
                          <Link href="#">EPC & Turnkey Development</Link>
                        </h4>
                        <p className="service-card_text">
                          Single-source accountability from land survey and design to material procurement and final site commissioning.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-60 mb-60 service-details-absolute-container">
                  <div className="row justify-content-between align-items-center gy-40">
                    <div className="col-lg-6">
                      <div className="title-area text-md-start text-center">
                        <h2 className="sec-title2">The Columbia Advantage</h2>
                      </div>
                      <div className="process-thumb2-1">
                        <Image src="/main-assets/img/normal/process-thumb2-1.png" alt="Columbia Process" width={606} height={450}/>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="process-grid-list style2 service-details-top-extra-space">
                        <div className="process-grid-list-bg-text" style={{color: 'rgba(218, 41, 28, 0.1)'}}>TRUST</div>
                        <div className="process-grid">
                          <div className="process-grid-number">01</div>
                          <div className="process-grid-details">
                            <h3 className="process-grid-title">Institutional Experience</h3>
                            <p className="process-grid-text">33 years of navigating Kenya's unique topographical and regulatory landscape with proven success.</p>
                          </div>
                        </div>
                        <div className="process-grid">
                          <div className="process-grid-number">02</div>
                          <div className="process-grid-details">
                            <h3 className="process-grid-title">In-House Machinery Fleet</h3>
                            <p className="process-grid-text">We own our excavators, rollers, and logistics fleet, ensuring zero downtime and immediate mobilization.</p>
                          </div>
                        </div>
                        <div className="process-grid">
                          <div className="process-grid-number">03</div>
                          <div className="process-grid-details">
                            <h3 className="process-grid-title">Uncompromising QC/HSE</h3>
                            <p className="process-grid-text">Strict adherence to NEMA environmental guidelines and NCA safety standards on every job site.</p>
                          </div>
                        </div>
                        <div className="process-grid">
                          <div className="process-grid-number">04</div>
                          <div className="process-grid-details">
                            <h3 className="process-grid-title">Technical Project Sourcing</h3>
                            <p className="process-grid-text">Direct manufacturer partnerships for certified structural steel and hydraulic components.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row align-items-center gy-40 justify-content-between">
                  <div className="col-xl-6">
                    <h2 className="fw-semibold service-text-adjustment">Precision Engineering & Structural Integrity</h2>
                    <p>
                      Our project methodology is built on the Critical Path Method (CPM), ensuring that hydraulic works, structural framing, and utility installations are perfectly synchronized. At Columbia, we don't just build; we engineer solutions that withstand environmental stressors and urban growth pressures.
                    </p>
                    <div className="mb-35">
                      <div className="row gy-2">
                        <div className="col-lg-6">
                          <div className="checklist style6">
                            <ul>
                              <li>Topographical & Land Surveys</li>
                              <li>Soil Compaction & Slump Testing</li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="checklist style6">
                            <ul>
                              <li>Structural Steel Certification</li>
                              <li>NEMA Environmental Audits</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="skill-feature style3">
                      <h3 className="skill-feature_title">NCA Compliance & Standards</h3>
                      <div className="progress">
                        <div className="progress-bar" ref={(el) => (progressBarRefs.current[0] = el)} style={{ width: "100%", backgroundColor: '#DA291C' }}></div>
                        <div className="progress-value"><span className="counter-number" ref={(el) => (counterRefs.current[0] = el)}>0</span>%</div>
                      </div>
                    </div>
                    <div className="skill-feature style3">
                      <h3 className="skill-feature_title">Technical Precision Rate</h3>
                      <div className="progress">
                        <div className="progress-bar" ref={(el) => (progressBarRefs.current[1] = el)} style={{ width: "98%", backgroundColor: '#DA291C' }}></div>
                        <div className="progress-value"><span className="counter-number" ref={(el) => (counterRefs.current[1] = el)}>0</span>%</div>
                      </div>
                    </div>
                    <div className="skill-feature style3">
                      <h3 className="skill-feature_title">On-Schedule Delivery</h3>
                      <div className="progress">
                        <div className="progress-bar" ref={(el) => (progressBarRefs.current[2] = el)} style={{ width: "95%", backgroundColor: '#DA291C' }}></div>
                        <div className="progress-value"><span className="counter-number" ref={(el) => (counterRefs.current[2] = el)}>0</span>%</div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xxl-5 col-xl-6">
                    <div className="video-wrap service-details-top-extra-space">
                      <Image className="w-100" src="/main-assets/img/service/service_details1_2.png" alt="Columbia Operations" width={550} height={500}/>
                      <a onClick={openPopup} className="play-btn style7" style={{backgroundColor: '#DA291C'}}>
                        <i className="ri-play-fill"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopupVideo popup={popup} setPopup={setPopup} isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};

export default ServiceDetails;