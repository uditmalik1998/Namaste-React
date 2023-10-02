import React, { FC } from "react";
import { IMG_CARD_URL } from "../../../utils/constants";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface ICard {
  restaurantId?: number;
  imgId?: string;
  cuisines?: string[];
  rating?: number;
  restaurantName?: string;
}

const Card: FC<ICard> = (props) => {
  const {
    restaurantName = "",
    rating = "",
    cuisines = [],
    imgId = "",
    restaurantId = "",
  } = props;

  return (
    <div className={styles.card_container}>
      <Link to={`/restaurant/${restaurantId}`}>
        <div className={`${styles.card} card`}>
          <div className={styles.img_card}>
            <img
              className={styles.card_img}
              src={`${IMG_CARD_URL}/${imgId}`}
            />
          </div>
          <div className={styles.minicard}>
            <p className={styles.productname}>{restaurantName}</p>
            <div className={styles.mincard_rating}>
              <AiFillStar className={styles.rating_svg} />
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
