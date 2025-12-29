"use client";
import Link from "next/link";
import PopupVideo from "../../Common/PopupVideo/PopupVideo";
import { useState } from "react";
import Image from "next/image";

const Process = () => {
  const [popup, setPopup] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // UPDATED: Precisely shifts icons to Columbia Red (#E31E24)
  const iconFilter = { 
    filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
  };

  const openPopup = () => {
    setPopup(true);
    const iframe = document.getElementById("youtube-video");
    if (iframe) {
      iframe.src = "https://youtu.be/0HHftM4-XCY?list=PLQSDNVrkcOU7hx8Kx7QsQ-3v0JWVQW4eg&t=10"; 
    }
    setIsActive(true);
    document.body.style.overflow = 'hidden';
  };

  return (
    <>
      <section
        className="process-area-1 space-top bg-attachment process-bg-half shape-mockup-wrap background-image"
        data-overlay="title"
        data-opacity="8"
        style={{ backgroundImage: "url('/main-assets/img/bg/process-bg1-1.png')" }}
      >
        {/* Background Shapes */}
        <div className="process_shape_1-1 movingX shape-mockup d-lg-block d-none"></div>
        <div className="process_shape_1-2 moving shape-mockup d-lg-block d-none"></div>
        <div
          className="process_shape_1-3 shape-mockup jump-reverse d-xl-block d-none"
          style={{ right: "0px", bottom: "-50%" }}
        >
          <Image src="/main-assets/img/shape/sec-bg-shape1.png" alt="img" width={90} height={331}/>
        </div>

        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 col-md-7">
              <div className="title-area content-text-extra-style">
                <span className="sub-title text-white">
                  <Image 
                    src="/main-assets/img/icon/section-subtitle-icon.svg" 
                    alt="icon" 
                    width={60} 
                    height={60}
                    style={iconFilter}
                  />
                  EXECUTION STRATEGY
                </span>
                <h2 className="sec-title text-white">
                  Columbia&apos;s 4-Phase Development Lifecycle
                </h2>
              </div>
            </div>
            <div className="col-md-auto">
              <div className="sec-btn text-center">
                <button onClick={openPopup} className="play-btn-wrap" style={{ background: 'none', border: 'none', color: '#fff' }}>
                  <span className="me-3 fw-bold">Watch Our Engineering Process</span>
                  <span className="play-btn style2">
                    <i className="ri-play-fill"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="process-card-wrap">
            <div className="row gy-30 gx-30">
              {/* Step 1: Conceptual Architecture */}
              <div className="col-xl-3 col-md-6">
                <div className="process-card process-fixed-height">
                  <div className="process-card-number">
                    <span style={{ color: '#E31E24' }}>01</span>
                    STEP
                  </div>
                  <h4 className="process-card-title">Concept & Architecture</h4>
                  <p className="process-card-text">
                    We begin with spatial planning and architectural modeling, aligning the project vision with structural feasibility.
                  </p>
                </div>
              </div>

              {/* Step 2: Civil Engineering Planning */}
              <div className="col-xl-3 col-md-6">
                <div className="process-card process-fixed-height">
                  <div className="process-card-number">
                    <span style={{ color: '#E31E24' }}>02</span>
                    STEP
                  </div>
                  <h4 className="process-card-title">Civil Engineering & Survey</h4>
                  <p className="process-card-text">
                    In-depth site surveys and engineering designs for roads, water works, and building foundations are finalized.
                  </p>
                </div>
              </div>

              {/* Step 3: Core Construction */}
              <div className="col-xl-3 col-md-6">
                <div className="process-card process-fixed-height">
                  <div className="process-card-number">
                    <span style={{ color: '#E31E24' }}>03</span>
                    STEP
                  </div>
                  <h4 className="process-card-title">Infrastructure Execution</h4>
                  <p className="process-card-text">
                    Physical construction begins, managed by expert project leads to ensure safety, quality, and technical precision.
                  </p>
                </div>
              </div>

              {/* Step 4: Quality & Handover */}
              <div className="col-xl-3 col-md-6">
                <div className="process-card process-fixed-height">
                  <div className="process-card-number">
                    <span style={{ color: '#E31E24' }}>04</span>
                    STEP
                  </div>
                  <h4 className="process-card-title">Quality Handover</h4>
                  <p className="process-card-text">
                    Rigorous testing of water systems and road durability precedes the final project commissioning and client handover.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <PopupVideo
        popup={popup}
        setPopup={setPopup}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </>
  );
};

export default Process;