"use client";
import React, { useState } from 'react';
import { Plus, Package, Trash2, Edit, UploadCloud } from 'lucide-react';

export default function AdminPanel() {
  const [product, setProduct] = useState({ name: '', price: '', image: '' });

  const handleUpload = async (e) => {
    e.preventDefault();
    // Logic to send product to your Rust API
    const response = await fetch("https://your-api.railway.app/api/admin/add-product", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product)
    });
    if(response.ok) alert("Item added to Columbia Shop!");
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f4f4f4' }}>
      {/* Admin Sidebar */}
      <aside style={{ width: '250px', backgroundColor: '#000', color: '#fff', padding: '20px' }}>
        <h2 style={{ color: '#e31e24', fontWeight: '800' }}>COLUMBIA ADMIN</h2>
        <nav style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button style={adminNavStyle}><Package size={18}/> Inventory</button>
          <button style={adminNavStyle}><Plus size={18}/> Add New Item</button>
        </nav>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px' }}>
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '12px', maxWidth: '600px' }}>
          <h3 style={{ marginBottom: '20px', fontWeight: '700' }}>Upload New Product</h3>
          <form onSubmit={handleUpload}>
            <label style={labelStyle}>Product Name</label>
            <input 
              style={inputStyle} 
              placeholder="e.g. Premium Cement" 
              onChange={(e) => setProduct({...product, name: e.target.value})}
            />
            
            <label style={labelStyle}>Price (KES)</label>
            <input 
              style={inputStyle} 
              placeholder="500" 
              onChange={(e) => setProduct({...product, price: e.target.value})}
            />

            <div style={uploadBoxStyle}>
              <UploadCloud size={40} color="#ccc" />
              <p>Click to upload product image</p>
              <input type="file" style={{ opacity: 0, position: 'absolute', cursor: 'pointer' }} />
            </div>

            <button type="submit" style={submitBtnStyle}>PUBLISH TO SHOP</button>
          </form>
        </div>
      </main>
    </div>
  );
}

// Styles
const adminNavStyle = { background: 'transparent', border: 'none', color: '#fff', textAlign: 'left', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '10px' };
const inputStyle = { width: '100%', padding: '12px', marginBottom: '20px', borderRadius: '6px', border: '1px solid #ddd' };
const labelStyle = { display: 'block', fontSize: '12px', fontWeight: 'bold', marginBottom: '5px' };
const uploadBoxStyle = { border: '2px dashed #ddd', padding: '40px', textAlign: 'center', borderRadius: '8px', marginBottom: '20px', position: 'relative' };
const submitBtnStyle = { width: '100%', padding: '15px', backgroundColor: '#e31e24', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' };