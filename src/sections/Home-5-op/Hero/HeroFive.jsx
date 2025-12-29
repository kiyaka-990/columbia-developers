import Link from "next/link";

const HeroFive = () => {
    return (
        <div className="hero-wrapper hero-5" id="hero-sec">
            <div className="hero_shape_5_1">
                <img src="/main-assets/img/hero/hero_shape_5_1.png" alt="Columbia Developers Shape" />
            </div>
            <div className="hero-slider5 global-carousel" data-slide-show="1" data-fade="true" data-dots="true">
                
                {/* --- SLIDE 01: CIVIL ENGINEERING --- */}
                <div className="hero-slide" style={{ backgroundImage: "url('/main-assets/img/hero/hero_bg_5_1.png')" }}>
                    <div className="container">
                        <div className="hero-style5">
                            <div className="row align-items-center">
                                <div className="col-xl-9">
                                    <div className="hero-rating-wrap" data-ani="slider-custom-anim-left" data-ani-delay="0.1s">
                                        <div className="single-rating-wrap">
                                            <div className="rating">
                                                <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                            </div>
                                            <div className="rating-text">
                                                <img src="/main-assets/img/icon/google-logo.svg" alt="Google" /> 4.9 Corporate Rating
                                            </div>
                                        </div>
                                        <div className="single-rating-wrap">
                                            <div className="rating">
                                                <i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i><i className="ri-star-fill"></i>
                                            </div>
                                            <div className="rating-text">
                                                NCA Class 1 Registered
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="hero-title" data-ani="slider-custom-anim-left" data-ani-delay="0.1s">Pioneering Modern</h1>
                                    <h1 className="hero-title" data-ani="slider-custom-anim-left" data-ani-delay="0.2s">Infrastructure Excellence</h1>
                                    <p className="hero-text" data-ani="slider-custom-anim-left" data-ani-delay="0.2s">Columbia Developers Limited leads the way in Kenyan civil engineering, providing robust solutions for complex logistical and building projects.</p>
                                    <div className="btn-group" data-ani="slider-custom-anim-left" data-ani-delay="0.4s">
                                        <Link href="/contact" className="btn style2">GET A PROJECT QUOTE <i className="ri-arrow-right-up-line"></i></Link>
                                        <Link href="/projects" className="btn style2 white-btn">VIEW OUR PROJECTS</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 02: BUILDING CONSULTANCY --- */}
                <div className="hero-slide" style={{ backgroundImage: "url('/main-assets/img/hero/hero_bg_5_2.png')" }}>
                    <div className="container">
                        <div className="hero-style5">
                            <div className="row align-items-center">
                                <div className="col-xl-9">
                                    <div className="hero-rating-wrap" data-ani="slider-custom-anim-left" data-ani-delay="0.1s">
                                        <div className="single-rating-wrap">
                                            <div className="rating-text">
                                                <i className="ri-checkbox-circle-fill"></i> Professional Building Consultancy
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="hero-title" data-ani="slider-custom-anim-left" data-ani-delay="0.1s">From Blueprint To</h1>
                                    <h1 className="hero-title" data-ani="slider-custom-anim-left" data-ani-delay="0.2s">Structural Reality</h1>
                                    <p className="hero-text" data-ani="slider-custom-anim-left" data-ani-delay="0.2s">Our consultancy team provides the technical expertise required to ensure every structure is built for durability, safety, and modern efficiency.</p>
                                    <div className="btn-group" data-ani="slider-custom-anim-left" data-ani-delay="0.4s">
                                        <Link href="/services" className="btn style2">OUR CONSULTANCY SERVICES <i className="ri-arrow-right-up-line"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SLIDE 03: LOGISTICS & SUPPLY --- */}
                <div className="hero-slide" style={{ backgroundImage: "url('/main-assets/img/hero/hero_bg_5_3.png')" }}>
                    <div className="container">
                        <div className="hero-style5">
                            <div className="row align-items-center">
                                <div className="col-xl-9">
                                    <div className="hero-rating-wrap" data-ani="slider-custom-anim-left" data-ani-delay="0.1s">
                                        <div className="single-rating-wrap">
                                            <div className="rating-text">
                                                <i className="ri-truck-line"></i> Logistics & Equipment Supply
                                            </div>
                                        </div>
                                    </div>
                                    <h1 className="hero-title" data-ani="slider-custom-anim-left" data-ani-delay="0.1s">Integrated Supply</h1>
                                    <h1 className="hero-title" data-ani="slider-custom-anim-left" data-ani-delay="0.2s">& Logistics Solutions</h1>
                                    <p className="hero-text" data-ani="slider-custom-anim-left" data-ani-delay="0.2s">Beyond construction, we provide the heavy machinery and logistical support necessary to keep the region's largest sites moving.</p>
                                    <div className="btn-group" data-ani="slider-custom-anim-left" data-ani-delay="0.4s">
                                        <Link href="/shop" className="btn style2">VISIT OUR SHOP <i className="ri-shopping-cart-line"></i></Link>
                                        <Link href="/contact" className="btn style2">PARTNER WITH US</Link>
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

export default HeroFive;