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
    if (!payload.id || !payload.name || !payload.age || !payload.email) {
        return NextResponse.json({ result: false, message: "All Entries should be there" }, { status: false })
    }
    return NextResponse.json({ result: true, payload })

}

export function DELETE(req, res) {
    let id = res.params.id;
    if (id) {
        return NextResponse.json({ result: "user Delete", success: true }, { status: 200 })
    }
    else {

        return NextResponse.json({ result: "Invalid user ", success: false }, { status: 200 })
    }
}