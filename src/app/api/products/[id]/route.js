import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        const body = await req.json();
        
        const newProduct = await prisma.product.create({
            data: {
                title: body.title,
                price: parseFloat(body.price),
                oldPrice: body.oldPrice ? parseFloat(body.oldPrice) : null,
                img: body.img, // This will be the https://res.cloudinary.com/... URL
                category: body.category,
                // Tags are handled as a string for simplicity in the DB
                tags: body.tags, 
                popularity: 5,
            },
        });

        return NextResponse.json(newProduct, { status: 201 });
    } catch (error) {
        console.error("Prisma Create Error:", error);
        return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
    }
}