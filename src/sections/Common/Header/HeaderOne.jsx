"use client";

import React, { useEffect, useState } from "react";
import { 
  Lock, 
  User, 
  Search, 
  Menu, 
  X, 
  Clock, 
  Mail, 
  MapPin, 
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from 'lucide-react';

const SearchOverlay = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(26, 26, 26, 0.98)',
            zIndex: 1000005,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            animation: 'fadeIn 0.3s ease-out'
        }}>
            <button 
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '40px',
                    right: '40px',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer'
                }}
            >
                <X size={40} />
            </button>
            <div style={{ width: '100%', maxWidth: '800px' }}>
                <h2 style={{ color: '#fff', marginBottom: '30px', textAlign: 'center', fontWeight: '800' }}>SEARCH OUR SITE</h2>
                <form 
                    onSubmit={(e) => { e.preventDefault(); onClose(); }}
                    style={{ position: 'relative', display: 'flex', alignItems: 'center' }}
                >
                    <input 
                        autoFocus
                        type="text" 
                        placeholder="Type keywords and hit enter..." 
                        style={{
                            width: '100%',
                            background: 'transparent',
                            border: 'none',
                            borderBottom: '3px solid #e31e24',
                            padding: '15px 0',
                            fontSize: '32px',
                            color: '#fff',
                            outline: 'none',
                            fontWeight: '300'
                        }}
                    />
                    <button type="submit" style={{ background: 'none', border: 'none', color: '#e31e24', position: 'absolute', right: '0' }}>
                        <Search size={32} />
                    </button>
                </form>
            </div>
        </div>
    );
};

const MultiPageMobileMenu = ({ isMenuOpen, setIsMenuOpen }) => (
    <>
        <div 
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.7)',
                zIndex: 999998,
                display: isMenuOpen ? 'block' : 'none',
                backdropFilter: 'blur(2px)'
            }}
            onClick={() => setIsMenuOpen(false)}
        />
        
        <div 
            style={{
                position: 'fixed',
                top: 0,
                right: isMenuOpen ? '0' : '-100%',
                width: '85%',
                maxWidth: '350px',
                height: '100%',
                backgroundColor: '#ffffff',
                zIndex: 999999,
                transition: '0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '-10px 0 30px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #eee' }}>
                <img src="/main-assets/img/logo.png" alt="Logo" style={{ height: '40px' }} />
                <button onClick={() => setIsMenuOpen(false)} style={{ background: '#e31e24', color: 'white', border: 'none', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer' }}>
                    <X size={20} />
                </button>
            </div>
            
            <nav style={{ flex: 1, padding: '20px' }}>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {[
                        { name: 'HOME', link: '/' },
                        { name: 'ABOUT', link: '/pages/innerpage/about' },
                        { name: 'SERVICES', link: '/pages/innerpage/service' },
                        { name: 'PROJECTS', link: '/pages/innerpage/project' },
                        { name: 'SHOP', link: '/pages/innerpage/shop' },
                        { name: 'CONTACT', link: '/pages/innerpage/contact' }
                    ].map((item) => (
                        <li key={item.name} style={{ marginBottom: '10px' }}>
                            <a href={item.link} style={{ display: 'block', padding: '12px 15px', textDecoration: 'none', color: '#1a1a1a', fontWeight: '700', fontSize: '14px', borderBottom: '1px solid #f0f0f0' }}>
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </>
);

const LoginModal = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const response = await fetch("https://login-api-production-d351.up.railway.app/api/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username }),
            });

            const data = await response.json();

if (response.ok && data.success) {
    setSuccess(data.message);
    localStorage.setItem("user", username); 
    
    // This must match the folder name in src/app/
    setTimeout(() => {
        window.location.href = "/dashboard"; 
    }, 1000);
} else {
    setError(data.message || "Login failed");
}
        } catch (err) {
            setError("Server connection failed. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="modal-overlay" style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.85)',
            zIndex: 1000001,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            backdropFilter: 'blur(5px)'
        }}>
            <div className="login-modal-content" style={{
                width: '100%',
                maxWidth: '450px',
                backgroundColor: '#fff',
                borderRadius: '15px',
                overflow: 'hidden',
                position: 'relative',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)'
            }}>
                <button onClick={onClose} style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: '#e31e24',
                    border: 'none',
                    borderRadius: '50%',
                    width: '30px',
                    height: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 2,
                    color: '#fff'
                }}>
                    <X size={18} />
                </button>

                <div style={{
                    backgroundColor: '#1a1a1a',
                    padding: '40px 30px',
                    textAlign: 'center',
                    color: '#fff',
                    position: 'relative'
                }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: '#e31e24',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 15px'
                    }}>
                        <Lock size={28} />
                    </div>
                    <h3 style={{ margin: 0, fontSize: '24px', fontWeight: '800' }}>CLIENT PORTAL</h3>
                    <p style={{ margin: '5px 0 0', opacity: 0.7, fontSize: '14px' }}>Secure access to your project dashboard</p>
                </div>

                <div style={{ padding: '40px 30px' }}>
                    <form onSubmit={handleLogin}>
                        <div style={{ marginBottom: '20px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', fontWeight: '700', color: '#666' }}>USERNAME / EMAIL</label>
                            <div style={{ position: 'relative' }}>
                                <User size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                                <input 
                                    type="text" 
                                    required
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    placeholder="Enter your username" 
                                    style={{
                                        width: '100%',
                                        padding: '12px 15px 12px 45px',
                                        borderRadius: '8px',
                                        border: '2px solid #f0f0f0',
                                        outline: 'none',
                                        fontSize: '14px',
                                        transition: '0.3s'
                                    }} 
                                />
                            </div>
                        </div>

                        <div style={{ marginBottom: '25px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', fontSize: '12px', fontWeight: '700', color: '#666' }}>PASSWORD</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                                <input 
                                    type="password" 
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="••••••••" 
                                    style={{
                                        width: '100%',
                                        padding: '12px 15px 12px 45px',
                                        borderRadius: '8px',
                                        border: '2px solid #f0f0f0',
                                        outline: 'none',
                                        fontSize: '14px'
                                    }} 
                                />
                            </div>
                        </div>

                        {error && <p style={{ color: '#e31e24', fontSize: '13px', textAlign: 'center', marginBottom: '15px', fontWeight: '600' }}>{error}</p>}
                        {success && <p style={{ color: '#22c55e', fontSize: '13px', textAlign: 'center', marginBottom: '15px', fontWeight: '600' }}>{success}</p>}

                        <button 
                            disabled={loading}
                            type="submit"
                            style={{
                                width: '100%',
                                backgroundColor: loading ? '#999' : '#e31e24',
                                color: '#fff',
                                padding: '15px',
                                border: 'none',
                                borderRadius: '8px',
                                fontWeight: '800',
                                fontSize: '14px',
                                cursor: loading ? 'not-allowed' : 'pointer',
                                transition: '0.3s',
                                boxShadow: '0 10px 15px -3px rgba(227, 30, 36, 0.3)'
                            }}
                        >
                            {loading ? "AUTHENTICATING..." : "SIGN IN NOW"}
                        </button>
                    </form>
                    
                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <a href="#" style={{ color: '#666', fontSize: '13px', textDecoration: 'none' }}>Forgot password?</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 100);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const cssStyles = `
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        .top-info-list { display: flex; gap: 25px; list-style: none; margin: 0; padding: 0; font-size: 13px; color: #666; }
        .top-info-list li { display: flex; align-items: center; gap: 8px; }
        .top-info-list i { color: #e31e24; }
        
        .portal-btn { background: #1a1a1a; color: #fff; border: none; padding: 6px 15px; border-radius: 4px; font-size: 12px; font-weight: 600; cursor: pointer; display: flex; align-items: center; gap: 6px; transition: 0.3s; }
        .portal-btn:hover { background: #e31e24; }

        .nav-link { text-decoration: none; color: #1a1a1a; font-weight: 700; font-size: 14px; transition: 0.3s; }
        .nav-link:hover { color: #e31e24; }

        .action-circle { width: 45px; height: 45px; border-radius: 50%; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.3s; background: #fff; border: none; outline: none; }
        .action-circle:hover { background: #e31e24; color: #fff; border-color: #e31e24; }
        .menu-btn { background: #e31e24; color: #fff; }

        .sidebar-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.7); z-index: 99999; opacity: 0; visibility: hidden; transition: 0.3s; }
        .sidebar-overlay.active { opacity: 1; visibility: visible; }
        .sidebar-panel { position: fixed; right: -400px; top: 0; width: 400px; height: 100%; background: #fff; z-index: 100000; transition: 0.5s cubic-bezier(0.16, 1, 0.3, 1); padding: 50px 40px; overflow-y: auto; }
        .sidebar-panel.active { right: 0; }
        
        .social-box { display: flex; gap: 10px; margin-top: 30px; }
        .social-icon { width: 40px; height: 40px; border-radius: 50%; border: 1px solid #eee; display: flex; align-items: center; justify-content: center; color: #666; transition: 0.3s; text-decoration: none; }
        .social-icon:hover { background: #e31e24; color: #fff; }
    `;

    return (
        <div className="main-wrapper">
            <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

            {/* Sidebar */}
            <div className={`sidebar-overlay ${isSideBarOpen ? 'active' : ''}`} onClick={() => setIsSideBarOpen(false)} />
            <div className={`sidebar-panel ${isSideBarOpen ? 'active' : ''}`}>
                <button onClick={() => setIsSideBarOpen(false)} style={{ position: 'absolute', top: '25px', right: '25px', border: 'none', background: '#e31e24', color: '#fff', padding: '10px', borderRadius: '5px', cursor: 'pointer' }}>
                    <X size={24} />
                </button>
                <div style={{ marginBottom: '40px' }}>
                    <img src="/main-assets/img/logo.png" alt="Columbia" style={{ width: '200px' }} />
                </div>
                <h4 style={{ fontWeight: '800', marginBottom: '20px' }}>About Columbia</h4>
                <p style={{ color: '#666', lineHeight: '1.7', fontSize: '15px' }}>
                    We provide high-quality construction and engineering solutions, committed to excellence and sustainable infrastructure across the region.
                </p>
                
                <h4 style={{ fontWeight: '800', marginTop: '40px', marginBottom: '20px' }}>Contact Info</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <div style={{ display: 'flex', gap: '12px' }}><MapPin size={20} color="#e31e24"/> <span>Nairobi, Kenya</span></div>
                    <div style={{ display: 'flex', gap: '12px' }}><Phone size={20} color="#e31e24"/> <span>+254 700 000 000</span></div>
                    <div style={{ display: 'flex', gap: '12px' }}><Mail size={20} color="#e31e24"/> <span>info@columbiadevelopers.co.ke</span></div>
                </div>

                <div className="social-box">
                    <a href="#" className="social-icon"><Facebook size={18} /></a>
                    <a href="#" className="social-icon"><Twitter size={18} /></a>
                    <a href="#" className="social-icon"><Instagram size={18} /></a>
                    <a href="#" className="social-icon"><Linkedin size={18} /></a>
                </div>
            </div>

            <header className="site-header">
                {/* Top Bar */}
                <div className="header-top d-none d-lg-block" style={{ borderBottom: '1px solid #eee', padding: '12px 0' }}>
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <ul className="top-info-list">
                                    <li><Clock size={16} /> <span>Mon - Sat: 8:00 - 18:00</span></li>
                                    <li><Mail size={16} /> <span>info@columbiadevelopers.co.ke</span></li>
                                </ul>
                            </div>
                            <div className="col-auto">
                                <button onClick={() => setShowLoginModal(true)} className="portal-btn"><Lock size={14} /> CLIENT PORTAL</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Nav */}
                <div className={`navigation-area ${isSticky ? 'sticky-active' : ''}`} style={{ background: '#fff', padding: '15px 0', boxShadow: isSticky ? '0 5px 20px rgba(0,0,0,0.05)' : 'none' }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <a href="/"><img src="/main-assets/img/logo.png" alt="Logo" style={{ width: '170px' }} /></a>
                            </div>
                            
                            <div className="col-auto d-none d-lg-block">
                                <nav style={{ display: 'flex', gap: '35px' }}>
                                    <a href="/" className="nav-link">HOME</a>
                                    <a href="/pages/innerpage/about" className="nav-link">ABOUT</a>
                                    <a href="/pages/innerpage/service" className="nav-link">SERVICES</a>
                                    <a href="/pages/innerpage/project" className="nav-link">PROJECTS</a>
                                    <a href="/pages/innerpage/shop" className="nav-link">SHOP</a>
                                    <a href="/pages/innerpage/contact" className="nav-link">CONTACT</a>
                                </nav>
                            </div>

                            <div className="col-auto">
                                <div style={{ display: 'flex', gap: '10px' }}>
                                    {/* Search Trigger */}
                                    <button onClick={() => setIsSearchOpen(true)} className="action-circle"><Search size={20} /></button>
                                    <button onClick={() => setIsSideBarOpen(true)} className="action-circle d-none d-sm-flex"><Menu size={20} /></button>
                                    <button onClick={() => setIsMenuOpen(true)} className="action-circle menu-btn d-lg-none"><Menu size={20} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
            <SearchOverlay isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
            <MultiPageMobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </div>
    );
};

export default App;