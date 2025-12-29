"use client";

import { Accordion } from "react-bootstrap";
import Image from "next/image";

const FAQ = () => {
  return (
    <div className="faq-area-1 space-bottom overflow-hidden shape-mockup-wrap">
      <div
        className="section-animation-shape1-2 shape-mockup animation-infinite background-image"
        style={{
          backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')",
          bottom: "0px",
        }}
      ></div>
      <div
        className="faq-bg-shape1-1 shape-mockup d-lg-block d-none"
        data-top="0"
        data-left="0"
      >
        <Image src="/main-assets/img/bg/faq-bg-shape1-1.png" alt="shape" width={100} height={100} />
      </div>
      <div className="container">
        <div className="title-area text-center">
          <span className="sub-title">
            <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/> ANSWERS TO YOUR QUESTIONS
          </span> {/* Personalized Subtitle */}
          <h2 className="sec-title">Common Questions About Our Services</h2> {/* Personalized Title */}
        </div>
        <div className="row gy-50 gx-50">
          <div className="col-xl-6">
            <div id="faqAccordion">
              {/* Accordion items */}
              <Accordion
                defaultActiveKey="0"
                className="accordion-area homeTwo-custom-accordion-card"
              >
                {/* FAQ 1: Construction Schedule */}
                <Accordion.Item eventKey="0" className="accordion-card">
                  <Accordion.Header>
                    How do you manage project timelines and schedules?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      We utilize modern project management software (like Gantt charts and Critical Path Method) to plan, track, and coordinate all phases of construction, ensuring timely delivery. We provide weekly progress reports to clients.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                
                {/* FAQ 2: Initial Consultation & Design */}
                <Accordion.Item className="accordion-card" eventKey="1">
                  <Accordion.Header>
                    What happens during the initial consultation and design phase?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      We start by thoroughly understanding your objectives and budget. We then collaborate with architects to produce detailed designs, site assessments, and value engineering proposals before construction begins.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                
                {/* FAQ 3: Local Regulations and Permits */}
                <Accordion.Item className="accordion-card" eventKey="2">
                  <Accordion.Header>
                    Are you familiar with Kenyan building codes and permits?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Yes. As a local firm, we possess in-depth knowledge of all necessary NEMA, County, and relevant government regulations. We manage the entire permitting process to ensure compliance and avoid project delays.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                
                {/* FAQ 4: Safety Protocols */}
                <Accordion.Item className="accordion-card" eventKey="3">
                  <Accordion.Header>
                    What safety standards do you maintain on your construction sites?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Site safety is our top priority. We implement strict health and safety protocols, conduct regular training, and ensure all personnel use appropriate Personal Protective Equipment (PPE) according to best practice standards.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                
                {/* FAQ 5: Payment Terms */}
                <Accordion.Item className="accordion-card" eventKey="4">
                  <Accordion.Header>
                    How are payments structured for your construction projects?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      Payments are typically milestone-based, linked to the completion of specific project phases (e.g., foundation, superstructure, finishing). This ensures transparency and aligns payment with tangible progress on site.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
                
                {/* FAQ 6: Warranty and After-Sales */}
                <Accordion.Item className="accordion-card" eventKey="5">
                  <Accordion.Header>
                    What kind of warranty or support is provided after project completion?{" "}
                  </Accordion.Header>
                  <Accordion.Body>
                    <p className="faq-text">
                      We provide a standard defects liability period, typically 6-12 months, covering any structural or major defects arising from our workmanship. We ensure a smooth handover with all required documentation.
                    </p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          {/* Right side form */}
          <div className="col-xxl-4 col-xl-5">
            <div className="faq-form-wrap">
              <h4 className="faq-form-title">Have a specific question?</h4> {/* Personalized Title */}
              <div className="faq-form">
                <p className="faq-text">
                  If you don&apos;t see your answer above, please fill out the form and a project manager will get back to you promptly.
                </p> {/* Personalized Text */}
                <div className="row gy-15">
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className="form-control style-border3"
                    />
                  </div>
                  <div className="col-12 form-group">
                    <textarea
                      placeholder="Question or Message?"
                      className="form-control style-border3"
                    ></textarea>
                  </div>
                  <div className="col-12 form-group mb-0">
                    <button className="btn-with-icon style2">
                      SEND YOUR INQUIRY
                      <span className="btn-icon">
                        <i className="ri-arrow-right-up-line"></i>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq-thumb1-1 shape-mockup">
        <Image src="/main-assets/img/normal/faq_1-1.png" alt="Construction FAQ Image" width={945} height={670}/>
      </div>
    </div>
  );
};

export default FAQ;