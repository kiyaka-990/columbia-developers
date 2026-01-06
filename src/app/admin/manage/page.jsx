"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ManageProducts() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
    };

    useEffect(() => { fetchProducts(); }, []);

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this product?")) {
            const res = await fetch(`/api/admin/products/${id}`, { method: "DELETE" });
            if (res.ok) fetchProducts(); // Refresh the list after deleting
        }
    };

    if (loading) return <div className="p-5 text-center">Loading Database...</div>;

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 style={{fontWeight: '700'}}>Inventory Management</h2>
                <Link href="/admin/add-product" className="btn btn-primary" style={{backgroundColor: '#EA5501', border: 'none'}}>
                    + Add New Product
                </Link>
            </div>

            <div className="card shadow-sm">
                <table className="table mb-0 align-middle">
                    <thead className="table-dark">
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th className="text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((p) => (
                            <tr key={p.id}>
                                <td>
                                    <div style={{width: '50px', height: '50px', position: 'relative'}}>
                                        <Image src={p.img} alt={p.title} fill className="rounded object-fit-cover" />
                                    </div>
                                </td>
                                <td><strong>{p.title}</strong></td>
                                <td><span className="badge bg-light text-dark border">{p.category}</span></td>
                                <td>${p.price}</td>
                                <td className="text-end">
                                    <button 
                                        onClick={() => handleDelete(p.id)} 
                                        className="btn btn-sm btn-outline-danger"
                                    >
                                        <i className="ri-delete-bin-line"></i> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {products.length === 0 && <p className="text-center p-5">No products found in Railway.</p>}
            </div>
        </div>
    );
}