import Image from "next/image";

const Testimonial = () => {
    const LOGO_SIZE = 60;
    const PROFILE_SIZE = 70;

    // Red accent filter for Columbia branding
    const iconStyle = {
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)"
    };

    return (
        <div className="testimonial-area-3 overflow-hidden">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-7">
                        <div className="title-area text-lg-start text-left">
                            <span className="sub-title">
                                <Image 
                                    src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                    alt="icon" 
                                    width={30} 
                                    height={30} 
                                    style={iconStyle}
                                /> 
                                Proven Track Record
                            </span>
                            <h2 className="sec-title">What our partners say about our engineering standards</h2>
                        </div>
                    </div>
                    <div className="col-lg-auto">
                        <div className="sec-btn btn-wrap">
                            <div className="client-group-thumb">
                                <Image src="/main-assets/img/normal/client_group_1-2.png" alt="Columbia Clients" width={175} height={61}/>
                            </div>
                            <div className="testi-counter-wrap">
                                <h3 className="testi-counter-number"><span className="counter-number">300</span>+</h3>
                                <p className="testi-counter-text">Infrastructures Built</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row global-carousel testi-slider3 slider-shadow" data-slide-show="3" data-lg-slide-show="2" data-dots="true" data-xl-dots="true" data-ml-dots="true" data-center-mode="true" data-xl-center-mode="true" data-ml-center-mode="true">
                    
                    {/* Testimonial 1: Technical & Engineering Focus */}
                    <div className="col-lg-4">
                        <div className="testi-card style3">
                            <div className="testi-card-thumb">
                                <Image src="/main-assets/img/testimonial/testi_2_2.png" alt="James Murimi" width={PROFILE_SIZE} height={PROFILE_SIZE}/>
                                <div className="media-body">
                                    <h4 className="testi-card_title">Engineering Precision</h4>
                                    <div className="testi-card_review">
                                        <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-card_content">
                                <p className="testi-card_text">&quot;Columbia Developers handled our hydraulic structural works with extreme precision. Their 30+ years of experience in the Kenyan landscape was evident in how they navigated soil and drainage complexities.&quot;</p>
                                <div className="testi-card-profile">
                                    <h4 className="testi-profile-title">Eng. James Murimi</h4>
                                    <span className="testi-profile-desig">/ Senior Consultant, Infrastructure Kenya</span>
                                </div>
                            </div>
                            <div className="quote-icon">
                                <Image src="/main-assets/img/icon/quote3.svg" alt="Quote icon" width={LOGO_SIZE} height={LOGO_SIZE} style={iconStyle}/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 2: Procurement & Supply Chain Focus */}
                    <div className="col-xl-4 col-md-6">
                        <div className="testi-card style3">
                            <div className="testi-card-thumb">
                                <Image src="/main-assets/img/testimonial/testi_2_3.png" alt="Fatuma Hassan" width={PROFILE_SIZE} height={PROFILE_SIZE} />
                                <div className="media-body">
                                    <h4 className="testi-card_title">Reliable Supply Chain</h4>
                                    <div className="testi-card_review">
                                        <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-card_content">
                                <p className="testi-card_text">&quot;Their procurement wing is exceptional. We received certified structural steel and specialized machinery ahead of schedule, ensuring our industrial site was operational without a single day of delay.&quot;</p>
                                <div className="testi-card-profile">
                                    <h4 className="testi-profile-title">Fatuma Hassan</h4>
                                    <span className="testi-profile-desig">/ Procurement Lead, East African Industrial Park</span>
                                </div>
                            </div>
                            <div className="quote-icon">
                                <Image src="/main-assets/img/icon/quote3.svg" alt="Quote icon" width={LOGO_SIZE} height={LOGO_SIZE} style={iconStyle}/>
                            </div>
                        </div>
                    </div>
                    
                    {/* Testimonial 3: Project Management & Safety */}
                    <div className="col-xl-4 col-md-6">
                        <div className="testi-card style3">
                            <div className="testi-card-thumb">
                                <Image src="/main-assets/img/testimonial/testi_2_1.png" alt="Paul Omondi" width={PROFILE_SIZE} height={PROFILE_SIZE}/>
                                <div className="media-body">
                                    <h4 className="testi-card_title">Safety & Compliance</h4>
                                    <div className="testi-card_review">
                                        <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="testi-card_content">
                                <p className="testi-card_text">&quot;In a market where shortcuts are common, Columbia stands out for their adherence to NEMA and international safety codes. Their project management team kept us informed at every milestone.&quot;</p>
                                <div className="testi-card-profile">
                                    <h4 className="testi-profile-title">Paul Omondi</h4>
                                    <span className="testi-profile-desig">/ Project Manager, Urban Development Authority</span>
                                </div>
                            </div>
                            <div className="quote-icon">
                                <Image src="/main-assets/img/icon/quote3.svg" alt="Quote icon" width={LOGO_SIZE} height={LOGO_SIZE} style={iconStyle}/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Testimonial;