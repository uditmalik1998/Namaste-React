import React, { FC } from "react";
import MobImage from "../../atoms/MobImage";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface IMobCard {
  link?: string;
  restaurantName?: string;
  vegImg?: string;
  rating?: string;
  responseTime?: string;
  price?: string;
  cuisiones?: string[];
  data?: any;
}

const MobCard: FC<IMobCard> = (props: any) => {
  const {
    link = "#",
    restaurantName = "",
    vegImg = "",
    rating = "",
    responseTime = "",
    price = "",
    cuisiones = "",
    data = {},
  } = props;
  console.log(props.data);
  return (
    <div className={styles.mobcard}>
      <Link to={link}>
        <MobImage
          id={0}
          imageId={data?.cloudinaryImageId}
          discountPercentage={data?.aggregatedDiscountInfoV2?.header}
          discountPrice={
            data?.aggregatedDiscountInfoV2?.shortDescriptionList?.[0]?.meta
          }
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
            <div>{rating}</div>
            <div className={styles.restime}>
              <span>.</span>
              <span>{responseTime}</span>
            </div>
            <div className={styles.resprice}>
              <span>.</span>
              <span>{price}</span>
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
