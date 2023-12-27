"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "./login.css";
const Layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      {pathname !== "/login/studentLogin" ? (
        <ul className="menu-list">
          <li className="logo">Login Navabar</li>
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/studentLogin">Student Login</Link>
          </li>
        </ul>
      ) : (
        <ul className="menu-list">
          <li className="logo">Login Navabar</li>
          <li>
            <Link href="/login/studentLogin">Student Login</Link>
          </li>
        </ul>
      )}

      {children}
    </>
  );
};

export default Layout;
