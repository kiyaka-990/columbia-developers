"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [isMounted, setIsMounted] = useState(false);

    // Load from LocalStorage
    useEffect(() => {
        setIsMounted(true);
        const savedWishlist = localStorage.getItem("wishlist");
        const savedCart = localStorage.getItem("cart");
        if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
        if (savedCart) setCart(JSON.parse(savedCart));
    }, []);

    // Save to LocalStorage
    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("wishlist", JSON.stringify(wishlist));
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [wishlist, cart, isMounted]);

    // --- Actions ---

    // 1. ADD TO WISHLIST (This was the missing function)
    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (!exists) return [...prev, product];
            return prev;
        });
    };

    // 2. REMOVE FROM WISHLIST
    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    // 3. ADD TO CART
   const addToCart = (product, quantity = 1) => {
    setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
            return prev.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            );
        }
        return [...prev, { ...product, quantity }];
    });
    // Add this line for instant feedback
    alert(`${product.title} added to cart!`);
};

    // Prevent hydration errors
    if (!isMounted) return null;

    return (
        <ShopContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, cart, addToCart }}>
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);