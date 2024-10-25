import React from 'react'
import styles from './herosection.module.css'
import Image from 'next/image';

function Herosection() {
  return (
    <div className={styles.hero}>
      <div>
        <h1 className={styles.heading1}>
          online Course on Design and Development
        </h1>
        <h2 className={styles.heading2}>Web Development Fundamentals</h2>
        <p>
          Master the essentials of web development, from HTML and CSS to
          responsive design. Gain the skills needed to build visually appealing
          and user-friendly websites. Explore modern frameworks and tools that
          streamline the development process. Create dynamic web applications
          that engage users and enhance their experience. Join a community of
          aspiring developers and take your first step towards a rewarding
          career!
        </p>
      </div>
      <div className={styles.img}>
        <Image src="/hero.png" alt="random img"  width={500} height={500} />
      </div>
    </div>
  );
}

export default Herosection