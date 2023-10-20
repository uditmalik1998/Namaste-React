import React, { FC } from "react";
import ImageSlider from "../../atoms/ImageSlider";
import DiscountCard, { IDiscountCard } from "../../atoms/DiscountCard";
import styles from "./index.module.scss";

interface IDiscountCardSlider {
  res: IDiscountCard[];
}

const DiscountCardSlider: FC<IDiscountCardSlider> = (props) => {
  const { res = [] } = props;
  return (
    <div className={styles.discountcard_slider}>
      <ImageSlider>
        {res?.length > 0
          ? res.map((item: any) => (
              <DiscountCard
                key={item?.restId}
                imagePath={item?.offerLogo}
                header={item?.header}
                couponCode={item?.couponCode}
                description={item?.description}
              />
            ))
          : null}
      </ImageSlider>
    </div>
  );
};

export default DiscountCardSlider;
