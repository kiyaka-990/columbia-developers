"use client";

import Link from "next/link";
import Slider from "react-slick";

const Client = () => {
    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: true,
        dots: false,
        responsive: [
            { breakpoint: 1200, settings: { slidesToShow: 4 } },
            { breakpoint: 992, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 }, centerMode: true, },
            { breakpoint: 576, settings: { slidesToShow: 1 }, centerMode: true, },
        ],
    };

    // PRO TIP: Replace these placeholders with logos of your actual partners 
    // (e.g., NCA, Kenya Green Building Society, or local banking partners)
    const clientLogos = [
        { id: 1, src: "/main-assets/img/client/client-1-1.svg", alt: "Partner 1" },
        { id: 2, src: "/main-assets/img/client/client-1-2.svg", alt: "Partner 2" },
        { id: 3, src: "/main-assets/img/client/client-1-3.svg", alt: "Partner 3" },
        { id: 4, src: "/main-assets/img/client/client-1-4.svg", alt: "Partner 4" },
        { id: 5, src: "/main-assets/img/client/client-1-5.svg", alt: "Partner 5" },
    ];

    return (
        <div className="client-area-1 home-two-five-client text-center client-space-extra bg-title overflow-hidden">
            <div className="container">
                {/* Optional: Add a small label above logos for credibility */}
                <p className="text-white-50 mb-40">TRUSTED BY INDUSTRY LEADERS ACROSS EAST AFRICA</p>
                
                <Slider
                    {...settings}
                    className="row global-carousel client-slider1"
                >
                    {/* We double the array mapping to ensure a smooth infinite loop */}
                    {[...clientLogos, ...clientLogos].map((logo, index) => (
                        <div key={`${logo.id}-${index}`} className="col-lg-auto">
                            <div className="client-logo">
                                <Link href="#">
                                    <img 
                                        src={logo.src} 
                                        alt={logo.alt} 
                                        style={{ 
                                            filter: "grayscale(1) brightness(10)", 
                                            opacity: "0.7",
                                            transition: "0.3s"
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.filter = "grayscale(0) brightness(1)"}
                                        onMouseOut={(e) => e.currentTarget.style.filter = "grayscale(1) brightness(10)"}
                                    />
                                </Link>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Client;