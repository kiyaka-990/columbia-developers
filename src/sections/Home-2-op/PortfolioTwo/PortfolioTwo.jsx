import Link from "next/link";
import Image from "next/image";

const PortfolioTwo = () => {
    // Ga'als Specific Project Data (Replacing placeholder content)
    const projects = [
        {
            id: 1,
            category: "Commercial",
            title: "Nairobi Business Park Towers",
            status: "Completed, 2024",
            image: "/main-assets/img/project/project2_1.png", // Placeholder image path
            detailsLink: "/pages/innerpage/project-details",
        },
        {
            id: 2,
            category: "Infrastructure",
            title: "Mombasa-Nairobi Highway Bridge",
            status: "Under Construction",
            image: "/main-assets/img/project/project2_2.png", // Placeholder image path
            detailsLink: "/pages/innerpage/project-details",
        },
        {
            id: 3,
            category: "Residential",
            title: "Karen Luxury Villa Development",
            status: "Completed, 2023",
            image: "/main-assets/img/project/project2_3.png", // Placeholder image path
            detailsLink: "/pages/innerpage/project-details",
        },
        // Duplicate data for carousel/slider effect
        {
            id: 4,
            category: "Commercial",
            title: "Upper Hill Corporate Center",
            status: "Completed, 2023",
            image: "/main-assets/img/project/project2_1.png",
            detailsLink: "/pages/innerpage/project-details",
        },
        {
            id: 5,
            category: "Infrastructure",
            title: "Urban Water Treatment Facility",
            status: "Design Phase",
            image: "/main-assets/img/project/project2_2.png",
            detailsLink: "/pages/innerpage/project-details",
        },
        {
            id: 6,
            category: "Residential",
            title: "Kilimani Apartment Complex",
            status: "Completed, 2024",
            image: "/main-assets/img/project/project2_3.png",
            detailsLink: "/pages/innerpage/project-details",
        },
    ];

  return (
    <div className="portfolio-area-2 space" id="project-sec">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7">
            <div className="title-area text-lg-start text-center">
              <span className="sub-title">
                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/>
                OUR PORTFOLIO
              </span>
              <h2 className="sec-title">FEATURED KENYAN CONSTRUCTION PROJECTS</h2>
            </div>
          </div>
          <div className="col-lg-auto">
            <div className="sec-btn">
              <Link href="/pages/innerpage/project" className="btn">
                Explore Our Work <i className="ri-arrow-right-up-line"></i>
              </Link>
            </div>
          </div>
        </div>
        <div className="portfolio-slider2 overflow-hidden">
          <div
            className="row gy-30 gx-30 global-carousel"
            data-slide-show="3"
            data-md-slide-show="2"
          >
            {projects.map((project) => (
                <div className="col-lg-4" key={project.id}>
                    <div className="portfolio-card style2">
                        <div className="portfolio-card-thumb">
                            <Image src={project.image} alt={project.title} width={434} height={459}/>
                            <span className="portfolio-card-number">{project.id.toString().padStart(2, '0')}</span>
                            <Link
                                className="icon-btn popup-image"
                                href={project.image}
                            >
                                <i className="ri-eye-line"></i>
                            </Link>
                        </div>
                        <div className="portfolio-card-details">
                            <span className="portfolio-card-subtitle">{project.category}</span>
                            <h4 className="portfolio-card-title">
                                <Link href={project.detailsLink}>{project.title}</Link>
                            </h4>
                            <p className="portofolio-card-text">
                                {project.status}
                            </p>
                            <Link href={project.detailsLink} className="btn-with-icon">
                                VIEW DETAILS
                                <span className="btn-icon">
                                    <i className="ri-arrow-right-up-line"></i>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioTwo;