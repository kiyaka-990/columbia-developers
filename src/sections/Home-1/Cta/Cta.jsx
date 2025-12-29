'use client';
import Image from "next/image"; 
import ContactDropdownTwo from "../../Common/ContactDropdown/ContactDropdownTwo";

const Cta = () => {
    
    // Theme Red Filter for icons/images
    const iconFilter = { 
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
    };

    return (
        <div className="cta-area-1">
            <div className="container">
                <div className="row gx-0 align-items-center">
                    <div className="col-lg-7">
                        <div className="cta-wrap-1 position-relative shape-mockup-wrap">
                            <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" 
                                 data-top="0" 
                                 data-left="0" 
                                 style={{ 
                                     backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')", 
                                     top: '0px', 
                                     left: '0px',
                                     opacity: '0.3' // Softens the shape to match the industrial theme
                                 }}>
                            </div>
                            <div className="title-area mb-40 cta-text-align">
                                <span className="sub-title">
                                    {/* Applied iconFilter so the subtitle icon is now Red instead of yellow */}
                                    <Image 
                                        src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                        alt="img" 
                                        width={60} 
                                        height={60} 
                                        style={iconFilter} 
                                    />
                                    GET FREE QUOTE
                                </span>
                                <h3 className="sec-title">Have a project in mind?</h3>
                            </div>
                            <form action="#" className="cta-contact-form ajax-contact">
                                <div className="row gy-15">
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="text" className="form-control" name="name" id="name" placeholder="Full Name" />
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input type="email" className="form-control" name="email" id="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <ContactDropdownTwo />
                                    <div className="form-btn col-12">
                                        <button type="submit" className="btn w-100">
                                            SUBMIT NOW
                                            {/* Button arrow now correctly uses the theme red */}
                                            <i className="ri-arrow-right-up-line" style={{ color: 'inherit' }}></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="cta-thumb1-1">
                            <Image src="/main-assets/img/normal/cta-thumb1-1.png" alt="img" width={680} height={506} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cta;