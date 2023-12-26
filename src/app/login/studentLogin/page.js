"use client"
import { useRouter } from 'next/navigation';
const StudentLogin = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name);
    }
  return (
    <main>
      <h1 className="heading">Student Login</h1>
      <br />
      
      <div>
      <label className=' label'>Name</label>
      <input className="input" type='text' name='name' placeholder='Enter your name' />
      <br />
      <label className='label'>password</label>
      <input className='input' type='password' name='password' placeholder='Enter your password' />

      <button className='btn' onClick={()=> navigate("/")} type='submit'>submit</button>
      </div>
    </main>
  )
}

export default StudentLogin
