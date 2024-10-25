import React from 'react'
import styles from './about.module.css'
import Header from '../component/header/header';
import Footer from '../component/footer/footer';
import Herosection from '../component/herosection/herosection';
export default function AboutPage() {
  return (
    <div className={styles.main}>
      <div>
        <Header />
        <Herosection/>
        <main className={styles.aboutContainer}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
            Welcome to Un Solanki! We are dedicated to empowering individuals
            with the skills needed to thrive in the digital world.
          </p>
          <p className={styles.description}>
            Our mission is to provide comprehensive and accessible web
            development education, covering essential technologies like HTML,
            CSS, and JavaScript.
          </p>
          <p className={styles.description}>
            Whether you are a complete beginner or looking to enhance your
            skills, our courses are designed to guide you through every step of
            the learning process.
          </p>
          <p className={styles.description}>
            Join our community and start your journey toward becoming a
            confident web developer today!
          </p>
        </main>
      </div>
      <Footer />
    </div>
  );
}
