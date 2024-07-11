import { NextResponse } from "next/server";
import { user } from '../../util/db'

export function GET(req, res) {
    const data = user;
    console.log(data)
    return NextResponse.json(data)
}

export async function POST(req) {
    let payload = await req.json()
    console.log(payload.result)
    if (!payload.result) {
        return NextResponse.json({ result: "enter proper entries" })
    }
    return NextResponse.json({ result: "hi piyush" })
}