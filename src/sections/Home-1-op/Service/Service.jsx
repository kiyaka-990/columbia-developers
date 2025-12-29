import Link from "next/link";
import Image from "next/image";

const Service = () => {
  return (
    <div
      className="service-area-1 space-top overflow-hidden"
      id="service-sec"
      style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }}
    >
      <div className="container">
        <div className="row gy-30 gx-30">
          <div className="col-xl-4 col-md-6">
            <div className="title-area mb-0 text-md-start text-center">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                OUR CORE SERVICES
              </span> {/* Personalized Subtitle */}
              <h2 className="sec-title">Comprehensive Construction Solutions</h2> {/* Personalized Title */}
              <p>
                Ga&apos;als delivers end-to-end construction services, from initial design consultation to final build and ongoing maintenance. We are your trusted partner for high-quality, efficient project execution.
              </p> {/* Personalized Description */}
            </div>
          </div>
          
          {/* Service 1: General Construction (Design-Build) */}
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="service-card-shadow-text">CONSTRUCTION - 01</div>
              <div className="service-card_content">
                <div className="service-card_icon">
                  <Image src="/main-assets/img/icon/service-icon1-1.png" alt="General Construction Icon" width={60} height={60}/>
                </div>
                <h4 className="service-card_title">
                  <Link href="/pages/innerpage/service-details">New Construction & Design-Build</Link> {/* Personalized Title */}
                </h4>
                <p className="service-card_text">
                  We manage the entire lifecycle of new commercial, residential, and industrial buildings.
                </p> {/* Personalized Description */}
                <div className="btn-wrap">
                  <div className="icon-btn">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <Link href="/pages/innerpage/service-details" className="btn">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
              
            </div>
          </div>
          
          {/* Service 2: Property Maintenance and Renovation */}
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="service-card-shadow-text">MAINTENANCE - 02</div>
              <div className="service-card_content">
                <div className="service-card_icon">
                  <Image src="/main-assets/img/icon/service-icon1-2.png" alt="Maintenance Icon" width={60} height={60}/>
                </div>
                <h4 className="service-card_title">
                  <Link href="/pages/innerpage/service-details">Structural Maintenance & Refurbishment</Link> {/* Personalized Title */}
                </h4>
                <p className="service-card_text">
                  Expert services for building longevity, preventative maintenance, and large-scale renovations.
                </p> {/* Personalized Description */}
                <div className="btn-wrap">
                  <div className="icon-btn">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <Link href="/pages/innerpage/service-details" className="btn">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 3: Project Management */}
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="service-card-shadow-text">MANAGEMENT - 03</div>
              <div className="service-card_content">
                <div className="service-card_icon">
                  <Image src="/main-assets/img/icon/service-icon1-3.png" alt="Management Icon" width={60} height={60} />
                </div>
                <h4 className="service-card_title">
                  <Link href="/pages/innerpage/service-details">Construction Project Management</Link> {/* Personalized Title */}
                </h4>
                <p className="service-card_text">
                  Expert oversight of scheduling, budget control, subcontractor management, and risk mitigation.
                </p> {/* Personalized Description */}
                <div className="btn-wrap">
                  <div className="icon-btn">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <Link href="/pages/innerpage/service-details" className="btn">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 4: Virtual Design and Construction (VDC/BIM) */}
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="service-card-shadow-text">TECHNOLOGY - 04</div>
              <div className="service-card_content">
                <div className="service-card_icon">
                  <Image src="/main-assets/img/icon/service-icon1-4.png" alt="VDC/BIM Icon" width={60} height={60} />
                </div>
                <h4 className="service-card_title">
                  <Link href="/pages/innerpage/service-details">Virtual Design & BIM Modeling</Link> {/* Personalized Title */}
                </h4>
                <p className="service-card_text">
                  Utilizing BIM and VDC for clash detection, optimized design, and enhanced project visualization.
                </p> {/* Personalized Description */}
                <div className="btn-wrap">
                  <div className="icon-btn">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <Link href="/pages/innerpage/service-details" className="btn">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Service 5: Civil Engineering and Infrastructure */}
          <div className="col-xl-4 col-md-6">
            <div className="service-card">
              <div className="service-card-shadow-text">INFRASTRUCTURE - 05</div>
              <div className="service-card_content">
                <div className="service-card_icon">
                  <Image src="/main-assets/img/icon/service-icon1-5.png" alt="Infrastructure Icon" width={60} height={60} />
                </div>
                <h4 className="service-card_title h5">
                  <Link href="/pages/innerpage/service-details">Civil Works & Infrastructure</Link> {/* Personalized Title */}
                </h4>
                <p className="service-card_text">
                  Roadwork, utility installation, site development, and earthworks for large-scale projects.
                </p> {/* Personalized Description */}
                <div className="btn-wrap">
                  <div className="icon-btn">
                    <i className="ri-arrow-right-up-line"></i>
                  </div>
                  <Link href="/pages/innerpage/service-details" className="btn">
                    Learn More <i className="ri-arrow-right-up-line"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;