import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function POST(request) {
  try {
    // 1. Security Check: Verify Admin Cookie
    const cookieStore = cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (token !== process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // 2. Parse the form data
    const body = await request.json();
    const { title, price, category, img } = body;

    // 3. Save to Railway Database
    const newProduct = await prisma.product.create({
      data: {
        title,
        price: parseFloat(price),
        category,
        img,
        // Adding defaults for required schema fields if they exist
        popularity: 0,
      },
    });

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error("Request error", error);
    return NextResponse.json({ error: "Error creating product" }, { status: 500 });
  }
}