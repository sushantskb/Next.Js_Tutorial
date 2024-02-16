import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name : {
        type: String
    },
    price : {
        type : String
    },
    company : {
        type : String
    },
    color : {
        type : String
    },
    category : {
        type : String
    },
});

export const Product = mongoose.models.products || mongoose.model("products", productSchema);