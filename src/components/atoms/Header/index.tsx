import { LOGO_URL } from "../../../utils/constants";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul className="nav-items">
          <li className={styles.nav_items_link}>
            <Link to="/">Home</Link>
          </li>
          <li className={styles.nav_items_link}>
            <Link to="/About">About Us</Link>
          </li>
          <li className={styles.nav_items_link}>
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
