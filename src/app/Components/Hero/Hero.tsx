import React from 'react'
import styles from "./Hero.module.css"
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <>
    <div className={styles.grid}>
        <div className={styles.div1}>
            <p className={styles.p}>We make confectionery</p>
            <h1 className={styles.h1}>magic</h1>
            <p className={styles.p}>Our Chocolate is world famous and made in New Zealand.<br/>
                Available in raspberry and black.<br/>
                We are the perfect accessory for any Chocolate lover.
            </p>
            <p className={styles.p}>
                Whatever bite you are craving,<br/>
                we have got the perfect flavor for you.<br/>
                Your choices can change the world.<br/>
                This is especially true when it comes to palm oil.
                <br/>
                <br/>
                <Link href={"/"}
            className={styles.shopNow}> 
            Shop Now
            </Link>
            <span className={styles.price}>  $ 45.00</span>
            </p>
        </div>
        <div className={styles.div2}>
            <Image src={"https://i.pinimg.com/564x/a5/a5/63/a5a563d2a9d633604ec8cc3d81ba3c11.jpg"}
            alt='Pic'
            width={600}
            height={500}
            />
        </div>
    </div>
    <div className={styles.div3}>
    <div>
        <p>Energy</p>
        <h2>416KJ</h2>
    </div>
    <div>
    <p>Protein</p>
    <h2>1.0g</h2>
    </div>
    <div>
    <p>Total Fat</p>
    <h2>3.3g</h2>
    </div>
    <div>
    <p>Saturated</p>
    <h2>2.0g</h2>
    </div>
    <div>
    <p>Carbs</p>
    <h2>16.6g</h2>
    </div>
    <div>
    <p>Sugar</p>
    <h2>10.0g</h2>
    </div>
    <div>
    <p>Sodium</p>
    <h2>15mg</h2>
    </div>
    </div>
    </>
  )
}

export default Hero