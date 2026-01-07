export const dynamic = 'force-dynamic';
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function DELETE(req, { params }) {
    try {
        // 1. Validate the Admin Cookie for security
        const cookieStore = cookies();
        const token = cookieStore.get('admin_token')?.value;

        // Check if the cookie matches the password in your .env file
        if (token !== process.env.ADMIN_PASSWORD) {
            console.error("Delete failed: Unauthorized access attempt");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // 2. Extract the ID from the URL parameters
        const { id } = params;
        if (!id) {
            return NextResponse.json({ error: "Product ID is missing" }, { status: 400 });
        }

        // 3. Perform the Delete action in the database
        await prisma.product.delete({
            where: { id: id },
        });

        return NextResponse.json({ message: "Product deleted successfully" }, { status: 200 });

    } catch (error) {
        console.error("DATABASE_DELETE_ERROR:", error);
        
        // Handle case where product might have been already deleted (Prisma error P2025)
        if (error.code === 'P2025') {
            return NextResponse.json({ error: "Product not found in database" }, { status: 404 });
        }

        // Handle general server or connection errors
        return NextResponse.json({ 
            error: "Server failed to delete product", 
            details: error.message 
        }, { status: 500 });
    }
}