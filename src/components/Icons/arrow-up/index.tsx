import React, { FC } from "react";

interface IArrowUp {
  className?: string;
}

const ArrowUp: FC<IArrowUp> = (props) => {
  const { className = "" } = props;
  return (
    <span>
      <i
        className={`${"fa-solid fa-angle-up"} ${className}`}
        style={{ color: "#606c80" }}
      ></i>
    </span>
  );
};

export default ArrowUp;
