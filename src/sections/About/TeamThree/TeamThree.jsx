import Link from "next/link";
import Image from "next/image";

const TeamThree = () => {
  return (
    <div className="team-area-1 space shape-mockup-wrap">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}
      ></div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-7">
            <div className="title-area content-text-extra-style">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                Our Team
              </span>
              <h2 className="sec-title">Meet our leadership</h2>
            </div>
          </div>
          <div className="col-md-auto">
            <div className="sec-btn">
              <Link href="/pages/innerpage/about" className="btn">
                View All Members <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gy-30 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content max-width-reset-team">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details">Brian Gitobu</Link>
                </h4>
                <span className="team-card_desig">CEO</span>
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
              <div className="team-card_img team-card-white-space-none">
                <Image src="/main-assets/img/team/team-1-1.png" alt="img" width={330} height={474}/>
              </div>
              <Link href="tel:0023745671379" className="contact-btn-wrap">
                <span className="number">+254 725 178209 </span>
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content max-width-reset-team">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details">Eng Anne Kagoh</Link>
                </h4>
                <span className="team-card_desig">Sr. Engineer</span>
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
              <div className="team-card_img team-card-white-space-none">
                <Image src="/main-assets/img/team/team-1-2.png" alt="img" width={282} height={482} />
              </div>
              <Link href="tel:0023745671379" className="contact-btn-wrap">
                <span className="number">+254729234534</span>
                <div className="icon-btn">
                  <i className="ri-phone-fill"></i>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="team-card"
              style={{ backgroundImage: "url('/main-assets/img/bg/team-card-bg1-1.png')" }}
            >
              <div className="team-card_content max-width-reset-team">
                <h4 className="team-card_title">
                  <Link href="/pages/innerpage/team-details">John Maxwell</Link>
                </h4>
                <span className="team-card_desig">Project Management</span>
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
              <div className="team-card_img team-card-white-space-none">
                <Image src="/main-assets/img/team/team-1-3.png" alt="img" width={265} height={468}/>
              </div>
              <Link href="tel:0023745671379" className="contact-btn-wrap">
                <span className="number">+25427654328</span>
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

export default TeamThree;
