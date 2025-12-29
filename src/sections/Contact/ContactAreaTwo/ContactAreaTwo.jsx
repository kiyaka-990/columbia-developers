import ContactDropdown from "../../Common/ContactDropdown";
import Image from "next/image";

const ContactAreaTwo = () => {
  return (
    <section className="contact-area-2 space-bottom overflow-hidden">
      <div className="container">
        <div
          className="contact-wrap2 space overflow-hidden shape-mockup-wrap background-image"
          style={{ backgroundImage: "url('/main-assets/img/bg/contact-bg3-1.png')" }}
        >
          {/* Animated background shape for visual engagement */}
          <div
            className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
            data-top="0"
            data-left="0"
            style={{
              backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')",
              top: '0px',
              left: '0px'
            }}
          ></div>

          <div className="row gy-60 justify-content-lg-end justify-content-center">
            <div className="col-xl-7">
              <div className="contact-form-wrap">
                <div className="title-area">
                  <span className="sub-title text-theme">
                    <Image 
                        src="/main-assets/img/icon/section-subtitle-icon.svg" 
                        alt="Columbia Developers Icon" 
                        height={60} 
                        width={60}
                    />
                    Build With Us
                  </span>
                  <h2 className="sec-title">Request a Professional Project Consultation</h2>
                  <p className="mt-n2 mb-4">
                    Partner with Columbia Developers for certified NCA engineering, 
                    civil works, and logistical excellence.
                  </p>
                </div>

                <form
                  action="#" // Recommendation: Replace with your API route or Formspree/EmailJS endpoint
                  method="POST"
                  className="contact-form ajax-contact"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Full Name / Company Name"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Corporate Email Address"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="tel"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number (e.g., +254 7XX...)"
                          required
                        />
                      </div>
                    </div>
                    
                    {/* The ContactDropdown should contain options like: 
                        - Civil Engineering
                        - Residential Development
                        - Road & Bridge Construction
                        - Logistics & Tendering
                    */}
                    <ContactDropdown />

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          id="message"
                          cols="30"
                          rows="3"
                          className="form-control"
                          placeholder="Briefly describe your project requirements (e.g., 'Proposed apartment block in Lavington' or 'Hydraulic infrastructure for Wajir County')..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="form-btn col-12">
                      <button className="btn w-100" type="submit">
                        Submit Inquiry <i className="ri-arrow-right-up-line"></i>
                      </button>
                    </div>
                  </div>
                  <p className="form-messages mb-0 mt-3"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactAreaTwo;