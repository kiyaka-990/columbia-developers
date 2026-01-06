export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma'; // Import from the new file
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    try {
        const { id } = params;

        const product = await prisma.product.findUnique({
            where: { id: id },
        });

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}

// Keep your POST function here too, but use 'prisma.product.create'