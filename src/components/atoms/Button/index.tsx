import React, { FC } from "react";
import styles from "./index.module.scss";

interface IButton {
  btnText?: string;
  onClick?: () => void;
  className?: string;
}

const Button: FC<IButton> = (props) => {
  const { btnText = "", onClick = () => {}, className = "" } = props;

  return (
    <button
      onClick={() => onClick()}
      className={`${styles.cusbtn} ${className}`}
    >
      {btnText}
    </button>
  );
};

export default Button;
