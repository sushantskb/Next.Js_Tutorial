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