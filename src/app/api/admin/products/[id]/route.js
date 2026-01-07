export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

// This handles requests to /api/admin/products/SOME_ID
export async function DELETE(req, { params }) {
    try {
        const { id } = params;

        // Security Check
        const cookieStore = cookies();
        const token = cookieStore.get('admin_token')?.value;
        if (token !== process.env.ADMIN_PASSWORD) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await prisma.product.delete({
            where: { id: id },
        });

        return NextResponse.json({ message: "Product deleted" }, { status: 200 });
    } catch (error) {
        console.error("Delete Error:", error);
        return NextResponse.json({ error: "Delete failed" }, { status: 500 });
    }
}

// Optional: Add GET here if you want to fetch a single product for an Edit page
export async function GET(req, { params }) {
    const product = await prisma.product.findUnique({ where: { id: params.id } });
    return NextResponse.json(product);
}