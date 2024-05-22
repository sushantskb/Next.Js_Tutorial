"use client";
import React, { useState } from "react";
import styles from "@/app/contact/contact.module.css";
import { Mulish } from "next/font/google";
const ContactForm = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = () => {};
  return (
    <form className={styles.contact_form} onSubmit={handleSubmit}>
      <div className={styles.input_field}>
        <label htmlFor="username" className={styles.label}>
          Username
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Enter your name"
            value={user.username}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="email" className={styles.label}>
          Email
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={user.email}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="phone" className={styles.label}>
          Phone Number
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            value={user.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <div className={styles.input_field}>
        <label htmlFor="message" className={styles.label}>
          Message
          <textarea
            type="text"
            name="message"
            id="message"
            rows={5}
            placeholder="Enter your message"
            value={user.message}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <button className={styles.btn}>Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
