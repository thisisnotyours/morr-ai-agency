import React from 'react';
import styles from './Contactus.module.css'; // Import the CSS module

const ContactUs: React.FC = () => {
  return (
    <section id="contact">
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          {/* Main Container */}
          <div className={styles.card}>
            {/* Header */}
            <h1 className={styles.heading}>
              Morr delivers measurable results in sales, operations, and support.
            </h1>

            {/* Call and Email Buttons */}
            <div className={styles.buttonContainer}>
              <button className={styles.callButton}>
                <span className={styles.icon}>📞</span> Call
              </button>
              <button className={styles.emailButton}>
                <span className={styles.icon}>✉️</span> Email
              </button>
            </div>

            {/* Form Section */}
            <form className={styles.form}>
              <div className={styles.nameFields}>
                <input
                  type="text"
                  placeholder="First name"
                  className={styles.input}
                  required
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className={styles.input}
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className={styles.input}
                required
              />
              <textarea
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