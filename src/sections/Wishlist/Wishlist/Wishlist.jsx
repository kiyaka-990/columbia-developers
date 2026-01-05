"use client";
import { useShop } from "/src/app/context/ShopContext";
import Link from "next/link";
import Image from "next/image";

const Wishlist = () => {
    const { wishlist, removeFromWishlist, addToCart } = useShop();

    return (
        <div className="container">
            {wishlist.length > 0 ? (
                <table className="custom-wishlist-table">
                    {/* ... (Thead remains same) */}
                    <tbody>
                        {wishlist.map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <button onClick={() => removeFromWishlist(item.id)} className="remove-btn">
                                        <i className="ri-delete-bin-line"></i>
                                    </button>
                                </td>
                                {/* ... (Display item details) */}
                                <td>
                                    <button 
                                        onClick={() => {
                                            addToCart(item);
                                            removeFromWishlist(item.id);
                                        }} 
                                        className="wishlist-cart-btn"
                                    >
                                        Add to Cart
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <div className="text-center">Your wishlist is empty!</div>
            )}
        </div>
    );
};