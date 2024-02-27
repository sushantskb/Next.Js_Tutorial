// api/products.js

import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionString } from "@/lib/db";
import { Product } from "@/lib/models/product";

mongoose.connect(connectionString).then(() => {
  console.log("Connected to MongoDB successfully");
}).catch((err) => {
  console.error("Failed to connect to MongoDB:", err);
});

export async function GET() {
    try {
      const data = await Product.find();
      return NextResponse.json({ result: data, success: true });
    } catch (error) {
      console.error("Error fetching products:", error);
      return NextResponse.json({ result: [], message: "Failed to fetch products" }, { success: false });
    }
  }
  

export async function POST(req) {
  try {
    const data = await req.json();
    const product = new Product(data);
    const result = await product.save();
    return NextResponse.json({ result, success: true });
  } catch (error) {
    console.error("Error creating product:", error);
    return NextResponse.json({ result: null, message: "Failed to create product" }, { success: false });
  }
}
