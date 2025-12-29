import Link from "next/link";
import Image from "next/image";
const BlogTwo = () => {
    // Dummy Blog Data for Ga'als
    const currentMonth = "DEC";
    const currentYear = 2025;
    const authorName = "Ga'als Team";

    const blogPosts = [
        {
            dateDay: "12",
            dateMonth: currentMonth,
            year: currentYear,
            category: "Project Management",
            title: "Navigating Permitting and Approvals in Nairobi Construction",
            text: "Understanding the regulatory landscape is crucial for timely project completion in the Kenyan capital.",
            image: "/main-assets/img/blog/blog_1_1.png",
        },
        {
            dateDay: "05",
            dateMonth: currentMonth,
            year: currentYear,
            category: "Sustainable Building",
            title: "The Rise of Green Building Materials in Kenyan Housing",
            text: "Exploring sustainable practices and materials that are making an impact on the East African construction industry.",
            image: "/main-assets/img/blog/blog_1_2.png",
        },
        {
            dateDay: "28",
            dateMonth: "NOV",
            year: currentYear,
            category: "Infrastructure",
            title: "Key Challenges and Innovations in Road Works in Rural Kenya",
            text: "An overview of how Ga'als addresses logistical and engineering hurdles in regional infrastructure development.",
            image: "/main-assets/img/blog/blog_1_3.png",
        },
    ];

  return (
    <section className="blog-area-2 space" id="blog-sec">
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
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/>
                INDUSTRY INSIGHTS
              </span> {/* Personalized Subtitle */}
              <h2 className="sec-title">OUR LATEST NEWS & ARTICLES</h2> {/* Personalized Title */}
            </div>
          </div>
          <div className="col-md-auto">
            <div className="sec-btn">
              <Link href="/pages/innerpage/blog" className="btn">
                Visit Our Blog <i className="ri-arrow-right-up-line"></i>
              </Link> {/* Personalized CTA */}
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
          {blogPosts.map((post, index) => (
                <div className="col-md-6 col-lg-4" key={index}>
                    <div className="blog-card style2">
                        <div className="blog-img">
                            <Image src={post.image} alt="blog image" width={391} height={280}/>
                            <div className="blog-date">
                                <Link href="/pages/innerpage/blog">
                                    <span>{post.dateDay}</span>{post.dateMonth}
                                </Link>
                                <div className="year">{post.year}</div>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-meta">
                                <Link href="/pages/innerpage/blog">By {authorName}</Link> {/* Updated Author */}
                                <Link href="/pages/innerpage/blog">{post.category}</Link> {/* Updated Category */}
                            </div>
                            <h3 className="blog-title">
                                <Link href="/pages/innerpage/blog-details">
                                    {post.title} {/* Updated Title */}
                                </Link>
                            </h3>
                            <p className="blog-text">
                                {post.text} {/* Updated Text */}
                            </p>
                            <Link href="/pages/innerpage/blog-details" className="btn style2">
                                Read More <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

            {/* Repeat the first card to fill out the slider if needed, matching the original count of 6 */}
            {blogPosts.slice(0, 3).map((post, index) => (
                <div className="col-md-6 col-lg-4" key={index + blogPosts.length}>
                    <div className="blog-card style2">
                        <div className="blog-img">
                            {/* Using different image for visual variety in repeated cards */}
                            <Image src={index % 3 === 0 ? "/main-assets/img/blog/blog_1_4.png" : index % 3 === 1 ? "/main-assets/img/blog/blog_1_5.png" : "/main-assets/img/blog/blog_1_6.png"} alt="blog image" width={391} height={280}/>
                            <div className="blog-date">
                                <Link href="/pages/innerpage/blog">
                                    <span>10</span>NOV
                                </Link>
                                <div className="year">2025</div>
                            </div>
                        </div>
                        <div className="blog-content">
                            <div className="blog-meta">
                                <Link href="/pages/innerpage/blog">By {authorName}</Link>
                                <Link href="/pages/innerpage/blog">Safety</Link>
                            </div>
                            <h3 className="blog-title">
                                <Link href="/pages/innerpage/blog-details">
                                    Why Site Safety Protocols are Non-Negotiable in Construction
                                </Link>
                            </h3>
                            <p className="blog-text">
                                Implementing rigorous safety standards protects our workers and ensures smooth project continuity.
                            </p>
                            <Link href="/pages/innerpage/blog-details" className="btn style2">
                                Read More <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTwo;