'use client';
import Link from "next/link";
import CountUp from "react-countup";
import Image from "next/image";

const About = () => {
    // Adjusting the counter value to reflect relevant construction experience (e.g., number of completed projects or years of experience relevant to the region)
    const yearsOfExperience = 7; // Ga'als mentioned 7 years of expertise in the previous service component description
    const projectsCompleted = 45; // Placeholder for completed projects
    
    return (
        <div className="about-area-2 space overflow-hidden shape-mockup-wrap" id="about-sec">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" data-top="0" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')", top: '0px' }}>
            </div>
            <div className="section-animation-shape1-2 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", bottom: '0px' }}>
            </div>
            <div className="container">
                <div className="row gx-60 align-items-center flex-row-reverse">
                    <div className="col-xl-6">
                        <div className="about-thumb2 mb-60 mb-xl-0">
                            <div className="about-img-1">
                                <Image src="/main-assets/img/normal/about_2-1.png" alt="Construction Site View" width={550} height={720}/>
                            </div>
                            <div className="about-counter-wrap style2 jump-reverse">
                                <div className="about-counter-wrap-bg"><Image src="/main-assets/img/normal/about_shape_2-2.png" alt="Shape"  width={550} height={720}/></div>
                                <div className="about-counter-icon"><Image src="/main-assets/img/hero/hero_experience_wrap_icon_1_1.png" alt="Icon" width={60} height={60}/></div>
                                <h3 className="about-counter-number"><span className="counter-number"><CountUp start={0} end={projectsCompleted} /></span>+</h3>
                                <p className="about-counter-text">Projects Completed</p> {/* Updated Text */}
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6">
                        <div className="title-area mb-25">
                            <span className="sub-title"><Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/>ABOUT GA&apos;ALS CONSTRUCTION</span> {/* Personalized Subtitle */}
                            <h2 className="sec-title">BUILDING KENYA&apos;S FUTURE WITH INTEGRITY AND SKILL</h2> {/* Personalized Title */}
                            <p className="sec-text">
                            Ga&apos;als is a leading construction firm in Kenya, dedicated to delivering high-quality, sustainable building projects. With over **{yearsOfExperience} years** of local expertise, we guarantee excellence from foundation to finish.
                            </p> {/* Personalized Description */}
                        </div>
                        <div className="checklist mb-35">
                            <ul>
                                <li><Image src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="icon" width={60} height={60} />End-to-End Solutions: From Civil Engineering to Project Management
                                </li>
                                <li><Image src="/main-assets/img/icon/about-checklsit-icon1-1.svg" alt="icon" width={60} height={60} />Utilizing Modern VDC (Virtual Design & Construction) Techniques</li> {/* Personalized Checklist */}
                            </ul>
                        </div>
                        
                        {/* Mission */}
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <Image src="/main-assets/img/icon/about-grid-icon1-1.svg" alt="Mission Icon" width={60} height={60}/>
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">Our Mission</h4>
                                <p className="text">To deliver exceptional construction value through quality craftsmanship, strict adherence to timelines, and sustainable building practices.</p> {/* Personalized Mission */}
                            </div>
                        </div>
                        
                        {/* Vision */}
                        <div className="about-grid-wrap">
                            <div className="icon">
                                <Image src="/main-assets/img/icon/about-grid-icon1-2.svg" alt="Vision Icon" width={60} height={60}/>
                            </div>
                            <div className="about-grid-details">
                                <h4 className="title">Our Vision</h4>
                                <p className="text">To be recognized as the premier, most reliable construction and engineering company in East Africa, setting new standards for project delivery.</p> {/* Personalized Vision */}
                            </div>
                        </div>
                        
                        <div className="btn-group mt-60">
                            <Link href="/pages/innerpage/about" className="btn style3">Meet Our Team <i className="ri-arrow-right-up-line"></i></Link> {/* Updated Button Text */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;