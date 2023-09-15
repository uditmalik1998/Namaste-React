import { useState, useEffect } from "react";
import { ENDPOINTS } from "../../../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantItem = () => {
  const [apiData, setApiData] = useState([]);
  const { resId } = useParams();

  useEffect(() => {
    const fetchResData = async () => {
      const data = await fetch(`${ENDPOINTS.restaurant}${resId}`);
      const json = await data.json();

      setApiData(
        json?.data?.cards?.[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]
          ?.card?.card?.itemCards
      );
    };
    fetchResData();
  }, []);

  return (
    <div>
      {apiData.map((item) => (
        <div key={item?.card?.info?.id}>
          <h2>{item?.card?.info?.name}</h2>
          <p>
            {item?.card?.info?.defaultPrice / 100 ||
              item?.card?.info?.price / 100}
          </p>
          <p>{item?.card?.info?.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantItem;
