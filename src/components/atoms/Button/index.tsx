import React, { FC } from "react";
import styles from "./index.module.scss";

const Button: FC<any> = (props) => {
  const { btntext = "", onClick = () => {} } = props;
  
  return (
    <button onClick={() => onClick()} className={styles.cusbtn}>
      {btntext}
    </button>
  );
};

export default Button;
