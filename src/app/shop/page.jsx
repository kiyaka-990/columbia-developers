export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';

export async function GET() {
    // If we are in the Vercel build phase, return empty and exit before Prisma is even mentioned
    if (process.env.NEXT_PHASE === 'phase-production-build') {
        return NextResponse.json([]);
    }

    try {
        // Dynamically import only at runtime
        const { prisma } = await import('@/lib/prisma');
        const products = await prisma.product.findMany();
        return NextResponse.json(products || []);
    } catch (error) {
        console.error("Database connection failed:", error.message);
        return NextResponse.json([], { status: 200 }); 
    }
}

export async function POST(req) {
    try {
        const { prisma } = await import('@/lib/prisma');
        const body = await req.json();
        
        const newProduct = await prisma.product.create({
            data: {
                title: body.title,
                price: parseFloat(body.price),
                oldPrice: body.oldPrice ? parseFloat(body.oldPrice) : null,
                img: body.img,
                category: body.category,
                popularity: 5,
            },
        });
        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "Save failed" }, { status: 500 });
    }
}