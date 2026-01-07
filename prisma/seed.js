// Use this version to ensure it finds the client correctly
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');

  // Optional: Clear existing data
  // await prisma.product.deleteMany();

  const products = [
    {
      title: "Columbia Classic T-Shirt",
      price: 25.00,
      oldPrice: 30.00,
      img: "https://res.cloudinary.com/demo/image/upload/sample.jpg",
      category: "Apparel",
      popularity: 10,
      sku: "COL-TSHIRT-01",
      shortDescription: "High-quality cotton tee.",
      fullDescription: "A comfortable and stylish t-shirt perfect for everyday wear."
    }
  ];

  for (const p of products) {
    const product = await prisma.product.upsert({
      where: { sku: p.sku }, // This prevents errors if the SKU already exists
      update: {},
      create: p,
    });
    console.log(`Created/Verified product: ${product.title}`);
  }

  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });