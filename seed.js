import mongoose from "mongoose";
import Product from "./models/Product.js"; // Adjust the path to your schema file

// const MONGODB_URI = "mongodb://127.0.0.1:27017/afrimart";
const MONGODB_URI = process.env.MONGO_URI + process.env.DATABASE_NAME;

const products = [
  {
    name: "Ultra-Comfort Running Sneakers",
    description: "Experience unparalleled comfort with our latest breathable mesh running sneakers designed for long-distance durability.",
    price: mongoose.Types.Decimal128.fromString("89.99"),
    discount_percentage: 15,
    brand: "SwiftStep",
    category: "Shoes",
    qty: 50,
    product_image_url: "https://example.com/images/sneakers.jpg",
    rating: mongoose.Types.Decimal128.fromString("4.5"),
    features: ["Breathable Mesh", "Memory Foam Insole", "Slip-resistant"],
    specifications: { weight: "250g", material: "Synthetic" },
    color: ["Blue", "Grey", "Black"],
    warranty: { period: "1 year", type: "Manufacturer" },
    deal_tag: "Flash",
    is_new: true,
  },
  {
    name: "Ergonomic Office Task Chair",
    description: "Upgrade your workspace with this high-back ergonomic chair featuring adjustable lumbar support and mesh backing.",
    price: mongoose.Types.Decimal128.fromString("199.50"),
    discount_percentage: 0,
    brand: "WorkFlow",
    category: "Furniture",
    qty: 20,
    product_image_url: "https://example.com/images/chair.jpg",
    rating: mongoose.Types.Decimal128.fromString("4.8"),
    features: ["Adjustable Height", "360-degree Swivel", "Lumbar Support"],
    specifications: { max_weight: "300lbs", assembly_required: true },
    color: ["Black"],
    warranty: { period: "2 years", type: "Limited" },
    deal_tag: "Deal",
    is_new: false,
  },
  {
    name: "Stainless Steel Smart Kettle",
    description: "A fast-boiling 1.7L electric kettle with precise temperature control and a sleek brushed metal finish.",
    price: mongoose.Types.Decimal128.fromString("54.00"),
    discount_percentage: 10,
    brand: "KitchenPro",
    category: "Home",
    qty: 100,
    product_image_url: "https://example.com/images/kettle.jpg",
    rating: mongoose.Types.Decimal128.fromString("4.2"),
    features: ["Auto-shutoff", "Keep Warm Function", "LED Display"],
    specifications: { capacity: "1.7L", wattage: "1500W" },
    color: ["Silver"],
    warranty: { period: "6 months", type: "Replacement" },
    deal_tag: null,
    is_new: true,
  }
];

export const seedDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB...");

    // Clear existing products to avoid duplicates during testing
    await Product.deleteMany();
    console.log("Existing products cleared.");

    // Insert seed data
    await Product.insertMany(products);
    console.log("Database seeded successfully! 🌱");
    // console.log("Inserted products:", products);

    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

