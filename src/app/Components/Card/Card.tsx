import React from 'react';
import Styles from "./Card.module.css";
import Image from 'next/image';
import Link from 'next/link';

type CardProps = {
  image: string;
  Name: string;
  price: number;
};

const Card: React.FC<CardProps> = ({image, Name, price}) => {
  return (
    <>
    <div className={Styles.card}>
    <Image
    src={image}
    alt='Pic'
    height={350}
    width={296}
    className={Styles.pic}
    >
    </Image>
    <h3 className={Styles.h1}>{Name}</h3>
    <p className={Styles.h1}>{price}</p>
    <br/>
    <br/>
    <Link href={"/"}
            className={Styles.shopNow}> 
            Explore More
            </Link>
    </div>
    </>
  )
}

export default Card