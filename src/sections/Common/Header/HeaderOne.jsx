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
            {/* --- IMPROVED SEARCH POPUP --- */}
            <div className={`popup-search-box ${isPopupOpen ? 'show' : ''}`} style={{ zIndex: 9999 }}>
                <button onClick={() => setIsPopupOpen(false)} className="searchClose"><i className="ri-close-line"></i></button>
                <form action="#" className="search-form">
                    <input type="text" placeholder="Search projects, services..." autoFocus />
                    <button type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>

            {/* --- PREMIUM CORPORATE SIDEBAR --- */}
            <div className={`sidemenu-wrapper ${isSideBarOpen ? 'show' : ''}`}>
                <div ref={sidebarRef} className="sidemenu-content">
                    <button onClick={() => setIsSideBarOpen(false)} className="closeButton sideMenuCls">
                        <i className="ri-close-line"></i>
                    </button>
                    
                    <div className="widget mt-40">
                        <Image src="/main-assets/img/logo.png" alt="Columbia Developers" width={200} height={60} />
                        <p className="mt-20">Delivering world-class engineering solutions and infrastructure development across East Africa.</p>
                        <Link href="/contact" className="btn-quote-sidebar">REQUEST A QUOTE</Link>
                    </div>

                    <div className="widget">
                        <h3 className="widget_title">Contact Details</h3>
                        <div className="sidebar-contact">
                            <p><i className="ri-map-pin-2-fill"></i> Westlands Business District, Nairobi</p>
                            <p><i className="ri-phone-fill"></i> +254 714 861 896</p>
                        </div>
                    </div>

                    <div className="widget">
                        <h3 className="widget_title">Follow Our Progress</h3>
                        <div className="social-btn style3">
                            <Link href="#"><i className="ri-facebook-fill"></i></Link>
                            <Link href="#"><i className="ri-twitter-x-line"></i></Link>
                            <Link href="#"><i className="ri-linkedin-box-fill"></i></Link>
                            <Link href="#"><i className="ri-instagram-line"></i></Link>
                        </div>
                    </div>
                </div>
            </div>

            <header className="nav-header header-layout1">
                {/* --- TOP BAR: FIXED SPACING & ADDED LOGIN --- */}
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <div className="top-info-wrap">
                                    <Link href="mailto:info@columbiadevelopers.co.ke" className="info-link">
                                        <i className="ri-mail-line"></i> info@columbiadevelopers.co.ke
                                    </Link>
                                    <span className="info-separator">|</span>
                                    <span className="info-text">
                                        <i className="ri-time-line"></i> Mon - Sat: 8:00 AM - 5:00 PM
                                    </span>
                                </div>
                            </div>
                            <div className="col-auto d-flex align-items-center gap-4">
                                <Link href="/login" className="top-portal-link">
                                    <i className="ri-user-settings-line"></i> Client Portal Login
                                </Link>
                                <div className="top-social">
                                    <Link href="#"><i className="ri-twitter-x-line"></i></Link>
                                    <Link href="#"><i className="ri-linkedin-fill"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- MAIN NAVIGATION --- */}
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
                                            <li><Link href="/">HOME</Link></li>
                                            <li><Link href="/about">ABOUT</Link></li>
                                            <li><Link href="/services">SERVICES</Link></li>
                                            <li><Link href="/projects">PROJECTS</Link></li>
                                            <li><Link href="/shop">SHOP</Link></li>
                                            <li><Link href="/contact">CONTACT</Link></li>
                                        </ul>
                                    </nav>
                                </div>

                                <div className="col-auto">
                                    <div className="header-action-btns">
                                        <button onClick={() => setIsPopupOpen(true)} className="action-btn-circle" title="Search">
                                            <i className="ri-search-line"></i>
                                        </button>

                                        <button onClick={() => setIsSideBarOpen(true)} className="action-btn-circle side-trigger" title="Open Menu">
                                            <i className="ri-menu-4-line"></i>
                                        </button>

                                        <button onClick={() => setIsMenuOpen(true)} className="menu-toggle d-lg-none">
                                            <i className="ri-menu-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <style jsx>{`
                .top-info-wrap { display: flex; align-items: center; gap: 20px; font-size: 13px; color: #666; }
                .info-separator { color: #ddd; }
                .info-link { color: #e31e24; text-decoration: none; transition: 0.3s; }
                .info-link:hover { color: #000; }
                
                .top-portal-link { 
                    font-size: 13px; 
                    font-weight: 600; 
                    color: #000; 
                    text-decoration: none; 
                    display: flex; 
                    align-items: center; 
                    gap: 5px;
                    padding: 4px 12px;
                    background: #f8f8f8;
                    border-radius: 4px;
                    transition: 0.3s;
                }
                .top-portal-link:hover { background: #e31e24; color: #fff; }

                .header-action-btns { display: flex; align-items: center; gap: 12px; }
                
                .action-btn-circle {
                    width: 45px;
                    height: 45px;
                    border-radius: 50%;
                    border: 1px solid #eee;
                    background: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 18px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    z-index: 10;
                }

                .action-btn-circle:hover {
                    background: #e31e24;
                    color: #fff;
                    border-color: #e31e24;
                    transform: translateY(-3px);
                }

                .side-trigger { background: #000; color: #fff; border: none; }

                .btn-quote-sidebar {
                    display: block;
                    text-align: center;
                    background: #e31e24;
                    color: #fff;
                    padding: 12px;
                    margin-top: 20px;
                    border-radius: 5px;
                    font-weight: bold;
                    text-decoration: none;
                    transition: 0.3s;
                }
                .btn-quote-sidebar:hover { background: #000; letter-spacing: 1px; }
            `}</style>
            
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    );
};

export default HeaderOne;