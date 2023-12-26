import Link from "next/link";
import React from "react"
import "./login.css"
const Layout = ({children}) => {
    return (
        <>
                

            <ul className="menu-list">
                <li className="logo">Login Navabar</li>
                <li><Link href="/login">Login Main</Link></li>
                <li><Link href="/login/studentLogin">Student Login</Link></li>
            </ul>
            {children}
        </>
    )
}

export default Layout;