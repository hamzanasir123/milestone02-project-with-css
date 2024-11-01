import React from 'react';
import styles from "./Header.module.css";
import Image from 'next/image';
import Link from 'next/link';

function Header() {

    // const [isClick, setIsClick] = useState(false);

    // const toggleNavbar = () => {
    //     setIsClick(!isClick)
    //   }

  return (
    <>
    <nav className={styles.nav}>
    <div className={styles.div1}>
        <div className={styles.div2}>
            <div className={styles.div3}>
                <div className={styles.div4}>
                <Image src={"https://i.pinimg.com/564x/23/5a/51/235a51a7f5fb590d678c8d84d5100dea.jpg"}
                alt='Choaclate'
                width={170}
                height={150}
                className={styles.logo}
                />
                </div>
            </div>
            <div className={styles.div5}>
                <div className={styles.div6}>
                    <Link href={"/"} className={styles.link}>
                    HOME
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
            <Link href={"/"} className={styles.login}>
            Log in
            </Link>
            <Link href={"/"} className={styles.signup}>
            Sign up
            </Link>
                </div>
            </div>
        </div>
    </div>
    </nav>
    </>
  )
}

export default Header