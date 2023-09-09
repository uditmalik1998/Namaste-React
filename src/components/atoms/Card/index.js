import { IMG_CARD_URL } from "../../../utils/constants";

const Card = (props) => {
    const {
      name = "",
      avgRating = "",
      cuisines = "",
      cloudinaryImageId = "",
    } = props?.resData?.info || "";
  
    return (
      <div className="card">
        <img
          className="card-img"
          src={`${IMG_CARD_URL}/${cloudinaryImageId}`}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} star</h4>
      </div>
    );
  };

  export default Card;
  