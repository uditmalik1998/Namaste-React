import React from "react";
import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer_wrapper}>
      <div className={styles.footer_border}></div>
      <div className={styles.footer_container}>
        <span>Foody, made by</span>
        <span className={styles.author_name}> Udit Malik</span>
      </div>
    </div>
  );
};

export default Footer;
