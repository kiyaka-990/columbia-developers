import Link from "next/link";
import Image from "next/image";

const Service = () => {
    // Columbia Red Accent Filter for branding consistency
    const iconStyle = {
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)"
    };

    return (
        <div className="service-area-4 space-top overflow-hidden">
            <div className="container">
                <div className="row gy-30 gx-30">
                    <div className="col-xl-4 col-md-6">
                        <div className="title-area mb-0 text-left content-text-extra-style">
                            <span className="sub-title">
                                <Image 
                                    src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                    alt="Columbia icon" 
                                    width={30} 
                                    height={30} 
                                    style={iconStyle}
                                /> 
                                Expertise & Capability
                            </span>
                            <h2 className="sec-title">33 Years of Engineering Precision</h2>
                            <p>
                                Columbia Developers Limited delivers robust engineering solutions across Civil, Hydraulic, and Structural sectors, backed by a sophisticated supply chain and decades of regional experience.
                            </p>
                        </div>
                    </div>

                    {/* CORE SERVICE 1: CIVIL & HYDRAULIC */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                CIVIL - 01
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-1.png" alt="Civil Engineering" width={60} height={60}/>
                                </div>
                                <h4 className="service-card_title">
                                    <Link href="/pages/innerpage/service-details-civil">Civil & Hydraulic Works</Link>
                                </h4>
                                <p className="service-card_text">Specialized in large-scale drainage, sewerage networks, and reinforced concrete infrastructure projects.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/pages/innerpage/service-details-civil" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CORE SERVICE 2: LOGISTICS */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                TECH - 02
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-2.png" alt="Engineering Logistics" width={60} height={60}/>
                                </div>
                                <h4 className="service-card_title">
                                    <Link href="/pages/innerpage/service-details-logistics">Engineering Logistics</Link>
                                </h4>
                                <p className="service-card_text">Proprietary logistics management ensuring the seamless movement of heavy machinery and industrial materials.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/pages/innerpage/service-details-logistics" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CORE SERVICE 3: SUPPLY CHAIN */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                SUPPLY - 03
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-3.png" alt="Industrial Supply" width={60} height={60} />
                                </div>
                                <h4 className="service-card_title">
                                    <Link href="/pages/innerpage/service-details-supply">Industrial Procurement</Link>
                                </h4>
                                <p className="service-card_text">Global sourcing of certified construction materials and specialized mechanical components for major works.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/pages/innerpage/service-details-supply" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SUPPORT SERVICE 4: PROJECT MANAGEMENT */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                MGMT - 04
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-4.png" alt="Project management" width={60} height={60}/>
                                </div>
                                <h4 className="service-card_title">
                                    <Link href="/pages/innerpage/service-details-pm">Consultancy & Management</Link>
                                </h4>
                                <p className="service-card_text">Expert technical oversight, feasibility studies, and comprehensive project lifecycle management.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/pages/innerpage/service-details-pm" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* SUPPORT SERVICE 5: FACILITY MANAGEMENT */}
                    <div className="col-xl-4 col-md-6">
                        <div className="service-card style3">
                            <div className="service-card-shadow-text">
                                ASSET - 05
                            </div>
                            <div className="service-card_content">
                                <div className="service-card_icon">
                                    <Image src="/main-assets/img/icon/service-icon1-5.png" alt="Asset Management" width={60} height={60}/>
                                </div>
                                <h4 className="service-card_title h5">
                                    <Link href="/pages/innerpage/service-details-maintenance">Structural Maintenance</Link>
                                </h4>
                                <p className="service-card_text">Dedicated post-construction support and long-term asset management for urban infrastructure.</p>
                                <div className="btn-wrap">
                                    <div className="icon-btn"><i className="ri-arrow-right-up-line"></i></div>
                                    <Link href="/pages/innerpage/service-details-maintenance" className="btn">Explore Service <i className="ri-arrow-right-up-line"></i></Link>
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