"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./page.module.css"
const home = ()=> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  }
  return (
    <main>
      <h1>Basics Routing || Making New Page</h1>
      <Link href="/login">Go to Login</Link>
      <br />
      <br />
      <Link href="/about">Go to About</Link>
      <br />
      <br />

      <button onClick={()=> navigate("/login")}>Go to Login</button>
      <br />
      <br />
      <button onClick={()=> navigate("/about")}>Go to About</button>
      <br />
      <br />
      <button onClick={() => navigate("/studentList")}>Student List</button>
      <br />
      <br />
      <button onClick={() => navigate("/study")}>Study Details</button>
    </main>
  );
}

export default home;