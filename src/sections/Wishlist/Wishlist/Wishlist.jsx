export const dynamic = "force-dynamic";

"use client"; // Critical: Prevents server-side rendering errors during build

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Wishlist = () => {
    // State to ensure component only renders on the client
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // If we are on the server (during Vercel build), return nothing to avoid crashes
    if (!isClient) return null;

    return (
        <div className="space-top space-extra-bottom">
            <div className="container">
                <div className="tinv-wishlist woocommerce tinv-wishlist-clear">
                    <div className="table-responsive">
                        <table className="tinvwl-table-manage-list custom-wishlist-table">
                            <thead>
                                <tr>
                                    <th className="product-remove"></th>
                                    <th className="product-thumbnail">Product</th>
                                    <th className="product-name">Description</th>
                                    <th className="product-price">Unit Price</th>
                                    <th className="product-stock">Status</th>
                                    <th className="product-action">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Item 1 */}
                                <tr className="wishlist_item">
                                    <td className="product-remove">
                                        <button className="remove-btn" title="Remove"><i className="ri-delete-bin-line"></i></button>
                                    </td>
                                    <td className="product-thumbnail">
                                        <Link href="/pages/innerpage/shop-details">
                                            <Image src="/main-assets/img/product/product_1_4.jpg" alt="Chainsaw" width={80} height={80} className="rounded" />
                                        </Link>
                                    </td>
                                    <td className="product-name">
                                        <Link href="/pages/innerpage/shop-details" className="product-title-link">Chainsaw Machine</Link>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">Ksh 45,000.00</span>
                                    </td>
                                    <td className="product-stock">
                                        <span className="stock-badge in-stock">Available</span>
                                    </td>
                                    <td className="product-action">
                                        <Link href="/pages/innerpage/shop-details" className="wishlist-cart-btn">
                                            <i className="ri-shopping-cart-line"></i> Add to Cart
                                        </Link>
                                    </td>
                                </tr>

                                {/* Item 2 */}
                                <tr className="wishlist_item">
                                    <td className="product-remove">
                                        <button className="remove-btn" title="Remove"><i className="ri-delete-bin-line"></i></button>
                                    </td>
                                    <td className="product-thumbnail">
                                        <Link href="/pages/innerpage/shop-details">
                                            <Image src="/main-assets/img/product/product_1_5.jpg" alt="Hat" width={80} height={80} className="rounded" />
                                        </Link>
                                    </td>
                                    <td className="product-name">
                                        <Link href="/pages/innerpage/shop-details" className="product-title-link">Construction Safety Helmet</Link>
                                    </td>
                                    <td className="product-price">
                                        <span className="amount">Ksh 1,800.00</span>
                                    </td>
                                    <td className="product-stock">
                                        <span className="stock-badge in-stock">Available</span>
                                    </td>
                                    <td className="product-action">
                                        <Link href="/pages/innerpage/shop-details" className="wishlist-cart-btn">
                                            <i className="ri-shopping-cart-line"></i> Add to Cart
                                        </Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .custom-wishlist-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0 15px;
                }
                .custom-wishlist-table thead th {
                    border-bottom: 2px solid #eee;
                    padding-bottom: 10px;
                    color: #1a1a1a;
                    font-weight: 700;
                }
                .wishlist_item td {
                    background: #fff;
                    padding: 20px;
                    vertical-align: middle;
                    border-top: 1px solid #f0f0f0;
                    border-bottom: 1px solid #f0f0f0;
                }
                .product-title-link {
                    color: #1a1a1a;
                    font-weight: 600;
                    text-decoration: none;
                }
                .product-title-link:hover { color: #e31e24; }
                
                .remove-btn {
                    border: none;
                    background: #fff0f0;
                    color: #e31e24;
                    width: 35px;
                    height: 35px;
                    border-radius: 50%;
                    transition: 0.3s;
                }
                .remove-btn:hover { background: #e31e24; color: #fff; }

                .stock-badge {
                    font-size: 12px;
                    padding: 4px 10px;
                    border-radius: 20px;
                    font-weight: 600;
                }
                .in-stock { background: #e8f5e9; color: #2e7d32; }

                .wishlist-cart-btn {
                    background: #1a1a1a;
                    color: #fff;
                    padding: 10px 15px;
                    border-radius: 5px;
                    text-decoration: none;
                    font-size: 14px;
                    transition: 0.3s;
                    display: inline-flex;
                    align-items: center;
                    gap: 8px;
                }
                .wishlist-cart-btn:hover {
                    background: #e31e24;
                    color: #fff;
                    transform: translateY(-2px);
                }
            `}</style>
        </div>
    );
};

export default Wishlist;