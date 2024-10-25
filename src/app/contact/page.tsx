"use client"
import React from 'react'
import styles from './contact.module.css'
import Header from '../component/header/header'
import Footer from '../component/footer/footer';
import Herosection from '../component/herosection/herosection';

export default function Contact() {
  const handleForm = (evt: MouseEvent) => {
    evt.preventDefault();
  };
  return (
    <div className={styles.main}>
      <div>
        <Header />
        <Herosection/>
        <div className={styles.contactContainer}>
          <h2 className={styles.title}>Contact Us</h2>
          <p className={styles.description}>
            Have questions about our web development courses? We're here to
            help!
          </p>
          <form className={styles.contactForm}>
            <label htmlFor="name" className={styles.label}>
              Name
            </label>
            <input type="text" id="name" className={styles.input} required />

            <label htmlFor="email" className={styles.label}>
              Email
            </label>
            <input type="email" id="email" className={styles.input} required />

            <label htmlFor="message" className={styles.label}>
              Message
            </label>
            <textarea
              id="message"
              className={styles.textarea}
              required
            ></textarea>

            <button
              onClick={() => handleForm}
              type="submit"
              className={styles.submitButton}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
