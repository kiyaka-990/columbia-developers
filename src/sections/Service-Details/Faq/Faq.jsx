"use client";
import { Accordion } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="faq-area-1 space overflow-hidden">
      <div className="container">
        <div className="title-area text-center">
          <h2 className="sec-title2">Inquiry & Technical Clarity</h2>
        </div>
        <div className="row gy-50 gx-50 justify-content-center">
          <div className="col-xl-8">
            <Accordion defaultActiveKey="0" className="accordion-area">
              
              {/* FAQ 1: Regulatory Compliance */}
              <Accordion.Item eventKey="0" className="accordion-card ">
                <Accordion.Header className="accordion-decoration">
                  IS COLUMBIA DEVELOPERS FULLY CERTIFIED FOR LARGE-SCALE PUBLIC WORKS?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq-text">
                    Yes. We hold valid registrations with the National Construction Authority (NCA) and are fully compliant with NEMA and local county regulations. Our 30-year standing in the industry ensures we meet all statutory requirements for major civil and hydraulic infrastructure projects.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* FAQ 2: Hydraulic Specialization */}
              <Accordion.Item className="accordion-card" eventKey="1">
                <Accordion.Header className="accordion-decoration">
                  WHAT ARE YOUR SPECIFIC CAPABILITIES IN HYDRAULIC ENGINEERING?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq-text">
                    We specialize in the design and execution of complex water management systems, including trunk sewerage networks, reinforced concrete drainage systems, and large-scale hydraulic structural works. Our team utilizes advanced engineering models to ensure long-term structural integrity in varied soil conditions.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* FAQ 3: Equipment & Logistics */}
              <Accordion.Item className="accordion-card" eventKey="2">
                <Accordion.Header className="accordion-decoration">
                  DO YOU OWN YOUR CONSTRUCTION MACHINERY AND LOGISTICS FLEET?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq-text">
                    Unlike many developers, Columbia owns a significant portion of its heavy machinery and maintains a dedicated logistics arm. This prevents project delays caused by equipment scarcity and allows us to maintain strict control over our mobilization timelines.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* FAQ 4: Quality Control */}
              <Accordion.Item className="accordion-card" eventKey="3">
                <Accordion.Header className="accordion-decoration">
                  HOW DO YOU MANAGE QUALITY CONTROL (QC) FOR CIVIL WORKS?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq-text">
                    Our QC process involves rigorous materials testing at every stage—from concrete slump tests and soil compaction analysis to structural steel certification. We adhere to BS (British Standards) and KS (Kenya Standards) to guarantee that every kilometer of infrastructure built is durable.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* FAQ 5: Design-Build / EPC */}
              <Accordion.Item className="accordion-card" eventKey="4">
                <Accordion.Header className="accordion-decoration">
                  DO YOU PROVIDE FULL EPC (DESIGN-BUILD) SERVICES?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq-text">
                    Yes. We offer turnkey Engineering, Procurement, and Construction (EPC) services. We take full responsibility from the survey and design phase through to material sourcing and final structural completion, providing clients with a single point of accountability.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
              {/* FAQ 6: Safety & HSE */}
              <Accordion.Item className="accordion-card" eventKey="5">
                <Accordion.Header className="accordion-decoration">
                  WHAT IS COLUMBIA’S APPROACH TO SITE SAFETY AND HSE?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  <p className="faq-text">
                    We maintain a Zero-Harm policy. All site operations are governed by a project-specific HSE plan. This includes mandatory PPE, regular safety drills, and environmental mitigation strategies to ensure our footprint remains sustainable and our workforce stays protected.
                  </p>
                </Accordion.Body>
              </Accordion.Item>
              
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;