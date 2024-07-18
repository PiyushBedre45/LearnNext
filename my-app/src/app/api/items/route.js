import { connectionStr } from "@/util/connection";
import { Item } from "@/util/model/item";
import mongoose from "mongoose";

import { NextResponse } from "next/server";

//  Get Request for data 
export async function GET() {
    await mongoose.connect(connectionStr)
    const data = await Item.find();
    console.log(data)
    return NextResponse.json({ result: data })
}

// Post Request 
export async function POST(request) {
    await mongoose.connect(connectionStr);

    const itemDetails = await request.json()

    const item = new Item({
        name: itemDetails.name,
        description: itemDetails.description,
        price: itemDetails.price,
        rating: itemDetails.rating
    });
    const result = await item.save();
    return NextResponse.json({ result, success: true });
}