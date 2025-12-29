'use client';

import { useState, useEffect } from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Image from "next/image";
import Link from "next/link";

const projectList = [
    {
        src: "/main-assets/img/project/project2_1.png",
        title: "Main Highway Expansion",
        category: "Civil Engineering",
        date: "Completed: March 2024"
    },
    {
        src: "/main-assets/img/project/project2_2.png",
        title: "Urban Water Treatment Plant",
        category: "Hydraulic Works",
        date: "Completed: Jan 2024"
    },
    {
        src: "/main-assets/img/project/project2_3.png",
        title: "Commercial High-Rise",
        category: "Building Construction",
        date: "Handover: Nov 2023"
    },
    {
        src: "/main-assets/img/project/project2_4.png",
        title: "Industrial Sewerage System",
        category: "Civil Infrastructure",
        date: "Completed: Sept 2023"
    },
    {
        src: "/main-assets/img/project/project2_5.png",
        title: "Residential Estate Paving",
        category: "Civil Works",
        date: "Completed: June 2023"
    },
    {
        src: "/main-assets/img/project/project2_6.png",
        title: "River Bank Stabilization",
        category: "Hydraulic Engineering",
        date: "Completed: April 2023"
    }
];

const Project = () => {
    const [photoIndex, setPhotoIndex] = useState(-1);

    const handleOpen = (index) => {
        setPhotoIndex(index);
    };

    useEffect(() => {
        if (photoIndex >= 0) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [photoIndex]);

    return (
        <section className="project-page space-top space-extra-bottom">
            <div className="container">
                <div className="row gy-40 justify-content-center">
                    {projectList.map((project, index) => (
                        <div className="col-md-6 col-lg-4" key={index}>
                            <div className="portfolio-card style2">
                                <div className="portfolio-card-thumb">
                                    <Image 
                                        src={project.src} 
                                        alt={project.title} 
                                        width={434} 
                                        height={459} 
                                        className="w-100"
                                    /> 
                                    <span className="portfolio-card-number">0{index + 1}</span>
                                    <button 
                                        className="icon-btn popup-image" 
                                        onClick={() => handleOpen(index)}
                                        aria-label="View Image"
                                    >
                                        <i className="ri-eye-line"></i>
                                    </button>
                                </div>
                                <div className="portfolio-card-details">
                                    <span className="portfolio-card-subtitle">{project.category}</span>
                                    <h4 className="portfolio-card-title">
                                        <Link href="/pages/innerpage/project-details">{project.title}</Link>
                                    </h4>
                                    <p className="portofolio-card-text">{project.date}</p>
                                    <Link href="/pages/innerpage/project-details" className="btn-with-icon">
                                        VIEW TECHNICAL SPECS
                                        <span className="btn-icon">
                                            <i className="ri-arrow-right-up-line"></i>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Simplified Pagination */}
                <div className="pagination justify-content-center mt-60">
                    <ul>
                        <li><Link className="active" href="#">01</Link></li>
                        <li><Link href="#">02</Link></li>
                        <li><Link href="#"><i className="ri-arrow-right-line"></i></Link></li>
                    </ul>
                </div>
            </div>

            {photoIndex >= 0 && (
                <Lightbox
                    mainSrc={projectList[photoIndex].src}
                    nextSrc={projectList[(photoIndex + 1) % projectList.length].src}
                    prevSrc={projectList[(photoIndex + projectList.length - 1) % projectList.length].src}
                    onCloseRequest={() => setPhotoIndex(-1)}
                    onMovePrevRequest={() =>
                        setPhotoIndex((photoIndex + projectList.length - 1) % projectList.length)
                    }
                    onMoveNextRequest={() =>
                        setPhotoIndex((photoIndex + 1) % projectList.length)
                    }
                    imageTitle={projectList[photoIndex].title}
                    imageCaption={projectList[photoIndex].category}
                />
            )}
        </section>
    );
};

export default Project;