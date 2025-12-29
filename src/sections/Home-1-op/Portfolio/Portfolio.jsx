import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="portfolio-area-1 space" id="project-sec">
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
            PROJECT GALLERY
          </span> {/* Personalized Subtitle */}
          <h2 className="sec-title">Showcasing Our Expertise and Completed Builds</h2> {/* Personalized Title */}
          <p className="sec-text">
            Explore Ga&apos;als&apos; diverse portfolio of successfully delivered commercial, residential, and infrastructure projects built with quality and precision.
          </p> {/* Personalized Description */}
        </div>
        <div className="portfolio-slider1 overflow-hidden">
          <div
            className="row gy-30 gx-30 global-carousel"
            data-slide-show="1"
            data-dots="true"
            data-xl-dots="true"
            data-ml-dots="true"
            data-lg-dots="true"
            data-md-dots="true"
            data-center-mode="true"
            data-xl-center-mode="true"
            data-ml-center-mode="true"
            data-center-padding="265px"
            data-xl-center-padding="265px"
            data-ml-center-padding="200px"
          >
            {/* Project Card 1: Commercial Office Tower */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_1.png" alt="Commercial Office Tower" width={812} height={450}/>
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_1.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Commercial & Office</span> {/* Personalized Subtitle */}
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">Metro Heights Business Center</Link> {/* Personalized Title */}
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q3 2024
                    </p> {/* Personalized Date/Status */}
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i> {/* Personalized Button Text */}
                </Link>
              </div>
            </div>
            
            {/* Project Card 2: Modern Residential Development */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_2.png" alt="Modern Residential Development" width={812} height={450} />
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_2.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Residential & Housing</span> {/* Personalized Subtitle */}
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">The Riverfront Luxury Condos</Link> {/* Personalized Title */}
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q4 2023
                    </p> {/* Personalized Date/Status */}
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
            
            {/* Project Card 3: Industrial/Infrastructure Project */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_3.png" alt="Industrial Facility Construction" width={812} height={450}/>
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_3.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Industrial & Civil Works</span> {/* Personalized Subtitle */}
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">The East Side Logistics Hub</Link> {/* Personalized Title */}
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q2 2024
                    </p> {/* Personalized Date/Status */}
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
            
            {/* Project Card 4: Healthcare Facility Renovation */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_1.png" alt="Healthcare Facility Renovation" width={812} height={450}/>
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_1.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Healthcare & Renovation</span> {/* Personalized Subtitle */}
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">Regional Hospital Modernization</Link> {/* Personalized Title */}
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q1 2023
                    </p> {/* Personalized Date/Status */}
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
            
            {/* Project Card 5: Mixed-Use Urban Development */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_2.png" alt="Mixed-Use Urban Development" width={812} height={450}/>
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_2.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Urban Development</span> {/* Personalized Subtitle */}
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">Downtown Multi-Functional Complex</Link> {/* Personalized Title */}
                    </h4>
                    <p className="portofolio-card-text">
                      Status: Ongoing - Due Q4 2025
                    </p> {/* Personalized Date/Status */}
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Project Scope <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
            
            {/* Project Card 6: Educational Facility Build */}
            <div className="col-lg-6">
              <div className="portfolio-card">
                <div className="portfolio-card-thumb">
                  <Image src="/main-assets/img/project/project1_3.png" alt="Educational Facility Construction" width={812} height={450}/>
                  <Link
                    className="icon-btn popup-image"
                    href="/main-assets/img/project/project1_3.png"
                  >
                    <i className="ri-eye-line"></i>
                  </Link>
                </div>
                <div className="portfolio-card-details">
                  <div className="media-left">
                    <span className="portfolio-card-subtitle">Institutional & Education</span> {/* Personalized Subtitle */}
                    <h4 className="portfolio-card-title">
                      <Link href="/pages/innerpage/project-details">New University Science Wing</Link> {/* Personalized Title */}
                    </h4>
                    <p className="portofolio-card-text">
                      Completed: Q3 2023
                    </p> {/* Personalized Date/Status */}
                  </div>
                </div>
                <Link href="/pages/innerpage/project-details" className="btn">
                  View Case Study <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;