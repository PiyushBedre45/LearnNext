import { NextResponse } from "next/server";
import { user } from '../../../util/db'
export function GET(req, res) {
    const data = user;
    console.log(res.params.id)
    console.log(data)
    const userData = user.filter((item) => item.id == res.params.id)
    return NextResponse.json(userData)
}