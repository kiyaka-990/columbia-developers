"use client";
import React from "react";
import Link from "next/link";
import { useShop } from "../../app/context/ShopContext";

const WishlistArea = () => {
  const { wishlist, removeFromWishlist, addToCart } = useShop();

  const handleMoveToCart = (product) => {
    addToCart(product, 1);
    removeFromWishlist(product.id);
  };

  return (
    <div className="wishlist-area space-top space-extra-bottom">
      <div className="container">
        {wishlist.length === 0 ? (
          <div className="text-center py-5">
            <h2 className="h4">Your wishlist is currently empty.</h2>
            <Link href="/shop" className="btn mt-4" style={{backgroundColor: '#a32610ff', color: '#fff'}}>
              Return To Shop
            </Link>
          </div>
        ) : (
          <div className="tinv-wishlist woocommerce tinv-wishlist-clear">
            <table className="tinvwl-table-manage-list">
              <thead>
                <tr>
                  <th className="product-cb"><input type="checkbox" readOnly /></th>
                  <th className="product-remove"></th>
                  <th className="product-thumbnail">Image</th>
                  <th className="product-name">Product Name</th>
                  <th className="product-price">Unit Price</th>
                  <th className="product-stock">Stock Status</th>
                  <th className="product-action">Action</th>
                </tr>
              </thead>
              <tbody>
                {wishlist.map((item) => (
                  <tr key={item.id}>
                    <td className="product-cb"><input type="checkbox" /></td>
                    <td className="product-remove">
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="border-0 bg-transparent text-danger"
                      >
                        <i className="ri-close-line"></i>
                      </button>
                    </td>
                    <td className="product-thumbnail">
                      <Link href={`/shop/${item.id}`}>
                        <img src={item.img || item.image} alt={item.title} width="91" height="91" />
                      </Link>
                    </td>
                    <td className="product-name">
                      <Link href={`/shop/${item.id}`}>{item.title || item.name}</Link>
                    </td>
                    <td className="product-price">
                      <span className="amount">${item.price}</span>
                    </td>
                    <td className="product-stock">
                      <span className="wishlist-in-stock">In Stock</span>
                    </td>
                    <td className="product-action">
                      <button 
                        className="btn btn-sm"
                        style={{backgroundColor: '#EA5501', color: '#fff', padding: '10px 20px'}}
                        onClick={() => handleMoveToCart(item)}
                      >
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistArea;