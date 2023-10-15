import React from "react";
import styles from "./index.module.scss";

const ImageSlider = (props: any) => {
  return (
    <div className={styles.imageslider}>
      <div className={styles.imageslider_wrapper}>{props?.children}</div>
    </div>
  );
};

export default ImageSlider;
