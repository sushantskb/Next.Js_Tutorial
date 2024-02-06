import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, content){
    console.log(user, content.params.id);
    const userData = user.filter((item)=>item.id == content.params.id);
    return NextResponse.json(userData.length == 0? {result: "No data found"}:{result: userData[0]}, {status: 200});
}