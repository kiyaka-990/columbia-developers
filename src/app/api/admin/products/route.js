// src/app/api/admin/products/route.js
export async function POST(request) {
  try {
    // ... security checks ...
    const body = await request.json();
    
    const newProduct = await prisma.product.create({
      data: {
        title: body.title,
        price: parseFloat(body.price), // Ensure this is a number
        category: body.category,
        img: body.img,
        popularity: 0,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    // This log is crucial! Look for this in your Vercel logs
    console.error("PRISMA_SAVE_ERROR:", error); 
    return NextResponse.json({ 
        error: "Database save failed", 
        details: error.message 
    }, { status: 500 });
  }
}