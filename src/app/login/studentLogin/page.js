"use client"
import styles from "../../page.module.css";
import { useRouter } from 'next/navigation';
const StudentLogin = () => {
    const router = useRouter();
    const navigate = (name) => {
        router.push(name);
    }
  return (
    <main className={styles.main}>
      Students
      <br />
      <label>Name</label>
      <input className={styles.input} type='text' name='name' placeholder='Enter your name' />
      <br />
      <label>password</label>
      <input type='password' name='password' placeholder='Enter your password' />

      <button onClick={()=> navigate("/")} type='submit'>submit</button>
    </main>
  )
}

export default StudentLogin
