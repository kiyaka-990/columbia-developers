"use client";

import React, { useEffect, useState } from "react";
import { Lock, User, Eye, EyeOff, X } from 'lucide-react';

// Mocking external components
const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => (
    <div className={`mobile-menu-overlay ${isMenuOpen ? 'show' : ''}`} onClick={() => setIsMenuOpen(false)}></div>
);

const Image = ({ src, alt, width, height, className, style }) => (
    <img 
        src={src} 
        alt={alt} 
        style={{ width: width ? `${width}px` : 'auto', height: height ? `${height}px` : 'auto', ...style }} 
        className={className} 
    />
);

// --- CENTERED PREMIUM LOGIN MODAL ---
const LoginModal = ({ onClose }) => {
    const [showPass, setShowPass] = useState(false);
    
    return (
      <div className="fixed inset-0 z-[20000] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-sm">
        {/* Click outside to close */}
        <div className="absolute inset-0" onClick={onClose}></div>
        
        <div className="w-full max-w-[380px] bg-[#121212] border border-white/10 rounded-[2rem] relative z-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden animate-in fade-in zoom-in duration-300">
          <div className="p-8 md:p-10">
            {/* Logo Section */}
            <div className="flex justify-center mb-8">
               <Image 
                  src="/main-assets/img/logo.png" 
                  alt="Columbia" 
                  width={140} 
                  className="brightness-0 invert opacity-100"
               />
            </div>

            <div className="text-center mb-8">
              <h2 className="text-xl font-bold text-white tracking-tight">Client Portal</h2>
              <p className="text-gray-400 text-[10px] font-semibold uppercase tracking-[0.25em] mt-2">Secure Authentication</p>
            </div>
    
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 group-focus-within:border-red-500/50 transition-colors">
                    <User className="text-gray-400 group-focus-within:text-red-500" size={14} />
                </div>
                <input 
                  type="text" 
                  placeholder="Username / Email" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-14 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.05] transition-all text-sm"
                />
              </div>
    
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-xl bg-white/5 border border-white/5 group-focus-within:border-red-500/50 transition-colors">
                    <Lock className="text-gray-400 group-focus-within:text-red-500" size={14} />
                </div>
                <input 
                  type={showPass ? "text" : "password"} 
                  placeholder="Password" 
                  className="w-full bg-white/[0.03] border border-white/10 rounded-2xl py-3.5 pl-14 pr-12 text-white placeholder:text-gray-600 focus:outline-none focus:border-red-600/50 focus:bg-white/[0.05] transition-all text-sm"
                />
                <button 
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors border-none bg-transparent cursor-pointer p-2 rounded-lg hover:bg-white/5"
                >
                  {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
    
              <button className="w-full bg-[#e31e24] hover:bg-[#ff2a31] text-white font-bold py-4 rounded-2xl transition-all active:scale-[0.96] border-none cursor-pointer mt-6 text-[12px] uppercase tracking-widest shadow-[0_10px_20px_rgba(227,30,36,0.3)] hover:shadow-[0_15px_30px_rgba(227,30,36,0.4)]">
                Sign In
              </button>
            </form>

            <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors border-none bg-white/5 hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer"
            >
                <X size={16} />
            </button>
          </div>
          
          <div className="bg-white/[0.02] border-t border-white/5 py-5 text-center">
             <a href="#" className="text-[11px] text-gray-500 hover:text-red-500 transition-colors uppercase font-bold tracking-widest no-underline">Forgot Password?</a>
          </div>
        </div>
      </div>
    );
};

const App = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) setIsSticky(true);
            else setIsSticky(false);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLoginClick = (e) => {
        e.preventDefault();
        setShowLoginModal(true);
    };

    const handleNavClick = (e, path) => {
        if (path === '/') {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setIsSideBarOpen(false);
    };

    const cssStyles = `
        .top-info-wrap { display: flex; gap: 20px; font-size: 13px; color: #666; }
        .info-link { text-decoration: none; color: inherit; display: flex; align-items: center; gap: 6px; }
        .top-portal-link { background: #f8f8f8; padding: 4px 12px; border-radius: 4px; font-weight: 700; font-size: 11px; color: #000; display: flex; align-items: center; gap: 5px; border: none; cursor: pointer; text-transform: uppercase; letter-spacing: 0.5px; transition: 0.2s; }
        .top-portal-link:hover { background: #e31e24; color: #fff; }
        .header-action-btns { display: flex; gap: 8px; }
        .action-btn-circle { width: 40px; height: 40px; border-radius: 50%; border: 1px solid #eee; background: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: 0.2s; }
        .action-btn-circle:hover { background: #e31e24; color: #fff; }
        .side-trigger { background: #000; color: #fff; border: none; }
        .main-menu a { text-decoration: none; color: inherit; font-weight: 700; font-size: 13px; letter-spacing: 0.5px; }
        .main-menu a:hover { color: #e31e24; }
        .sidebar-close-btn { width: 50px; height: 50px; background: #e31e24; border-radius: 50%; border: none; color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 24px; }
        .sidebar-action-btn { background: #e31e24; color: #fff; text-decoration: none; padding: 12px; display: flex; justify-content: space-between; align-items: center; border-radius: 4px; font-weight: 700; margin-top: 20px; font-size: 12px; }
        
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes zoom-in { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        .animate-in { animation: zoom-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
    `;

    return (
        <div className="header-decoration">
            <style dangerouslySetInnerHTML={{ __html: cssStyles }} />
            
            <div className={`popup-search-box ${isPopupOpen ? 'show' : ''}`} style={{ zIndex: 9999 }}>
                <button onClick={() => setIsPopupOpen(false)} className="searchClose"><i className="ri-close-line"></i></button>
                <form action="#" className="search-form" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Search projects..." autoFocus />
                    <button type="submit"><i className="ri-search-line"></i></button>
                </form>
            </div>

            <div className={`sidemenu-wrapper ${isSideBarOpen ? 'show' : ''}`}>
                <div className="sidemenu-content columbia-premium-sidebar">
                    <div style={{ position: 'absolute', top: '35px', right: '35px', zIndex: 1000 }}>
                        <button 
                            onClick={() => setIsSideBarOpen(false)} 
                            className="sidebar-close-btn"
                        >
                            <i className="ri-close-line"></i>
                        </button>
                    </div>

                    <div className="sidebar-inner">
                        <div className="sidebar-logo-block">
                            <Image src="/main-assets/img/logo.png" alt="Columbia" width={220} />
                        </div>
                        <div className="sidebar-body-content">
                            <p className="blueprint-desc">Engineering excellence with a focus on sustainable infrastructure across East Africa.</p>
                            <a href="/pages/innerpage/contact" className="sidebar-action-btn" onClick={(e) => handleNavClick(e, '/contact')}>
                                <span>GET IN TOUCH</span>
                                <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <header className="nav-header header-layout1">
                <div className="header-top d-none d-lg-block">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <div className="top-info-wrap">
                                    <a href="mailto:info@columbiadevelopers.co.ke" className="info-link">
                                        <i className="ri-mail-line"></i> info@columbiadevelopers.co.ke
                                    </a>
                                    <span className="info-link">
                                        <i className="ri-time-line"></i> Mon - Fri: 8:00 AM - 5:00 PM
                                    </span>
                                </div>
                            </div>
                            <div className="col-auto">
                                <button 
                                    onClick={handleLoginClick} 
                                    className="top-portal-link"
                                >
                                    <i className="ri-user-settings-line"></i> Client Portal Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`sticky-wrapper ${isSticky ? 'sticky' : ''}`}>
                    <div className="container">
                        <div className="menu-area">
                            <div className="row align-items-center">
                                <div className="col-auto">
                                    <a href="#" onClick={(e) => handleNavClick(e, '/')}>
                                        <Image src="/main-assets/img/logo.png" alt="Logo" width={160} />
                                    </a>
                                </div>
                                <div className="col text-center">
                                    <nav className="main-menu d-none d-lg-block">
                                    <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'flex', gap: '30px' }}>
                                        {/* Home Link updated to point to the root / */}
                                        <li><a href="/" onClick={(e) => handleNavClick(e, '/')}>HOME</a></li>
                                        <li><a href="/pages/innerpage/about" onClick={(e) => handleNavClick(e, '/about')}>ABOUT</a></li>
                                        <li><a href="/pages/innerpage/service" onClick={(e) => handleNavClick(e, '/service')}>SERVICES</a></li>
                                        <li><a href="/pages/innerpage/project" onClick={(e) => handleNavClick(e, '/project')}>PROJECTS</a></li>
                                        <li><a href="/pages/innerpage/shop" onClick={(e) => handleNavClick(e, '/shop')}>SHOP</a></li>
                                        <li><a href="/pages/innerpage/contact" onClick={(e) => handleNavClick(e, '/contact')}>CONTACT</a></li>
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

            {showLoginModal && (
                <LoginModal onClose={() => setShowLoginModal(false)} />
            )}
            
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    );
};

export default App;