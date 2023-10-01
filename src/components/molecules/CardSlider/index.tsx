import React from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resObj from "../../../utils/mockdata";
import Card from "../../atoms/Card";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const CardSlider = (props: any) => {
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: (
      <div className="custom-prev-arrow" >
        <FaArrowLeftLong className={styles.svg_arrow} />
      </div>
    ),
    nextArrow: (
      <div className="custom-next-arrow">
        <FaArrowRightLong className={styles.svg_arrow} />
      </div>
    ),
  };

  return (
    <div className={styles.cardslider}>
      <h2 className={styles.cardHeading}>Heading</h2>
      <Slider {...settings}>
        {resObj.map((item: any) => (
          <Card resData={item} key={item.info.id} />
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
