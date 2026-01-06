export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request) {
    // If we are currently building, skip the DB call entirely
    if (process.env.NEXT_PHASE === 'phase-production-build') {
        return NextResponse.json([]);
    }

    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products || []);
    } catch (error) {
        console.error("Database error:", error.message);
        return NextResponse.json([], { status: 200 }); 
    }
}

export async function POST(req) {
    try {
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