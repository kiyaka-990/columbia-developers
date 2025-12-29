import Link from "next/link";

const FooterFive = () => {
  return (
    <footer
      className="footer-wrapper footer-layout4 background-image"
      style={{ backgroundImage: "url('/main-assets/img/bg/footer-bg1-1.png')" }}
    >
      <div className="container">
        <div className="footer-top-1">
          <div className="footer-logo">
            <Link href="/">
              {/* Ensure your logo path is correct */}
              <img src="/main-assets/img/logo.png" alt="Columbia Developers" style={{ maxWidth: '200px' }} />
            </Link>
          </div>
          <div className="subscribe-box">
            <p className="subscribe-box_text">
              Keep up with our latest infrastructure projects and industry insights.
            </p>
            <form className="newsletter-form">
              <input
                className="form-control"
                type="email"
                placeholder="Your professional email..."
                required
              />
              <button type="submit" className="btn style2">
                SUBSCRIBE
                <i className="ri-arrow-right-up-line" />
              </button>
            </form>
          </div>
        </div>
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget widget-about footer-widget">
                <h3 className="widget_title">Columbia Developers</h3>
                <p className="about-text">
                  Leading the way in civil engineering, project management, and specialized procurement across East Africa. We build with precision and integrity.
                </p>
                <h4 className="about-year">Since 1992</h4>
                <h5 className="about-subtitle">OPERATING HOURS</h5>
                <p className="about-text">
                  <span className="text-theme">Mon-Fri:</span> 08:00am to 05:00pm
                  <br />
                  <span className="text-theme">Sat:</span> 09:00am to 01:00pm
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Core Services</h3>
                <div className="menu-all-pages-container grid-style">
                  <ul className="menu">
                    <li>
                      <Link href="/pages/innerpage/about">Our Profile</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/service">Civil Works</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/service">Procurement</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/service">Recent Projects</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/service">Maintenance</Link>
                    </li>
                  </ul>
                  <ul className="menu">
                    <li>
                      <Link href="/pages/innerpage/team">Expert Team</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/service">QHSE Policy</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/service">Testimonials</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/contact">Compliance</Link>
                    </li>
                    <li>
                      <Link href="/pages/innerpage/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-contact">
                <h3 className="widget_title">HQ Address</h3>
                <p className="contact-text">
                  Nairobi, Kenya<br />
                  Megaco Hse, Mukinduri Rd Karen
                </p>
                <h3 className="widget_title">Official Email</h3>
                <p className="text-white footer-text">Project Inquiries:</p>
                <p className="footer-text">
                  <Link href="mailto:info@columbiadevelopers.com">info@columbiadevelopers.com</Link>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Direct Line</h3>
                <p className="footer-text">
                  <Link href="tel:+254725178209">+254 725 178209</Link>
                </p>
                <p className="footer-text">
                  <Link href="tel:+ 254 (0) 020-205 3648">+ 254 (0) 020-205 3648</Link>
                </p>
                <h3 className="widget_title">Connect With Us</h3>
                <div className="social-btn style2">
                  <Link href="https://linkedin.com/company/columbia-developers">
                    <i className="ri-linkedin-fill" />
                  </Link>
                  <Link href="https://instagram.com/">
                    <i className="ri-instagram-line" />
                  </Link>
                  <Link href="https://facebook.com/">
                    <i className="ri-facebook-fill" />
                  </Link>
                  <Link href="https://www.twitter.com/">
                    <i className="ri-twitter-x-line" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © 2026 <Link href="#">Columbia Developers Limited</Link> | By Asterleigh Systems
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <Link href="/pages/innerpage/contact">Terms of Service</Link>
                <Link href="/pages/innerpage/contact">Privacy Policy</Link>
                <Link href="/pages/innerpage/contact">Sitemap</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;