/* eslint-disable react/no-unescaped-entities */
'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";
import { useParams } from "next/navigation";
// 1. Import the global shop hook
// Since layout.js and the context folder are both inside the 'app' folder
import { useShop } from "./context/ShopContext";

const ProductDetails = () => {
    const { id } = useParams();
    // 2. Destructure the global actions
    const { addToCart, addToWishlist } = useShop();

    const [product, setProduct] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('description');

    useEffect(() => {
        const getProductData = async () => {
            try {
                // Note: Ensure your API endpoint is a standard HTTP URL for fetch
                const res = await fetch(`/api/products/${id}`); 
                const data = await res.json();
                
                setProduct(data.mainProduct);
                setRelatedProducts(data.related || []);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching product:", error);
                setLoading(false);
            }
        };
        if(id) getProductData();
    }, [id]);

    const handleTabClick = (tabId) => setActiveTab(tabId);
    
    const handleQuantityChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value >= 1 && value <= 100) setQuantity(value);
    };

    const incrementQuantity = () => setQuantity((prev) => (prev < 100 ? prev + 1 : 100));
    const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 600, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ],
    };

    if (loading) return <div className="container space">Loading Product Details...</div>;
    if (!product) return <div className="container space">Product not found.</div>;

    return (
        <>
            <section className="product-details space">
                <div className="container">
                    <div className="row gx-60">
                        <div className="col-xl-6">
                            <div className="product-big-img">
                                <div className="img">
                                    <Image 
                                        src={product.image || "/main-assets/img/product/product_details_1_1.jpg"} 
                                        alt={product.title} 
                                        width={580} 
                                        height={580}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 align-self-center">
                            <div className="product-about">
                                <p className="price">
                                    ${product.price}
                                    {product.oldPrice && <del>${product.oldPrice}</del>}
                                </p>
                                <h2 className="product-title">{product.title}</h2>
                                <div className="product-rating">
                                    <span className="star-rating">
                                        {[...Array(5)].map((_, i) => (
                                            <i key={i} className={i < product.rating ? "ri-star-fill" : "ri-star-line"}></i>
                                        ))}
                                    </span>
                                    ({product.reviewsCount} Reviews)
                                </div>
                                <p className="text">{product.shortDescription}</p>
                                
                                <div className="actions">
                                    <div className="quantity">
                                        <button className="quantity-minus qty-btn" onClick={decrementQuantity}>
                                            <i className="ri-subtract-line"></i>
                                        </button>
                                        <input
                                            type="number"
                                            className="qty-input"
                                            value={quantity}
                                            onChange={handleQuantityChange}
                                        />
                                        <button className="quantity-plus qty-btn" onClick={incrementQuantity}>
                                            <i className="ri-add-line"></i>
                                        </button>
                                    </div>
                                    {/* 3. Main Add to Cart Functionality */}
                                    <button 
                                        className="btn" 
                                        onClick={() => addToCart(product, quantity)}
                                    >
                                        Add to Cart
                                    </button>
                                    
                                    {/* Optional: Add a Wishlist button here if your UI supports it */}
                                    <button 
                                        className="icon-btn ms-3" 
                                        onClick={() => addToWishlist(product)}
                                        style={{ border: '1px solid #eee', padding: '10px 15px' }}
                                    >
                                        <i className="ri-heart-line"></i>
                                    </button>
                                </div>
                                
                                <div className="product_meta">
                                    <span className="sku_wrapper">SKU: <span className="sku">{product.sku}</span></span>
                                    <span className="posted_in">Category: <Link href="/shop">{product.category}</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Tabs Logic */}
                    <div className="product-tab-area">
                        <ul className="nav product-tab-style1">
                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeTab === 'description' ? 'active' : ''}`} 
                                    onClick={() => handleTabClick('description')}
                                >
                                    Description
                                </button>
                            </li>
                            <li className="nav-item">
                                <button 
                                    className={`nav-link ${activeTab === 'reviews' ? 'active' : ''}`} 
                                    onClick={() => handleTabClick('reviews')}
                                >
                                    Reviews ({product.reviewsCount})
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content mt-4">
                            {activeTab === 'description' && (
                                <div className="tab-pane fade show active">
                                    <p>{product.fullDescription}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Related Products Slider */}
                    <div className="space-extra-top shop-details-card">
                        <div className="row justify-content-between">
                            <div className="col-md-6">
                                <h2 className="sec-title">Related Products.</h2>
                            </div>
                        </div>
                        <Slider {...settings} className="row global-carousel">
                            {relatedProducts.map((item) => (
                                <div key={item.id} className="col-lg-3 col-md-6">
                                    <div className="product-card product-card-extra-style-space">
                                        <div className="product-img">
                                            <Image src={item.image} alt={item.title} width={580} height={580}/>
                                            <div className="actions">
                                                <Link href={`/shop/${item.id}`} className="icon-btn"><i className="ri-eye-line"></i></Link>
                                                {/* 4. Related Item Global Actions */}
                                                <button 
                                                    className="icon-btn" 
                                                    onClick={() => addToCart(item, 1)}
                                                >
                                                    <i className="ri-shopping-cart-line"></i>
                                                </button>
                                                <button 
                                                    className="icon-btn" 
                                                    onClick={() => addToWishlist(item)}
                                                >
                                                    <i className="ri-heart-line"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="product-title">
                                                <Link href={`/shop/${item.id}`}>{item.title}</Link>
                                            </h3>
                                            <span className="price">${item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;