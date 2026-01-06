"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminDashboard() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Load products from Railway
    const fetchProducts = async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
    };

    useEffect(() => { fetchProducts(); }, []);

    const deleteProduct = async (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
            fetchProducts(); // Refresh list
        }
    };

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Product Management</h2>
                <Link href="/admin/add-product" className="btn btn-primary" style={{backgroundColor: '#EA5501', border: 'none'}}>
                    + Add New Product
                </Link>
            </div>

            <table className="table table-hover border">
                <thead className="table-light">
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p) => (
                        <tr key={p.id}>
                            <td><Image src={p.img} width={50} height={50} alt="thumb" className="rounded"/></td>
                            <td>{p.title}</td>
                            <td>{p.category}</td>
                            <td>${p.price}</td>
                            <td>
                                <button onClick={() => deleteProduct(p.id)} className="btn btn-sm btn-outline-danger">
                                    <i className="ri-delete-bin-line"></i>
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}