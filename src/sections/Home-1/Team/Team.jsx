import Link from "next/link";
import Image from "next/image";

const Team = () => {
  return (
    <div className="team-area-1 space shape-mockup-wrap">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{
          bottom: "0px",
          backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')",
        }}
      ></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="title-area text-left content-text-extra-style">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img"  width={60} height={60}/>
                OUR EXPERTS
              </span>
              <h2 className="sec-title">Meet our agency leadership</h2>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="sec-btn">
              <Link href="/pages/innerpage/team" className="btn">
                View All Team <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gy-30 justify-content-center">
          {/* card one: CEO/Director - focusing on overall strategy and agency operations */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card custom-team-card"
              style={{ backgroundImage: 'url("/main-assets/img/bg/team-card-bg1-1.png")' }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details-ceo">Mwangi G. Alali</Link> {/* Placeholder Name */}
                </h4>
                <span className="team-card_desig">Founder & Managing Director</span>
                <div className="team-social_wrap">
                  <div className="social-btn">
                    {/* Placeholder Social Links */}
                    <Link href="https://linkedin.com/">
                      <i className="ri-linkedin-box-fill"></i> {/* Using LinkedIn for professional focus */}
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link href="mailto:director@gaals.com">
                      <i className="ri-mail-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <Image src="/main-assets/img/team/team-1-1.png" alt="Director image" width={330} height={474} />
              </div>
              <Link href="tel:+254700000000" className="contact-btn-wrap">
                <span className="number">+254 700 000 000</span> {/* Placeholder Phone */}
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>

          {/* card two: Head of Construction/Engineering */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card custom-team-card"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details-construction">Aisha Omar</Link> {/* Placeholder Name */}
                </h4>
                <span className="team-card_desig">Head of Construction & Engineering</span>
                <div className="team-social_wrap">
                  <div className="social-btn">
                    {/* Placeholder Social Links */}
                    <Link href="https://linkedin.com/">
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link href="mailto:aisha.omar@gaals.com">
                      <i className="ri-mail-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <Image src="/main-assets/img/team/team-1-2.png" alt="Engineer image" width={330} height={474}/>
              </div>
              <Link href="tel:+254700000001" className="contact-btn-wrap">
                <span className="number">+254 700 000 001</span> {/* Placeholder Phone */}
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>

          {/* card three: Head of Logistics/Supply Chain */}
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card custom-team-card"
              style={{ backgroundImage: 'url("/main-assets/img/bg/team-card-bg1-1.png")' }}
            >
              <div className="team-card_content">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details-logistics">David Chege</Link> {/* Placeholder Name */}
                </h4>
                <span className="team-card_desig">Head of Logistics & Supply Chain</span>
                <div className="team-social_wrap">
                  <div className="social-btn">
                    {/* Placeholder Social Links */}
                    <Link href="https://linkedin.com/">
                      <i className="ri-linkedin-box-fill"></i>
                    </Link>
                    <Link href="https://www.twitter.com/">
                      <i className="ri-twitter-x-line"></i>
                    </Link>
                    <Link href="mailto:david.chege@gaals.com">
                      <i className="ri-mail-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="team-card_img">
                <Image src="/main-assets/img/team/team-1-3.png" alt="Logistics manager image" width={330} height={474}/>
              </div>
              <Link href="tel:+254700000002" className="contact-btn-wrap">
                <span className="number">+254 700 000 002</span> {/* Placeholder Phone */}
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