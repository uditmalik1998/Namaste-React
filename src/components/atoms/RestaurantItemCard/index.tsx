import React, { FC, useState } from "react";
import veg from "/public/images/veg.png";
import nonveg from "/public/images/non-veg.png";
import styles from "./index.module.scss";
import Button from "../Button";
import ItemPopup from "../ItemPopup";
import useDeviceType from "../../../utils/hooks/useDeviceType";

export interface IRestaurantItemCard {
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
  const [more, setMore] = useState<boolean>(true);
  const [show, setShow] = useState<boolean>(false);
  const {deviceType} = useDeviceType();
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

  const handleClose = () => {
        setShow((prev) => !prev);
  }

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
        <p className={`${styles.discription} ${more ? styles.moreview : ""}`}>
          {description}
        </p>
        {discriptionLength > 50 ? (
          <span
            className={`${styles.discription_more} ${
              more ? "" : styles.morehide
            }`}
            onClick={() => setMore((prev) => !prev)}
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
        <Button btnText={"ADD"} className={styles.item_btn} onClick={() => setShow(true)}/>
      </div>
      <ItemPopup show={show} handleClose={handleClose} data={props} deviceType={deviceType}/>
    </div>
  );
};

export default RestaurantItemCard;
