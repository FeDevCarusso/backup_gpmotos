import React from "react";
import Styles from "../../Styles/dist/Card.module.css";

const Card = ({ repuesto }) => {
  return (
    <div className={Styles.card}>
      <img
        className={Styles.card__img}
        src={`http://localhost:3001/images/${repuesto.productImage}`}
        alt={`${repuesto.productName} ${repuesto.model}`}
      />
      <div className={Styles.card__info}>
        <h4 className={Styles.name}>{repuesto.productName}</h4>
        <h5 className={Styles.brand}>Marca: </h5>
        <span className={Styles.productInfo}>{repuesto.productBrand}</span>
        <h5 className={Styles.model}>Modelo:</h5>
        <span className={Styles.productInfo}> {repuesto.model}</span>
        <h4 className={Styles.price}>{`$${repuesto.price}`}</h4>
      </div>
      <button className={Styles.addCart}>Añadir al carrito</button>
    </div>
  );
};

export default Card;
