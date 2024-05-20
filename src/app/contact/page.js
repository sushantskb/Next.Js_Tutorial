import React from 'react'
import ContactCard from '../components/ContactCard'
import styles from "@/app/contact/contact.module.css"
const Page = () => {
  return (
    <div className={styles.container}>
      <h1>Contact Page</h1>
      <ContactCard />
    </div>
  )
}

export default Page