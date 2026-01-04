import Link from "next/link";
import React from "react";
import Image from "next/image";

const ContactTwo = () => {
    // Columbia Specific Contact Information
    const officeLocation = {
        city: "Nairobi, Kenya",
        address: "4th Floor, Standard Building, Standard Street, Nairobi",
    };
    const phoneNumbers = [
        { display: "+254  714 861 896 ", link: "tel:+254  714 861 896" },
        { display: "+254  714 861 896 ", link: "+254  714 861 896" },
    ];
    const emailAddress = "projects@gaalsagenciesltd.co.ke";
    const emailResponseTime = "We aim to respond to all inquiries within 4 business hours.";
    const generalText = "Ready to start your next construction or infrastructure project in Kenya? Reach out to our expert team today to discuss your vision and receive a tailored consultation.";

  return (
    <section
      className="contact-area-1 space bg-title overflow-hidden"
      style={{ backgroundImage: "url('/main-assets/img/bg/contact-bg1-1.png')" }}
    >
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite style-gray"
        data-top="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')" }}
      ></div>
      <div className="container">
        <div className="row gy-60 flex-row-reverse justify-content-lg-between justify-content-center align-items-center">
          <div className="col-xl-5">
            <div className="contact-thumb1-1">
                {/* Visual context for Contact Section: A professional construction image */}
                
              <Image src="/main-assets/img/normal/contact_1-1.png" alt="Columbia Construction Office Image" width={606} height={450}/>
            </div>
            
          </div>
          <div className="col-xl-7">
            <div className="title-area">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/>
                <span className="text-white">GET IN TOUCH</span>
              </span>
              <h2 className="sec-title text-white">
                DISCUSS YOUR KENYAN CONSTRUCTION PROJECT
              </h2>
              <p className="text-white">
                {generalText}
              </p>
            </div>
            <div className="row gy-60">
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-1.svg" alt="icon" width={60} height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Our Main Office</h4>
                    <p className="contact-grid-text">
                      {officeLocation.address}
                    </p>
                  </div>
                </div>
                
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-2.svg" alt="icon" width={60} height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Call Us Anytime</h4>
                    <p className="contact-grid-text">
                      <Link href={phoneNumbers[0].link}>{phoneNumbers[0].display}</Link>
                    </p>
                    <p className="contact-grid-text">
                      <Link href={phoneNumbers[1].link}>{phoneNumbers[1].display}</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-3.svg" alt="icon" width={60} height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Email Us</h4>
                    <p className="contact-grid-text">{emailResponseTime}</p>
                    <p className="contact-grid-text">
                      <Link href={`mailto:${emailAddress}`}>
                        {emailAddress}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="contact-grid-wrap">
                  <div className="contact-grid-icon">
                    <Image src="/main-assets/img/icon/contact-icon1-4.svg" alt="icon" width={60}  height={60}/>
                  </div>
                  <div className="contact-grid-details">
                    <h4 className="contact-grid-title">Follow Ga&apos;als</h4>
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

export default ContactTwo;