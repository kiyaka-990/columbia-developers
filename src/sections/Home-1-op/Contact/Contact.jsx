import Link from "next/link";
import Image from "next/image";

const Contact = () => {
  return (
    <section
      className="contact-area-1 space bg-title overflow-hidden shape-mockup-wrap background-image"
      id="contact-sec"
      style={{ backgroundImage: "url('/main-assets/img/bg/contact-bg1-1.png')" }}
    >
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite style-gray background-image"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')", top: '0px' }}
      ></div>
      <div className="container">
        <div className="row gy-60 flex-row-reverse justify-content-lg-between justify-content-center align-items-center">
          <div className="col-xl-5">
            <div className="contact-thumb1-1">
              <Image src="/main-assets/img/normal/contact_1-1.png" alt="Construction Contact" width={606} height={450}/> {/* Alt text updated */}
            </div>
          </div>
          <div className="col-xl-7">
            <div className="title-area">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                <span className="text-white">GET IN TOUCH WITH GA&apos;ALS</span> {/* Personalized Subtitle */}
              </span>
              <h2 className="sec-title text-white">
                READY TO START YOUR NEXT PROJECT? LET&apos;S DISCUSS IT. {/* Personalized Title */}
              </h2>
              <p className="text-white">
                Whether you are planning a large commercial build or need expert project management consultation, our team is ready to provide tailored solutions. Contact us to schedule a site visit or consultation.
              </p> {/* Personalized Description */}
            </div>
            <div className="row gy-60">
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-1.svg" alt="img" width={60} height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Corporate Headquarters</h4> {/* Personalized Title */}
                    <p className="contact-grid-text">
                      145 Construction Drive, Suite 100, City Name, CA 90210, USA {/* Personalized Address */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-2.svg" alt="img" width={60} height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Project Line (24/7)</h4> {/* Personalized Title */}
                    <p className="contact-grid-text">
                      <Link href="tel:+18002667878">+1 (800) 266-7878</Link> {/* Personalized Phone Number */}
                    </p>
                    <p className="contact-grid-text">
                      <Link href="tel:+18002667879">+1 (800) 266-7879</Link> {/* Personalized Phone Number */}
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-3.svg" alt="img" width={60} height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Estimate & Inquiries</h4> {/* Personalized Title */}
                    <p className="contact-grid-text">Fast response for all new client inquiries.</p> {/* Personalized Text */}
                    <p className="contact-grid-text">
                      <Link href="mailto:projects@gaalsconstruction.com">
                        projects@gaalsconstruction.com {/* Personalized Email */}
                      </Link>
                    </p>
                </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-4.svg" alt="img" width={60} height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Connect with Our Team</h4> {/* Personalized Title */}
                    <div className="social-btn style5 mt-10">
                      <Link href="https://www.twitter.com/gaalsconstruction">
                        <i className="ri-twitter-x-line"></i>
                      </Link>
                      <Link href="https://instagram.com/gaalsconstruction">
                        <i className="ri-instagram-line"></i>
                      </Link>
                      <Link href="https://facebook.com/gaalsconstruction">
                        <i className="ri-facebook-fill"></i>
                      </Link>
                      <Link href="https://linkedin.com/company/gaalsconstruction">
                        <i className="ri-linkedin-fill"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;