import React, { FC } from "react";
import styles from "./index.module.scss";

export interface IDiscountCard {
  imagePath?: string;
  header?: string;
  couponCode?: string;
  description?: string;
  restId?: string;
}

const DiscountCard: FC<IDiscountCard> = (props) => {
  const {
    imagePath = "",
    header = "",
    couponCode = "",
    description = "",
  } = props;
  return (
    <div className={styles.discountcard_container}>
      <div className={styles.header_wrapper}>
        <img
          className={styles.discount_logo}
          src={`${process.env.REACT_APP_LOGO_URL}${imagePath}`}
          alt="..."
        />
        <p className={styles.discount_text}>{header}</p>
      </div>
      <div className={styles.discount_discription}>
        <span>{couponCode}</span>
        <span className={styles.discount_code}>{description}</span>
      </div>
    </div>
  );
};

export default DiscountCard;
