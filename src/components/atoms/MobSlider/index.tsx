import React from "react";
import resObj from "../../../utils/mockdata";
import { IMG_CARD_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

const MobSlider = (props: any) => {
  return (
    <div className={styles.mobslidercont}>
      {resObj.map((item: any) => {
        console.log(item);
        return (
          <Link to={`/restaurant/${item?.info?.id}`} key={item?.info?.id}>
          <div className={styles.sliderrapper}>
            <img
              className={styles.sliderimg}
              src={`${IMG_CARD_URL}/${item?.info?.cloudinaryImageId}`}
            />
          </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MobSlider;
