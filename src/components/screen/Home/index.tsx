import resObj from "../../../utils/mockdata";
import React, { useState, useEffect } from "react";
import Button from "../../atoms/Button";
import styles from "./index.module.scss";
import HomeCardLayout from "../../molecules/HomeCardLayout";
import useDeviceType from "../../../utils/hooks/useDeviceType";
import { homePageLayoutData } from "../../../../api-manager/layout/homepagelayout";
import HomeShimmer from "../../atoms/HomeShimmer";

const Body = () => {
  // const [restaurantList, setRestaurantList] = useState([]);
  // const [searchQuery, setSearchQuery] = useState("");
  // const [filteredList, setFilteredList] = useState([]);
  const [layoutData, setLayoutData] = useState<any>([]);
  const { deviceType } = useDeviceType();

  useEffect(() => {
    const fetachRestaurantList = async () => {
      const layoutData = await homePageLayoutData();
      setLayoutData(layoutData);
    }
    fetachRestaurantList();
  }, [deviceType]);

  // const highRated = () => {
  //   const filteredData = restaurantList.filter((item: any) => {
  //     return item.info.avgRating > 4;
  //   });
  //   setFilteredList(filteredData);
  // };

  return (
    <>
      {layoutData.length < 1 ? (
       <HomeShimmer/>
      ) : (
        <div className={styles.body_container}>
          {/* <div className={styles.search_container}>
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
          </div> */}
          <HomeCardLayout
            layoutData={layoutData}
            deviceType={deviceType}
          />
        </div>
      )}
    </>
  );
};

export default Body;
