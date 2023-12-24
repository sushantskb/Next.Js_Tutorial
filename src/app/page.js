/* eslint-disable react-hooks/rules-of-hooks */
"use client"; // this needs to be here, to fix the error while passing a event like alert()
import { useState } from "react";
import styles from "./page.module.css";
const page = () => {

  //state
  const [name, setName] = useState("Rahul");

  // const apple = () => {
  //   alert("Hello world")
  // }

  // with parameter
  const apple = (item) => {
    alert("Hello " + item);
  };

  const handleClick = () => {
    setName("Sushant");
  }

  // component inside component
  const InnerComp = () => {
    return <h2>I am inner component</h2>;
  }

  return (
    <main className={styles.main}>
      <h1>Events, Functions and State {name}</h1>
      {/* <button onClick={()=> {alert("Hello Next.js")}}>Click Me</button> */}

      {/* <button onClick={apple}>Click me</button> */}

      {/* <button onClick={() => apple("Sushant")}>Click me</button> */}

      <button onClick={handleClick}>Click Me</button>

      {/* Calling as a component */}
      {/* <InnerComp /> */}

      {/* Calling as a function */}
      {InnerComp()}

    </main>
  );
};

export default page;
