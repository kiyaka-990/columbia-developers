"use client";

import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";

const PortfolioShared = () => {
  const settings = {
    dots: true,
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "0%",
          dots: true,
        },
      },
    ],
  };

  useEffect(() => {
    const dots = document.querySelector(".slick-dots");
    if (dots) {
      dots.setAttribute("role", "tablist");
    }
  }, []);

  return (
    <div className="portfolio-area-1 space">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <Image
              src="/main-assets/img/icon/section-subtitle-icon.svg"
              alt="img"
              width={60}
              height={60}
            />
            Recent Success
          </span>
          <h2 className="sec-title">Featured Construction, Logistics & Supply Projects</h2>
          <p className="sec-text">
            Delivering excellence in construction, dependable logistics, and timely materials supply across East Africa. See how we turn visions into reality.
          </p>
        </div>
        <div className="portfolio-slider1 overflow-hidden">
          <Slider {...settings}>
            {/* Project 1: Residential Construction */}
            <div>
              <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_1.png" alt="Residential Project" width={812} height={450} />
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_1.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">General Construction</span>
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">
                        High-Rise Residential Tower
                      </Link>
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q2 2024, Nairobi CBD
                    </p>
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>

            {/* Project 2: Commercial Construction */}
            <div>
              <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_2.png" alt="Commercial Project" width={812} height={450} />
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_2.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Commercial Refurbishment</span>
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">
                        Corporate Headquarters Upgrade
                      </Link>
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q1 2024, Upper Hill District
                    </p>
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>

            {/* Project 3: Infrastructure / Logistics */}
            <div>
              <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_3.png" alt="Infrastructure Project" width={812} height={450} />
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_3.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Logistics & Supply Chain</span>
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">
                        Bulk Material Transport & Agency Services
                      </Link>
                    </h4>
                    <p className="portofolio-card-text">
                      Ongoing Support: Mining Sector Client
                    </p>
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Service <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>

            {/* Duplicate slides for a robust slider presentation, using personalized content */}
            
            {/* Project 4: Electrical & Mechanical Works (using Project 1 image) */}
            <div>
              <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_1.png" alt="Electrical & Mechanical Project" width={812} height={450} />
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_1.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Mechanical & Electrical (M&E)</span>
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">
                        Industrial Plant Utilities Installation
                      </Link>
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q3 2023, Manufacturing Zone
                    </p>
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
            
            {/* Project 5: Interior Fit-Out (using Project 2 image) */}
            <div>
              <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_2.png" alt="Interior Fit-Out Project" width={812} height={450} />
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_2.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Interior Finishing & Fit-Out</span>
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">
                        Bank Branch Refurbishment
                      </Link>
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q4 2023, Mombasa Road
                    </p>
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>

            {/* Project 6: Specialized Construction (using Project 3 image) */}
            <div>
              <div className="portfolio-card" style={{ margin: "0px 1rem" }}>
                <div className="portfolio-card-thumb">
                  {/* Note: Corrected the lowercase 'image' tag to 'Image' here */}
                  <Image src="/main-assets/img/project/project1_3.png" alt="Specialized Construction Project" width={812} height={450} />
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_3.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Supply & Procurement</span>
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">
                        Custom Building Materials Procurement
                      </Link>
                    </h4>
                    <p className="portofolio-card-text">
                      Project Start: Early 2025, Regional Distribution
                    </p>
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PortfolioShared;