"use client";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const BlogThree = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        dots: false,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <section className="blog-area-1 space shape-mockup-wrap">
            <div
                className="section-animation-shape1-1 shape-mockup animation-infinite background-image"
                style={{
                    backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')",
                    top: "0px",
                }}
            ></div>
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="title-area blog-area-content-text-extra-style">
                            <span className="sub-title">
                                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                                COLUMBIA DEVELOPERS INSIGHTS
                            </span> {/* Personalized Subtitle */}
                            <h2 className="sec-title">Industry news and building tips</h2> {/* Personalized Title */}
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="sec-btn">
                            <Link href="/pages/innerpage/blog" className="btn style-border">
                                View All Articles <i className="ri-arrow-right-up-line"></i> {/* Personalized Button Text */}
                            </Link>
                        </div>
                    </div>
                </div>
                <Slider
                    {...settings}
                    className="row global-carousel blog-slider slider-shadow slick-initialized slick-slider"
                >
                    {/* --- Blog Card 1: Focus on Safety --- */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_1.png" alt="blog image" width={391} height={280}/>
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog">
                                        <span>25</span>NOV
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Columbia Developers Team</Link> {/* Personalized Author */}
                                    <Link href="/pages/innerpage/blog">Safety</Link> {/* Personalized Tag */}
                                </div>
                                <h3 className="blog-title">
                                    <Link href="/pages/innerpage/blog-details">
                                        The Top 5 Critical Safety Protocols for Construction Sites
                                    </Link> {/* Personalized Title */}
                                </h3>
                                <p className="blog-text">
                                    Implementing strict safety measures is paramount. Learn about the five non-negotiable protocols that keep our teams and sites compliant and secure every day.
                                </p> {/* Personalized Excerpt */}
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- Blog Card 2: Focus on Materials/Sustainability --- */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_2.png" alt="blog image" width={391} height={280}/>
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog">
                                        <span>10</span>NOV
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By David K.</Link>
                                    <Link href="/pages/innerpage/blog">Materials</Link> {/* Personalized Tag */}
                                </div>
                                <h3 className="blog-title">
                                    <Link href="/pages/innerpage/blog-details">
                                        Sustainable Building Materials: Reducing Your Project&apos;s Footprint
                                    </Link> {/* Personalized Title */}
                                </h3>
                                <p className="blog-text">
                                    Discover the latest advancements in eco-friendly construction materials and how we integrate them to deliver sustainable, long-lasting, and energy-efficient structures.
                                </p> {/* Personalized Excerpt */}
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- Blog Card 3: Focus on Project Management/Efficiency --- */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_3.png" alt="blog image" width={391} height={280} />
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog">
                                        <span>01</span>NOV
                                    </Link>
                                    <div className="year">2025</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Amelia S.</Link>
                                    <Link href="/pages/innerpage/blog">Management</Link> {/* Personalized Tag */}
                                </div>
                                <h3 className="blog-title">
                                    <Link href="/pages/innerpage/blog-details">
                                        How to Optimize Construction Schedules and Avoid Delays
                                    </Link> {/* Personalized Title */}
                                </h3>
                                <p className="blog-text">
                                    Effective schedule management is vital for profitability. We detail proven techniques for forecasting risks and keeping complex construction projects on time and on budget.
                                </p> {/* Personalized Excerpt */}
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- Blog Card 4: Focus on Technology/BIM --- */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_1.png" alt="blog image" width={391} height={280}/>
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog">
                                        <span>15</span>OCT
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Alex M.</Link>
                                    <Link href="/pages/innerpage/blog">Technology</Link> {/* Personalized Tag */}
                                </div>
                                <h3 className="blog-title">
                                    <Link href="/pages/innerpage/blog-details">
                                        Leveraging BIM for Better Collaboration and fewer Construction Errors
                                    </Link> {/* Personalized Title */}
                                </h3>
                                <p className="blog-text">
                                    Building Information Modeling (BIM) is transforming design and construction. See how Ga&apos;als uses digital models to improve precision and reduce costly site mistakes.
                                </p> {/* Personalized Excerpt */}
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- Blog Card 5: Focus on Residential/Renovation --- */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_2.png" alt="blog image" width={391} height={280}/>
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog">
                                        <span>01</span>OCT
                                    </Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Columbia Developers Team</Link>
                                    <Link href="/pages/innerpage/blog">Residential</Link> {/* Personalized Tag */}
                                </div>
                                <h3 className="blog-title">
                                    <Link href="/pages/innerpage/blog-details">
                                        The Key Stages of a Large-Scale Commercial Renovation Project
                                    </Link> {/* Personalized Title */}
                                </h3>
                                <p className="blog-text">
                                    Renovating commercial spaces requires careful planning. We outline the essential phases, from demolition and structural adjustments to final finishing and inspections.
                                </p> {/* Personalized Excerpt */}
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* --- Blog Card 6: Focus on Client Relationship/Tips --- */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_3.png" alt="blog image" width={391} height={280} />
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog">
                                        <span>15</span>SEP
                                    </Link>
                                    <div className="year">2025</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Robert L.</Link>
                                    <Link href="/pages/innerpage/blog">Client Advice</Link> {/* Personalized Tag */}
                                    </div>
                                <h3 className="blog-title">
                                    <Link href="/pages/innerpage/blog-details">
                                        What to Ask Your Contractor Before Signing a Construction Contract
                                    </Link> {/* Personalized Title */}
                                </h3>
                                <p className="blog-text">
                                    Knowing the right questions ensures clarity and transparency. Here is a checklist of critical questions every client should ask before starting work on site.
                                </p> {/* Personalized Excerpt */}
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read More <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default BlogThree;