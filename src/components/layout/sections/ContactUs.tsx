"use client";
import React from "react";
import styles from "./Contactus.module.css";

const ContactUs: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = {
      firstName: form.firstName.value,
      lastName: form.lastName.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch("/api/sendEmail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    if (result.success) {
      alert("Email sent successfully!");
      form.reset();
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <section id="contact">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className={styles.card}>
            <h1 className={styles.heading}>
              Morr delivers measurable results in sales, operations, and
              support.
            </h1>

            <div className={styles.buttonContainer}>
              <button className={styles.callButton}>
                <span className={styles.icon}>📞</span> Call
              </button>
              <button className={styles.emailButton}>
                <span className={styles.icon}>✉️</span> Email
              </button>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.nameFields}>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  className={styles.input}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  className={styles.input}
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className={styles.input}
                required
              />
              <textarea
                name="message"
                placeholder="Your message"
                className={styles.textarea}
                rows={5}
                required
              />
              <button type="submit" className={styles.submitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
