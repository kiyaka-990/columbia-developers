'use client';
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const Client = () => {
    const iconFilter = { 
        // Columbia Red (#E31E24)
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
    };

    const settings = {
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        arrows: false,
        centerMode: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="client-area-1 home-one-client text-center space overflow-hidden shape-mockup-wrap background-image" style={{ backgroundImage: "url('/main-assets/img/bg/client-bg1-1.png')" }} data-overlay="title" data-opacity="9">
                <div className="client_shape_1-1 shape-mockup jump-reverse" style={{ bottom: '0px', right: '-6%' }}>
                    <Image src="/main-assets/img/shape/client-bg-shape1.png" alt="Decorative Shape" width={292} height={738}/>
                </div>
                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title text-white">
                            <Image 
                                src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                alt="Columbia Subtitle Icon" 
                                width={30} 
                                height={30} 
                                style={iconFilter}
                            />
                            VALUED PARTNERSHIPS
                        </span>
                        <h2 className="sec-title text-white">Trust by the Region&apos;s Leaders</h2>
                    </div>
                    <Slider {...settings} className="row global-carousel client-slider1">
                        {/* Note: For the actual implementation, replace these paths 
                            with the logos of the government bodies, NGOs, and corporations 
                            Columbia Developers has worked with.
                        */}
                        {[1, 2, 3, 4, 5, 1, 2, 3, 4, 5].map((item, index) => (
                            <div className="col-lg-auto" key={index}>
                                <div className="client-logo" style={{ padding: '20px' }}>
                                    <Link href="#">
                                        <Image 
                                            src={`/main-assets/img/client/client-1-${item}.svg`} 
                                            alt={`Partner Logo ${index + 1}`} 
                                            width={140} 
                                            height={70} 
                                            style={{ filter: 'brightness(0) invert(1)', opacity: 0.8 }} // Makes logos white for the dark background
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default Client;