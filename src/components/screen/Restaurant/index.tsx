import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RestaurantLogicApiManager from "../../../../api-manager/layout/restaurant-logic";
import RestaurantCardDetails from "../../atoms/RestaurantCardDetails";
import DiscountCardSlider from "../../molecules/DiscountCardSlider";
import styles from "./index.module.scss";
import RestaurantCategory from "../../molecules/RestaurantCatagory";

const RestaurantItem = () => {
  const [apiData, setApiData] = useState<any>([]);
  const { resId } = useParams();

  useEffect(() => {
    const fetchResData = async () => {
      if (typeof resId === "string") {
        const res =
          await RestaurantLogicApiManager.sharedInstance.restaurantLayoutData(
            resId
          );
        setApiData(res);
        console.log(res, "RES");
      }
    };
    fetchResData();
  }, []);

  return (
    <div className={styles.restaurant_itemcontainer}>
      {apiData?.restaurantcard ? (
        <RestaurantCardDetails
          restaurantName={apiData.restaurantcard?.restaurantName}
          restaurantDish={apiData.restaurantcard?.cuisines?.join(", ")}
          restaurantPlace={apiData.restaurantcard?.areaName}
          rating={apiData.restaurantcard?.avgRating}
          ratingQuantity={apiData.restaurantcard?.totalRatingsString}
          restaurantDistance={apiData.restaurantcard?.distanceFromYou}
          deliveryTime={apiData.restaurantcard?.timeTaken}
          costForTwo={apiData.restaurantcard?.costForTwo}
          fee={apiData.restaurantcard?.fee?.totalFee}
        />
      ) : null}
      {apiData?.restaurantOffers ? (
        <DiscountCardSlider res={apiData.restaurantOffers} />
      ) : null}
      {apiData?.restaurantData ? (
        <RestaurantCategory response={apiData.restaurantData} />
      ) : null}
    </div>
  );
};

export default RestaurantItem;
