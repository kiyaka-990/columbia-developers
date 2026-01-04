/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
const WhyChoose = () => {
  return (
    <div className="space-top text-center overflow-hidden">
      <div
        className="section-animation-shape1-1 shape-mockup animation-infinite"
        data-bottom="0"
        style={{ backgroundImage: "url('/main-assets/img/shape/global-line-shape2.png')" }}
      ></div>
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title">WHY Columbia</div>
          <span className="sub-title">
            <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60} />
            Your Trusted Partner
          </span> {/* Personalized Subtitle */}
          <h2 className="sec-title">Delivering Excellence in Construction</h2> {/* Personalized Title */}
        </div>
        <div className="row gy-50 align-items-center">
          <div className="col-xl-4 col-md-6">
            <div className="wcu-card-wrap left-align">
              {/* Feature 1: Technology & BIM */}
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <Image src="/main-assets/img/icon/why-icon1-1.svg" alt="BIM Icon"  width={60} height={60} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Modern Construction Technology</h4> {/* Personalized Title */}
                  <p className="wcu-card-text">
                    We utilize BIM (Building Information Modeling) and VDC for precise planning, clash detection, and superior results.
                  </p> {/* Personalized Description */}
                </div>
              </div>
              
              {/* Feature 2: Detailed Planning */}
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <Image src="/main-assets/img/icon/why-icon1-2.svg" alt="Planning Icon"  width={60} height={60} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Rigorous Project Planning</h4> {/* Personalized Title */}
                  <p className="wcu-card-text">
                    Our detailed methodology ensures projects are completed on schedule, within budget, and to exacting specifications.
                  </p> {/* Personalized Description */}
                </div>
              </div>
              
              {/* Feature 3: Safety and Quality */}
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <Image src="/main-assets/img/icon/why-icon1-3.svg" alt="Quality Icon"  width={60} height={60} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Uncompromising Quality & Safety</h4> {/* Personalized Title */}
                  <p className="wcu-card-text">
                    We adhere to the highest international safety standards, delivering durable, structurally sound constructions.
                  </p> {/* Personalized Description */}
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-md-6 order-xl-3">
            <div className="wcu-card-wrap right-align">
              {/* Feature 4: Client Trust & Transparency */}
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <Image src="/main-assets/img/icon/why-icon1-4.svg" alt="Trust Icon"  width={60} height={60}/>
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Client-Centric Transparency</h4> {/* Personalized Title */}
                  <p className="wcu-card-text">
                    We maintain open communication and clear, honest cost structures throughout the construction journey.
                  </p> {/* Personalized Description */}
                </div>
              </div>
              
              {/* Feature 5: Skilled Local Team */}
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <Image src="/main-assets/img/icon/why-icon1-5.svg" alt="Team Icon"  width={60} height={60} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Experienced & Local Team</h4> {/* Personalized Title */}
                  <p className="wcu-card-text">
                    Our highly skilled engineers and craftsmen understand the local environment, regulations, and material sourcing.
                  </p> {/* Personalized Description */}
                </div>
              </div>
              
              {/* Feature 6: Value Engineering (Save Money) */}
              <div className="wcu-card">
                <div className="wcu-card-icon">
                  <Image src="/main-assets/img/icon/why-icon1-6.svg" alt="Money Icon"  width={60} height={60} />
                </div>
                <div className="wcu-card-details">
                  <h4 className="wcu-card-title">Cost-Effective Value Engineering</h4> {/* Personalized Title */}
                  <p className="wcu-card-text">
                    We find innovative solutions to reduce costs without ever compromising the quality or integrity of the structure.
                  </p> {/* Personalized Description */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="wcu-thumb1-1">
              <Image src="/main-assets/img/normal/why_1-1.png" alt="Construction Image"  width={60} height={60}/> {/* Placeholder for central image */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;