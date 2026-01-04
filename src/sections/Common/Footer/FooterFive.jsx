"use client";

import React, { useState, useEffect } from "react";

/**
 * Note: 'next/link' is replaced with standard '<a>' tags for 
 * compatibility with the current preview environment.
 */

const FooterFive = () => {
  const [subStatus, setSubStatus] = useState(null); // 'sending', 'success', 'error'
  const [sdkLoaded, setSdkLoaded] = useState(false);

  // Load EmailJS SDK dynamically
  useEffect(() => {
    if (typeof window !== "undefined" && !window.emailjs) {
      const script = document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js";
      script.async = true;
      script.onload = () => setSdkLoaded(true);
      document.body.appendChild(script);
    } else if (window.emailjs) {
      setSdkLoaded(true);
    }
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!sdkLoaded || !window.emailjs) return;

    setSubStatus("sending");

    // --- REPLACE THESE WITH YOUR DASHBOARD KEYS ---
    const SERVICE_ID = "service_imfbdzz";
    const TEMPLATE_ID = "template_jaz95b9";
    const PUBLIC_KEY = "gd5Jel5psHgIcjRnm";

    window.emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        () => {
          setSubStatus("success");
          e.target.reset();
          setTimeout(() => setSubStatus(null), 5000);
        },
        (error) => {
          console.error("Subscription failed:", error);
          setSubStatus("error");
          setTimeout(() => setSubStatus(null), 5000);
        }
      );
  };

  return (
    <footer
      className="footer-wrapper footer-layout4 background-image"
      style={{ backgroundImage: "url('/main-assets/img/bg/footer-bg1-1.png')" }}
    >
      <div className="container">
        <div className="footer-top-1">
          <div className="footer-logo">
            <a href="/">
              <img
                src="/main-assets/img/logo.png"
                alt="Columbia Developers"
                style={{ maxWidth: "200px" }}
              />
            </a>
          </div>
          <div className="subscribe-box">
            <p className="subscribe-box_text">
              Keep up with our latest infrastructure projects and industry insights.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                className="form-control"
                type="email"
                name="user_email"
                placeholder={
                  subStatus === "success"
                    ? "Subscribed Successfully!"
                    : "Your professional email..."
                }
                required
              />
              <button
                type="submit"
                className="btn style2"
                disabled={subStatus === "sending"}
              >
                {subStatus === "sending" ? "..." : "SUBSCRIBE"}
                <i className="ri-arrow-right-up-line" />
              </button>
            </form>
            {subStatus === "error" && (
              <p className="mt-2 text-danger small">Try again later.</p>
            )}
          </div>
        </div>
        <div className="widget-area">
          <div className="row justify-content-between">
            <div className="col-md-6 col-xl-3">
              <div className="widget widget-about footer-widget">
                <h3 className="widget_title">Columbia Developers</h3>
                <p className="about-text">
                  Leading the way in civil engineering, project management, and
                  specialized procurement across East Africa. We build with
                  precision and integrity.
                </p>
                <h4 className="about-year">Since 1992</h4>
                <h5 className="about-subtitle">OPERATING HOURS</h5>
                <p className="about-text">
                  <span className="text-theme">Mon-Fri:</span> 08:00am to
                  05:00pm
                  <br />
                  <span className="text-theme">Sat:</span> 09:00am to 01:00pm
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget widget_nav_menu footer-widget">
                <h3 className="widget_title">Core Services</h3>
                <div className="menu-all-pages-container grid-style">
                  <ul className="menu">
                    <li>
                      <a href="/pages/innerpage/about">Our Profile</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/service">Civil Works</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/service">Procurement</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/service">Recent Projects</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/service">Maintenance</a>
                    </li>
                  </ul>
                  <ul className="menu">
                    <li>
                      <a href="/pages/innerpage/team">Expert Team</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/service">QHSE Policy</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/service">Testimonials</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/contact">Compliance</a>
                    </li>
                    <li>
                      <a href="/pages/innerpage/contact">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget widget-contact">
                <h3 className="widget_title">HQ Address</h3>
                <p className="contact-text">
                  Nairobi, Kenya
                  <br />
                  Megaco Hse, Mukinduri Rd Karen
                </p>
                <h3 className="widget_title">Official Email</h3>
                <p className="text-white footer-text">Project Inquiries:</p>
                <p className="footer-text">
                  <a href="mailto:info@columbiadevelopers.com">
                    info@columbiadevelopers.com
                  </a>
                </p>
              </div>
            </div>
            <div className="col-md-6 col-xl-auto">
              <div className="widget footer-widget">
                <h3 className="widget_title">Direct Line</h3>
                <p className="footer-text">
                  <a href="tel:+254725178209">+254 725 178209</a>
                </p>
                <p className="footer-text">
                  <a href="tel:+ 254 (0) 020-205 3648">
                    + 254 (0) 020-205 3648
                  </a>
                </p>
                <h3 className="widget_title">Connect With Us</h3>
                <div className="social-btn style2">
                  <a href="https://linkedin.com/company/columbia-developers">
                    <i className="ri-linkedin-fill" />
                  </a>
                  <a href="https://instagram.com/">
                    <i className="ri-instagram-line" />
                  </a>
                  <a href="https://facebook.com/">
                    <i className="ri-facebook-fill" />
                  </a>
                  <a href="https://www.twitter.com/">
                    <i className="ri-twitter-x-line" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-wrap">
          <div className="row gy-3 justify-content-md-between justify-content-center">
            <div className="col-auto align-self-center">
              <p className="copyright-text text-center">
                © 2026 <a href="#">Columbia Developers Limited</a> | By
                Asterleigh Systems
              </p>
            </div>
            <div className="col-auto">
              <div className="footer-links">
                <a href="/pages/innerpage/contact">Terms of Service</a>
                <a href="/pages/innerpage/contact">Privacy Policy</a>
                <a href="/pages/innerpage/contact">Sitemap</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterFive;