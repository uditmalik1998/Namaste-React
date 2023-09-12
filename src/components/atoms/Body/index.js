import resObj from "../../../utils/mockdata";
import { useState, useEffect } from "react";
import Card from "../Card";

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
    const filteredData = restaurantList.filter((item) => {
      return item.info.avgRating > 4;
    });
    setFilteredList(filteredData);
  };
  console.log("Render");
  return (
    <>
      {restaurantList.length < 1 ? (
        <h1>Loading....</h1>
      ) : (
        <div className="body-container">
          <div>
            <div>
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
              <button
                onClick={() => {
                  const filterData = restaurantList.filter((item) => {
                    return item.info.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase());
                  });
                  setFilteredList(filterData);
                }}
              >
                Search
              </button>
            </div>
            <button onClick={() => highRated()}>Higher Rated</button>
          </div>
          <div className="card-container">
            {filteredList.map((item) => (
              <Card key={item.info.id} resData={item} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Body;
