import Image from "next/image"; 

const ProcessTwo = () => {
  return (
    <section className="process-area-2 space overflow-hidden">
      <div
        className="section-animation-shape1-2 shape-mockup animation-infinite"
        data-bottom="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')" }}
      ></div>
      <div
        className="process_shape_2-1 shape-mockup jump"
        data-top="0%"
        data-left="3%"
      >
        <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="Decorative Shape" width={90} height={331}/>
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center gy-40">
          <div className="col-lg-6">
            <div className="title-area text-md-start text-center">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="Icon" width={60} height={60} />
                Our Operational Workflow
              </span>
              <h2 className="sec-title">EXECUTION PROCESS AT GA&apos;ALS AGENCIES</h2>
            </div>
            <div className="process-thumb2-1">
              {/* NOTE: Consider updating this image to one that represents construction or logistics */}
              <Image src="/main-assets/img/normal/process-thumb2-1.png" alt="Ga'als Project Visualization" width={606} height={450}/>
            </div>
            
          </div>
          <div className="col-lg-6">
            <div className="process-grid-list">
              <div className="process-grid-list-bg-text">STEP</div>
              
              {/* Step 1: Consultation & Scoping */}
              <div className="process-grid">
                <div className="process-grid-number">01</div>
                <div className="process-grid-details">
                  <h3 className="process-grid-title">CLIENT NEEDS ASSESSMENT</h3>
                  <p className="process-grid-text">
                    We begin with detailed discussions to define project scope, technical specifications, budgetary constraints, and logistical routes.
                  </p>
                </div>
              </div>
              
              {/* Step 2: Strategic Planning & Resource Mobilization (Supply/Logistics) */}
              <div className="process-grid">
                <div className="process-grid-number">02</div>
                <div className="process-grid-details">
                  <h3 className="process-grid-title">SOURCING & LOGISTICS PLANNING</h3>
                  <p className="process-grid-text">
                    Procurement of certified materials, detailed scheduling, securing necessary permits, and assigning dedicated transport teams/equipment.
                  </p>
                </div>
              </div>
              
              {/* Step 3: Execution & Oversight (Construction/Delivery) */}
              <div className="process-grid">
                <div className="process-grid-number">03</div>
                <div className="process-grid-details">
                  <h3 className="process-grid-title">EFFICIENT FIELD EXECUTION</h3>
                  <p className="process-grid-text">
                    Implementing the construction plan or executing the transport route with real-time monitoring, quality checks, and safety assurance.
                  </p>
                </div>
              </div>
              
              {/* Step 4: Final Handover & Support */}
              <div className="process-grid">
                <div className="process-grid-number">04</div>
                <div className="process-grid-details">
                  <h3 className="process-grid-title">FINAL DELIVERY & COMPLETION</h3>
                  <p className="process-grid-text">
                    Final inspection and sign-off, project handover (or cargo delivery), and ensuring all post-completion requirements are met.
                  </p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTwo;