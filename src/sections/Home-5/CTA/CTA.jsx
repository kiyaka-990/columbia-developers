import Link from "next/link";

const CTA = () => {
    return (
        <div className="cta-area-5">
            <div className="container">
                <div 
                    className="cta-wrap5 background-image" 
                    style={{ 
                        backgroundImage: "url('/main-assets/img/bg/cta-bg5-1.png')",
                        backgroundColor: '#1a1a1a', // Fallback for readability
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    <h4 className="cta-title text-white">
                        Building Nairobi's Future: Let's discuss your next landmark infrastructure project
                    </h4>
                    <Link className="btn style4" href="/pages/innerpage/contact">
                        Schedule a Consultation <i className="ri-arrow-right-up-line"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CTA;