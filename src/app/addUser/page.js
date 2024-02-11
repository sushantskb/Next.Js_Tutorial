"use client";
import { useState } from "react";
import "../styles.css";

const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const addUser = async (e) => {
    e.preventDefault();
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({ name, age, email }),
    });
    response = await response.json();
    // console.log(response);
    if (response.success) {
      setMessage("User Added");
    } else {
      setMessage("Some Error occured");
    }
  };
  return (
    <div>
      <div className="container">
        <h1>Add new User</h1>
        <div className="form">
          {message != "" ? (
            <p style={{ color: message === "User Added" ? "green" : "red" }}>
              {message}
            </p>
          ) : null}
          <input
            className="input-field"
            type="text"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="input-field"
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="input-field"
            value={age}
            type="text"
            placeholder="Enter your age"
            onChange={(e) => setAge(e.target.value)}
          />
          <button type="submit" className="btn" onClick={addUser}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
