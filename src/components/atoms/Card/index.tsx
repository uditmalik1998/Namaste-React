import React, { FC } from "react";
import { IMG_CARD_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface ICard {
  restaurantId?: number;
  imgId?: string;
  cuisines?: string[];
  rating?: number;
  restaurantName?: string;
  shrinkeffect?: boolean;
}

const Card: FC<ICard> = (props) => {
  const {
    restaurantName = "",
    rating = "",
    cuisines = [],
    imgId = "",
    restaurantId = "",
    shrinkeffect = true,
  } = props;

  return (
    <div className={styles.card_container}>
      <Link to={`/restaurant/${restaurantId}`}>
        <div className={`${styles.card} ${shrinkeffect ? styles.shrink : ""}`}>
          <div className={styles.img_card}>
            <img className={styles.card_img} src={`${IMG_CARD_URL}/${imgId}`} />
          </div>
          <div className={styles.minicard}>
            <p className={styles.productname}>{restaurantName}</p>
            <div className={styles.mincard_rating}>
              <i
                className={`fa-solid fa-star ${styles.rating_svg}`}
                style={{ color: "#f8f7f7" }}
              ></i>
              <p>{rating} star</p>
            </div>
            <p className={styles.cuisines}>{cuisines.join(", ")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
