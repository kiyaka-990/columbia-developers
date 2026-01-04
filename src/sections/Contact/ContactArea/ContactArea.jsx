import Link from "next/link";
import Image from "next/image";

const ContactArea = () => {
  return (
    <section className="contact-page-area space">
      <div className="container">
        <div className="row gy-4 justify-content-center">
          {/* Main Headquarters: Nairobi */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Nairobi Headquarters</h4>
                <div className="contact-page-card-text">
                  <i className="ri-map-pin-line"></i>
                  <span>Westlands, Nairobi, Kenya</span>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="tel:+254725178209"
                  >
                    +254 725 178209
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="mailto:info@columbiadevelopers.co.ke"
                  >
                    info@columbiadevelopers.co.ke
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>Mon - Fri 08:00 - 17:00
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <Image 
                  src="/main-assets/img/normal/contact_page1-1.png" 
                  alt="Columbia Developers Nairobi Office" 
                  width={606} 
                  height={450}
                />
              </div>
            </div>
          </div>

          {/* Coastal Region: Mombasa */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Mombasa Branch</h4>
                <div className="contact-page-card-text">
                  <i className="ri-map-pin-line"></i>
                  <span>Nyali, Mombasa, Kenya</span>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="tel:+254700000000" 
                  >
                    +254 725 178209
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="mailto:mombasa@columbiadevelopers.co.ke"
                  >
                    info@columbiadevelopers.co.ke
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>Mon - Fri 08:00 - 17:00
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <Image 
                  src="/main-assets/img/normal/contact_page1-2.png" 
                  alt="Columbia Developers Mombasa Office" 
                  height={404} 
                  width={258}
                />
              </div>
            </div>
          </div>

          {/* Tendering & Logistics Hub */}
          <div className="col-md-6 col-lg-4">
            <div className="contact-page-card bg-smoke">
              <div className="contact-page-card-details">
                <h4 className="contact-page-card_title">Tendering & Logistics</h4>
                <div className="contact-page-card-text">
                  <i className="ri-file-list-3-line"></i>
                  <span>Registration & Tenders</span>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-phone-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="tel:+254725178209"
                  >
                    +254 725 178209
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-mail-line"></i>
                  <Link
                    className="contact-page-card_link"
                    href="mailto:tenders@columbiadevelopers.co.ke"
                  >
                    info@columbiadevelopers.co.ke
                  </Link>
                </div>
                <div className="contact-page-card-text">
                  <i className="ri-time-line"></i>Sat 09:00 - 13:00 (Inquiry Only)
                </div>
              </div>
              <div className="contact-page-card-thumb">
                <Image 
                  src="/main-assets/img/normal/contact_page1-3.png" 
                  alt="Tendering Office" 
                  height={404} 
                  width={280}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactArea;