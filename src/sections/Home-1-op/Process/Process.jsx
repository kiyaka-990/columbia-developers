import Link from "next/link";
import Image from "next/image";

const Process = () => {
  return (
    <section
      className="process-area-1 space-top bg-attachment process-bg-half"
      data-overlay="title"
      data-opacity="8"
      style={{ backgroundImage: "url('/main-assets/img/bg/process-bg1-1.png')" }}
    >
      <div className="process_shape_1-1 movingX shape-mockup d-lg-block d-none"></div>
      <div className="process_shape_1-2 moving shape-mockup d-lg-block d-none"></div>
      <div
        className="process_shape_1-3 shape-mockup jump-reverse d-xl-block d-none"
        data-bottom="-50%"
        data-right="0"
      >
        <Image src="/main-assets/img/shape/sec-bg-shape1.png" alt="img" width={90} height={331}/>
      </div>
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-4 col-md-6">
            <div className="title-area text-md-start text-center">
              <span className="sub-title text-white">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60} />
                OUR WORK METHODOLOGY
              </span> {/* Personalized Subtitle */}
              <h2 className="sec-title text-white">
                A Proven Process For Project Success
              </h2> {/* Personalized Title */}
            </div>
          </div>
          <div className="col-md-auto">
            <div className="sec-btn text-center">
              <Link
                href="https://www.youtube.com/watch?v=Mp8IXI1kzvQ"
                className="popup-video play-btn-wrap"
              >
                See Our Work in Action
                <span className="play-btn style2">
                  <i className="ri-play-fill"></i>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="process-card-wrap">
          <div className="row gy-30 gx-30">
            {/* Step 1: Initial Consultation and Scope Definition */}
            <div className="col-xl-3 col-md-6">
              <div className="process-card">
                <div className="process-card-number">
                  <span> 01 </span>
                  PHASE
                </div>
                <h4 className="process-card-title">
                  Consultation and Conceptual Design
                </h4> {/* Personalized Title */}
                <p className="process-card-text">
                  We begin by thoroughly understanding your vision, budget, and technical requirements to define the project scope.
                </p> {/* Personalized Description */}
              </div>
            </div>
            
            {/* Step 2: Detailed Planning and Engineering */}
            <div className="col-xl-3 col-md-6">
              <div className="process-card">
                <div className="process-card-number">
                  <span> 02 </span>
                  PHASE
                </div>
                <h4 className="process-card-title">
                  Project Development and Permitting
                </h4> {/* Personalized Title */}
                <p className="process-card-text">
                  Full blueprints, structural engineering, and procurement planning are finalized, securing all necessary permits.
                </p> {/* Personalized Description */}
              </div>
            </div>
            
            {/* Step 3: Construction and Site Management */}
            <div className="col-xl-3 col-md-6">
              <div className="process-card">
                <div className="process-card-number">
                  <span> 03 </span>
                  PHASE
                </div>
                <h4 className="process-card-title">
                  Execution, Safety, and Quality Control
                </h4> {/* Personalized Title */}
                <p className="process-card-text">
                  Construction starts with strict safety protocols and continuous quality assurance checks on all trades.
                </p> {/* Personalized Description */}
              </div>
            </div>
            
            {/* Step 4: Final Handover and Support */}
            <div className="col-xl-3 col-md-6">
              <div className="process-card">
                <div className="process-card-number">
                  <span> 04 </span>
                  PHASE
                </div>
                <h4 className="process-card-title">
                  Final Inspection and Project Handover
                </h4> {/* Personalized Title */}
                <p className="process-card-text">
                  The finished project is inspected, commissioned, and formally handed over with full documentation and support.
                </p> {/* Personalized Description */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;