"use client";

import { useState } from "react";
import Link from "next/link";

const WhyChoose = () => {
  const [activeTab, setActiveTab] = useState("why-pill-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const services = [
    {
      id: "why-pill-1",
      number: "01",
      title: "General Construction",
      subtitle: "Civil & Structural Engineering",
      text: "Columbia Developers delivers high-quality civil infrastructure projects. From major highway bypasses to complex industrial facilities, we utilize modern engineering techniques to ensure structural integrity and longevity.",
      check: "Advanced structural analysis and earthquake-resistant designs.",
      img: "/main-assets/img/why/why-tab-thumb3-1.png",
    },
    {
      id: "why-pill-2",
      number: "02",
      title: "Property Maintenance",
      subtitle: "Facility Management & Care",
      text: "We provide comprehensive maintenance solutions for commercial and residential complexes. Our goal is to preserve the asset value of your property through proactive structural and systems management.",
      check: "24/7 emergency repairs and scheduled preventative maintenance.",
      img: "/main-assets/img/why/why-tab-thumb3-2.png",
    },
    {
      id: "why-pill-3",
      number: "03",
      title: "Project Management",
      subtitle: "End-to-End Oversight",
      text: "Our team manages every phase of the construction lifecycle. We handle everything from site supervision and vendor coordination to budget control and regulatory compliance in East Africa.",
      check: "Strict adherence to safety standards and project timelines.",
      img: "/main-assets/img/why/why-tab-thumb3-1.png",
    },
    {
      id: "why-pill-4",
      number: "04",
      title: "Renovation & Remodeling",
      subtitle: "Transforming Existing Spaces",
      text: "We specialize in modernizing aging infrastructure. Whether it’s an office retrofit in Westlands or a residential overhaul, we breathe new life into structures while enhancing energy efficiency.",
      check: "Seamless integration of modern aesthetics with existing frameworks.",
      img: "/main-assets/img/why/why-tab-thumb3-2.png",
    },
    {
      id: "why-pill-5",
      number: "05",
      title: "Preconstruction",
      subtitle: "Planning & Feasibility",
      text: "The foundation of a successful project lies in the planning. We offer site evaluations, cost estimation, and material sourcing logistics to ensure your project is viable before breaking ground.",
      check: "Detailed BIM modeling and environmental impact assessments.",
      img: "/main-assets/img/why/why-tab-thumb3-1.png",
    },
  ];

  return (
    <div className="why-area-3 space-top overflow-hidden" id="service-sec">
      <div
        className="why-sec-bg3-1"
        style={{ backgroundImage: "url('/main-assets/img/bg/why-bg5-1.png')" }}
      ></div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="title-area text-center">
              <span className="sub-title text-theme">
                What we do <i className="ri-arrow-right-down-line"></i>
              </span>
              <h2 className="sec-title">
                Comprehensive Engineering & Construction Solutions
              </h2>
            </div>
          </div>
        </div>
        <div className="row gy-50">
          <div className="col-xl-4">
            <ul className="why-tab-wrap nav nav-pills" role="tablist">
              {services.map((item) => (
                <li className="nav-item" key={item.id}>
                  <button
                    className={`nav-link ${activeTab === item.id ? "active" : ""}`}
                    onClick={() => handleTabClick(item.id)}
                    type="button"
                    role="tab"
                  >
                    {item.title} <i className="ri-arrow-right-down-line"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-8">
            <div className="tab-content custom-animation">
              {services.map((item) => (
                <div
                  key={item.id}
                  className={`tab-pane fade ${
                    activeTab === item.id ? "show active custom-fadeIn" : ""
                  }`}
                  role="tabpanel"
                >
                  <div className="row gx-80 gy-40 align-items-center">
                    <div className="col-lg-5">
                      <div className="why-thumb-wrap3-1">
                        <div className="why-tab-thumb">
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className="why-text-wrap">
                          <h4 className="title">Service</h4>
                          <hr className="line" />
                          <div className="number">{item.number}</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-7">
                      <div className="why-content-wrap">
                        <h4 className="title">About this Service</h4>
                        <h5 className="subtitle">{item.subtitle}</h5>
                        <p className="text">{item.text}</p>
                        <div className="checklist mb-35">
                          <ul>
                            <li>
                              <img
                                src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                                alt="check icon"
                              />
                              {item.check}
                            </li>
                          </ul>
                        </div>
                        <div className="btn-group mt-35">
                          <Link href="/pages/innerpage/service" className="btn style3">
                            More Details <i className="ri-arrow-right-up-line"></i>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;