import React from "react";
import MobImage from "../../atoms/MobImage";
import styles from "./index.module.scss";

const MobCard = (props: any) => {
  console.log(props);
  return (
    <div className={styles.mobcard}>
      <MobImage filteredData={props?.filteredData} />
      <div className={styles.card_details}>
        <div className={styles.rest_tag}>
          <div className={styles.restaurantname}>Maddi sweet center</div>
          <div>iii</div>
        </div>
        <div className={styles.restaurantmeta}>
          <div>4.1</div>
          <div className={styles.restime}><span>.</span><span>24 mins</span></div>
          <div className={styles.resprice}><span>.</span><span>$ 250</span></div>
        </div>
        <div>Ice</div>
      </div>
    </div>
  );
};

export default MobCard;
