import Image from "next/image"; 
const TestimonialTwo = () => {
  return (
    <div className="testimonial-area-2 overflow-hidden">
      <div
        className="testimonial-anim-shape2-1 section-animation-shape1-1 shape-mockup animation-infinite"
        data-right="0"
        data-top="0px"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')" }}
      ></div>
      <div
        className="testimonial_shape_2-1 shape-mockup jump d-xxl-block d-none"
        data-bottom="0"
        data-right="10%"
      >
        <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="Decorative Shape" width={90} height={331}/>
      </div>
      <div className="testimonial_shape_2-2">
        <Image src="/main-assets/img/bg/testimonial-bg-shape2-1.png" alt="Background Shape"  width={1293} height={800}/>
      </div>
      <div className="testimonial_shape_2-3 movingX">
        <Image src="/main-assets/img/bg/testimonial-bg-shape2-2.png" alt="Decorative Element" width={1293} height={800}/>
      </div>
      <div className="testimonial_shape_2-4 movingX"></div>

      <div
        className="testimonial_bg_thumb2-1"
        style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg2-1.png')" }}
      ></div>
      {/* NOTE: Consider updating testimonial_2-1.png to a picture relevant to construction/logistics */}
      <div
        className="testimonial_thumb2-1"
        style={{ backgroundImage: "url('/main-assets/img/normal/testimonial_2-1.png')" }}
      ></div>
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-xl-9">
            <div className="testi-wrap2">
              <div className="title-area">
                <span className="sub-title text-theme">
                  <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="Icon" width={60} height={60}/>
                  Client Success Stories
                </span>
                <h2 className="sec-title text-white">
                  WHAT OUR PARTNERS IN INDUSTRY ARE SAYING
                </h2>
              </div>
              <div
                className="row global-carousel testi-slider2"
                data-slide-show="1"
                data-dots="true"
                data-xl-dots="true"
                data-ml-dots="true"
              >
                {/* Testimonial 1: Focus on Construction */}
                <div className="col-12">
                  <div className="testi-card style2">
                    <div className="testi-card-thumb">
                      <Image src="/main-assets/img/testimonial/testi_2_1.png" alt="Client Photo" width={70} height={70}/>
                      <div className="quote-icon">
                        <Image src="/main-assets/img/icon/quote2.svg" alt="Quote Icon" width={60} height={60}/>
                      </div>
                    </div>
                    <div className="testi-card_content">
                      <h4 className="testi-card_title">Construction Delivered Flawlessly!</h4>
                      <p className="testi-card_text">
                        Ga&apos;als Agencies managed the entire build of our new facility. Their engineering standards are exceptionally high, and they maintained clear communication throughout the project. True professionals.
                      </p>
                      <div className="testi-card-profile">
                        <h4 className="testi-profile-title">Ben Kiptoo</h4>
                        <span className="testi-profile-desig">
                          Project Director, Capital Ventures
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 2: Focus on Logistics */}
                <div className="col-12">
                  <div className="testi-card style2">
                    <div className="testi-card-thumb">
                      <Image src="/main-assets/img/testimonial/testi_2_2.png" alt="Client Photo" width={70} height={70} />
                      <div className="quote-icon">
                        <Image src="/main-assets/img/icon/quote2.svg" alt="Quote Icon" width={60} height={60} />
                      </div>
                    </div>
                    <div className="testi-card_content">
                      <h4 className="testi-card_title">Unbeatable Transport Reliability!</h4>
                      <p className="testi-card_text">
                        Their logistics team handled our specialized cargo with great care. Real-time tracking and adherence to safety protocols ensured a smooth, on-time delivery across challenging terrain. A trusted logistics partner.
                      </p>
                      <div className="testi-card-profile">
                        <h4 className="testi-profile-title">Fahima Ali</h4>
                        <span className="testi-profile-desig">
                          Logistics Manager, Industrial Solutions
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial 3: Focus on Supply */}
                <div className="col-12">
                  <div className="testi-card style2">
                    <div className="testi-card-thumb">
                      <Image src="/main-assets/img/testimonial/testi_2_3.png" alt="Client Photo" width={70} height={70}/>
                      <div className="quote-icon">
                        <Image src="/main-assets/img/icon/quote2.svg" alt="Quote Icon" width={60} height={60}/>
                      </div>
                    </div>
                    <div className="testi-card_content">
                      <h4 className="testi-card_title">Seamless Procurement & Supply!</h4>
                      <p className="testi-card_text">
                        Ga&apos;als Agencies simplified our raw material procurement. They consistently deliver high-quality goods, on time and within budget, ensuring our production line never stops. Excellent supply chain management.
                      </p>
                      <div className="testi-card-profile">
                        <h4 className="testi-profile-title">Grace Wanjiku</h4>
                        <span className="testi-profile-desig">
                          Procurement Head, Manufactura Ltd.
                        </span>
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

export default TestimonialTwo;