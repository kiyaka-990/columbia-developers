export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

// GET all products
export async function GET() {
    try {
        const products = await prisma.product.findMany();
        return NextResponse.json(products);
    } catch (error) {
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}

// POST new product
export async function POST(req) {
    try {
        const body = await req.json();
        if (!body.title || !body.price) {
            return NextResponse.json({ error: "Missing fields" }, { status: 400 });
        }

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