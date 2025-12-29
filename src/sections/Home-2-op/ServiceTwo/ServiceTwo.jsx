import Link from "next/link";
import Image from "next/image";
const ServiceTwo = () => {
  return (
    <div
      className="service-area-2 space-top overflow-hidden"
      id="service-sec"
      style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}
    >
      <div
        className="service_shape_2-1 shape-mockup jump-reverse d-xl-block d-none"
        data-bottom="10%"
        data-right="0"
      >
        <Image src="/main-assets/img/shape/sec-bg-shape1.png" alt="img" width={90} height={331} />
      </div>
      <div className="container">
        <div className="row justify-content-xl-start justify-content-center">
          <div className="col-xxl-4 col-xl-5 col-md-6">
            <div className="title-area mb-0 text-xl-start text-center">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                Our Core Expertise
              </span>
              <h2 className="sec-title">INTEGRATED CONSTRUCTION & ENGINEERING SOLUTIONS</h2>
              <div className="btn-group mt-50 justify-content-xl-start justify-content-center">
                <Link href="/pages/innerpage/service" className="btn">
                  VIEW ALL CAPABILITIES <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="service-card-wrap2">
          <div className="row">
            <div className="col-xl-3 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">01</div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <Image src="/main-assets/img/icon/service-icon2-1.svg" alt="img" width={60} height={60}/>
                  </div>
                  <h4 className="service-card_title">
                    <Link href="/pages/innerpage/service-details">EPC & TURNKEY PROJECTS</Link>
                  </h4>
                  <p className="service-card_text">
                    Comprehensive Engineering, Procurement, and Construction (EPC) delivery for maximum project efficiency and single-point accountability.
                  </p>
                  <div className="btn-wrap">
                    <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                      READ MORE
                      <span className="btn-icon">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">02</div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <Image src="/main-assets/img/icon/service-icon2-2.svg" alt="img" width={60} height={60}/>
                  </div>
                  <h4 className="service-card_title">
                    <Link href="/pages/innerpage/service-details">
                      CIVIL & INFRASTRUCTURE
                    </Link>
                  </h4>
                  <p className="service-card_text">
                    Specialized construction for large-scale infrastructure projects including roads, bridges, and public utility facilities across Kenya.
                  </p>
                  <div className="btn-wrap">
                    <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                      READ MORE
                      <span className="btn-icon">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">03</div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <Image src="/main-assets/img/icon/service-icon2-3.svg" alt="img" width={60} height={60}/>
                  </div>
                  <h4 className="service-card_title">
                    <Link href="/pages/innerpage/service-details">COMMERCIAL & RESIDENTIAL</Link>
                  </h4>
                  <p className="service-card_text">
                    Building high-quality corporate towers, commercial centers, and planned residential developments in Nairobi and major cities.
                  </p>
                  <div className="btn-wrap">
                    <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                      READ MORE
                      <span className="btn-icon">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 service-card-list">
              <div className="service-card style2">
                <div className="service-card-number">04</div>
                <div className="service-card_content">
                  <div className="service-card_icon">
                    <Image src="/main-assets/img/icon/service-icon2-4.svg" alt="img" width={60} height={60} />
                  </div>
                  <h4 className="service-card_title">
                    <Link href="/pages/innerpage/service-details">
                      PROJECT MANAGEMENT
                    </Link>
                  </h4>
                  <p className="service-card_text">
                    Dedicated oversight, planning, and scheduling using modern methodologies (e.g., BIM) to ensure timely and budget-compliant delivery.
                  </p>
                  <div className="btn-wrap">
                    <Link href="/pages/innerpage/service-details" className="btn-with-icon">
                      READ MORE
                      <span className="btn-icon">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-end">
          <div className="cta-wrap2">
            <div className="cta-title-wrap">
              <h3 className="cta-title">Ready to launch your next project?</h3>
              <p className="cta-text">Partner with us for reliable construction solutions.</p>
            </div>
            <div className="cta-contact-grid">
              <div className="icon-btn">
                <i className="ri-phone-fill"></i>
              </div>
              <div className="cta-contact-grid-details">
                <Link className="link" href="tel:+254714861896">
                  +254 714 861 896 
                </Link>
                <h6 className="title">Mon - Sat : 8.00am - 5.00pm EAT</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceTwo;