/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

const WhyChoose = () => {
    // Theme Red Filter (#E31E24) for Columbia Developers
    const iconFilter = { 
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
    };

    return (
        <div className="space-top text-center overflow-hidden shape-mockup-wrap">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" data-bottom="0" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}>
            </div>
            <div className="container">
                <div className="title-area text-center">
                    <div className="shadow-title">COLUMBIA</div>
                    <span className="sub-title">
                        <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={20} height={20} style={iconFilter}/>
                        WHY CHOOSE US
                    </span>
                    <h2 className="sec-title">Engineering Excellence & Reliability</h2>
                </div>
                <div className="row gy-50 align-items-center">
                    <div className="col-xl-4 col-md-6">
                        <div className="wcu-card-wrap left-align">
                            <div className="wcu-card">
                                <div className="wcu-card-icon">
                                    <Image 
                                        src="/main-assets/img/icon/why-icon1-1.svg" 
                                        alt="Modern Engineering" 
                                        width={48} 
                                        height={48} 
                                        style={iconFilter}
                                    />
                                </div>
                                <div className="wcu-card-details">
                                    <h4 className="wcu-card-title">Modern Engineering</h4>
                                    <p className="wcu-card-text">We utilize the latest construction technologies to ensure structural integrity and efficiency.</p>
                                </div>
                            </div>
                            <div className="wcu-card">
                                <div className="wcu-card-icon">
                                    <Image 
                                        src="/main-assets/img/icon/why-icon1-2.svg" 
                                        alt="Strategic Planning" 
                                        width={48} 
                                        height={48} 
                                        style={iconFilter}
                                    />
                                </div>
                                <div className="wcu-card-details">
                                    <h4 className="wcu-card-title">Strategic Planning</h4>
                                    <p className="wcu-card-text">Every project is backed by rigorous feasibility studies and precise project management.</p>
                                </div>
                            </div>
                            <div className="wcu-card">
                                <div className="wcu-card-icon">
                                    <Image 
                                        src="/main-assets/img/icon/why-icon1-3.svg" 
                                        alt="Quality Assurance" 
                                        width={48} 
                                        height={48} 
                                        style={iconFilter}
                                    />
                                </div>
                                <div className="wcu-card-details">
                                    <h4 className="wcu-card-title">Quality Assurance</h4>
                                    <p className="wcu-card-text">We adhere to international standards for safety and material durability on every site.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 order-xl-3">
                        <div className="wcu-card-wrap right-align">
                            <div className="wcu-card">
                                <div className="wcu-card-icon">
                                    <Image 
                                        src="/main-assets/img/icon/why-icon1-4.svg" 
                                        alt="Proven Track Record" 
                                        width={48} 
                                        height={48} 
                                        style={iconFilter}
                                    />
                                </div>
                                <div className="wcu-card-details">
                                    <h4 className="wcu-card-title">Proven Track Record</h4>
                                    <p className="wcu-card-text">Successfully delivering complex road, water, and building projects across the region.</p>
                                </div>
                            </div>
                            <div className="wcu-card">
                                <div className="wcu-card-icon">
                                    <Image 
                                        src="/main-assets/img/icon/why-icon1-5.svg" 
                                        alt="Expert Team" 
                                        width={48} 
                                        height={48} 
                                        style={iconFilter}
                                    />
                                </div>
                                <div className="wcu-card-details">
                                    <h4 className="wcu-card-title">Expert Team</h4>
                                    <p className="wcu-card-text">Our certified engineers and architects bring decades of combined industry experience.</p>
                                </div>
                            </div>
                            <div className="wcu-card">
                                <div className="wcu-card-icon">
                                    <Image 
                                        src="/main-assets/img/icon/why-icon1-6.svg" 
                                        alt="Cost Optimization" 
                                        width={48} 
                                        height={48} 
                                        style={iconFilter}
                                    />
                                </div>
                                <div className="wcu-card-details">
                                    <h4 className="wcu-card-title">Cost Optimization</h4>
                                    <p className="wcu-card-text">We maximize project value through smart sourcing and efficient resource allocation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="wcu-thumb1-1">
                            <Image src="/main-assets/img/normal/why_1-1.png" alt="Columbia Engineering" width={328} height={561}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChoose;