import { user } from "@/utils/db";
import { NextResponse } from "next/server";

export function GET(req, content) {
//   console.log(user, content.params.id);
  const userData = user.filter((item) => item.id == content.params.id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No data found" }
      : { result: userData[0] },
    { status: 200 }
  );
}

export async function PUT(request, content){
    let payload = await request.json();
    // let userId = content.params.id;
    payload.id = content.params.id;
    console.log(payload);

    if(!payload.id || !payload.name || !payload.age || !payload.email){
        return NextResponse.json({result : "Data is not valid", success: false}, {status: 404});
    }

    return NextResponse.json({result :payload, success: true},{status: 201});
}

export function DELETE(request, content){
  let id = content.params.id; 
  if(id){
    return NextResponse.json({result: "User Deleted", success: true}, {status: 201})
  } else {
    return NextResponse.json({result: "Internal Error", success: false}, {status: 404});
  }
}