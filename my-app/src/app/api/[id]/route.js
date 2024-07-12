import { NextResponse } from "next/server";
import { user } from '../../../util/db'


export function GET(req, res) {

    const data = user;

    console.log(res.params.id)
    console.log(data)

    const userData = user.filter((item) => item.id == res.params.id)
    return NextResponse.json(userData)
    // return NextResponse.json(userData.length == !0 ? { result: userData } : { result: "Data not found" })

}

export async function PUT(req, res) {
    let payload = await req.json()
    let userId = res.params.id; // Taking id froms params
    payload.id = userId;
    if (!payload.id || !payload.name) {
        return NextResponse.json({ result: false, message: "All Entries should be there" }, { status: false })

    }
    return NextResponse.json({ result: true, payload })

}