import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function ProductList() {
    try {
        // CALL DATABASE DIRECTLY - This avoids the "Failed to parse URL" error
        const products = await prisma.product.findMany({
            orderBy: { id: 'desc' }
        });

        if (!products || products.length === 0) {
            return <div className="text-center py-5">No products found in inventory.</div>;
        }

        return (
            <section className="product-section py-5">
                <div className="container">
                    <h2 className="text-center mb-4">Our Products</h2>
                    <div className="row">
                        {products.map((product) => (
                            <div key={product.id} className="col-md-4 mb-4">
                                <div className="card h-100 shadow-sm border-0">
                                    <div style={{ position: 'relative', height: '250px' }}>
                                        <Image 
                                            src={product.img || 'https://via.placeholder.com/300'} 
                                            alt={product.title} 
                                            fill 
                                            className="card-img-top object-fit-cover rounded-top"
                                        />
                                    </div>
                                    <div className="card-body text-center">
                                        <h5 className="card-title fw-bold">{product.title}</h5>
                                        <p className="card-text text-primary fs-4">${product.price}</p>
                                        <span className="badge bg-secondary">{product.category}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        );
    } catch (error) {
        console.error("Database Load Error:", error);
        return <div className="text-center py-5 text-danger">Unable to load products at this time.</div>;
    }
}