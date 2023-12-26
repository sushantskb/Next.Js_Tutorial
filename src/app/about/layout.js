import Link from "next/link";
import "./about.css";
const Layout = ({children}) => {
    return(
        <>
        <ul className="menu-list">
                <li className="logo">About Navabar</li>
                <li><Link href="/about">About Main</Link></li>
                <li><Link href="/about/aboutCollege">About College</Link></li>
            </ul>
        {children}
        </>
    )
}

export default Layout;