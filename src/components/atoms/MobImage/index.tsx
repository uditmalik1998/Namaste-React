import React from "react";
import { IMG_CARD_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const MobImage = (props: any) => {
    console.log(props?.filteredData?.info);
  return (
    <div className={styles.mobimg_cont}>
      <Link to={`/restaurant/${props?.filteredData?.info?.id}`}>
        <div className={styles.mobimg}>
          <img
            className={styles.img}
            src={`${IMG_CARD_URL}/${props?.filteredData?.info?.cloudinaryImageId}`}
          />
        </div>
        <div className={styles.restaurantdiscount}>
          <div>60% OFF</div>
          <div>• UPTO ₹120 •</div>
        </div>
      </Link>
    </div>
  );
};

export default MobImage;
