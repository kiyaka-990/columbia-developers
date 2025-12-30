"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import MultiPageMobileMenu from "../MultiPageMobileMenu/MultiPageMobileMenu";
import Image from "next/image";

const HeaderOne = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const sidebarRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setIsSticky(true);
            else setIsSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="header-decoration">
            {/* --- SEARCH POPUP --- */}
            <div className={`popup-search-box ${isPopupOpen ? 'show' : ''}`} style={{ zIndex: 9999 }}>
                <button onClick={() => setIsPopupOpen(false)} className="searchClose"><i className="ri-close-line"></i></button>
                <form action="#" className="search-form">
                    <input type="text" placeholder="Search projects..." autoFocus />
                    <button type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>

            {/* --- PREMIUM ARCHITECTURAL SIDEBAR --- */}
            <div className={`sidemenu-wrapper ${isSideBarOpen ? 'show' : ''}`}>
                <div ref={sidebarRef} className="sidemenu-content columbia-premium-sidebar">
                    
                    {/* THE ENGINEERED CLOSE BUTTON (FIXED POSITION) */}
                    <div className="close-button-anchor">
                        <button onClick={() => setIsSideBarOpen(false)} className="premium-x-btn" type="button">
                            <i className="ri-close-line"></i>
                            <div className="rotating-outer-ring">
                                <span className="arrow-top"></span>
                                <span className="arrow-bottom"></span>
                            </div>
                        </button>
                    </div>

                    <div className="sidebar-inner">
                        <div className="sidebar-logo-block">
                            <Image src="/main-assets/img/logo.png" alt="Logo" width={200} height={55} priority />
                        </div>

                        <div className="sidebar-body-content">
                            <p className="blueprint-desc">
                                Engineering excellence with a focus on sustainable infrastructure across East Africa.
                            </p>

                            <div className="sidebar-contact-grid">
                                <div className="contact-card">
                                    <span className="card-label">Headquarters</span>
                                    <p className="card-value">Karen, Nairobi</p>
                                </div>
                                <div className="contact-card">
                                    <span className="card-label">Direct Line</span>
                                    <p className="card-value">+254 725 178209</p>
                                </div>
                            </div>

                            <Link href="#contact" className="sidebar-action-btn" onClick={() => setIsSideBarOpen(false)}>
                                <span>REQUEST A QUOTE</span>
                                <i className="ri-arrow-right-line"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <header className="nav-header header-layout1">
                {/* Main Header Content Here */}
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="menu-area">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <Link href="/">
                                        <Image src="/main-assets/img/logo.png" alt="Logo" width={180} height={55} priority />
                                    </Link>
                                </div>
                                <div className="col">
                                    <nav className="main-menu d-none d-lg-inline-block text-center">
                                        <ul>
                                            <li><Link href="#home">HOME</Link></li>
                                            <li><Link href="#about">ABOUT</Link></li>
                                            <li><Link href="#projects">PROJECTS</Link></li>
                                            <li><Link href="#contact">CONTACT</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className="col-auto">
                                    <div className="header-action-btns">
                                        <button onClick={() => setIsSideBarOpen(true)} className="action-btn-circle side-trigger">
                                            <i className="ri-menu-4-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* CRITICAL CSS TO PREVENT "BOX" LOADING */}
            <style jsx>{`
                .columbia-premium-sidebar {
                    background: #fff !important;
                    padding: 80px 40px !important;
                    height: 100vh;
                    position: relative;
                }
                .close-button-anchor {
                    position: absolute;
                    top: 30px;
                    right: 30px;
                    z-index: 100;
                }
                .premium-x-btn {
                    width: 55px;
                    height: 55px;
                    background: #e31e24;
                    border: none;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 26px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    position: relative;
                    box-shadow: 0 8px 20px rgba(227, 30, 36, 0.3);
                    padding: 0;
                    outline: none;
                }
                .rotating-outer-ring {
                    position: absolute;
                    top: -6px;
                    left: -6px;
                    right: -6px;
                    bottom: -6px;
                    border: 1.5px solid rgba(227, 30, 36, 0.2);
                    border-top-color: #e31e24;
                    border-radius: 50%;
                    animation: sidebarRotate 4s linear infinite;
                }
                .arrow-top {
                    position: absolute;
                    top: -4px;
                    left: 50%;
                    transform: translateX(-50%);
                    border-left: 4px solid transparent;
                    border-right: 4px solid transparent;
                    border-bottom: 6px solid #e31e24;
                }
                @keyframes sidebarRotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .blueprint-desc { font-size: 15px; color: #666; margin-bottom: 30px; }
                .card-label { display: block; font-size: 10px; color: #e31e24; font-weight: 800; text-transform: uppercase; }
                .card-value { font-size: 15px; font-weight: 600; margin-bottom: 20px; }
                .sidebar-action-btn { 
                    display: flex; justify-content: space-between; 
                    background: #1a1a1a; color: #fff; padding: 18px 25px; 
                    text-decoration: none; font-weight: 700; 
                }
            `}</style>
            
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    );
};

export default HeaderOne;