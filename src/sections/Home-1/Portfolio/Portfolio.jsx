'use client'

import React, { useState } from 'react';
import Slider from 'react-slick';
import Lightbox from 'react-image-lightbox';
import Link from 'next/link';
import Image from "next/image";

// Ensure styles are present
import 'react-image-lightbox/style.css'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Updated to your Theme Red (#E31E24)
  const iconFilter = { 
    filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
  };

  const images = [
    "/main-assets/img/project/project1_1.png",
    "/main-assets/img/project/project1_2.png", 
    "/main-assets/img/project/project1_3.png",
    "/main-assets/img/project/project1_1.png",
    "/main-assets/img/project/project1_2.png",
    "/main-assets/img/project/project1_3.png",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 992, settings: { centerPadding: "10%" } },
      { breakpoint: 768, settings: { centerMode: false, centerPadding: "0%" } }
    ]
  };

  const openLightbox = (e, index) => {
    e.preventDefault();
    e.stopPropagation(); 
    setPhotoIndex(index);
    setIsOpen(true);
  };

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
                style={iconFilter} // Applied Red Filter
            /> 
            RECENT WORKS
          </span>
          <h2 className="sec-title">Check our latest projects</h2>
        </div>
        
        <div className="portfolio-slider1 slider-shadow">
          <Slider {...settings}>
            {images.map((src, index) => (
              <div key={index}>
                <div className="portfolio-card" style={{ margin: "0 15px" }}>
                  <div className="portfolio-card-thumb" style={{ position: 'relative' }}>
                    <Image 
                      src={src} 
                      alt="Project" 
                      width={812} 
                      height={450} 
                      className="w-100"
                      priority={index < 3} // Optimization for loading
                    />
                    <button 
                      className="icon-btn popup-image" 
                      onClick={(e) => openLightbox(e, index)}
                      style={{ cursor: 'pointer', zIndex: 10 }}
                    >
                      <i className="ri-eye-line" style={iconFilter}></i>
                    </button>
                  </div>
                  <div className="portfolio-card-details">
                    <span className="portfolio-card-subtitle">Construction</span>
                    <h4 className="portfolio-card-title">
                      <Link href="/project-details">Infrastructure Development</Link>
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          // 1. Ensure the lightbox is not trapped behind the Header/Slider
          reactModalStyle={{ 
            overlay: { zIndex: 999999 },
            content: { zIndex: 999999 } 
          }}
          // 2. Added image title for better context
          imageTitle={`Project Image ${photoIndex + 1}`}
          // 3. Prevent image loading stuck by ensuring no animation conflicts
          animationDisabled={false}
        />
      )}
    </div>
  );
};

export default Portfolio;