import React from "react";
import { IMG_CARD_URL } from "../../../utils/constants";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const Card = (props: any) => {
  const {
    name = "",
    avgRating = "",
    cuisines = "",
    cloudinaryImageId = "",
    id = "",
  } = props?.resData?.info || "";
  console.log(props);
  return (
    <div className={styles.card_container}>
      <Link to={`/restaurant/${id}`}>
        <div className={`${styles.card} card`}>
          <div className={styles.img_card}>
            <img
              className={styles.card_img}
              src={`${IMG_CARD_URL}/${cloudinaryImageId}`}
            />
          </div>
          <div className={styles.minicard}>
            <p>{name}</p>
            <div className={styles.mincard_rating}>
              <AiFillStar className={styles.rating_svg} />
              <p>{avgRating} star</p>
            </div>
            <p className={styles.cuisines}>{cuisines.join(", ")}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
