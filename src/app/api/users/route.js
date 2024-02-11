import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(){
    const data = user;
    return NextResponse.json(data, {status: 200});
}

export async function POST(request){
    let payload = await request.json();
    console.log(payload);
    if(!payload.name || !payload.age || !payload.email){
        return NextResponse.json({result : "require fields are not found", success: false}, {status: 404})
    }  
    return NextResponse.json({result:"User added", success: true}, {status: 200})
}