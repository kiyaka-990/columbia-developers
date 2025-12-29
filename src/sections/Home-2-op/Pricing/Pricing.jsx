import Link from "next/link";
import Image from "next/image";

const Pricing = () => {
    // Define the pricing data structure for reusability and clarity
    const monthlyPlans = [
        {
            title: "Design & Planning",
            description: "Essential pre-construction services, ideal for project scoping and permits.",
            price: "150,000",
            duration: "Monthly Retainer",
            currency: "Ksh",
            features: [
                "Detailed Site Analysis",
                "Conceptual Design Drafts",
                "Permit Documentation Support",
                "Initial Cost Estimation",
                "Limited Site Supervision (Unavailable)",
            ],
            isPopular: false,
        },
        {
            title: "Build Management",
            description: "Comprehensive management of site execution and quality control.",
            price: "280,000",
            duration: "Monthly Retainer",
            currency: "Ksh",
            features: [
                "Detailed Site Analysis",
                "Project Scheduling & Logistics",
                "Quality Control System (QC)",
                "Full Tender Documentation",
                "Dedicated Site Manager",
            ],
            isPopular: true,
        },
        {
            title: "Turnkey EPC Solution",
            description: "Full Engineering, Procurement, and Construction management for complex projects.",
            price: "500,000",
            duration: "Monthly Retainer",
            currency: "Ksh",
            features: [
                "Full Feasibility Study & Design",
                "Procurement & Supply Chain Management",
                "Quality Control & Safety Audits",
                "Progress Reporting & Financials",
                "24/7 Stakeholder Support",
            ],
            isPopular: false,
        },
    ];

    // Assuming yearly plans offer a slight discount or a commitment-based retainer
    const yearlyPlans = [
        { ...monthlyPlans[0], price: "1,500,000", duration: "ANNUAL FEE", features: [...monthlyPlans[0].features.slice(0, 3), "One Year Design Support", "Limited Site Supervision (Unavailable)"] }, // Slightly different features for annual
        { ...monthlyPlans[1], price: "3,000,000", duration: "ANNUAL FEE", features: [...monthlyPlans[1].features, "Annual Performance Review"], isPopular: true },
        { ...monthlyPlans[2], price: "5,500,000", duration: "ANNUAL FEE", features: [...monthlyPlans[2].features, "Post-Construction Support"] },
    ];

    const renderPricingCards = (plans) => (
        <div className="row gy-4 justify-content-center">
            {plans.map((plan, index) => (
                <div className="col-xl-4 col-md-6" key={index}>
                    <div
                        className="pricing-card"
                        style={{
                            backgroundImage: "url('/main-assets/img/bg/pricing-card-bg1-1.png')",
                        }}
                    >
                        <h4 className="pricing-card_title">{plan.title}</h4>
                        <p className="pricing-card_text">{plan.description}</p>
                        <h4 className="pricing-card_price">
                            <span className="pricing-card_currency">{plan.currency}</span>{plan.price}
                            <span className="pricing-card_duration">{plan.duration}</span>
                        </h4>
                        <div className="pricing-card-details">
                            {plan.isPopular && (
                                <div className="pricing-card-icon">
                                    <div className="icon">
                                        <Image src="/main-assets/img/icon/pricing-icon1-1.svg" alt="Popular" width={60} height={60}/>
                                    </div>
                                    <div className="tag">BEST VALUE</div>
                                </div>
                            )}
                            <div className="checklist">
                                <ul>
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className={feature.includes("(Unavailable)") ? "unavailable" : ""}>
                                            {feature.replace(" (Unavailable)", "")}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <Link
                            href="/pages/innerpage/contact"
                            className="btn-with-icon"
                            tabIndex="-1"
                        >
                            INQUIRE NOW
                            <span className="btn-icon">
                                <i className="ri-arrow-right-up-line"></i>
                            </span>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );


    return (
        <div className="pricing-area-1 space-top">
            <div className="container">
                <div className="row justify-content-xxl-between justify-content-center align-items-center">
                    <div className="col-xxl-7">
                        <div className="title-area text-xxl-start text-center">
                            <span className="sub-title">
                                <Image src="/main-assets/img/icon/section-subtitle-icon.svg" alt="icon" width={60} height={60}/>
                                Our Service Models
                            </span>
                            <h2 className="sec-title">FLEXIBLE CONSTRUCTION PACKAGES</h2>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-8">
                        <p className="sec-text mt-xxl-0 mt-n3 text-xxl-start text-center mb-xxl-0 mb-40">
                            We offer scalable service packages tailored to the unique demands of Kenyan construction projects, from initial design consultation to full engineering and project handover. Choose the model that fits your scope and timeline.
                        </p>
                    </div>
                    <div className="col-12 text-xxl-start text-center">
                        <ul className="pricing-tabs nav nav-tabs" role="tablist">
                            <li className="nav-item">
                                <button
                                    className="nav-link active"
                                    id="monthly-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#monthly"
                                    type="button"
                                    role="tab"
                                    aria-controls="monthly"
                                    aria-selected="true"
                                >
                                    Monthly Retainer
                                </button>
                            </li>
                            <li className="nav-item">
                                <button
                                    className="nav-link"
                                    id="yearly-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#yearly"
                                    type="button"
                                    role="tab"
                                    aria-controls="yearly"
                                    aria-selected="false"
                                >
                                    Annual Commitment
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="tab-content">
                    <div
                        className="tab-pane fade show active"
                        id="monthly"
                        role="tabpanel"
                        aria-labelledby="monthly-tab"
                    >
                        {renderPricingCards(monthlyPlans)}
                    </div>
                    <div
                        className="tab-pane fade"
                        id="yearly"
                        role="tabpanel"
                        aria-labelledby="yearly-tab"
                    >
                        {renderPricingCards(yearlyPlans)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;