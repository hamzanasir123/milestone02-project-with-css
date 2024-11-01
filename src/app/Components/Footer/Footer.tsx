import React from 'react'
import styles from "./Footer.module.css";
import Link from 'next/link';

function Footer() {
  return (
    <>
    <div className={styles.div1}>
      <br/>
      <br/>
                    <Link href={"/"} className={styles.link}>
                    ABOUT US
                    </Link>
                    <Link href={"/"} className={styles.link}>
                    PRODUCTS
                    </Link>
                    <Link href={"/"} className={styles.link}>
                    FEATURES
                    </Link>
                    <Link href={"/"} className={styles.link}>
                    REVIEWS
                    </Link>
    </div>
    <div className={styles.div2}>
    <p className={styles.p}> <br/>© 2024 Hamza Nasir. All Rights Reserved.</p>
    </div>
    </>
  )
}

export default Footer