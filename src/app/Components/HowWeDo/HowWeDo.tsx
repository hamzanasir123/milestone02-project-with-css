import React from 'react'
import styles from "./HowWeDo.module.css";
import Image from 'next/image';
import Link from 'next/link';


function HowWeDo() {
  return (
    <>
    <div className={styles.grid}>
        <div>
        <h1 className={styles.h1}>How We Do</h1>
        <p className={styles.p}>
        <span
        className={styles.span}
        >How We Do</span> from a chocolate sellers perspective is about <br/>
         creating joyful experiences and lasting memories with each sweet treat.<br/>
         Selling chocolate is not just about transactions; <br/> its about delighting customers with rich flavors and quality.<br/>
         We carefully source the finest ingredients to ensure every bite is pure indulgence.<br/>
         Our process includes perfect packaging, a smile at every sale,<br/> and a personalized touch that makes each interaction unique.<br/>
         Through our products, we spread happiness,<br/> crafting a reputation based on trust and taste.<br/>
         We aim to make every customer feel special,<br/> ensuring they leave with a sense of sweetness in their day.</p>
         <br/>
         <br/>
         <br/>
         <Link href={"/"}
            className={styles.shopNow}> 
            Explore More
            </Link>
        </div>
        <div>
            <Image
            className={styles.pic}
            alt='Pic'
            height={500}
            width={600}
            src={"https://i.pinimg.com/564x/0f/1b/f4/0f1bf43215ba5f0f2d5e817179b8dc34.jpg"}
            >
            </Image>
        </div>
    </div>
    </>
  )
}

export default HowWeDo