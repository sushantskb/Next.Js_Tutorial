"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState();
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(file);
    const data = new FormData();
    data.set('file', file);
    let result = await fetch("api/upload", {
      method: 'POST',
      body: data,
    });
    result = await result.json();
    console.log(result);
    if(result.success){
      alert("file uploaded")
    }
  }
  return (
    <main className={styles.main}>
      <h1>Upload Image</h1>
      <form onSubmit={onSubmit} >
        <input 
          type="file" 
          name="file"
          onChange={(e) => setFile(e.target.files?.[0])}
        />
        <button type="submit">Upload Image</button>
      </form>
    </main>
  );
}
