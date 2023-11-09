import React, { FC } from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../../atoms/Card";

interface ICardSlider {
  heading?: string;
  data?: any;
}

const CardSlider: FC<ICardSlider> = (props) => {
  const { heading = "", data = [] } = props;
  const settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: (
      <div className="custom-prev-arrow">
        <i className={`${styles.svg_arrow} fa-solid fa-arrow-left-long`}></i>
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow">
        <i className={`${styles.svg_arrow} fa-solid fa-arrow-right-long`}></i>
      </div>
    ),
  };

  return (
    <div className={styles.cardslider}>
      <h2 className={styles.cardHeading}>{heading}</h2>
      <Slider {...settings}>
        {data?.length > 0 &&
          data.map((item: any) => {
            return (
              <Card
                key={item?.id}
                restaurantName={item?.name}
                rating={item?.avgRating}
                restaurantId={item?.id}
                cuisines={item?.cuisines}
                imgId={item?.cloudinaryImageId}
                shrinkeffect={true}
              />
            );
          })}
      </Slider>
    </div>
  );
};

export default CardSlider;
