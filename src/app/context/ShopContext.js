"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ShopContext = createContext();

export const ShopProvider = ({ children }) => {
    const [wishlist, setWishlist] = useState([]);
    const [cart, setCart] = useState([]);
    const [isMounted, setIsMounted] = useState(false);
    
    // 1. ADD THIS: State to control sidebar visibility
    const [isCartOpen, setIsCartOpen] = useState(false);

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

    const addToWishlist = (product) => {
        setWishlist((prev) => {
            const exists = prev.find((item) => item.id === product.id);
            if (!exists) return [...prev, product];
            return prev;
        });
    };

    const removeFromWishlist = (id) => {
        setWishlist((prev) => prev.filter((item) => item.id !== id));
    };

    // 2. ADD THIS: Function to remove items from cart (for the sidebar delete button)
    const removeFromCart = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

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

        // 3. REMOVED ALERT AND ADDED SIDEBAR TRIGGER
        setIsCartOpen(true); 
    };

    // Prevent hydration errors
    if (!isMounted) return null;

    return (
        <ShopContext.Provider 
            value={{ 
                wishlist, 
                addToWishlist, 
                removeFromWishlist, 
                cart, 
                addToCart, 
                removeFromCart, // Exported
                isCartOpen,     // Exported
                setIsCartOpen   // Exported
            }}
        >
            {children}
        </ShopContext.Provider>
    );
};

export const useShop = () => useContext(ShopContext);