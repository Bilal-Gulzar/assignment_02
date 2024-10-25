import React from 'react'
import styles from './header.module.css'
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <Image src="/logo.png" alt="logo" width={80} height={80} />
        </div>
        <div>
          <p className={styles.para}>Mastering in HTML, css Typescript</p>
        </div>
        <nav className={styles.nav}>
          <Link href="/">
            <li className={styles.navItem}>Home</li>
          </Link>

          <Link href="/about">
            <li className={styles.navItem}>About</li>
          </Link>

          <Link href="/contact">
            <li className={styles.navItem}>contact</li>
          </Link>
        </nav>
      </div>
    </header>
  );
}
