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
                    <input type="text" placeholder="Search projects, services..." autoFocus />
                    <button type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>

            {/* --- SIDEBAR --- */}
            <div className={`sidemenu-wrapper ${isSideBarOpen ? 'show' : ''}`}>
                <div ref={sidebarRef} className="sidemenu-content columbia-premium-sidebar">
                    
                    {/* INLINE STYLED CLOSE BUTTON (KILLS THE LOADING BOX) */}
                    <div style={{ position: 'absolute', top: '35px', right: '35px', zIndex: 1000 }}>
                        <button 
                            onClick={() => setIsSideBarOpen(false)} 
                            style={{
                                width: '55px', height: '55px', backgroundColor: '#e31e24',
                                borderRadius: '50%', border: 'none', color: 'white',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '28px', cursor: 'pointer', position: 'relative',
                                boxShadow: '0 8px 20px rgba(227, 30, 36, 0.3)', padding: 0
                            }}
                        >
                            <i className="ri-close-line"></i>
                            <div className="rotating-outer-ring">
                                <span className="arrow-top"></span>
                                <span className="arrow-bottom"></span>
                            </div>
                        </button>
                    </div>

                    <div className="sidebar-inner">
                        <div className="sidebar-logo-block">
                            <Image src="/main-assets/img/logo.png" alt="Columbia" width={220} height={60} priority />
                        </div>
                        <div className="sidebar-body-content">
                            <p className="blueprint-desc">Engineering excellence with a focus on sustainable infrastructure and innovative construction solutions across East Africa.</p>
                            <div className="sidebar-contact-grid">
                                <div className="contact-card">
                                    <span className="card-label">Headquarters</span>
                                    <p className="card-value">Megaco Hse, Mukinduri Rd, Karen, Nairobi</p>
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
                {/* --- TOP BAR (RESTORED) --- */}
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <div className="top-info-wrap">
                                    <Link href="mailto:info@columbiadevelopers.co.ke" className="info-link">
                                        <i className="ri-mail-line"></i> info@columbiadevelopers.co.ke
                                    </Link>
                                    <span className="info-separator">|</span>
                                    <span className="info-text">Mon - Sat: 8:00 AM - 5:00 PM</span>
                                </div>
                            </div>
                            <div className="col-auto d-flex align-items-center gap-4">
                                <Link href="/login" className="top-portal-link">
                                    <i className="ri-user-settings-line"></i> Client Portal Login
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- MAIN NAV --- */}
                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="menu-area">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <Link href="#home">
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
                                        <button onClick={() => setIsPopupOpen(true)} className="action-btn-circle"><i className="ri-search-line"></i></button>
                                        <button onClick={() => setIsSideBarOpen(true)} className="action-btn-circle side-trigger"><i className="ri-menu-4-line"></i></button>
                                        <button onClick={() => setIsMenuOpen(true)} className="menu-toggle d-lg-none"><i className="ri-menu-line"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <style jsx>{`
                .top-info-wrap { display: flex; gap: 15px; font-size: 13px; }
                .top-portal-link { background: #f8f8f8; padding: 5px 15px; border-radius: 4px; font-weight: 600; font-size: 13px; text-decoration: none; color: #000; }
                .header-action-btns { display: flex; gap: 10px; }
                .action-btn-circle { width: 45px; height: 45px; border-radius: 50%; border: 1px solid #eee; background: #fff; cursor: pointer; transition: 0.3s; }
                .action-btn-circle:hover { background: #e31e24; color: #fff; transform: translateY(-3px); }
                .side-trigger { background: #000; color: #fff; border: none; }
                
                /* Sidebar Animation Styles */
                .rotating-outer-ring {
                    position: absolute; top: -7px; left: -7px; right: -7px; bottom: -7px;
                    border: 1px solid rgba(227,30,36,0.2); border-top-color: #e31e24;
                    border-radius: 50%; animation: sidebarRotate 4s linear infinite;
                }
                .arrow-top { position: absolute; top: -4px; left: 50%; transform: translateX(-50%); border-left: 4px solid transparent; border-right: 4px solid transparent; border-bottom: 6px solid #e31e24; }
                @keyframes sidebarRotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            `}</style>
            
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    );
};

export default HeaderOne;