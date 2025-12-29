import Link from "next/link";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div
      className="testimonial-area-1 overflow-hidden space bg-smoke"
      style={{ backgroundImage: "url('/main-assets/img/bg/testimonial-bg1-1.png')" }}
    >
      <div
        className="testimonial_shape_1-1 shape-mockup jump d-xxl-block d-none"
        data-top="0"
        data-right="4%"
      >
        <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="Decorative Shape" width={90} height={331}/>
      </div>
      <div className="container">
        <div className="row gx-100 gy-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="Icon" width={60} height={60}/>
                Client Feedback
              </span>
              <h2 className="sec-title">What Our Partners Say</h2>
            </div>
            <div
              className="row global-carousel testi-slider1"
              data-slide-show="1"
            >
              {/* Testimonial 1: Focus on Construction/Quality */}
              <div className="col-lg-6">
                <div className="testi-card">
                  <div className="quote-icon">
                    <Image src="/main-assets/img/icon/quote.svg" alt="Quote" width={60} height={60}/>
                  </div>
                  <div className="testi-card-thumb">
                    <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="Client Photo" width={70} height={70}/>
                  </div>
                  <div className="testi-card_content">
                    <h4 className="testi-card_title">Exceptional Execution!</h4>
                    <p className="testi-card_text">
                      Ga&apos;als Agencies handled the full build-out of our commercial space. The quality was outstanding, and they finished ahead of schedule. A truly reliable construction partner.
                    </p>
                    <div className="testi-card-profile">
                      <h4 className="testi-profile-title">John Mwangi</h4>
                      <span className="testi-profile-desig">
                        Project Manager, Horizon Developers
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 2: Focus on Logistics/Timeliness */}
              <div className="col-lg-6">
                <div className="testi-card">
                  <div className="quote-icon">
                    <Image src="/main-assets/img/icon/quote.svg" alt="Quote" width={60} height={60}/>
                  </div>
                  <div className="testi-card-thumb">
                    <Image src="/main-assets/img/testimonial/testi_1_2.png" alt="Client Photo" width={70} height={70}/>
                  </div>
                  <div className="testi-card_content">
                    <h4 className="testi-card_title">Reliable Logistics!</h4>
                    <p className="testi-card_text">
                      Their supply chain management is top-notch. They seamlessly transported heavy equipment across the region. Their dedication to safety and timeliness is unmatched.
                    </p>
                    <div className="testi-card-profile">
                      <h4 className="testi-profile-title">Sarah Hassan</h4>
                      <span className="testi-profile-desig">
                        Operations Director, East Africa Mining
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Testimonial 3: Focus on Supply/Procurement */}
              <div className="col-lg-6">
                <div className="testi-card">
                  <div className="quote-icon">
                    <Image src="/main-assets/img/icon/quote.svg" alt="Quote" width={60} height={60}/>
                  </div>
                  <div className="testi-card-thumb">
                    <Image src="/main-assets/img/testimonial/testi_1_1.png" alt="Client Photo" width={70} height={70}/>
                  </div>
                  <div className="testi-card_content">
                    <h4 className="testi-card_title">Seamless Supply Chain!</h4>
                    <p className="testi-card_text">
                      Their procurement team sourced hard-to-find materials for our specialty project, ensuring zero downtime on site. They are our go-to for construction supply in the country.
                    </p>
                    <div className="testi-card-profile">
                      <h4 className="testi-profile-title">David Kiprono</h4>
                      <span className="testi-profile-desig">
                        Lead Architect, Grand Designs LTD
                      </span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className="btn-wrap mt-70">
              <div className="icon-box">
                <button
                  data-slick-prev=".testi-slider1"
                  className="slick-arrow style2 default"
                >
                  <i className="ri-arrow-left-down-line"></i>
                </button>
                <button
                  data-slick-next=".testi-slider1"
                  className="slick-arrow style2 default"
                >
                  <i className="ri-arrow-right-up-line"></i>
                </button>
              </div>
              <div className="client-group-thumb">
                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="Client Logos" width={175} height={61}/>
              </div>
              <div className="testi-counter-wrap">
                <h3 className="testi-counter-number">
                  <span className="counter-number">50</span>+
                </h3>
                <p className="testi-counter-text">Projects Delivered</p>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div
              className="testimonial-card"
              style={{
                backgroundImage: "url('/main-assets/img/bg/testimonial-card-bg1-1.png')",
              }}
            >
              <h3 className="testimonial-card-title">
                Ready to Start Your Next Project?
              </h3>
              <p className="testimonial-card-text">
                Whether it&apos;s a major construction project, complex logistics challenge, or materials supply, Ga&apos;als Agencies is ready to discuss your needs.
              </p>
              <div className="btn-group">
                <Link href="/pages/innerpage/contact" className="btn style6">
                  Inquire Now <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;