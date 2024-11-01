import React from "react";
import styles from "./FeedbackCard.module.css";
import Image from "next/image";

type CardProps = {
    msg: string;
    Name: string;
  };

const FeedbackCard: React.FC<CardProps> = ({msg, Name}) => {
  return (
    <>
      <div className={styles.div}>
        <Image
          src={
            "https://i.pinimg.com/736x/b0/bb/1a/b0bb1a1f244cd205da1de768c33fc89c.jpg"
          }
          alt="Stars"
          className={styles.pic}
          height={30}
          width={80}
        />
        <p className={styles.p}>
        &quot;{msg}&quot;
        </p>
        <h3 className={styles.h3}>{Name}.....</h3>
      </div>
    </>
  );
}

export default FeedbackCard;
