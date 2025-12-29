import Link from "next/link";

const Portfolio = () => {
    const projects = [
        {
            id: 1,
            columnClass: "col-lg-8",
            category: "Civil Engineering",
            title: "Major Highway & Bypass Infrastructure",
            img: "/main-assets/img/project/project5_1.png"
        },
        {
            id: 2,
            columnClass: "col-lg-4 col-md-6",
            category: "Commercial",
            title: "Modern Office Complex in Westlands",
            img: "/main-assets/img/project/project5_2.png"
        },
        {
            id: 3,
            columnClass: "col-lg-4 col-md-6",
            category: "Infrastructure",
            title: "Regional Water Treatment Plant",
            img: "/main-assets/img/project/project5_3.png"
        },
        {
            id: 4,
            columnClass: "col-lg-4 col-md-6",
            category: "Industrial",
            title: "Logistics Hub & Warehousing",
            img: "/main-assets/img/project/project5_4.png"
        },
        {
            id: 5,
            columnClass: "col-lg-4 col-md-6",
            category: "Residential",
            title: "Premium Multi-Family Apartments",
            img: "/main-assets/img/project/project5_5.png"
        }
    ];

    return (
        <div className="portfolio-area-5 overflow-hidden" id="project-sec">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="title-area text-center">
                            <span className="sub-title text-theme">
                                Our Portfolio <i className="ri-arrow-right-down-line"></i>
                            </span>
                            <h2 className="sec-title">Landmark Projects Across Kenya</h2>
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="row gy-30 gx-30">
                        {projects.map((project) => (
                            <div key={project.id} className={project.columnClass}>
                                <div className="portfolio-card style5">
                                    <div className="portfolio-card-thumb">
                                        <img src={project.img} alt={project.title} />
                                    </div>
                                    <div className="portfolio-card-details">
                                        <div className="media-left">
                                            <span className="portfolio-card-subtitle">{project.category}</span>
                                            <h4 className="portfolio-card-title">
                                                <Link href="/pages/innerpage/project-details">
                                                    {project.title}
                                                </Link>
                                            </h4>
                                        </div>
                                        <div className="btn-group">
                                            <Link href="/pages/innerpage/project-details" className="btn style2">
                                                View Details <i className="ri-arrow-right-line"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* NEW: View More Projects Button */}
                    <div className="row justify-content-center mt-50">
                        <div className="col-auto">
                            <div className="btn-group">
                                <Link href="/pages/innerpage/projects" className="btn style4">
                                    View More Projects <i className="ri-arrow-right-up-line"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;