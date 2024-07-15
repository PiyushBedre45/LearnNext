import { NextResponse } from "next/server";

export async function GET(req, res) {
    console.log(res)
    const studentDetails = res.params.mentors;
    return NextResponse.json({ result: studentDetails })
}
