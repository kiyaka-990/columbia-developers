'use client';
import React from 'react';
import Link from 'next/link';
import { useShop } from "../../../app/context/ShopContext";

const CartArea = () => {
  // 1. Get real data and functions from global context
  const { cart, addToCart, removeFromCart } = useShop();

  // 2. Adjust quantity helper
  const handleQuantityChange = (item, newQty) => {
    if (newQty < 1) return;
    // To update quantity, we find the difference and add it
    const diff = newQty - item.quantity;
    addToCart(item, diff);
  };

  // 3. Calculate subtotal from global cart
  const cartSubtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="space-top space-extra-bottom">
      <div className="container">
        {cart.length === 0 ? (
          <div className="text-center py-5">
            <h2>Your cart is currently empty.</h2>
            <Link href="/shop" className="btn mt-4">Return To Shop</Link>
          </div>
        ) : (
          <>
            <form action="#" className="woocommerce-cart-form" onSubmit={(e) => e.preventDefault()}>
              <table className="cart_table">
                <thead>
                  <tr>
                    <th className="cart-col-image">Image</th>
                    <th className="cart-col-productname">Product Name</th>
                    <th className="cart-col-price">Price</th>
                    <th className="cart-col-quantity">Quantity</th>
                    <th className="cart-col-total">Total</th>
                    <th className="cart-col-remove">Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map(item => (
                    <tr className="cart_item" key={item.id}>
                      <td data-title="Product">
                        <Link className="cart-productimage" href={`/shop/${item.id}`}>
                          <img width="91" height="91" src={item.img || item.image} alt={item.title} />
                        </Link>
                      </td>
                      <td data-title="Name">
                        <Link className="cart-productname" href={`/shop/${item.id}`}>
                          {item.title || item.name}
                        </Link>
                      </td>
                      <td data-title="Price">
                        <span className="amount">
                          <bdi><span>$</span>{item.price}</bdi>
                        </span>
                      </td>
                      <td data-title="Quantity">
                        <div className="quantity">
                          <button 
                            type="button"
                            className="quantity-minus qty-btn" 
                            onClick={() => handleQuantityChange(item, item.quantity - 1)}
                          >
                            <i className="ri-subtract-line"></i>
                          </button>
                          <input
                            type="number"
                            className="qty-input"
                            value={item.quantity}
                            readOnly
                          />
                          <button 
                            type="button"
                            className="quantity-plus qty-btn" 
                            onClick={() => handleQuantityChange(item, item.quantity + 1)}
                          >
                            <i className="ri-add-line"></i>
                          </button>
                        </div>
                      </td>
                      <td data-title="Total">
                        <span className="amount">
                          <bdi><span>$</span>{item.price * item.quantity}</bdi>
                        </span>
                      </td>
                      <td data-title="Remove">
                        <button 
                          type="button"
                          className="remove border-0 bg-transparent text-danger" 
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="ri-delete-bin-6-line"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="6" className="actions">
                      <Link href="/shop" className="btn style-border3">
                        Continue Shopping
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>

            <div className="row justify-content-end">
              <div className="col-md-8 col-lg-7 col-xl-6">
                <h2 className="h4 summary-title fw-semibold">Cart Totals</h2>
                <table className="cart_totals">
                  <tbody>
                    <tr>
                      <td>Cart Subtotal</td>
                      <td data-title="Cart Subtotal">
                        <span className="amount">
                          <bdi><span>$</span>{cartSubtotal}</bdi>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr className="order-total">
                      <td>Order Total</td>
                      <td data-title="Total">
                        <strong>
                          <span className="amount">
                            <bdi><span>$</span>{cartSubtotal}</bdi>
                          </span>
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                </table>
                <div className="wc-proceed-to-checkout mb-30">
                  <Link href="/checkout" className="btn btn-fw" style={{backgroundColor: '#EA5501', color: '#fff'}}>
                    Proceed to checkout
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartArea;