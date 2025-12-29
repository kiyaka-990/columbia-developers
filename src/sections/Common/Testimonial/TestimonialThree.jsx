"use client";

import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";

const TestimonialThree = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
  };

  const sliderRef = useRef(null);

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

  return (
    <div
      className="testimonial-area-1 home-one-testimonial overflow-hidden space bg-smoke shape-mockup-wrap background-image"
      style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg1-1.png')" }}
    >
      <div
        className="testimonial_shape_1-1 shape-mockup jump d-xxl-block d-none"
        style={{ top: "0px", right: "4%" }}
      >
        <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="Decorative Shape" width={90} height={331} />
      </div>
      <div className="container">
        <div className="row gx-100 gy-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="Icon" width={60} height={60} />
                Client Feedback
              </span>
              <h2 className="sec-title">What our partners say about our work</h2>
            </div>

            <Slider
              {...settings}
              className="row global-carousel testi-slider1"
              data-slide-show="1"
              ref={sliderRef}
            >
              {/* Testimonial 1 */}
              <div className="col-lg-6">
                <div className="testi-card">
                  <div className="quote-icon">
                    <Image src="/main-assets/img/icon/quote.svg" alt="Quote Icon" width={60} height={60}/>
                  </div>
                  <div className="testi-card-thumb">
                    <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="Client Image" width={70} height={70}/>
                  </div>
                  <div className="testi-card_content">
                    <h4 className="testi-card_title">Exemplary Project Management!</h4>
                    <p className="testi-card_text">
                      Ga&apos;als handled the construction of our new office block with outstanding professionalism. Their attention to safety and quality control was flawless, setting a new benchmark for construction in Nairobi.
                    </p>
                    <div className="testi-card-profile">
                      <h4 className="testi-profile-title">Eng. Caleb Juma</h4>
                      <span className="testi-profile-desig">
                        Project Lead, Mzima Holdings
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="col-lg-6">
                <div className="testi-card">
                  <div className="quote-icon">
                    <Image src="/main-assets/img/icon/quote.svg" alt="Quote Icon"  width={60} height={60}/>
                  </div>
                  <div className="testi-card-thumb">
                    <Image src="/main-assets/img/testimonial/testi_1_2.png" alt="Client Image" width={70} height={70} />
                  </div>
                  <div className="testi-card_content">
                    <h4 className="testi-card_title">Reliable EPC Partner!</h4>
                    <p className="testi-card_text">
                      Choosing Ga&apos;als for our Energy Project EPC was the right decision. They delivered a complex infrastructure solution seamlessly, managing all regulatory and technical challenges efficiently.
                    </p>
                    <div className="testi-card-profile">
                      <h4 className="testi-profile-title">Ms. Amina Hassan</h4>
                      <span className="testi-profile-desig">
                        CEO, Safarisha Developers
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="col-lg-6">
                <div className="testi-card">
                  <div className="quote-icon">
                    <Image src="/main-assets/img/icon/quote.svg" alt="Quote Icon"  width={60} height={60} />
                  </div>
                  <div className="testi-card-thumb">
                    <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="Client Image" width={70} height={70}/>
                  </div>
                  <div className="testi-card_content">
                    <h4 className="testi-card_title">Top-Tier Quality!</h4>
                    <p className="testi-card_text">
                      The residential development they completed exceeded expectations in both finish quality and timely delivery. Their transparent process made the entire experience stress-free. Highly recommend their services.
                    </p>
                    <div className="testi-card-profile">
                      <h4 className="testi-profile-title">Mr. David Kimani</h4>
                      <span className="testi-profile-desig">
                        Director, Kilimani Residencies
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>

            <div className="btn-wrap mt-70">
              <div className="icon-box">
                <button
                  onClick={goToPrev}
                  data-slick-prev=".testi-slider1"
                  className="slick-arrow style2 default"
                >
                  <i className="ri-arrow-left-down-line"></i>
                </button>
                <button
                  onClick={goToNext}
                  data-slick-next=".testi-slider1"
                  className="slick-arrow style2 default"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
              <div className="client-group-thumb">
                {/* Image component for client group - maintaining structure */}
                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="Client Group" width={175} height={61} /> 
              </div>
              <div className="testi-counter-wrap">
                <h3 className="testi-counter-number">
                  <span className="counter-number">850</span>k+
                </h3>
                <p className="testi-counter-text">Square Meters Developed</p>
              </div>
            </div>
          </div>

          <div className="col-xl-6">
            <div
              className="testimonial-card background-image"
              style={{
                backgroundImage: "url('/main-assets/img/bg/testimonial-card-bg1-1.png')",
              }}
            >
              <h3 className="testimonial-card-title">
                Ready to start your next construction project?
              </h3>
              <p className="testimonial-card-text">
                Let&apos;s discuss your engineering, procurement, and construction needs across East Africa.
              </p>
              <div className="btn-group">
                <Link href="/contact" className="btn style6">
                  Get a Free Consultation <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialThree;