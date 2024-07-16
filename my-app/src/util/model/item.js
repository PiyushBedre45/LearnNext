import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: String,
    discription: String,
    price: String,
    rating: String
});

export const Item = mongoose.models.Item || mongoose.model("Item", productSchema);