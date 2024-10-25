import React from 'react';
import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer =()=>{
return (
  <footer className={styles.footer}>
    <div className={styles.item}>
      <div className={styles.image}>
        <Image src="/logo.png" width={100} height={100} alt="logo" />
        <p className={styles.para}>
          Top learning experince that create more talent in the world
        </p>
      </div>
      <div>
        <h2 className={styles.heading}>compony</h2>
        <ul className={styles.unorder}>
          <Link href="/about">
            <li className={styles.list}>About Us</li>
          </Link>
          <li className={styles.list}>Career</li>
          <li className={styles.list}>press</li>
          <li className={styles.list}>News</li>
        </ul>
      </div>
      <div>
        <h2 className={styles.heading}>social</h2>
        <ul className={styles.unorder}>
          <li className={styles.list}>Twiter</li>
          <li className={styles.list}>Linkedin</li>
          <li className={styles.list}>Github</li>
          <li className={styles.list}>Dribble</li>
        </ul>
      </div>
      <div>
        <h2 className={styles.heading}>Legal</h2>
        <ul className={styles.unorder}>
          <li className={styles.list}>Terms</li>
          <li className={styles.list}>Privacy</li>
          <li className={styles.list}>Cookies</li>
          <Link href="/contact">
            <li className={styles.list}>contact</li>
          </Link>
        </ul>
      </div>
    </div>

    <div className={styles.reserved}>© 2024 Ed-Circle All rights reserved</div>
  </footer>
);


}

export default Footer