export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    try {
        // In Next.js 14/15, it's safer to destructure params inside the try block
        const { id } = params;

        if (!id) {
            return NextResponse.json({ error: "Product ID is required" }, { status: 400 });
        }

        const product = await prisma.product.findUnique({
            where: { id: id },
        });

        if (!product) {
            return NextResponse.json({ error: "Product not found" }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        console.error("Error fetching product by ID:", error.message);
        
        // Return a neutral response instead of throwing an error to pass the build collector
        return NextResponse.json({ error: "Database unreachable" }, { status: 500 });
    }
}