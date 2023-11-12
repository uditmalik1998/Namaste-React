import React from "react";
import styles from "./index.module.scss";
import EmptyCart from "../../atoms/EmptyCart";

const Cart = () => {
  return (
    <div className={styles.cart_wrapper}>
      <EmptyCart />
    </div>
  );
};

export default Cart;
