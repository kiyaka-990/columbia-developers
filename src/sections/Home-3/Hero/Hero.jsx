import Link from "next/link";
import Image from "next/image"; 

const Hero = () => {
    return (
        <div className="hero-wrapper hero-3" id="hero">
            <div className="hero-bg-3-1 background-image bg-mask"
                style={{
                    backgroundImage: "url('/main-assets/img/hero/hero_bg_3_1.png')",
                    backgroundPosition: "center",
                    maskImage: "url('/main-assets/img/hero/hero_bg_mask_3_1.png')",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover", // Default for larger screens
                    '@media (max-width: 768px)': {
                        backgroundSize: "contain", // Adjusts for mobile screens
                    },

                }}>
            </div>
            <div className="hero-shadow-text">GA&apos;ALS</div>
            <div className="hero-bg-shape3-1 shape-mockup jump" style={{ bottom: '3%', left: '3%', position: 'absolute' }}>
                <Image src="/main-assets/img/shape/sec-bg-shape2.png" alt="img" width={90} height={331}/>
            </div>

            <div className="container">
                <div className="hero-style3">
                    <div className="row">
                        <div className="col-lg-12">
                            <span className="hero-subtitle">Engineering Value <Image src="/main-assets/img/icon/long-arrow-right2.svg" alt="img" width={60} height={60}/></span>
                            <h1 className="hero-title">INTEGRATED CONSTRUCTION</h1>
                            <h1 className="hero-title style2">LOGISTICS & SUPPLY</h1>
                             <p className="hero-text">We provide end-to-end solutions in construction, efficient logistics, and reliable supply chain management for projects across the region.</p>
                            <Link href="/pages/innerpage/about" className="btn style2">DISCOVER OUR EXPERTISE <i className="ri-arrow-right-up-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;