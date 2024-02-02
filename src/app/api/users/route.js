import { NextResponse } from "next/server";

export async function GET(request){
    return NextResponse.json({"name" : "Sushant Kumar Bishoi", "age" : "22 years", "gender" : "male"}, {status: 200})
}