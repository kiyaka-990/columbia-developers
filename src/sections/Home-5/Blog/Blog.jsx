"use client";

import Link from "next/link";
import Slider from "react-slick";

const Blog = () => {
    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 1500,
        autoplaySpeed: 5000,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const blogPosts = [
        {
            id: 1,
            date: "28",
            month: "DEC",
            year: "2025",
            author: "Admin",
            category: "Infrastructure",
            title: "Navigating Nairobi's Infrastructure Boom: Trends for 2026",
            img: "/main-assets/img/blog/blog_5_1.png",
            link: "/pages/innerpage/blog-details"
        },
        {
            id: 2,
            date: "15",
            month: "NOV",
            year: "2025",
            author: "Engineering Team",
            category: "Water Works",
            title: "Sustainable Water Solutions for High-Rise Developments",
            img: "/main-assets/img/blog/blog_5_2.png",
            link: "/pages/innerpage/blog-details"
        },
        {
            id: 3,
            date: "02",
            month: "OCT",
            year: "2025",
            author: "Legal Dept",
            category: "Compliance",
            title: "Understanding NCA Standards for Commercial Buildings",
            img: "/main-assets/img/blog/blog_5_3.png",
            link: "/pages/innerpage/blog-details"
        }
    ];

    return (
        <section className="blog-area-4 space" id="blog-sec">
            <div className="container">
                <div className="row justify-content-lg-between justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="title-area blog-area-content-text-extra-style">
                            <span className="sub-title text-theme">
                                INDUSTRY INSIGHTS <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">Latest from Columbia Developers</h2>
                        </div>
                    </div>
                    <div className="col-md-auto">
                        <div className="sec-btn">
                            <Link href="/pages/innerpage/blog" className="btn">
                                View All Insights <i className="ri-arrow-right-up-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <Slider {...settings} className="row global-carousel blog-slider5 slider-shadow">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="col-md-6 col-lg-4">
                            <div className="blog-card style5">
                                <div className="blog-img">
                                    <img src={post.img} alt={post.title} />
                                    <div className="blog-date">
                                        <Link href={post.link}>
                                            <span>{post.date}</span>{post.month}
                                        </Link>
                                        <div className="year">{post.year}</div>
                                    </div>
                                </div>
                                <div className="blog-content">
                                    <div className="blog-meta">
                                        <Link href={post.link}>By {post.author}</Link>
                                        <Link href={post.link}>{post.category}</Link>
                                    </div>
                                    <h3 className="blog-title">
                                        <Link href={post.link}>{post.title}</Link>
                                    </h3>
                                    <Link
                                        href={post.link}
                                        className="btn style-border4"
                                    >
                                        Read More <i className="ri-arrow-right-up-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default Blog;