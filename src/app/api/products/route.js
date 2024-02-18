import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionString } from "@/lib/db";
import { Product } from "@/lib/models/product";
export async function GET(){
    await mongoose.connect(connectionString).then(console.log("connected")).catch((err) => console.log(err));
    let data = await Product.find();
    console.log(data);
    return NextResponse.json({result : data})
}

export async function POST(req){
    const data = await req.json();
    await mongoose.connect(connectionString).then(console.log("Connected")).catch((err)=>console.log(err));
    let product = new Product(data);
    const result = await product.save();
    return NextResponse.json({ result, success: true});
}