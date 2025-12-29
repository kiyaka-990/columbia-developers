import Image from "next/image";

const Process = () => {
    // Columbia Red Accent Filter for icons
    const iconStyle = {
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)"
    };

    return (
        <section className="process-area-2 space overflow-hidden">
            <div className="container">
                <div className="row justify-content-between align-items-center gy-40">
                    <div className="col-lg-6">
                        <div className="title-area text-left content-text-extra-style">
                            <span className="sub-title">
                                <Image 
                                    src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                    alt="Columbia Icon" 
                                    width={30} 
                                    height={30} 
                                    style={iconStyle}
                                />
                                THE COLUMBIA ADVANTAGE
                            </span>
                            <h2 className="sec-title">Engineering Excellence Since 1991</h2>
                        </div>
                        <div className="process-thumb2-1">
                            {/* Professional engineering/construction site thumbnail */}
                            <Image 
                                src="/main-assets/img/normal/process-thumb2-1.png" 
                                alt="Columbia Developers Construction Site" 
                                width={606} 
                                height={450}
                                className="rounded-20"
                            />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="process-grid-list style2">
                            <div className="process-grid-list-bg-text">
                                LEGACY
                            </div>
                            
                            {/* Advantage 1: Experience */}
                            <div className="process-grid">
                                <div className="process-grid-number">01</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">Over 3 Decades of Experience</h3>
                                    <p className="process-grid-text">With a track record stretching back to 1991, we bring unparalleled stability and localized engineering wisdom to every site.</p>
                                </div>
                            </div>

                            {/* Advantage 2: Full Spectrum EPC */}
                            <div className="process-grid">
                                <div className="process-grid-number">02</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">Total Project Accountability</h3>
                                    <p className="process-grid-text">From initial hydraulic design to final structural completion, we manage the entire EPC lifecycle to ensure zero communication gaps.</p>
                                </div>
                            </div>

                            {/* Advantage 3: Regulatory Mastery */}
                            <div className="process-grid">
                                <div className="process-grid-number">03</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">Strict Compliance & Safety</h3>
                                    <p className="process-grid-text">We maintain 100% adherence to NEMA, NCA, and international HSE standards, protecting both our workers and your investment.</p>
                                </div>
                            </div>

                            {/* Advantage 4: Resource Reliability */}
                            <div className="process-grid">
                                <div className="process-grid-number">04</div>
                                <div className="process-grid-details">
                                    <h3 className="process-grid-title">In-House Technical Capacity</h3>
                                    <p className="process-grid-text">Our ownership of specialized equipment and a dedicated logistics arm means your project timeline is never at the mercy of third-party rentals.</p>
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