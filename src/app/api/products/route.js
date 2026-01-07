
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import { NextResponse } from 'next/server';

export async function GET() {
    // If we are in the build phase, stop immediately.
    if (process.env.NEXT_PHASE === 'phase-production-build') {
        return new Response(JSON.stringify([]), { status: 200 });
    }

    try {
        // We use the import inside the handler to prevent top-level engine boot
        const { prisma } = await import('@/lib/prisma');
        const products = await prisma.product.findMany();
        return NextResponse.json(products || []);
    } catch (error) {
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