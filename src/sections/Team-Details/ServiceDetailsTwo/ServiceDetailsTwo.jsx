/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Image from "next/image";

const ServiceDetailsTwo = () => {
  const progressBarRefs = useRef([]);
  const counterRefs = useRef([]);

  useEffect(() => {
    const bars = [
      { targetValue: 100, duration: 2000 }, // Statutory Compliance
      { targetValue: 96, duration: 2000 },  // Technical Engineering
      { targetValue: 92, duration: 2000 },  // Project Lifecycle Management
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
    <div className="service-details-area space-top overflow-hidden">
      <div className="container">
        <div className="row gy-30 gx-30">
          <div className="col-12">
            <div className="single-page">
              <div className="team-single-card mb-60">
                <div
                  className="team-single-card_img text-end bg-smoke"
                  style={{
                    backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')",
                  }}
                >
                  {/* Suggestion: Use a professional headshot of the actual Director here */}
                  <Image src="/main-assets/img/team/director-profile.png" alt="Executive Director" width={580} height={580}/>
                </div>
                <div
                  className="team-about-card_box"
                  style={{
                    backgroundImage:
                      "url('/main-assets/img/team/team-details-card-bg-1.png')",
                  }}
                >
                  <span className="team-about-card_subtitle">Executive Leadership</span>
                  <h3 className="team-about-card_title">Eng. Samuel K. Maina</h3>
                  <p className="team-about-card_desig">Managing Director & Lead Consultant</p>
                  <div className="about-contact-wrap">
                    <div className="about-contact">
                      <h6 className="about-contact-title">Specialization:</h6>
                      <p className="about-contact-text">Civil & Hydraulic Engineering</p>
                    </div>
                    <div className="about-contact">
                      <h6 className="about-contact-title">Experience:</h6>
                      <p className="about-contact-text">25+ Years</p>
                    </div>
                    <div className="about-contact">
                      <h6 className="about-contact-title">Email:</h6>
                      <Link
                        href="mailto:info@columbiadevelopers.co.ke"
                        className="about-contact-text"
                      >
                        info@columbiadevelopers.co.ke
                      </Link>
                    </div>
                    <div className="about-contact">
                      <h6 className="about-contact-title">Phone:</h6>
                      <Link
                        href="tel:+254700000000"
                        className="about-contact-text"
                      >
                        +254 (0) 20 236 5478
                      </Link>
                    </div>
                  </div>
                  <div className="social-btn style6">
                    <Link href="#">
                      <i className="ri-linkedin-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <p className="mb-50">
                <span className="text-theme d-inline-flex fw-semibold">
                  A Legacy of Precision.
                </span>{" "}
                As the Managing Director of Columbia Developers Limited, Eng. Samuel K. Maina has steered the firm through three decades of transformative infrastructure growth in East Africa. Under his leadership, Columbia has evolved from a local contractor into a Tier-1 civil engineering powerhouse. His philosophy integrates rigorous technical standards with deep local topographical knowledge, ensuring that every hydraulic and structural project serves as a permanent asset to the community.
              </p>

              <div className="row gy-40 gx-100 justify-content-between">
                <div className="col-xl-6">
                  <h3 className="fw-semibold mb-20">Strategic Core Competencies</h3>
                  <p className="mb-25">
                    Driving structural excellence through a combination of traditional engineering wisdom and modern BIM (Building Information Modeling) technologies.
                  </p>

                  <div className="skill-feature style3">
                    <h3 className="skill-feature_title">Infrastructure Design & Hydraulics</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        ref={(el) => (progressBarRefs.current[0] = el)}
                        style={{ width: "100%", backgroundColor: '#DA291C' }}
                      ></div>
                      <div className="progress-value">
                        <span className="counter-number" ref={(el) => (counterRefs.current[0] = el)}>0</span>%
                      </div>
                    </div>
                  </div>

                  <div className="skill-feature style3">
                    <h3 className="skill-feature_title">NCA & Regulatory Compliance</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        ref={(el) => (progressBarRefs.current[1] = el)}
                        style={{ width: "96%", backgroundColor: '#DA291C' }}
                      ></div>
                      <div className="progress-value">
                        <span className="counter-number" ref={(el) => (counterRefs.current[1] = el)}>0</span>%
                      </div>
                    </div>
                  </div>

                  <div className="skill-feature style3">
                    <h3 className="skill-feature_title">Capital Project Mobilization</h3>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        ref={(el) => (progressBarRefs.current[2] = el)}
                        style={{ width: "92%", backgroundColor: '#DA291C' }}
                      ></div>
                      <div className="progress-value">
                        <span className="counter-number" ref={(el) => (counterRefs.current[2] = el)}>0</span>%
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6">
                  <h3 className="fw-semibold mb-20">Professional Milestones</h3>
                  <p className="mb-35">
                    A career dedicated to the planning and execution of Kenya’s critical urban utility networks and residential infrastructure.
                  </p>
                  <div className="education-card-wrap">
                    <div className="education-card">
                      <div className="education-card-number">01</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">Managing Director</h4>
                        <p className="education-card-text">
                          1992 - Present <span className="text-theme">Columbia Developers Ltd.</span>
                        </p>
                      </div>
                    </div>
                    <div className="education-card">
                      <div className="education-card-number">02</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">Registered Graduate Engineer</h4>
                        <p className="education-card-text">
                          EBK Certified <span className="text-theme">Engineers Board of Kenya</span>
                        </p>
                      </div>
                    </div>
                    <div className="education-card">
                      <div className="education-card-number">03</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">Senior Consultant</h4>
                        <p className="education-card-text">
                          Strategic Infrastructure <span className="text-theme">Public Utility Sector</span>
                        </p>
                      </div>
                    </div>
                    <div className="education-card">
                      <div className="education-card-number">04</div>
                      <div className="education-card-details">
                        <h4 className="education-card-title">B.Sc Civil Engineering</h4>
                        <p className="education-card-text">
                          Alumni <span className="text-theme">University of Nairobi</span>
                        </p>
                      </div>
                    </div>
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

export default ServiceDetailsTwo;