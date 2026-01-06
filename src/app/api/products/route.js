import { NextResponse } from 'next/server';

/**
 * PATH BREAKDOWN:
 * Current: src/app/api/products/route.js
 * 1. ../ (products -> api)
 * 2. ../../ (api -> app)
 * 3. ../../../ (app -> src)
 * 4. ../../../../lib/prisma (src -> root -> src -> lib)
 * * However, if 'src' is your root, use: ../../../lib/prisma
 */

import prisma from '../../../lib/prisma';

export async function GET() {
  try {
    // Basic check to ensure prisma is defined
    if (!prisma) {
      throw new Error("Prisma client is not initialized or exported correctly in src/lib/prisma.js");
    }

    const products = await prisma.product.findMany();
    return NextResponse.json(products);
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error", message: error.message },
      { status: 500 }
    );
  }
}