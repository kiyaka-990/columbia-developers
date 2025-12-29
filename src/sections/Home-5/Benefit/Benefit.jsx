import Image from "next/image";

const Benefit = () => {
    // Columbia Red Filter (#E31E24)
    const iconFilter = { 
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
    };

    return (
        <div className="benefit-area-5 space overflow-hidden shape-mockup-wrap">
            <div className="benefit-bg-shape5-1 shape-mockup" style={{ bottom: '0px', right: '0px' }}>
                <img src="/main-assets/img/bg/benefit-bg-shape5-1.png" alt="img" />
            </div>
            <div className="container">
                <div className="row gx-40 align-items-center">
                    <div className="col-xl-6">
                        <div className="benefit-thumb5 mb-40 mb-xl-0">
                            <div className="benefit-img-1">
                                <Image src="/main-assets/img/normal/benefit-thumb5-1.png" alt="Columbia Construction Excellence" width={600} height={500} />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="benefit-wrap5">
                            <div className="title-area mb-40">
                                <span className="sub-title text-theme">
                                    WHY COLUMBIA <i className="ri-arrow-right-down-line"></i>
                                </span>
                                <h2 className="sec-title">The Gold Standard in Modern Infrastructure</h2>
                                <p className="sec-text">
                                    We combine technical precision with innovative project management to deliver infrastructure that stands the test of time. From complex road networks to sustainable water systems, we build with the future in mind.
                                </p>
                                <h6 className="mt-20 fw-normal mb-30">Key advantages of partnering with us:</h6>
                                <div className="row gy-4">
                                    <div className="col-md-6">
                                        <div className="single-benefit-wrap">
                                            <div className="single-benefit-icon">
                                                <img src="/main-assets/img/icon/benefit-icon1-1.svg" alt="Engineers" style={iconFilter} />
                                            </div>
                                            <h4 className="single-benefit-title">Certified Civil Engineers</h4>
                                        </div>
                                        <div className="single-benefit-wrap">
                                            <div className="single-benefit-icon">
                                                <img src="/main-assets/img/icon/benefit-icon1-2.svg" alt="Service" style={iconFilter} />
                                            </div>
                                            <h4 className="single-benefit-title">Turnkey Solutions</h4>
                                        </div>
                                        <div className="single-benefit-wrap">
                                            <div className="single-benefit-icon">
                                                <img src="/main-assets/img/icon/benefit-icon1-3.svg" alt="Experience" style={iconFilter} />
                                            </div>
                                            <h4 className="single-benefit-title">30+ Years Experience</h4>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="single-benefit-wrap">
                                            <div className="single-benefit-icon">
                                                <img src="/main-assets/img/icon/benefit-icon1-4.svg" alt="Award" style={iconFilter} />
                                            </div>
                                            <h4 className="single-benefit-title">Quality Benchmarking</h4>
                                        </div>
                                        <div className="single-benefit-wrap">
                                            <div className="single-benefit-icon">
                                                <img src="/main-assets/img/icon/benefit-icon1-5.svg" alt="Financing" style={iconFilter} />
                                            </div>
                                            <h4 className="single-benefit-title">Resource Optimization</h4>
                                        </div>
                                        <div className="single-benefit-wrap">
                                            <div className="single-benefit-icon">
                                                <img src="/main-assets/img/icon/benefit-icon1-6.svg" alt="Warranty" style={iconFilter} />
                                            </div>
                                            <h4 className="single-benefit-title">Structural Warranty</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Benefit;