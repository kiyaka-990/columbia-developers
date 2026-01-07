// src/sections/products/ProductList.jsx
import { prisma } from "@/lib/prisma";

export default async function ProductList() {
    // Direct database call works on the server; fetch("/") does not.
    const products = await prisma.product.findMany({
        orderBy: { id: 'desc' }
    });

    if (!products || products.length === 0) return <p>No products.</p>;

    return (
        <div className="row">
            {products.map(p => (
                <div key={p.id}>{p.title}</div> 
            ))}
        </div>
    );
}