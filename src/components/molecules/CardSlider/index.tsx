import React from "react";
import Slider from "react-slick";
import styles from "./index.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import resObj from "../../../utils/mockdata";
import Card from "../../atoms/Card";

const CardSlider = (props: any) => {
  const item = {
    info: {
      id: "82120",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId: "d6608954945e3221cc95ce0efa1dc581",
      locality: "B Block",
      areaName: "Udhyog Marg",
      costForTwo: "₹800 for two",
      cuisines: [
        "Cafe",
        "Healthy Food",
        "Beverages",
        "Desserts",
        "American",
        "Pizzas",
        "Burgers",
      ],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: "82120",
        fees: [
          { name: "BASE_DISTANCE", fee: 4400 },
          { name: "BASE_TIME" },
          { name: "ANCILLARY_SURGE_FEE" },
        ],
        totalFee: 4400,
      },
      parentId: "2682",
      avgRatingString: "4.4",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 27,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "27 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: { nextCloseTime: "2023-09-24 20:00:00", opened: true },
      badges: {
        imageBadges: [{ imageId: "newg.png", description: "Gourmet" }],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              { attributes: { description: "Gourmet", imageId: "newg.png" } },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: { header: "20% OFF", subHeader: "UPTO ₹50" },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          mediaType: "ADS_MEDIA_ENUM_IMAGE",
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
    },
    analytics: {},
    cta: {
      link: "https://www.swiggy.com/restaurants/blue-tokai-coffee-roasters-b-block-udhyog-marg-delhi-82120",
      type: "WEBLINK",
    },
  };
  const settings = {
    dots: true,
    // slideCount:2,
    // infinite: true,
    // speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className={styles.cardslider}>
      <Slider {...settings}>
        {resObj.map((item: any) => (
          <Card resData={item} key={item.info.id} />
        ))}
      </Slider>
      {/* <Card resData={item}/> */}
    </div>
  );
};

export default CardSlider;

