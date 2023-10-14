import React, { FC } from "react";
import Card from "../../atoms/Card";
import styles from "./index.module.scss";
import MobCard from "../MobCard";
import CardSlider from "../CardSlider";
import MobSlider from "../../atoms/MobSlider";

interface IHomeCardLayout {
  deviceType?: string;
  layoutData?: any;
}

const HomeCardLayout: FC<IHomeCardLayout> = (props) => {
  const { deviceType, layoutData = [] } = props;
  console.log(props, "((((");
  return (
    <div className={styles.homecardlayout}>
      {deviceType === "desktop" ? (
        <>
          <MobSlider
            data={layoutData?.[0]?.banner}
            className={styles.slider}
            heading={"Best offers for you"}
          />
          <MobSlider
            data={layoutData?.[1]?.bannerCuisiones}
            className={styles.slidercuisiones}
            heading={"What's on your mind?"}
          />
          <CardSlider
            heading={"Top restaurant chains in Delhi"}
            data={layoutData?.[2]?.bestDesktopRestaurant}
          />
          <div className={styles.cardlayout_wrapper}>
            <h2 className={styles.cardlayout_heading}>
              Restaurants with online food delivery in Delhi
            </h2>
            <div className={styles.cardlayout_container}>
              {layoutData?.[3]?.allRestaurant.map((item: any) => {
                return (
                  <Card
                    key={item.id}
                    restaurantName={item?.name}
                    rating={item?.avgRating}
                    restaurantId={item?.id}
                    cuisines={item?.cuisines}
                    imgId={item?.cloudinaryImageId}
                  />
                );
              })}
            </div>
          </div>
        </>
      ) : (
        <>
          <MobSlider data={layoutData?.[0]?.banner} />
          {layoutData?.[1]?.allRestaurant?.length > 0 &&
            layoutData?.[1]?.allRestaurant.map((item: any) => {
              return (
                <MobCard
                  key={item?.id}
                  link={`/restaurant/${item?.id}`}
                  restaurantName={item?.name}
                  rating={item?.avgRating}
                  responseTime={item?.deliveryTime}
                  price={item?.costForTwo}
                  cuisiones={item?.cuisines}
                  discountTextHeader={item?.discountTextHeader}
                  discountCouponCode={item?.discountCouponCode}
                  imageId={item?.cloudinaryImageId}
                />
              );
            })}
        </>
      )}
    </div>
  );
};

export default HomeCardLayout;
