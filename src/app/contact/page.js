import React from "react";
import ContactCard from "../components/ContactCard";
import styles from "@/app/contact/contact.module.css";
import ContactForm from "../components/ContactForm";
const Page = () => {
  return (
    <>
      <div className={styles.container}>
        <h1>Contact Page</h1>
        <ContactCard />

        <section className={styles.contact_section}>
          <h2>
            We&apos;d love to hear <span>from you</span>
          </h2>

          <ContactForm />
        </section>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7386.371706328713!2d84.82929057840762!3d22.233026141196305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2019416df4bdbf%3A0x4f6e3270e6e4382b!2sBasanti%20Nagar%2C%20Rourkela%2C%20Odisha!5e0!3m2!1sen!2sin!4v1716384415693!5m2!1sen!2sin"
        width={100}
        height={450}
        style={{border: "0"}}
        className={styles.mapping}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Page;
