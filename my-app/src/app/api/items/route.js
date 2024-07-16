import { connectionStr } from "@/util/connection";
import { Item } from "@/util/model/item";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
    await mongoose.connect(connectionStr)
    const data = await Item.find();
    console.log(data)
    return NextResponse.json({ message: "hi from products" })
}