"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
    // Get the base URL: Use the browser's location if available, 
    // otherwise default to a relative path for client-side only
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
    
    const res = await fetch(`${baseUrl}/api/products`, {
        // Adding cache: 'no-store' ensures you always get fresh data from Railway
        cache: 'no-store' 
    });
    const data = await res.json();
    setProducts(data);
    setLoading(false);
};

    useEffect(() => { fetchProducts(); }, []);

    const handleDelete = async (id) => {
        if (confirm("Delete this product?")) {
            const res = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
            if (res.ok) fetchProducts();
            else alert("Delete failed");
        }
    };

    if (loading) return <div className="p-5 text-center">Loading...</div>;

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2>Inventory Management</h2>
                <Link href="/admin/add-product" className="btn btn-primary" style={{backgroundColor: '#e62a12', border: 'none'}}>+ Add New</Link>
            </div>
            <div className="card shadow-sm">
                <table className="table">
                    <thead className="table-dark">
                        <tr><th>Image</th><th>Name</th><th>Price</th><th className="text-end">Actions</th></tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td><Image src={p.img} alt={p.title} width={50} height={50} className="rounded" /></td>
                                <td>{p.title}</td>
                                <td>${p.price}</td>
                                <td className="text-end">
                                    <button onClick={() => handleDelete(p.id)} className="btn btn-sm btn-outline-danger">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}