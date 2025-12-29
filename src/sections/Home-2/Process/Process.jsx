import Image from "next/image";

const Process = () => {
    return (
        <section className="process-area-2 space overflow-hidden shape-mockup-wrap">
            {/* Background and decorative shapes (kept for design integrity) */}
            <div className="section-animation-shape1-2 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}>
            </div>
            <div className="process_shape_2-1 shape-mockup jump" style={{ top: '0%', left: '3%' }}>
                {/* NOTE: Ensure this Image component has correct width/height */}
                <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="Process Shape" width={90} height={331}/> 
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-center gy-40">
                    <div className="col-lg-6">
                        <div className="title-area text-left content-text-extra-style">
                            <span className="sub-title">
                                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/>
                                Our Methodology
                            </span>
                            <h2 className="sec-title">The Ga&apos;als Agencies Process for Delivery</h2>
                        </div>
                        <div className="process-thumb2-1">
                            {/* Consider updating this image to one that better represents construction/logistics */}
                            <Image src="/main-assets/img/normal/process-thumb2-1.png" alt="Ga'als Project Timeline Visualization" width={606} height={450}/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="process-grid-list">
                            <div className="process-grid-list-bg-text">
                                STEP
                            </div>
                            
                            {/* Step 1: Client Engagement & Scoping */}
                            <div className="process-grid">
                                <div className="process-grid-number">01</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">Initial Consultation & Planning </h3>
                                    <p className="process-grid-text">We define project requirements, conduct site/route assessment, and confirm material needs and budget.</p>
                                </div>
                            </div>
                            
                            {/* Step 2: Resource Acquisition & Logistics */}
                            <div className="process-grid">
                                <div className="process-grid-number">02</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">Procurement & Supply Chain Setup </h3>
                                    <p className="process-grid-text">Sourcing quality materials and mobilizing personnel and specialized logistics assets for timely delivery.</p>
                                </div>
                            </div>
                            
                            {/* Step 3: Execution & Construction/Transport */}
                            <div className="process-grid">
                                <div className="process-grid-number">03</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">Project Execution & Monitoring </h3>
                                    <p className="process-grid-text">Deployment of teams, strict quality control, and real-time tracking for efficient project milestones and delivery.</p>
                                </div>
                            </div>
                            
                            {/* Step 4: Final Handover & Support */}
                            <div className="process-grid">
                                <div className="process-grid-number">04</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">Quality Assurance & Handover </h3>
                                    <p className="process-grid-text">Comprehensive final inspection, client sign-off, delivery of documentation, and post-project support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Process;