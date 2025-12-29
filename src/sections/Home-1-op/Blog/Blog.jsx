import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <section className="blog-area-1 space" id="blog-sec">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite"
        data-top="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape1.png')" }}
      ></div>
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6">
            <div className="title-area text-lg-start text-center">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="img" width={60} height={60}/>
                GA&apos;ALS CONSTRUCTION INSIGHTS
              </span> {/* Personalized Subtitle */}
              <h2 className="sec-title">Expert knowledge and industry news</h2> {/* Personalized Title */}
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
        <div
          className="row global-carousel blog-slider slider-shadow"
          data-slide-show="3"
          data-lg-slide-show="2"
          data-md-slide-show="2"
          data-sm-slide-show="1"
          data-xs-slide-show="1"
          data-dots="false"
        >
          {/* --- Blog Card 1: Focus on Project Planning --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_1.png" alt="blog image" width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>10</span>DEC
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Project Manager</Link> {/* Personalized Author */}
                  <Link href="/pages/innerpage/blog">Pre-Construction</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    5 Key Steps for Successful Construction Project Pre-Planning
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Proper planning minimizes delays and unexpected costs. We detail the critical initial steps every large-scale construction project requires for flawless execution.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Full Guide <i className="ri-arrow-right-up-line"></i> {/* Personalized Button Text */}
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 2: Focus on Safety --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_2.png" alt="blog image" width={391} height={280} />
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>01</span>DEC
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Safety Officer</Link> {/* Personalized Author */}
                  <Link href="/pages/innerpage/blog">Site Safety</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Implementing a Zero-Accident Culture on the Construction Site
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Our commitment to safety is non-negotiable. Learn about the rigorous testing and training programs we use to protect our team and project environment daily.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  View Safety Protocols <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 3: Focus on Efficiency/Technology --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_3.png" alt="blog image" width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>20</span>NOV
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By BIM Specialist</Link> {/* Personalized Author */}
                  <Link href="/pages/innerpage/blog">Technology</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    The Role of BIM in Reducing Waste and Maximizing Build Efficiency
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Learn how Building Information Modeling (BIM) is integral to our process, helping us pre-empt conflicts, manage materials, and deliver projects faster and greener.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Discover BIM <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 4: Focus on Sustainability --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_1.png" alt="blog image" width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>15</span>NOV
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Environmental Analyst</Link> {/* Personalized Author */}
                  <Link href="/pages/innerpage/blog">Sustainability</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Green Building Practices: Investing in a Sustainable Future
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  Explore how Ga&apos;als integrates eco-friendly materials and energy-efficient designs to achieve higher sustainability ratings and reduce lifetime operational costs.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Learn More <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 5: Focus on Infrastructure/Civil Works --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_2.png" alt="blog image" width={391} height={280} />
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>05</span>NOV
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By Civil Engineer</Link> {/* Personalized Author */}
                  <Link href="/pages/innerpage/blog">Infrastructure</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    Resilient Foundations: The Importance of Substructure Integrity
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  The success of any major structure begins below ground. We discuss the latest techniques in foundation and civil engineering for long-lasting builds.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  Read Article <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>

          {/* --- Blog Card 6: Focus on Client Partnership --- */}
          <div className="col-md-6 col-lg-4">
            <div className="blog-card">
              <div className="blog-img">
                <Image src="/main-assets/img/blog/blog_1_3.png" alt="blog image"  width={391} height={280}/>
                <div className="blog-date">
                  <Link href="/pages/innerpage/blog">
                    <span>28</span>OCT
                  </Link>
                  <div className="year">2024</div>
                </div>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <Link href="/pages/innerpage/blog">By CEO</Link> {/* Personalized Author */}
                  <Link href="/pages/innerpage/blog">Client Partnership</Link> {/* Personalized Tag */}
                </div>
                <h3 className="blog-title">
                  <Link href="/pages/innerpage/blog-details">
                    How Ga&apos;als Builds Trust Through Transparent Communication
                  </Link> {/* Personalized Title */}
                </h3>
                <p className="blog-text">
                  We believe in full transparency. This article explains our proactive approach to client reporting, risk management, and fostering a true partnership throughout the project life cycle.
                </p> {/* Personalized Excerpt */}
                <Link href="/pages/innerpage/blog-details" className="btn">
                  More Details <i className="ri-arrow-right-up-line"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;