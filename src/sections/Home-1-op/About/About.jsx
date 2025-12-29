import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <div className="about-area-1 space overflow-hidden" id="about-sec">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite"
        data-bottom="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')" }}
      ></div>
      <div
        className="about_shape_1-1 shape-mockup jump-reverse"
        data-bottom="0"
        data-right="0"
      >
        <Image src="/main-assets/img/normal/about_shape_1-2.png" alt="img" width={372} height={495}/>
      </div>
      <div className="container">
        <div className="row gx-60 align-items-center">
          <div className="col-xl-6">
            <div className="about-thumb1 mb-40 mb-lg-0">
              <div className="about-img-1">
                <Image src="/main-assets/img/normal/about_1-1.png" alt="img"  width={550} height={720}/>
              </div>
              <div className="about-counter-wrap jump">
                <h3 className="about-counter-number">
                  <span className="counter-number">15</span>+ {/* Updated to Years of Experience or Projects */}
                </h3>
                <p className="about-counter-text">Years Experience</p> {/* Updated Counter Text */}
                <div className="about-counter-shape">
                  <Image src="/main-assets/img/normal/about_shape_1-1.png" alt="img" width={255} height={45} />
                </div>
                <div className="client-group-thumb">
                  <Image src="/main-assets/img/normal/client_group_1-1.png" alt="img" width={206} height={54}/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="about-content-wrap1">
              <div className="title-area mb-25">
                <span className="sub-title">
                  <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                  ABOUT GA&apos;ALS CONSTRUCTION
                </span> {/* Personalized Subtitle */}
                <h2 className="sec-title">
                  Building The Future With Precision And Reliability
                </h2> {/* Personalized Title */}
                <p className="sec-text">
                  At Ga&apos;als, we transform client visions into high-quality, sustainable structures. With over 15 years of industry expertise, we specialize in end-to-end construction, project management, and engineering solutions.
                </p> {/* Personalized Text */}
              </div>
              <div className="checklist mb-35">
                <ul>
                  <li>
                    <Image
                      src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                      alt="img" width={60} height={60}
                    />
                    **Certified Expertise** in Commercial and Industrial Construction
                  </li> {/* Personalized List Item */}
                  <li>
                    <Image
                      src="/main-assets/img/icon/about-checklsit-icon1-1.svg"
                      alt="img" width={60} height={60}
                    />
                    **Guaranteed Quality** and on-time Project Completion
                  </li> {/* Personalized List Item */}
                </ul>
              </div>
              <div className="about-grid-wrap">
                <div className="icon">
                  <Image src="/main-assets/img/icon/about-grid-icon1-1.svg" alt="img" width={60} height={60}/>
                </div>
                <div className="about-grid-details">
                  <h4 className="title">Our Mission</h4>
                  <p className="text">
                    To deliver superior construction services that exceed client expectations in quality, safety, and efficiency.
                  </p> {/* Personalized Mission */}
                </div>
              </div>
              <div className="about-grid-wrap">
                <div className="icon">
                  <Image src="/main-assets/img/icon/about-grid-icon1-2.svg" alt="img" width={60} height={60}/>
                </div>
                <div className="about-grid-details">
                  <h4 className="title">Our Vision</h4>
                  <p className="text">
                    To be the leading construction partner, recognized for innovation and commitment to long-term client success.
                  </p> {/* Personalized Vision */}
                </div>
              </div>
              <div className="btn-group mt-60">
                <Link href="/pages/innerpage/about" className="btn style3">
                  Learn More About Ga&apos;als <i className="ri-arrow-right-up-line"></i> {/* Personalized Button Text */}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;