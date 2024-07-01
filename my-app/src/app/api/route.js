import { NextResponse } from "next/server";
import { user } from '../../util/db'
export function GET(req, res) {
    const data = user;
    console.log(data)
    return NextResponse.json(data)
}