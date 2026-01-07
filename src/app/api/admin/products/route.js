import { NextResponse } from "next/server";
import { cookies } from "next/headers";
// Import the stable prisma instance
import { prisma } from "@/lib/prisma"; 

export async function POST(request) {
  try {
    // 1. Security Check
    const cookieStore = cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse and Validate Data
    const body = await request.json();
    const { title, price, category, img } = body;

    if (!title || !price || !img) {
      return NextResponse.json({ error: "Missing required fields (Title, Price, or Image)" }, { status: 400 });
    }

    // 3. Save to Database
    const newProduct = await prisma.product.create({
      data: {
        title,
        price: parseFloat(price),
        category: category || "General",
        img,
        popularity: 0,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    // This will show up in your Vercel Logs or Terminal
    console.error("CRITICAL_SAVE_ERROR:", error); 
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}