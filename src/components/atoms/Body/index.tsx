import resObj from "../../../utils/mockdata";
import React, { useState, useEffect } from "react";
import Card from "../Card";
import { Link } from "react-router-dom";
import Button from "../Button";
import useOnlineStatus from '../../../utils/hooks/useOnlineStatus';
import styles from "./index.module.scss";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resObj);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredList, setFilteredList] = useState(resObj);

  useEffect(() => {
    const fetachRestaurantList = async () => {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6078909&lng=77.3054884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const response = await data.json();
      if (
        response?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      ) {
        setRestaurantList(
          response?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
        setFilteredList(
          response?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
      }
    };
    // fetachRestaurantList();
  }, []);

  const highRated = () => {
    const filteredData = restaurantList.filter((item:any) => {
      return item.info.avgRating > 4;
    });
    setFilteredList(filteredData);
  };
  const onlineStatus = useOnlineStatus();
  console.log(onlineStatus, '***')
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
                  const filterData = restaurantList.filter((item:any) => {
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
          <div className="card-container">
            {filteredList.map((item:any) => (
              <Link
                className={styles.rescard}
                to={`/restaurant/${item.info.id}`}
                key={item.info.id}
              >
                <Card resData={item} />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
