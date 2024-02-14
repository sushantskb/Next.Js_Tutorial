import DeleteUser from "@/utils/DeleteUser";
import Link from "next/link";

async function getUsers(){
  
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
}



const Page = async() => {
    const users = await getUsers();
  
  return (
    <div>
      <h1>Users List</h1>
      {
        users.map((item)=>(
            <div key={item.id}>
                <span><Link href={`users/${item.id}`}>{item.name}</Link></span>
                <span style={{marginLeft: "40px"}}><Link href={`users/${item.id}/update`}>Edit</Link></span>
                <span><DeleteUser id={item.id}/></span>
            </div>
        ))
      }
    </div>
  )
}

export default Page
