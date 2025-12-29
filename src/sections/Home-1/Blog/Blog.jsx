'use client';
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const Blog = () => {
    
    const iconFilter = { 
        // Targets Columbia Red (#E31E24)
        filter: "invert(18%) sepia(85%) saturate(6361%) hue-rotate(354deg) brightness(91%) contrast(100%)" 
    };

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
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <section className="blog-area-1 space shape-mockup-wrap" id="blog-sec">
            <div className="section-animation-shape1-1 shape-mockup animation-infinite background-image" style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')", top: '0px' }}>
            </div>
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="title-area content-text-extra-style">
                            <span className="sub-title">
                                <Image 
                                    src="/main-assets/img/icon/section-subtitle-icon.svg" 
                                    alt="img" 
                                    height={30} 
                                    width={30} 
                                    style={iconFilter} 
                                />
                                ENGINEERING INSIGHTS
                            </span>
                            <h2 className="sec-title">Columbia Developers Industry Updates</h2>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="sec-btn">
                            <Link href="/pages/innerpage/blog" className="btn style-border">
                                Browse All Technical Papers 
                                <i className="ri-arrow-right-up-line ms-2" style={iconFilter}></i>
                            </Link>
                        </div>
                    </div>
                </div>
                <Slider {...settings} className="row global-carousel blog-slider slider-shadow">

                    {/* Blog Post 1 - Civil Engineering */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_1.png" alt="Civil Engineering Progress" height={391} width={280} />
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog"><span>28</span>OCT</Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Project Lead</Link>
                                    <Link href="/pages/innerpage/blog">Civil Works</Link>
                                </div>
                                <h3 className="blog-title"><Link href="/pages/innerpage/blog-details">Evolution of Road Infrastructure in Urban Centers</Link></h3>
                                <p className="blog-text">How modern paving technologies and drainage systems are extending the lifespan of regional highways.</p>
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read Article <i className="ri-arrow-right-up-line" style={iconFilter}></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 2 - Hydraulics */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_2.png" alt="Hydraulic Engineering" height={391} width={280}/>
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog"><span>12</span>SEP</Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Tech Office</Link>
                                    <Link href="/pages/innerpage/blog">Water Works</Link>
                                </div>
                                <h3 className="blog-title"><Link href="/pages/innerpage/blog-details">Optimizing Hydraulic Flow in Commercial Water Projects</Link></h3>
                                <p className="blog-text">A technical look at efficient pipe sourcing and sustainable pressure management systems.</p>
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    View Report <i className="ri-arrow-right-up-line" style={iconFilter}></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 3 - Real Estate/Building */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_3.png" alt="Real Estate Development" height={391} width={280}/>
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog"><span>05</span>AUG</Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By Development Team</Link>
                                    <Link href="/pages/innerpage/blog">Building</Link>
                                </div>
                                <h3 className="blog-title"><Link href="/pages/innerpage/blog-details">The Future of High-Density Commercial Developments</Link></h3>
                                <p className="blog-text">Balancing architectural innovation with cost-effective structural integrity in the modern skyline.</p>
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Discover More <i className="ri-arrow-right-up-line" style={iconFilter}></i>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Blog Post 4 - Safety/QHSE */}
                    <div className="col-md-6 col-lg-4">
                        <div className="blog-card slider-padding">
                            <div className="blog-img">
                                <Image src="/main-assets/img/blog/blog_1_1.png" alt="Safety Regulations" height={391} width={280} />
                                <div className="blog-date">
                                    <Link href="/pages/innerpage/blog"><span>15</span>JUL</Link>
                                    <div className="year">2024</div>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link href="/pages/innerpage/blog">By QHSE Dept</Link>
                                    <Link href="/pages/innerpage/blog">Compliance</Link>
                                </div>
                                <h3 className="blog-title"><Link href="/pages/innerpage/blog-details">Strict Safety Protocols for Large Scale Construction Sites</Link></h3>
                                <p className="blog-text">Columbia Developers’ commitment to zero-incident work environments through advanced monitoring.</p>
                                <Link href="/pages/innerpage/blog-details" className="btn">
                                    Read Article <i className="ri-arrow-right-up-line" style={iconFilter}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </section>
    );
};

export default Blog;