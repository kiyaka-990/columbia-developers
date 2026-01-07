"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProductPage() {
    const [formData, setFormData] = useState({
        title: "", price: "", category: "", img: ""
    });
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/admin/products", {
            method: "POST",
            body: JSON.stringify({
                ...formData,
                price: parseFloat(formData.price) // Ensure price is a number
            }),
        });

        if (res.ok) {
            router.push("/admin/manage");
        } else {
            alert("Error adding product");
        }
    };

    return (
        <div className="container py-5">
            <h2>Add New Product</h2>
            <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
                <input className="form-control mb-2" placeholder="Title" onChange={e => setFormData({...formData, title: e.target.value})} required />
                <input className="form-control mb-2" type="number" placeholder="Price" onChange={e => setFormData({...formData, price: e.target.value})} required />
                <input className="form-control mb-2" placeholder="Category" onChange={e => setFormData({...formData, category: e.target.value})} required />
                <input className="form-control mb-3" placeholder="Image URL" onChange={e => setFormData({...formData, img: e.target.value})} required />
                <button type="submit" className="btn btn-primary" style={{backgroundColor: '#e23212ff', border: 'none'}}>Save Product</button>
            </form>
        </div>
    );
}