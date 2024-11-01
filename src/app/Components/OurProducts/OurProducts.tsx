import React from 'react';
import styles from "./OurProducts.module.css";
import Card from '../Card/Card';

const products = [
  { id: 1 , image: 'https://i.pinimg.com/564x/fe/c7/aa/fec7aafcd5753dc666fa70cfd14c621b.jpg', name: 'Snickers', price: 999 },
  { id: 2 , image: 'https://i.pinimg.com/564x/b7/ce/88/b7ce88958f260ac98d2036339eecade5.jpg', name: 'Kit Kat', price: 599 },
  { id: 3 , image: 'https://i.pinimg.com/564x/40/bd/30/40bd3011b9fafb4d36d8464b8281b875.jpg', name: 'Vizzio', price: 1499 },
];


function OurProducts() {
  return (
    <>
    <h1 className={styles.h1}>Our Products</h1>
    <p className={styles.p}>The sweet treat that put us on the map, Our Chocolate is world famouse and made in Pakistan.</p>
    <br/>
    <br/>
    <div className={styles.grid}>
    {products.map((product) => (
      <Card
      key={product.id}
      image={product.image}
      Name={product.name}
      price={product.price}
      />
    ))}
     </div>
    </>
  )
}

export default OurProducts