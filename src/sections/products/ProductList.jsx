async function getProducts() {
  // We use the absolute URL for server-side fetches in Next.js
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || ''}/api/products`, {
    cache: 'no-store', // Ensures we always get fresh data from the DB
  });

  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }

  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="row g-4">
      {products.map((product) => (
        <div key={product.id} className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img 
              src={product.img} 
              className="card-img-top" 
              alt={product.title} 
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="text-muted">{product.category}</p>
              <div className="d-flex justify-content-between align-items-center">
                <span className="h5 mb-0">${product.price}</span>
                {product.oldPrice && (
                  <span className="text-decoration-line-through text-danger">
                    ${product.oldPrice}
                  </span>
                )}
              </div>
              <button className="btn btn-primary w-100 mt-3">Add to Cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}