"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CountUp from "react-countup";
import Image from "next/image";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalSlides, setTotalSlides] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      setTotalSlides(sliderRef.current.props.children.length);
    }
  }, []);

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

  const settings = {
    dots: false,
    infinite: true,
    speed: 800, // Slightly slower for a more premium feel
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    beforeChange: (current, next) => setCurrentSlide(next),
  };

  return (
    <div
      className="hero-wrapper hero-1 shape-mockup-wrap background-image"
      id="hero"
      style={{ backgroundImage: "url('/main-assets/img/hero/hero_bg_1_1.png')" }}
    >
      <Slider {...settings} ref={sliderRef} className="hero-slider1">
        
        {/* Slide 1: Engineering & Infrastructure */}
        <div className="hero-slide">
          <div className="container larger-no-space">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-style1">
                  <h1 className="hero-title text-white">
                    Engineering Excellence for East Africa’s Landmarks
                  </h1>
                  <p className="hero-text text-white">
                    Columbia Developers delivers world-class infrastructure, commercial complexes, and civil engineering solutions with a commitment to precision and sustainability.
                  </p>
                  <div className="btn-group">
                    <Link href="/pages/innerpage/services" className="btn style2">
                      Our Expertise <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-thumb text-center">
            <Image src="/main-assets/img/hero/hero_thumb_1_1.png" alt="Infrastructure Construction" width={829} height={700}/>
          </div>
        </div>

        {/* Slide 2: Logistics & Project Management */}
        <div className="hero-slide">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-style1">
                  <h1 className="hero-title text-white">
                    Integrated Logistics & Global Sourcing
                  </h1>
                  <p className="hero-text text-white">
                    Streamlining complex supply chains to ensure your projects never stop. From port clearance to site delivery, we manage the heavy lifting.
                  </p>
                  <div className="btn-group">
                    <Link href="/pages/innerpage/services" className="btn style2">
                      Logistics Solutions <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-thumb text-center">
            <Image src="/main-assets/img/hero/hero_thumb_1_2.png" alt="Logistics and Supply Chain" width={829} height={700}/>
          </div>
        </div>

        {/* Slide 3: Quality Materials */}
        <div className="hero-slide">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="hero-style1">
                  <h1 className="hero-title text-white">
                    Certified Materials for Enduring Structures
                  </h1>
                  <p className="hero-text text-white">
                    We source and supply premium construction materials that meet international standards, ensuring the structural integrity of every build.
                  </p>
                  <div className="btn-group">
                    <Link href="/pages/innerpage/contact" className="btn style2">
                      Get a Material Quote <i className="ri-arrow-right-up-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-thumb text-center">
            <Image src="/main-assets/img/hero/hero_thumb_1_3.png" alt="High Quality Building Materials" width={829} height={700}/>
          </div>
        </div>
      </Slider>

      {/* Custom navigation */}
      <div className="slider-controller-wrap">
        <div className="slider-btn-wrap">
          <div className="icon-box">
            <button onClick={goToPrev} className="slick-arrow default">
              <i className="ri-arrow-left-down-line"></i>
            </button>
            <button onClick={goToNext} className="slick-arrow default">
              <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
          <div className="slides-numbers">
            <span className="active">0{currentSlide + 1}</span> /
            <span className="total">0{totalSlides}</span>
          </div>
        </div>
      </div>

      <div className="hero-bg-shape1-1"></div>
      <div className="hero-bg-shape1-2"></div>
      
      {/* Experience Counter Box */}
      <div
        className="hero-experience-wrap"
        style={{
          backgroundImage: "url('/main-assets/img/hero/hero_experience_wrap_bg_1_1.png')",
        }}
      >
        <span className="shadow-text">Columbia Devs</span>
        <div className="hero-experience-icon">
          <Image src="/main-assets/img/hero/hero_experience_wrap_icon_1_1.png" alt="Certification icon" width={60} height={83}/>
        </div>
        <h2 className="hero-experience-counter">
          <span className="counter-number">
            <CountUp start={0} end={15} />
          </span>
          +
        </h2>
        <p className="hero-experience-text">Years of Engineering Excellence</p>
        <div className="media">
          <div className="icon">
            <Image src="/main-assets/img/hero/hero_experience_wrap_icon_1_2.png" alt="Safety Icon" width={180} height={140}/>
          </div>
          <Link className="link-btn link-text" href="/pages/innerpage/contact">
            Start a Consultation <Image src="/main-assets/img/icon/long-arrow-right.png" alt="arrow" width={20} height={20}/>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;