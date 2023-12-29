import { NextResponse } from "next/server"

export const middleware = (request) => {
    // the below code will redirect to the login route....i.e, if we made request from any of the routes such as "/", "/about" we will be redirected to login route
    // if(request.nextUrl.pathname !== "/login"){
    //     return NextResponse.redirect(new URL("/login", request.url));
    // }

    return NextResponse.redirect(new URL("/login", request.url));
}

// This config method checks the certain routes for which we want to redirect the route to /login
export const config={
    matcher : ["/about/:path*", "/studentList/:path*"]
}

