import React, { FC, useState, useEffect } from "react";
import styles from "./index.module.scss";
import Loader from "../Loader";

interface IButton {
  btnText?: string;
  onClick?: () => void;
  className?: string;
  loading?: boolean;
}

const Button: FC<IButton> = (props) => {
  const [onClicked, setOnClicked] = useState<boolean>(false);
  const {
    btnText = "",
    onClick = () => {},
    className = "",
    loading = false,
  } = props;
  let timeoutId: any = 0;

  const showRipple = () => {
    setOnClicked((prev) => !prev);
  };

  const callCleanUp = (cleanup: () => void, delay: number) => {
    return function () {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        cleanup();
      }, delay);
    };
  };

  const cleanTimeOut = () => {
    setOnClicked((prev) => !prev);
  };
  return (
    <button
      onClick={() => {
        onClick();
      }}
      className={`${styles.cusbtn} ${className} ${
        onClicked ? styles.shrink : ""
      }`}
      onMouseDown={showRipple}
      onMouseUp={callCleanUp(cleanTimeOut, 200)}
    >
      {loading ? <Loader /> : btnText}
      <span className={`${onClicked ? styles.ripple : ""}`}></span>
    </button>
  );
};

export default Button;
