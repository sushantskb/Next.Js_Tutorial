"use client"
import React, { useEffect, useState } from "react";
import "../../../styles.css";
const Page = ({params}) => {
    let id = params.userId;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");
    const [message, setMessage] = useState("");
    
    useEffect(()=> {
        getUserDetails()
    }, [])

    const getUserDetails = async () => {
        let data = await fetch("http://localhost:3000/api/users/"+id);
        data = await data.json();
        setName(data.result.name);
        setEmail(data.result.email);
        setAge(data.result.age);
    }
    const updateUser = async() => {
        let result = await fetch("http://localhost:3000/api/users/" + id, {
            method: "PUT",
            body: JSON.stringify({name, age, email})
        });
        result = await  result.json();
        console.log(result);

        if(result.success){
            setMessage("User Updated")
        } else {
            setMessage("Some error occured");
        }
    }
  return (
    <div>
      <div className="container">
        <h1>Update User</h1>
        <div className="form">
          {message != "" ? (
            <p style={{ color: message === "User Updated" ? "green" : "red" }}>
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
          <button type="submit" className="btn" onClick={updateUser}>
            Updated
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
