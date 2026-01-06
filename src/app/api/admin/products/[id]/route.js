import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = global.prisma ?? new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

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
        console.error("Save Error:", error);
        return NextResponse.json({ error: "Failed to save to Railway" }, { status: 500 });
    }
}