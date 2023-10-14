import React, { FC } from "react";
import MobImage from "../../atoms/MobImage";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface IMobCard {
  link?: string;
  restaurantName?: string;
  vegImg?: string;
  rating?: number;
  responseTime?: string;
  price?: string;
  cuisiones?: string[];
  discountCouponCode?: string;
  discountTextHeader?: string;
  imageId?: string;
}

const MobCard: FC<IMobCard> = (props: any) => {
  const {
    link = "#",
    restaurantName = "",
    vegImg = "",
    rating = 0,
    responseTime = "",
    price = "",
    cuisiones = "",
    discountTextHeader = "",
    discountCouponCode = "",
    imageId = "",
  } = props;

  return (
    <div className={styles.mobcard}>
      <Link to={link}>
        <MobImage
          id={0}
          imageId={imageId}
          discountPercentage={discountTextHeader}
          discountPrice={discountCouponCode}
        />
        <div className={styles.card_details}>
          <div className={styles.rest_tag}>
            <div className={styles.restaurantname}>{restaurantName}</div>
            <div className={styles.veg_tag}>
              <img
                className={styles.veg_img}
                src={
                  "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_120,h_32/v1695133679/badges/Pure_Veg111.png"
                }
                alt="..."
              />
            </div>
          </div>
          <div className={styles.restaurantmeta}>
            <div className={styles.rating}>
              <span className={styles.svg_container}>
                <i className={`fa-solid fa-star ${styles.rating_svg}`}></i>
              </span>
              {rating}
            </div>
            <div className={styles.restime}>
              <div className={styles.dot}></div>
              <span className={styles.time}>{responseTime}</span>
            </div>
            <div className={styles.resprice}>
              <div className={styles.dot}></div>
              <span className={styles.price}>{price}</span>
            </div>
          </div>
          <div className={styles.cuisiones}>
            {cuisiones?.length > 0 && cuisiones.join(", ")}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MobCard;
