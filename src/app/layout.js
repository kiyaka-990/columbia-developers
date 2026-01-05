'use client';

import React, { useState, useEffect, useRef } from 'react';
import 'react-image-lightbox/style.css'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';

// 1. Import the ShopProvider
// Since layout.js and the context folder are both inside the 'app' folder
import { ShopProvider } from "./context/ShopContext";

// --- Assets/CSS Imports ---
import "~/assets/main-assets/css/bootstrap.min.css";
import "~/assets/main-assets/css/fontawesome.min.css";
import "~/assets/main-assets/css/nice-select.min.css";
import "~/assets/main-assets/css/remixicon.css";
import "~/assets/main-assets/css/slick.min.css";
import "~/assets/main-assets/css/style.css";
import "~/assets/main-assets/css/react-adjustment.css";
import "~/assets/main-assets/css/fonts.css";

import ScrollProgress from "~/sections/Common/ScrollProgress";  
import AIChatbot from "~/sections/chatbot/AIChatbot";

export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const [showNotif, setShowNotif] = useState(false);
    const [fontSize, setFontSize] = useState(100);
    const audioRef = useRef(null);

    const toggleClass = (cls) => document.body.classList.toggle(cls);
    const adjustFont = (amt) => setFontSize(prev => Math.min(Math.max(prev + amt, 80), 150));

    useEffect(() => {
        const unlockAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().then(() => {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0;
                }).catch(() => {});
            }
            window.removeEventListener('click', unlockAudio);
        };
        window.addEventListener('click', unlockAudio);

        const timer = setTimeout(() => {
            setShowNotif(true);
            if (audioRef.current) {
                setTimeout(() => {
                    audioRef.current.play().catch(err => console.log("Sound blocked"));
                }, 100);
            }
        }, 3000);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('click', unlockAudio);
        };
    }, []);

    return (
        <html lang="en">
            <body suppressHydrationWarning={true} style={{ fontSize: `${fontSize}%` }}>
                {/* 2. Wrap everything in the ShopProvider */}
                <ShopProvider>
                    <ScrollProgress />
                    <audio ref={audioRef} src="/main-assets/sounds/beep.mp3" preload="auto" />

                    {/* Accessibility Widget */}
                    <div className={`pro-acc-wrapper ${isOpen ? 'is-open' : ''}`}>
                        <button className="pro-acc-trigger" onClick={() => setIsOpen(!isOpen)}>
                            <i className={isOpen ? "ri-close-line" : "ri-user-settings-fill"}></i>
                        </button>
                        
                        <div className="pro-acc-card">
                            <div className="pro-acc-header">
                                <span>Accessibility Suite</span>
                                <div className="status-dot"></div>
                            </div>
                            <div className="pro-acc-grid">
                                <div className="acc-item" onClick={() => toggleClass('high-contrast')}>
                                    <i className="ri-contrast-drop-line"></i>
                                    <p>Contrast</p>
                                </div>
                                <div className="acc-item" onClick={() => toggleClass('grayscale-mode')}>
                                    <i className="ri-palette-line"></i>
                                    <p>Monochrome</p>
                                </div>
                                <div className="acc-item" onClick={() => adjustFont(10)}>
                                    <i className="ri-text-spacing"></i>
                                    <p>Text +</p>
                                </div>
                                <div className="acc-item" onClick={() => toggleClass('reduce-motion')}>
                                    <i className="ri-windy-line"></i>
                                    <p>Still Mode</p>
                                </div>
                            </div>
                            <button className="pro-acc-reset" onClick={() => {
                                document.body.className = '';
                                setFontSize(100);
                            }}>Restore Defaults</button>
                        </div>
                    </div>

                    {/* Main Content */}
                    {children}

                    {/* Chatbot Layer */}
                    <div className="chatbot-root-layer">
                        <div className="chatbot-group-container">
                            {showNotif && (
                                <div className="chatbot-notif-bubble">
                                    <p>Hi! Need any help today? 👋</p>
                                    <button onClick={() => setShowNotif(false)}>×</button>
                                </div>
                            )}
                            <AIChatbot />
                        </div>
                    </div>
                </ShopProvider>
            </body>
        </html>
    );
}