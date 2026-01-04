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
    const [username, setUsername] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(""); 
    const [success, setSuccess] = useState("");

    const handleSignIn = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(""); 
        setSuccess("");

        try {
            const response = await fetch("http://localhost:4000/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username: username }),
            });
            const data = await response.json();

            if (response.ok) {
                setSuccess(`Welcome, ${username}!`);
                setTimeout(() => onClose(), 1500);
            } else {
                setError(data.message || "Invalid credentials");
            }
        } catch (err) {
            setError("Server offline. Please start the Rust backend.");
        } finally {
            setLoading(false);
        }
    };
    
    return (
      <div style={{ position: 'fixed', inset: 0, zIndex: 99999, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)' }}>
        <div style={{ position: 'absolute', inset: 0 }} onClick={onClose}></div>
        
        <div style={{ position: 'relative', width: '100%', maxWidth: '380px', backgroundColor: '#121212', borderRadius: '2rem', border: '1px solid rgba(255,255,255,0.1)', overflow: 'hidden', color: 'white', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            
            {/* Logo Section */}
            <div style={{ padding: '40px 40px 20px 40px', textAlign: 'center' }}>
                <img 
                    src="/main-assets/img/logo.png" 
                    alt="Columbia Logo" 
                    style={{ 
                        width: '140px', 
                        height: 'auto', 
                        filter: 'brightness(0) invert(1)', // Forces black logo to white
                        marginBottom: '20px'
                    }} 
                />
               <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', margin: '0' }}>Client Portal</h2>
               <p style={{ color: '#666', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '8px' }}>Secure Authentication</p>
            </div>
    
            {/* Form Section */}
            <form style={{ padding: '0 40px 20px 40px', display: 'flex', flexDirection: 'column', gap: '15px' }} onSubmit={handleSignIn}>
              <div style={{ position: 'relative' }}>
                <input 
                  type="text" 
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username / Email" 
                  style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '14px 20px', color: 'white', outline: 'none', fontSize: '14px' }}
                />
              </div>
    
              <div style={{ position: 'relative' }}>
                <input 
                  type={showPass ? "text" : "password"} 
                  placeholder="Password" 
                  style={{ width: '100%', backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '1rem', padding: '14px 20px', color: 'white', outline: 'none', fontSize: '14px' }}
                />
              </div>

              {success && <div style={{ backgroundColor: 'rgba(34,197,94,0.1)', padding: '10px', borderRadius: '0.75rem', border: '1px solid rgba(34,197,94,0.2)', color: '#22c55e', fontSize: '11px', textAlign: 'center', fontWeight: 'bold' }}>{success}</div>}
              {error && <div style={{ backgroundColor: 'rgba(239,68,68,0.1)', padding: '10px', borderRadius: '0.75rem', border: '1px solid rgba(239,68,68,0.2)', color: '#ef4444', fontSize: '11px', textAlign: 'center', fontWeight: 'bold' }}>{error}</div>}
    
              <button 
                type="submit"
                disabled={loading}
                style={{ width: '100%', backgroundColor: '#e31e24', color: 'white', fontWeight: 'bold', padding: '16px', borderRadius: '1rem', border: 'none', cursor: 'pointer', marginTop: '10px', textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '12px', transition: '0.3s' }}
              >
                {loading ? "Authenticating..." : "Sign In"}
              </button>
            </form>

            {/* Footer Section */}
            <div style={{ padding: '20px', borderTop: '1px solid rgba(255,255,255,0.05)', backgroundColor: 'rgba(255,255,255,0.01)', textAlign: 'center' }}>
                <a href="#" style={{ color: '#555', fontSize: '11px', textDecoration: 'none', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Forgot Password?</a>
            </div>

            {/* Close Button */}
            <button onClick={onClose} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,255,255,0.05)', color: 'white', border: 'none', borderRadius: '50%', width: '32px', height: '32px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
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
                            <a href="/pages/innerpage/contact" className="sidebar-action-btn">
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
                                    <a href="/">
                                        <Image src="/main-assets/img/logo.png" alt="Logo" width={160} />
                                    </a>
                                </div>
                                <div className="col text-center">
                                    <nav className="main-menu d-none d-lg-block">
                                    <ul className="m-0 p-0" style={{ listStyle: 'none', display: 'flex', gap: '30px' }}>
                                        <li><a href="/">HOME</a></li>
                                        <li><a href="/pages/innerpage/about">ABOUT</a></li>
                                        <li><a href="/pages/innerpage/service">SERVICES</a></li>
                                        <li><a href="/pages/innerpage/project">PROJECTS</a></li>
                                        <li><a href="/pages/innerpage/shop">SHOP</a></li>
                                        <li><a href="/pages/innerpage/contact">CONTACT</a></li>
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