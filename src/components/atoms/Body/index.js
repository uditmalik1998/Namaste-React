import resObj from "../../../utils/mockdata";
import { useState, useEffect } from "react";
import Card from "../Card";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resObj);

  useEffect(async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6078909&lng=77.3054884&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const response = await data.json();
    setRestaurantList(
      response?.data?.cards?.[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }, []);

  const highRated = () => {
    const filteredData = restaurantList.filter((item) => {
      return item.info.avgRating > 4;
    });
    setRestaurantList(filteredData);
  };

  return (
    <div className="body-container">
      <button onClick={() => highRated()}>Higher Rated</button>
      <div className="card-container">
        {restaurantList.map((item) => (
          <Card key={item.info.id} resData={item} />
        ))}
      </div>
    </div>
  );
};

export default Body;
