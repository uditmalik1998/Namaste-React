import React, { FC } from "react";
import { IMG_CARD_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface IMobImage {
  id?: number;
  imageId?: string;
  discountPercentage?: string;
  discountPrice?: string;
  className?: string;
}

const MobImage: FC<IMobImage> = (props: any) => {
  const {
    id = 0,
    imageId = "",
    discountPercentage = "",
    discountPrice = "",
    className = "",
  } = props;
  return (
    <div className={`${styles.mobimg_cont} ${className}`}>
      {id === 0 ? (
        <>
          <div className={styles.mobimg}>
            <img className={styles.img} src={`${IMG_CARD_URL}/${imageId}`} />
          </div>
          {discountPercentage && discountPrice ? (
            <div className={styles.restaurantdiscount}>
              <div>{discountPercentage}</div>
              <div className={styles.restprice}>{discountPrice}</div>
            </div>
          ) : null}
        </>
      ) : (
        <Link to={`/restaurant/${id}`}>
          <div className={styles.mobimg}>
            <img className={styles.img} src={`${IMG_CARD_URL}/${imageId}`} />
          </div>
          {discountPercentage && discountPrice ? (
            <div className={styles.restaurantdiscount}>
              <div>{discountPercentage}</div>
              <div className={styles.restprice}>{discountPrice}</div>
            </div>
          ) : null}
        </Link>
      )}
    </div>
  );
};

export default MobImage;
