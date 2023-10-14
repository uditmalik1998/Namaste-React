import React, { FC } from "react";
import { IMG_CARD_URL } from "../../../utils/constants";
// import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface IMobSlider {
  data?: [];
  className?: string;
  heading?: string;
}

const MobSlider: FC<IMobSlider> = (props) => {
  const { data = [], className = "", heading = "" } = props;
  return (
    <div className={`${styles.mobslidercont} ${className}`}>
      <h2 className={styles.mobheading}>{heading}</h2>
      <div className={styles.mobsliderimg}>
        {data?.length > 0 &&
          data.map((item: any) => {
            return (
              // <Link to={`/restaurant/${item?.info?.id}`} key={item?.info?.id}>
              <div className={styles.sliderrapper} key={item?.info?.id}>
                <img
                  className={styles.sliderimg}
                  src={`${IMG_CARD_URL}/${item?.imageId}`}
                />
              </div>
              // </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MobSlider;
