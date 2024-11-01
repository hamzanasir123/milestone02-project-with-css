import React from 'react'
import styles from "./About.module.css";
import Image from 'next/image';
import Link from 'next/link';

function About() {
  return (
    <>
    <div className={styles.grid}>
    <div className={styles.div1}>
    <Image
    src={"https://i.pinimg.com/564x/5e/f6/1f/5ef61f66c1c67e132fb122f82e9e8c4b.jpg"}
    height={500}
    width={600}
    alt='Pic'
    >
    </Image>
    </div>
    <div>
        <h1 className={styles.h1}>About us</h1>
        <p className={styles.p}>Welcome to our world of chocolate delight! At CHOCOLATE,<br/>
            we are passionate about crafting and delivering premium,<br/>
            mouth-watering chocolates that bring joy to every moment.<br/> 
            Our journey started with a love for quality ingredients and a dedication to the art of chocolate-making. <br/>
            From rich, velvety dark chocolate to creamy milk and unique artisan flavors,<br/>
             every bite is a taste of perfection.<br/>
             <br/>
             <br/>
             </p>
             <Link href={"/"}
            className={styles.shopNow}> 
            Shop Now
            </Link>
    </div>
    </div>
    </>
  )
}

export default About