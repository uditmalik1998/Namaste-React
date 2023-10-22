import React, { FC, useState } from "react";
import veg from "/public/images/veg.png";
import nonveg from "/public/images/non-veg.png";
import styles from "./index.module.scss";
import Button from "../Button";

interface IRestaurantItemCard {
  dishName?: string;
  dishPrice?: number;
  discountPercentage?: string;
  couponCode?: string;
  description?: string;
  imageId?: string;
  isVeg?: string;
  className?: string;
}

const RestaurantItemCard: FC<IRestaurantItemCard> = (props) => {
  const [ismore, setIsMore] = useState<boolean>(true);
  const {
    dishName = "",
    dishPrice = 0,
    discountPercentage = "",
    couponCode = "",
    description = "",
    imageId = "",
    isVeg = "",
    className = "",
  } = props;
  const discriptionLength = description?.length;
  return (
    <div className={`${styles.rescard_container} ${className}`}>
      <div className={styles.card_details}>
        <p className={styles.dish_typewrapper}>
          <img
            className={styles.dish_type}
            src={isVeg === "NONVEG" ? nonveg : veg}
            alt="..."
          />
        </p>
        <p className={styles.dish_name}>{dishName}</p>
        <div className={styles.price}>
          <div className={styles.rupee}>{`₹${dishPrice}`}</div>
          {discountPercentage || couponCode ? (
            <div className={styles.discount}>
              {discountPercentage ? (
                <span className={styles.discount_percentage}>
                  {discountPercentage}
                </span>
              ) : null}
              {couponCode ? <span>{` | ${couponCode}`}</span> : null}
            </div>
          ) : null}
        </div>
        <p className={`${styles.discription} ${ismore ? styles.moreview : ""}`}>
          {description}
        </p>
        {discriptionLength > 50 ? (
          <span
            className={`${styles.discription_more} ${
              ismore ? "" : styles.morehide
            }`}
            onClick={() => setIsMore((prev) => !prev)}
          >
            More
          </span>
        ) : null}
      </div>
      <div className={styles.image_wrapper}>
        <img
          className={styles.item_img}
          src={`${process.env.REACT_APP_LOGO_URL}${imageId}`}
          alt="..."
        />
        <Button btnText={"ADD"} className={styles.item_btn} />
      </div>
    </div>
  );
};

export default RestaurantItemCard;