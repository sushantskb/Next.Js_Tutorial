import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { connectionString } from "@/lib/db"; 
import { Product } from "@/lib/models/product";
mongoose.connect(connectionString).then(() => {
    console.log("Connected to MongoDB successfully");
  }).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
  });
export async function PUT(req, cont){
    // console.log(cont);
    const productId = cont.params.productid;
    const filter = {_id: productId};
    const payload = await req.json();
    console.log(filter);
    console.log(payload);
    let result = await Product.findOneAndUpdate(filter, payload);
    return NextResponse.json({result, success: true})
}