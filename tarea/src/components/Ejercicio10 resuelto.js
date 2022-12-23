// Resolución de ejercicio N°10:

import axios from "axios";
import { useEffect, useState } from "react";
import Animation from "./animations/exampleAnimation";
import styles from "./Ejercicio10Resuelto.module.css";

const url = "https://dummyjson.com/products";

const getProducts = async (callback, url) => {
  try {
    const response = await axios.get(url);
    console.table(response.data);
    callback(response.data.products);
    return response.data.products;
  } catch (error) {
    console.error(error);
  }
};

const getCard = (product) => {
  const { title, description, price, images } = product;
  return (
    <div className={styles.productContainer}>
      <img className={styles.productImage} src={images[0]}></img>
      <div className={styles.descriptionContainer}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <h2 className={styles.price}>Price: ${price}</h2>
    </div>
  );
};

const Ejercicio10Resuelto = () => {
  const [products, setProducts] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      getProducts(setProducts, url);
    }, 2000);
  }, []);
  
  return (
    <div className={styles.container}>
      {products === false ? <Animation /> : products.map((element) => getCard(element))}
    </div>
  );
};
export default Ejercicio10Resuelto;
