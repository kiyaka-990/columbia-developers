import Link from "next/link";
import Image from "next/image";
const AboutTwo = () => {
    // Columbia Specific Data
    const yearsExperience = 15; // Placeholder for established experience
    const aboutText = "Columbia is dedicated to delivering high-quality, sustainable construction and project management solutions across Kenya. Our expertise spans residential, commercial, and essential infrastructure projects, prioritizing efficiency and client satisfaction.";
    const missionText = "To be the construction partner of choice in Kenya by upholding the highest standards of quality, safety, and integrity in every structure we build.";
    const visionText = "To lead the transformation of the Kenyan construction landscape through innovative building methods and commitment to environmental and social responsibility.";

  return (
    <div className="about-area-2 space overflow-hidden" id="about-sec">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite"
        data-top="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')" }}
      ></div>
      <div
        className="section-animation-shape1-2 shape-mockup animation-infinite"
        data-bottom="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')" }}
      ></div>
      <div className="container">
        <div className="row gx-60 align-items-center flex-row-reverse">
          <div className="col-xl-6">
            <div className="about-thumb2 mb-60 mb-xl-0">
              <div className="about-img-1">
                <Image src="/main-assets/img/normal/about_2-1.png" alt="Construction project image" width={550} height={720}/>
              </div>
              <div className="about-counter-wrap style2 jump-reverse">
                <div className="about-counter-wrap-bg">
                  <Image src="/main-assets/img/normal/about_shape_2-2.png" alt="shape" width={158} height={314}/>
                </div>
                <div className="about-counter-icon">
                  <Image
                    src="/main-assets/img/hero/hero_experience_wrap_icon_1_1.png"
                    alt="icon" width={60} height={60}
                  />
                </div>
                <h3 className="about-counter-number">
                  <span className="counter-number">{yearsExperience}</span>+ {/* Updated Experience Counter */}
                </h3>
                <p className="about-counter-text">Years of Successful Delivery</p> {/* Personalized Text */}
              </div>
            </div>
            
          </div>
          <div className="col-xl-6">
            <div className="title-area mb-25">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/>
                BUILDING DREAMS IN EAST AFRICA
              </span> {/* Personalized Subtitle */}
              <h2 className="sec-title">
                YOUR TRUSTED PARTNER FOR QUALITY CONSTRUCTION
              </h2> {/* Personalized Title */}
              <p className="sec-text">
                {aboutText} {/* Personalized About Text */}
              </p>
            </div>
            <div className="checklist mb-35">
              <ul>
                <li>
                  <Image src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="icon" width={60} height={60}/>
                  **Local Expertise and Compliance:** Deep knowledge of Kenyan regulations and construction standards.
                </li> {/* Personalized List Item */}
                <li>
                  <Image src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="icon" width={60} height={60}/>
                  **Integrated Design-Build Approach:** Streamlining projects from concept to completion under one roof.
                </li> {/* Personalized List Item */}
              </ul>
            </div>
            <div className="about-grid-wrap">
              <div className="icon">
                <Image src="/main-assets/img/icon/about-grid-icon1-1.svg" alt="icon" width={60} height={60} />
              </div>
              <div className="about-grid-details">
                <h4 className="title">Our Mission</h4>
                <p className="text">
                  {missionText} {/* Personalized Mission */}
                </p>
              </div>
            </div>
            <div className="about-grid-wrap">
              <div className="icon">
                <Image src="/main-assets/img/icon/about-grid-icon1-2.svg" alt="icon" width={60} height={60}/>
              </div>
              <div className="about-grid-details">
                <h4 className="title">Our Vision</h4>
                <p className="text">
                  {visionText} {/* Personalized Vision */}
                </p>
              </div>
            </div>
            <div className="btn-group mt-60">
              <Link href="/pages/innerpage/about" className="btn style3">
                Discover Our Difference <i className="ri-arrow-right-up-line"></i>
              </Link> {/* Personalized CTA */}
            </div>
          </div>
        </div>
          </div>
        </div>
  );
};

export default AboutTwo;