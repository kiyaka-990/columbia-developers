export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    try {
        // Await params in newer Next.js versions to be safe
        const { id } = params; 

        const product = await prisma.product.findUnique({
            where: { id: id },
        });

        if (!product) {
            return NextResponse.json({ error: "Not found" }, { status: 404 });
        }
        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: "Database error" }, { status: 500 });
    }
}