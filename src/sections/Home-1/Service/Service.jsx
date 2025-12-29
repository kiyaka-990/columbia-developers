import Link from "next/link";
import Image from "next/image";

const Service = () => {
    // Theme Red Filter (#E31E24) to match Columbia Brand
    const iconFilter = { 
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
    };

    return (
        <div className="service-area-1 space-top overflow-hidden" style={{ backgroundImage: "url('/main-assets/img/bg/service-bg1-1.png')" }} id="service-sec">
            <div className="container">
                <div className="row gy-30 gx-30">
                    <div className="col-xl-4 col-md-6">
                        <div className="title-area mb-0 text-left content-text-extra-style">
                            <span className="sub-title">
                                <Image 
                                    src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                    alt="img" 
                                    width={60} 
                                    height={60} 
                                    style={iconFilter} 
                                />
                                CORE CAPABILITIES
                            </span>
                            <h2 className="sec-title">Expert Engineering & Construction Solutions</h2>
                            <p>Columbia Developers delivers high-impact infrastructure and architectural excellence across East Africa, ensuring quality from blueprint to handover.</p>
                        </div>
                    </div>
                    
                    {/* Service 1: Building Construction */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-shadow-text">BUILDING - 01</div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-1.png" alt="Building icon" width={64} height={64} style={iconFilter} />
                                </div>
                                <h4 className="service-card_title"><Link href="/service-building">Building & General Construction</Link></h4>
                                <p className="service-card_text">Turnkey construction for residential complexes, commercial hubs, and industrial facilities.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/service-building" className="btn">View Details <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Service 2: Roads & Infrastructure */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-shadow-text">ROADS - 02</div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-2.png" alt="Roads icon" width={64} height={64} style={iconFilter} />
                                </div>
                                <h4 className="service-card_title"><Link href="/service-roads">Roads & Civil Infrastructure</Link></h4>
                                <p className="service-card_text">Professional road network development, paving, and large-scale earthworks for urban and rural areas.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/service-roads" className="btn">View Details <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Service 3: Architectural Works */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-shadow-text">DESIGN - 03</div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-3.png" alt="Architectural icon" width={64} height={64} style={iconFilter} />
                                </div>
                                <h4 className="service-card_title"><Link href="/service-architecture">Architectural & Design Works</Link></h4>
                                <p className="service-card_text">Innovative spatial planning and modern architectural designs tailored to functional requirements.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/service-architecture" className="btn">View Details <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Service 4: Water Works */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-shadow-text">WATER - 04</div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-4.png" alt="Water icon" width={64} height={64} style={iconFilter} />
                                </div>
                                <h4 className="service-card_title"><Link href="/service-water">Water Works & Engineering</Link></h4>
                                <p className="service-card_text">Specialized hydraulic engineering, irrigation systems, and sustainable water distribution networks.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/service-water" className="btn">View Details <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Service 5: Project Management */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card">
                            <div className="service-card-shadow-text">PLANNING - 05</div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-5.png" alt="PM icon" width={64} height={64} style={iconFilter} />
                                </div>
                                <h4 className="service-card_title"><Link href="/service-pm">Strategic Project Management</Link></h4>
                                <p className="service-card_text">End-to-end oversight ensuring projects are delivered on time, within budget, and to technical spec.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/service-pm" className="btn">View Details <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;