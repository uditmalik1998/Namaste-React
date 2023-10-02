import React, { FC } from "react";
import Card from "../../atoms/Card";
import styles from "./index.module.scss";
import MobCard from "../MobCard";
import CardSlider from "../CardSlider";

interface IHomeCardLayout {
  filteredList?: any;
  deviceType?: string;
  carousalData?: any;
}

const HomeCardLayout: FC<IHomeCardLayout> = (props) => {
  const { filteredList = [], deviceType, carousalData = [] } = props;
  console.log(props, "((((");
  return (
    <div>
      {deviceType === "desktop" ? (
        <>
          <CardSlider
            heading={"Top restaurant chains in Delhi"}
            data={carousalData}
          />
          <div className={styles.cardlayout_container}>
            {filteredList.map((item: any) => {
              const info = item?.info;
              return (
                <Card
                  key={item.info.id}
                  restaurantName={info?.name}
                  rating={info?.avgRating}
                  restaurantId={info?.id}
                  cuisines={info?.cuisines}
                  imgId={info?.cloudinaryImageId}
                />
              );
            })}
          </div>
        </>
      ) : (
        filteredList.map((item: any) => {
          const info = item?.info;
          return (
            <MobCard
              key={info?.id}
              link={`/restaurant/${info?.id}`}
              restaurantName={info?.name}
              rating={info?.avgRatingString}
              responseTime={info?.sla?.slaString}
              price={info?.costForTwo}
              cuisiones={info?.cuisines}
              data={info}
            />
          );
        })
      )}
    </div>
  );
};

export default HomeCardLayout;
