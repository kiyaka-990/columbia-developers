"use client";
import Link from "next/link";
import Slider from "react-slick";
import Image from "next/image";

const BlogSharedSection = () => {
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
            <div className="title-area text-lg-start text-center text-left">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                GA&apos;ALS BUILDING INSIGHTS
              </span> {/* Personalized Subtitle */}
              <h2 className="sec-title">Expert advice from the construction field</h2> {/* Personalized Title */}
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
          {/* --- Blog Card 1: Focus on Cost & Budget --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card slider-padding">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_1.png" alt="blog image" width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>17</span>DEC
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Project Lead</Link>
                  <Link href="/pages/innerpage/blog">Cost Management</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Forecasting Construction Costs: Tips to Stay Under Budget
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  We share essential strategies for accurate budget planning, minimizing unforeseen expenses, and effectively managing procurement throughout the building lifecycle.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Article <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 2: Focus on Permits & Regulatory --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card slider-padding">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_2.png" alt="blog image"  width={391} height={280} />
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>05</span>DEC
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Compliance Officer</Link>
                  <Link href="/pages/innerpage/blog">Permitting</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Navigating Local Zoning and Building Permit Requirements
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Understanding regulatory hurdles is crucial. This guide breaks down the complex world of construction permits to ensure your project begins smoothly and legally.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Article <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 3: Focus on Durability & Quality --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card slider-padding">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_3.png" alt="blog image"  width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>22</span>NOV
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Structural Engineer</Link>
                  <Link href="/pages/innerpage/blog">Quality Control</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Building for the Long Term: Ensuring Structural Integrity
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Quality control is our backbone. We examine the latest techniques and materials used to guarantee stability, durability, and a superior finish on every Ga&apos;als project.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Article <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 4: Focus on Subcontractor Management --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card slider-padding">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_1.png" alt="blog image"  width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>08</span>NOV
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Site Supervisor</Link>
                  <Link href="/pages/innerpage/blog">Logistics</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Seamless Site Coordination: Working with Sub-Contractors
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Efficient project delivery depends on trade coordination. Learn how our proven logistical strategies eliminate conflicts and keep every phase moving forward smoothly.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Article <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 5: Focus on Future Trends/Innovation --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card slider-padding">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_2.png" alt="blog image"  width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>25</span>OCT
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By R&D Team</Link>
                  <Link href="/pages/innerpage/blog">Innovation</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    The Next Decade: How Modular Construction is Changing the Game
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Explore the rise of off-site and modular construction methods and how Ga&apos;als is adopting these innovations to reduce site waste and accelerate delivery times.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Article <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 6: Focus on Client Communication/Project Lifecycle --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card slider-padding">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_3.png" alt="blog image"  width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>10</span>OCT
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Communications</Link>
                  <Link href="/pages/innerpage/blog">Client Focus</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Transparency in Building: How We Keep Clients Informed Every Day
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Effective communication is key to a smooth project. We detail our commitment to daily progress reports, site visits, and clear communication channels for all stakeholders.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Article <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default BlogSharedSection;