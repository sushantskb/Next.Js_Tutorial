"use client";

import { useState } from "react";

export default function DeleteUser(props) {
  const [message, setMessage] = useState("");
  let userId = props.id;
  console.log(userId);
  const deleteUser = async () => {
    let result = await fetch("http://localhost:3000/api/users/" + userId,{
        method: "delete"
    });
    result = await result.json();
    if (result.success) {
      setMessage("User Deleted")
    } else {
      setMessage("Some error occured");
    }
  };
  return (
    <>
      <button onClick={deleteUser}>Delete</button>
      {message != "" ? <p style={{color : message === "User Deleted" ? "green" : "red"}}>{message}</p> : null}
    </>
  );
}
