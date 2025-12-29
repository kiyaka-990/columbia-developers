import Link from "next/link";
import Image from "next/image";

const Team = () => {
  return (
    <div className="team-area-1 space">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite"
        data-bottom="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')" }}
      ></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="title-area text-md-start text-center">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                OUR EXPERT TEAM
              </span> {/* Personalized Subtitle */}
              <h2 className="sec-title">Meet our construction leadership</h2> {/* Personalized Title */}
            </div>
          </div>
          <div className="col-md-auto">
            <div className="sec-btn">
              <Link href="/pages/innerpage/about" className="btn">
                View All Experts <i className="ri-arrow-right-up-line"></i> {/* Personalized Button Text */}
              </Link>
            </div>
          </div>
        </div>

        <div className="row gy-30 justify-content-center">
          {/* Team Member 1: Abbass Salat (CEO - Kenyan number retained) */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details">Abbass Salat</Link>
                </h4>
                <span className="team-card_desig">Chief Executive Officer</span> {/* Personalized Designation */}
                <div className="team-social_wrap">
                  <div className="social-btn">
                    <Link href="https://facebook.com/">
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link href="https://instagram.com/">
                      <i className="ri-instagram-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <Image src="/main-assets/img/team/team-1-1.png" alt="Abbass Salat" width={70} height={70}/>
              </div>
              <Link href="tel:+254714861896" className="contact-btn-wrap">
                <span className="number"> +254 714 861 896 </span> {/* Cleaned up number format */}
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Team Member 2: Mark Ronaldo (Chief Engineer) */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details">Jane Doe</Link> {/* Generic name change */}
                </h4>
                <span className="team-card_desig">Chief Structural Engineer</span> {/* Personalized Designation */}
                <div className="team-social_wrap">
                  <div className="social-btn">
                    <Link href="https://linkedin.com/">
                      <i className="ri-linkedin-fill"></i> {/* Changed to LinkedIn */}
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link href="mailto:jane.doe@gaals.co.ke">
                      <i className="ri-mail-line"></i> {/* Changed to Mail */}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <Image src="/main-assets/img/team/team-1-2.png" alt="Jane Doe" width={60} height={60}/>
              </div>
              <Link href="tel:+254700123456" className="contact-btn-wrap"> {/* Example Kenyan Number */}
                <span className="number">+254 700 123 456</span> {/* Personalized Number */}
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>
          
          {/* Team Member 3: John Maxwell (Construction Manager) */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details">David Kariuki</Link> {/* Generic name change */}
                </h4>
                <span className="team-card_desig">Head of Site Operations</span> {/* Personalized Designation */}
                <div className="team-social_wrap">
                  <div className="social-btn">
                    <Link href="https://linkedin.com/">
                      <i className="ri-linkedin-fill"></i> {/* Changed to LinkedIn */}
                    </Link>
                    <Link href="https://facebook.com/">
                      <i className="ri-facebook-fill"></i>
                    </Link>
                    <Link href="mailto:david.kariuki@gaals.co.ke">
                      <i className="ri-mail-line"></i> {/* Changed to Mail */}
                    </Link>
                </div>
                </div>
              </div>
              <div className="team-card_img">
                <Image src="/main-assets/img/team/team-1-3.png" alt="David Kariuki" width={60} height={60} />
              </div>
              <Link href="tel:+254700987654" className="contact-btn-wrap"> {/* Example Kenyan Number */}
                <span className="number">+254 700 987 654</span> {/* Personalized Number */}
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;