/* eslint-disable react/no-unescaped-entities */
import React from "react";

const WhyChooseThree = () => {
  return (
    <div className="space-top text-center overflow-hidden shape-mockup-wrap">
      <div 
        className="section-animation-shape1-1 shape-mockup animation-infinite background-image" 
        style={{ 
          backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')", 
          bottom: '0px',
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: -1
        }} 
      />
      
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title" style={{ opacity: 0.05 }}>Columbia Excellence</div>
          <span className="sub-title">
            <img 
              src="/main-assets/img/icon/section-subtitle-icon.svg" 
              alt="icon" 
              style={{ width: '60px', height: '60px', display: 'inline-block', verticalAlign: 'middle', marginRight: '10px' }}
            />
            Why Choose Columbia
          </span>
          <h2 className="sec-title">Engineering Reliable Infrastructure <br/> Across the Region</h2>
        </div>

        <div className="row gy-50 align-items-center">
          {/* Left Column */}
          <div className="col-xl-4 col-md-6">
            <div className="wcu-card-wrap left-align">
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <img src="/main-assets/img/icon/why-icon1-1.svg" alt="Tech" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Advanced Tech</h4>
                  <p className="wcu-card-text">
                    We utilize high-capacity industrial borehole drilling and 3D modeling for precision civil works.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <img src="/main-assets/img/icon/why-icon1-2.svg" alt="Planning" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Strategic Planning</h4>
                  <p className="wcu-card-text">
                    Meticulous BoQ audits and site timeline optimization ensure zero-overrun delivery for every project.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <img src="/main-assets/img/icon/why-icon1-3.svg" alt="Result" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Quality Results</h4>
                  <p className="wcu-card-text">
                    From Bitumen Surface Dressing to commercial blocks, we deliver infrastructure that stands the test of time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="col-xl-4 col-md-6 order-xl-3">
            <div className="wcu-card-wrap right-align">
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <img src="/main-assets/img/icon/why-icon1-4.svg" alt="Clients" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Trusted Partner</h4>
                  <p className="wcu-card-text">
                    A track record of successful collaboration with government bodies and private developers.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <img src="/main-assets/img/icon/why-icon1-5.svg" alt="Team" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Elite Expertise</h4>
                  <p className="wcu-card-text">
                    Led by seasoned project managers Okullu and Kiyaka, ensuring professional site command.
                  </p>
                </div>
              </div>
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <img src="/main-assets/img/icon/why-icon1-6.svg" alt="Compliance" style={{ width: '60px', height: '60px' }} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Full Compliance</h4>
                  <p className="wcu-card-text">
                    Strict adherence to NEMA, NCA, and statutory regulations ensuring seamless project approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="col-xl-4">
            <div className="wcu-thumb1-1">
              <img 
                src="/main-assets/img/normal/why_1-1.png" 
                alt="Columbia Site Work" 
                style={{ width: '100%', height: 'auto', maxWidth: '400px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseThree;