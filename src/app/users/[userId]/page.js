import React from 'react'
async function getUser(id){
    let data = await fetch(`http://localhost:3000/api/users/${id}`);
    data = await data.json();
    return data.result;
}
const Page = async({params}) => {
    // console.log(params);
    const user = await getUser(params.userId)
    // console.log(user);
  return (
    <div>
      <h1>User Details</h1>
      <h4>Name : {user.name}</h4>
      <h4>Email : {user.email}</h4>
      <h4>Age : {user.age}</h4>
      
    </div>
  )
}

export default Page
