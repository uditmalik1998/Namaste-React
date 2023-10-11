import resObj from "../../../utils/mockdata";
import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";
import HomeCardLayout from "../../molecules/HomeCardLayout";
import useDeviceType from "../../../utils/hooks/useDeviceType";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const [carousalData, setCarousalData] = useState([]);
  const { deviceType } = useDeviceType();

  useEffect(() => {
    const fetachRestaurantList = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6078909&lng=77.3054884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      if (
        deviceType === "desktop" &&
        response?.data?.cards?.[5]?.card?.card?.gridElements &&
        response?.data?.cards?.[2]?.card?.card?.gridElements
      ) {
        setCarousalData(
          response?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurantList(
          response?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredList(
          response?.data?.cards?.[5]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
      if (
        deviceType !== "desktop" &&
        response?.data?.cards?.[3]?.card?.card?.gridElements
      ) {
        setCarousalData(
          response?.data?.cards?.[0]?.card?.card?.gridElements?.infoWithStyle
            ?.info
        );
        setFilteredList(
          response?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setRestaurantList(
          response?.data?.cards?.[3]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    };
    fetachRestaurantList();
  }, [deviceType]);

  const highRated = () => {
    const filteredData = restaurantList.filter((item: any) => {
      return item.info.avgRating > 4;
    });
    setFilteredList(filteredData);
  };

  return (
    <>
      {restaurantList.length < 1 ? (
        <h1>Loading....</h1>
      ) : (
        <div className="body-container">
          <div className={styles.search_container}>
            <div className={styles.inputtxt}>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  if (searchQuery.length === 1) {
                    setFilteredList(restaurantList);
                  }
                }}
              />
              <Button
                onClick={() => {
                  const filterData = restaurantList.filter((item: any) => {
                    return item.info.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase());
                  });
                  setFilteredList(filterData);
                }}
                btntext={"Search"}
              ></Button>
            </div>
            <Button
              onClick={() => highRated()}
              btntext={"Higher Rated"}
            ></Button>
          </div>
          <HomeCardLayout
            filteredList={filteredList}
            deviceType={deviceType}
            carousalData={carousalData}
          />
        </div>
      )}
    </>
  );
};

export default Body;
