"use client"
import Link from "next/link";
import style from "./style.module.css";
import { useState } from "react";
const Home = () => {
  const [color, setColor] = useState("red");
  const handleClick = () => {
    setColor("color")
  }
  return <div>
    <h1 
      className={color == "red" ? style.red : style.green}
    >
      Conditional CSS
    </h1>
    <button className={style.btn} onClick={handleClick}>Update Color</button>
  </div>
}

export default Home;