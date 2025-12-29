"use client";

import Slider from "react-slick";
import Image from "next/image";

const TestimonialTwo = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    focusOnSelect: true,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    initialSlide: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2, dots: false } },
      { breakpoint: 576, settings: { slidesToShow: 1, dots: false } },
    ],
  };
  return (
    <div className="testimonial-area-3 overflow-hidden">
      <div className="container">
        {/* header testimonial */}
        <div className="row justify-content-between">
          <div className="col-lg-7 testimonial-extra-padding">
            <div className="title-area text-lg-start text-center services-title-area testimonial-area-bottom-space-row content-text-extra-style service-testimonial-align">
              <span className="sub-title">
                <Image
                  src="/main-assets/img/icon/section-subtitle-icon.svg"
                  alt="Icon"
                  width={60}
                  height={60}
                />
                Client Voices
              </span>
              <h2 className="sec-title">What our valued clients are saying</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn btn-wrap">
              <div className="client-group-thumb">
                <Image
                  src="/main-assets/img/normal/client_group_1-2.png"
                  alt="Client Group Image"
                  width={150} // Added placeholder widths for Next/Image optimization
                  height={150}
                />
              </div>
              <div className="testi-counter-wrap">
                <h3 className="testi-counter-number">
                  <span className="counter-number">300</span>+
                </h3>
                <p className="testi-counter-text">Projects Delivered</p>
              </div>
            </div>
          </div>
        </div>

        <Slider
          {...settings}
          className="row global-carousel testi-slider3 slider-shadow services-slider"
          data-slide-show="3"
          data-lg-slide-show="2"
          data-dots="true"
          data-xl-dots="true"
          data-ml-dots="true"
          data-center-mode="true"
          data-xl-center-mode="true"
          data-ml-center-mode="true"
        >
          {/* Testimonial 1: Residential Construction */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <Image
                  src="/main-assets/img/testimonial/testi_2_2.png"
                  alt="Client Photo"
                  width={60}
                  height={60}
                />
                <div className="media-body">
                  <h4 className="testi-card_title">Exceptional Quality!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  Ga&apos;als delivered our residential project ahead of schedule and within budget. Their structural integrity and finishing work are truly top-notch.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Joshua Pul</h4>
                  <span className="testi-profile-desig">/ Director, Urban Developers</span>
                </div>
              </div>
              <div className="quote-icon">
                <Image
                  src="/main-assets/img/icon/quote3.svg"
                  alt="Quote Icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* Testimonial 2: Agency & Logistics Services */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <Image
                  src="/main-assets/img/testimonial/testi_2_3.png"
                  alt="Client Photo"
                  width={60}
                  height={60}
                />
                <div className="media-body">
                  <h4 className="testi-card_title">Reliable Logistics!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  Their agency and logistics support were crucial for importing our heavy machinery. Fast clearance and seamless transport, highly recommended.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Aya Nikola</h4>
                  <span className="testi-profile-desig">/ Procurement Manager, East Africa Imports</span>
                </div>
              </div>
              <div className="quote-icon">
                <Image
                  src="/main-assets/img/icon/quote3.svg"
                  alt="Quote Icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* Testimonial 3: Project Management & Professionalism */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <Image
                  src="/main-assets/img/testimonial/testi_2_1.png"
                  alt="Client Photo"
                  width={60}
                  height={60}
                />
                <div className="media-body">
                  <h4 className="testi-card_title">True Professionals!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  The team&apos;s project management skills made the commercial build stress-free. Clear communication and adherence to safety standards throughout.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">Christopher Kimani</h4>
                  <span className="testi-profile-desig">/ Property Owner, Nairobi CBD</span>
                </div>
              </div>
              <div className="quote-icon">
                <Image
                  src="/main-assets/img/icon/quote3.svg"
                  alt="Quote Icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>

          {/* Duplicates for full slider effect with construction focus */}
          <div className="col-lg-4">
            <div className="testi-card style3 client-click-slider-gap">
              <div className="testi-card-thumb">
                <Image
                  src="/main-assets/img/testimonial/testi_2_2.png"
                  alt="Client Photo"
                  width={60}
                  height={60}
                />
                <div className="media-body">
                  <h4 className="testi-card_title">Excellent Follow-Through!</h4>
                  <div className="testi-card_review">
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                    <i className="ri-star-fill"></i>
                  </div>
                </div>
              </div>
              <div className="testi-card_content">
                <p className="testi-card_text">
                  Their expertise in specialized mechanical and electrical works saved us time and resources on complex installations for our facility.
                </p>
                <div className="testi-card-profile">
                  <h4 className="testi-profile-title">David Mwangi</h4>
                  <span className="testi-profile-desig">/ Head Engineer, Industrial Solutions</span>
                </div>
              </div>
              <div className="quote-icon">
                <Image
                  src="/main-assets/img/icon/quote3.svg"
                  alt="Quote Icon"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialTwo;