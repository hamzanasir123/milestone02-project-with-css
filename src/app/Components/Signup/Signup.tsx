import React from 'react'
import styles from "./Signup.module.css"

function Signup() {
  return (
    <>
    <div className={styles.div} >
    <h1 className={styles.h1}>Sign up for early access</h1>
    <br/>
    <br/>
    <input placeholder='   Your Email!' type='text' className={styles.input}/>
    <button className={styles.b}>Get Started</button>
    </div>
    </>
  )
}

export default Signup