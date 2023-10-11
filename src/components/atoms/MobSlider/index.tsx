import React, { FC } from "react";
import { IMG_CARD_URL } from "../../../utils/constants";
import { Link } from "react-router-dom";
import styles from "./index.module.scss";

interface IMobSlider {
  data?: [];
}

const MobSlider: FC<IMobSlider> = (props) => {
  const { data = [] } = props;
  return (
    <div className={styles.mobslidercont}>
      {data?.length > 0 &&
        data.map((item: any) => {
          return (
            <Link to={`/restaurant/${item?.info?.id}`} key={item?.info?.id}>
              <div className={styles.sliderrapper}>
                <img
                  className={styles.sliderimg}
                  src={`${IMG_CARD_URL}/${item?.imageId}`}
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default MobSlider;
