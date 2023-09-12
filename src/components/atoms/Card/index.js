import { IMG_CARD_URL } from "../../../utils/constants";
import styles from "./index.module.scss";

const Card = (props) => {
  const {
    name = "",
    avgRating = "",
    cuisines = "",
    cloudinaryImageId = "",
  } = props?.resData?.info || "";

  return (
    <div className={`${styles.card} card`}>
      <img className="card-img" src={`${IMG_CARD_URL}/${cloudinaryImageId}`} />
      <div className={styles.minicard}>
        <p>{name}</p>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating} star</p>
      </div>
    </div>
  );
};

export default Card;
