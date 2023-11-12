import React from "react";
import styles from "./index.module.scss";

const Loader = () => {
  return (
    <div className={styles.loder_wrapper}>
      <span className={styles.dot_flashing}></span>
    </div>
  );
};

export default Loader;
