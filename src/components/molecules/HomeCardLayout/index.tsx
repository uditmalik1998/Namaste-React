import React, { FC } from "react";
import Card from "../../atoms/Card";
import styles from "./index.module.scss";
import MobCard from "../MobCard";
import CardSlider from "../CardSlider";
import MobSlider from "../../atoms/MobSlider";
import ImageSlider from "../../atoms/ImageSlider";
import MobImage from "../../atoms/MobImage";

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
          {layoutData?.[0]?.banner?.length > 0 ? (
            <MobSlider
              data={layoutData[0].banner}
              className={styles.slider}
              heading={"Best offers for you"}
            />
          ) : null}
          {layoutData?.[1]?.bannerCuisiones?.length > 0 ? (
            <MobSlider
              data={layoutData[1].bannerCuisiones}
              className={styles.slidercuisiones}
              heading={"What's on your mind?"}
            />
          ) : null}
          {layoutData?.[2]?.bestDesktopRestaurant?.length > 0 ? (
            <CardSlider
              heading={"Top restaurant chains in Delhi"}
              data={layoutData[2].bestDesktopRestaurant}
            />
          ) : null}
          {layoutData?.[3]?.allRestaurant?.length > 0 ? (
            <div className={styles.cardlayout_wrapper}>
              <h2 className={styles.cardlayout_heading}>
                Restaurants with online food delivery in Delhi
              </h2>
              <div className={styles.cardlayout_container}>
                {layoutData[3].allRestaurant.map((item: any) => {
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
          ) : null}
        </>
      ) : (
        <>
          <h2>Top Picks For You</h2>
          <ImageSlider>
            {layoutData?.[1]?.allRestaurant?.length > 0 &&
              layoutData?.[1]?.allRestaurant.map((item: any) => {
                return (
                  <div className={styles.top_picks} key={item?.id}>
                    <MobImage
                      className={styles.imageSlider_bar}
                      imageId={item?.cloudinaryImageId}
                    />
                    <div className={styles.top_picksinfo}>{item?.name}</div>
                    <div className={styles.top_picktime}>
                      {item?.deliveryTime}
                    </div>
                  </div>
                );
              })}
          </ImageSlider>
          {layoutData?.[0]?.banner?.length ? (
            <MobSlider data={layoutData[0].banner} />
          ) : null}
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
