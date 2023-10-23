import React, { FC } from "react";

interface IArrowDown {
  className?: string;
}

const ArrowDown: FC<IArrowDown> = (props) => {
  const { className = "" } = props;
  return (
    <span>
      <i
        className={`${"fa-solid fa-angle-down"} ${className}`}
        style={{ color: "#606c80" }}
      ></i>
    </span>
  );
};

export default ArrowDown;
