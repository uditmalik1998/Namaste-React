import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";

const EmptyCart = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div className={styles.empty_cart}>
      <img
        className={styles.cart_img}
        src={`${process.env.EMPTY_CART}`}
        alt="..."
      />
      <h4 className={styles.heading}>Your cart looks empty.</h4>
      <p className={styles.subheading}>Let's fill it with some goodness!</p>
      <Button
        btnText="Back to Shopping"
        onClick={handleButtonClick}
        className={styles.redirect_btn}
      />
    </div>
  );
};

export default EmptyCart;
