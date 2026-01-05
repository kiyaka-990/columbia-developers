"use client";
import Link from "next/link";
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { useEffect, useState, useMemo } from "react";
import niceSelect from "react-nice-select";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Image from "next/image";
import { useShop } from "/src/app/context/ShopContext";

const productData = [
    { id: 1, title: "Hardware Toolbox", price: 2500, oldPrice: 3000, img: "/main-assets/img/product/product_1_1.jpg", popularity: 5, category: "Hand Tools", tags: ["New", "Tools"] },
    { id: 2, title: "Drill Machine", price: 2500, oldPrice: 3000, img: "/main-assets/img/product/product_1_2.jpg", popularity: 4, category: "Power Tools", tags: ["Electric", "Heavy"] },
    { id: 3, title: "Claw Hammer", price: 125, oldPrice: 130, img: "/main-assets/img/product/product_1_3.jpg", popularity: 3, category: "Hand Tools", tags: ["Basic"] },
    { id: 4, title: "Chainsaw Machine", price: 1125, oldPrice: 1130, img: "/main-assets/img/product/product_1_4.jpg", popularity: 5, category: "Power Tools", tags: ["Heavy", "Woodwork"] },
    { id: 5, title: "Construction Hat", price: 125, oldPrice: 150, img: "/main-assets/img/product/product_1_5.jpg", popularity: 2, category: "Safety Gear", tags: ["Safety", "New"] },
    { id: 6, title: "Sparta Demolition Hammer", price: 1250, oldPrice: 1500, img: "/main-assets/img/product/product_1_6.jpg", popularity: 4, category: "Power Tools", tags: ["Heavy"] },
    { id: 7, title: "Hitachi Zaxis 110m", price: 2250, oldPrice: 3500, img: "/main-assets/img/product/product_1_7.jpg", popularity: 5, category: "Machinery", tags: ["Industrial"] },
    { id: 8, title: "Sprayer Mowers Machine", price: 320, oldPrice: 450, img: "/main-assets/img/product/product_1_8.jpg", popularity: 1, category: "Garden Tools", tags: ["New"] },
    { id: 9, title: "Compaction Machine", price: 4500, oldPrice: 5500, img: "/main-assets/img/product/product_1_9.jpg", popularity: 3, category: "Machinery", tags: ["Heavy"] },
];

const Product = () => {
    const { addToWishlist, addToCart, wishlist, removeFromWishlist } = useShop();

    // Filtering & Sorting State
    const [priceRange, setPriceRange] = useState([0, 5000]);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("menu_order");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedTag, setSelectedTag] = useState("All");

    // Modal State
    const [isOpen, setIsOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        niceSelect();
    }, []);

    // Extract unique Categories and Tags for UI
    const categories = useMemo(() => ["All", ...new Set(productData.map(p => p.category))], []);
    const allTags = useMemo(() => ["All", ...new Set(productData.flatMap(p => p.tags || []))], []);

    // Filter Logic
    const filteredProducts = useMemo(() => {
        return productData
            .filter(product => {
                const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
                const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase());
                const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
                const matchesTag = selectedTag === "All" || product.tags?.includes(selectedTag);
                return matchesPrice && matchesSearch && matchesCategory && matchesTag;
            })
            .sort((a, b) => {
                if (sortBy === "price") return a.price - b.price;
                if (sortBy === "popularity") return b.popularity - a.popularity;
                return 0;
            });
    }, [priceRange, searchQuery, sortBy, selectedCategory, selectedTag]);

    const isInWishlist = (id) => wishlist.some(item => item.id === id);

    const handleWishlistClick = (product) => {
        if (isInWishlist(product.id)) {
            removeFromWishlist(product.id);
        } else {
            addToWishlist(product);
        }
    };

    const handleOpenModal = (product) => {
        setSelectedProduct(product);
        setQuantity(1);
        setIsOpen(true);
    };

    const handleClosePopup = () => {
        setIsOpen(false);
        setSelectedProduct(null);
    };

    return (
        <section className="space-top space-extra-bottom shop-page-select-contain">
            <div className="container">
                <div className="row flex-row-reverse">
                    <div className="col-xl-9 col-lg-8">
                        {/* Sort Bar */}
                        <div className="shop-sort-bar">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-md">
                                    <p className="woocommerce-result-count">
                                        Showing 1–{filteredProducts.length} of {productData.length} results
                                    </p>
                                </div>
                                <div className="col-md-auto">
                                    <select 
                                        className="single-select orderby" 
                                        value={sortBy} 
                                        onChange={(e) => setSortBy(e.target.value)}
                                    >
                                        <option value="menu_order">Default Sorting</option>
                                        <option value="popularity">Sort by popularity</option>
                                        <option value="price">Sort by price: low to high</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="row gy-40">
                            {filteredProducts.length > 0 ? (
                                filteredProducts.map((product) => (
                                    <div key={product.id} className="col-xl-4 col-md-6 product-space-none">
                                        <div className="product-card">
                                            <div className="product-img">
                                                <Image src={product.img} alt={product.title} width={580} height={580} />
                                                <div className="actions">
                                                    <button onClick={() => handleOpenModal(product)} className="icon-btn" title="Quick View"><i className="ri-eye-line"></i></button>
                                                    <button onClick={() => addToCart(product, 1)} className="icon-btn" title="Add to Cart"><i className="ri-shopping-cart-line"></i></button>
                                                    <button 
                                                        onClick={() => handleWishlistClick(product)} 
                                                        className="icon-btn" 
                                                        style={{ color: isInWishlist(product.id) ? '#EA5501' : 'inherit' }}
                                                    >
                                                        <i className={isInWishlist(product.id) ? "ri-heart-fill" : "ri-heart-line"}></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="product-content">
                                                <div className="star-rating">
                                                    {[...Array(5)].map((_, i) => <i key={i} className="ri-star-fill"></i>)}
                                                </div>
                                                <h3 className="product-title">
                                                    <Link href={`/shop/${product.id}`}>{product.title}</Link>
                                                </h3>
                                                <span className="price">
                                                    <del>${product.oldPrice}</del> ${product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center py-5">
                                    <h4>No products found matching your criteria.</h4>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Filters */}
                    <div className="col-xl-3 col-lg-4">
                        <aside className="sidebar-area">
                            {/* Search */}
                            <div className="widget widget_search">
                                <h3 className="widget_title">Search Here</h3>
                                <div className="search-form">
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                    />
                                    <button type="button"><i className="ri-search-line"></i></button>
                                </div>
                            </div>

                            {/* Product Categories */}
                            <div className="widget">
                                <h3 className="widget_title">Categories</h3>
                                <ul className="list-unstyled">
                                    {categories.map(cat => (
                                        <li key={cat} className="mb-2">
                                            <button 
                                                onClick={() => setSelectedCategory(cat)}
                                                className="border-0 bg-transparent p-0 text-start w-100"
                                                style={{ color: selectedCategory === cat ? '#EA5501' : 'inherit', fontWeight: selectedCategory === cat ? 'bold' : 'normal' }}
                                            >
                                                {cat}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Price Filter */}
                            <div className="widget widget_price_filter">
                                <h4 className="widget_title">Filter By Price</h4>
                                <div className="price_slider_wrapper">
                                    <Slider
                                        range min={0} max={5000}
                                        value={priceRange}
                                        onChange={(val) => setPriceRange(val)}
                                        trackStyle={[{ backgroundColor: '#EA5501' }]}
                                        handleStyle={[{ borderColor: '#EA5501' }, { borderColor: '#EA5501' }]}
                                    />
                                    <div className="price_label mt-3">
                                        Price: ${priceRange[0]} — ${priceRange[1]}
                                    </div>
                                </div>
                            </div>

                            {/* Popular Tags */}
                            <div className="widget">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    {allTags.map(tag => (
                                        <button 
                                            key={tag}
                                            onClick={() => setSelectedTag(tag)}
                                            className="btn btn-sm m-1"
                                            style={{ 
                                                backgroundColor: selectedTag === tag ? '#EA5501' : '#f5f5f5',
                                                color: selectedTag === tag ? '#fff' : '#333',
                                                border: '1px solid #ddd'
                                            }}
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Reset Button */}
                            <button 
                                className="btn btn-outline-dark btn-sm w-100 mt-4"
                                onClick={() => {
                                    setSelectedCategory("All");
                                    setSelectedTag("All");
                                    setPriceRange([0, 5000]);
                                    setSearchQuery("");
                                }}
                            >
                                Reset All Filters
                            </button>
                        </aside>
                    </div>
                </div>
            </div>

            {/* Quick View Modal */}
            <Modal open={isOpen} onClose={handleClosePopup} center classNames={{ modal: 'custom-modal' }}>
                {selectedProduct && (
                    <div className="container bg-white p-4" style={{ maxWidth: '800px', borderRadius: '15px' }}>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <Image src={selectedProduct.img} alt={selectedProduct.title} width={500} height={500} className="img-fluid rounded" />
                            </div>
                            <div className="col-lg-6">
                                <h2 className="product-title mb-2">{selectedProduct.title}</h2>
                                <p className="price h3 text-primary mb-3">${selectedProduct.price}</p>
                                <div className="actions mt-4">
                                    <div className="quantity d-flex align-items-center mb-4">
                                        <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="btn btn-outline-secondary">-</button>
                                        <input type="number" className="form-control mx-2 text-center" style={{ width: '70px' }} value={quantity} readOnly />
                                        <button onClick={() => setQuantity(q => q + 1)} className="btn btn-outline-secondary">+</button>
                                    </div>
                                    <button 
                                        className="btn btn-primary w-100 py-3"
                                        onClick={() => {
                                            addToCart(selectedProduct, quantity);
                                            handleClosePopup();
                                        }}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Product;