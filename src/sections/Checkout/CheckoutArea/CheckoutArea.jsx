"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const CheckoutArea = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit-card");

  const paymentLogos = [
    { src: "/main-assets/img/payment-method/01.png", id: 1 },
    { src: "/main-assets/img/payment-method/02.png", id: 2 },
    { src: "/main-assets/img/payment-method/04.png", id: 4 },
    { src: "/main-assets/img/payment-method/05.png", id: 5 },
  ];

  return (
    <div className="space">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="shipping-area">
              <h3 className="fw-semibold mb-4">Payment Details</h3>
              <form className="checkout-form" onSubmit={(e) => e.preventDefault()}>
                
                {/* PayPal Option */}
                <div className="form-group mb-4 d-flex align-items-center">
                  <input
                    className="form-check-input me-2"
                    type="radio"
                    name="paymentType"
                    id="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  <label className="form-check-label" htmlFor="paypal">
                    <Image 
                      src="/main-assets/img/payment-method/03.png" 
                      alt="PayPal" 
                      width={100} 
                      height={30} 
                      style={{ objectFit: 'contain' }}
                    />
                  </label>
                </div>

                {/* Credit Card Option */}
                <div className="form-group mb-4">
                  <div className="d-flex align-items-center">
                    <input
                      className="form-check-input me-2"
                      type="radio"
                      name="paymentType"
                      id="creditCard"
                      checked={paymentMethod === "credit-card"}
                      onChange={() => setPaymentMethod("credit-card")}
                    />
                    <label className="form-check-label fw-bold" htmlFor="creditCard">
                      Credit Card
                    </label>
                  </div>

                  {/* Show Card Form only if Credit Card is selected */}
                  {paymentMethod === "credit-card" && (
                    <div className="card-details-box mt-3 p-3 border rounded bg-light">
                      <ul className="footer-currency currency-area mb-4 d-flex list-unstyled gap-2">
                        {paymentLogos.map((logo) => (
                          <li key={logo.id}>
                            <Link href="#">
                              <Image src={logo.src} alt="card type" width={40} height={25} />
                            </Link>
                          </li>
                        ))}
                      </ul>

                      <div className="row gy-3">
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label">Full name</label>
                            <input type="text" className="form-control" placeholder="John Doe" />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-group">
                            <label className="form-label">Card Number</label>
                            <input type="text" className="form-control" placeholder="**** **** **** ****" />
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">Expire Month</label>
                            <select className="form-select" defaultValue="January">
                              <option>January</option>
                              <option>February</option>
                              <option>March</option>
                              <option>April</option>
                              {/* ... other months */}
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">Year</label>
                            <select className="form-select" defaultValue="2026">
                              <option value="2026">2026</option>
                              <option value="2027">2027</option>
                              <option value="2028">2028</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label className="form-label">CVV</label>
                            <input type="text" className="form-control" placeholder="123" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Cash on Delivery */}
                <div className="form-group mb-4 d-flex align-items-center">
                  <input
                    className="form-check-input me-2"
                    type="radio"
                    name="paymentType"
                    id="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="form-check-label" htmlFor="cod">
                    Cash on Delivery
                  </label>
                </div>

                <button type="submit" className="btn btn-primary w-100 py-3 mt-2">
                  Complete Purchase
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutArea;