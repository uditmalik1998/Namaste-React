import { LOGO_URL } from "../../../utils/constants";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={LOGO_URL} />
      </div>
      <div className={styles.nav}>
        <ul className={styles.nav_items}>
          <li className={styles.nav_items_link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.nav_items_link}>
            <Link to="/About">About Us</Link>
          </li>
          <li className={styles.nav_items_link}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className={styles.nav_items_link}>
            <Link to="/">
              <span className={styles.cart_icon}>
                <i className="fa-solid fa-cart-shopping"></i>
              </span>
              <span>Cart</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
