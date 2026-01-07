import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function ProductList() {
    // 1. DIRECT DATABASE CALL (No fetch needed!)
    const products = await prisma.product.findMany({
        orderBy: { id: 'desc' } // Shows newest products first
    });

    if (products.length === 0) {
        return <p className="text-center py-5">No products found.</p>;
    }

    return (
        <section className="product-section py-5">
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div key={product.id} className="col-md-4 mb-4">
                            <div className="card h-100 shadow-sm">
                                <div style={{ position: 'relative', height: '250px' }}>
                                    <Image 
                                        src={product.img} 
                                        alt={product.title} 
                                        fill 
                                        className="card-img-top object-fit-cover"
                                    />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text text-danger fw-bold">${product.price}</p>
                                    <span className="badge bg-light text-dark border">{product.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}