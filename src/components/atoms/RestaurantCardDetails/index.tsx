import React, { FC } from "react";
import styles from "./index.module.scss";

interface IRestaurantCardDetails {
  restaurantName?: string;
  restaurantDish?: string;
  restaurantPlace?: string;
  rating?: number;
  ratingQuantity?: string;
  restaurantDistance?: string;
  deliveryTime?: string;
  costForTwo?: string;
}

const RestaurantCardDetails: FC<IRestaurantCardDetails> = (props) => {
  const {
    restaurantName = "",
    restaurantDish = "",
    restaurantPlace = "",
    rating = "",
    ratingQuantity = "",
    restaurantDistance = "",
    deliveryTime = "",
    costForTwo = "",
  } = props;
  return (
    <div className={styles.restaurant_detailscontainer}>
      <div className={styles.restaurantdetails_wrapper}>
        <div className={styles.restaurant_address}>
          <div className={styles.restaurant_addresswrapper}>
            <h2 className={styles.restaurant_name}>{restaurantName}</h2>
            <p className={styles.restaurant_dish}>{restaurantDish}</p>
            <p className={styles.restaurant_place}>{restaurantPlace}</p>
          </div>
          <div className={styles.restaurant_popularity}>
            <div className={styles.res_rating}>
              <span>
                <i
                  className="fa-solid fa-star fa-xs"
                  style={{ color: "#3d9b6d" }}
                ></i>
              </span>
              <span className={styles.rate_num}>{rating}</span>
            </div>
            <div className={styles.rating_quantity}>{ratingQuantity}</div>
          </div>
        </div>
        <div className={styles.restaurant_distance}>
          <div className={styles.kms}>
            <span>
              <i
                className="fa-solid fa-bicycle fa-xs"
                style={{ color: "#6b6b6b" }}
              ></i>
            </span>{" "}
            <span>{restaurantDistance}</span>
          </div>
        </div>
      </div>
      <div className={styles.timing_details}>
        <div className={styles.time}>
          <span className={styles.circle_svg}>
            <i
              className="fa-solid fa-circle-half-stroke"
              style={{ color: "#3e4152" }}
            ></i>
          </span>
          <span className={styles.time}>{deliveryTime}</span>
        </div>
        <div className={styles.cost_two}>
          <span className={styles.rupee_svg}>
            {" "}
            <i
              className="fa-solid fa-indian-rupee-sign"
              style={{ color: "#3e4152" }}
            ></i>
          </span>
          <span>{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCardDetails;
