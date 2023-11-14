import React, { FC, useState } from "react";
import RestaurantItemCard from "../../atoms/RestaurantItemCard";
import styles from "./index.module.scss";
import ArrowUp from "../../Icons/arrow-up";
import ArrowDown from "../../Icons/arrow-down";

interface IRestaurantCategory {
  response?: { itemCards?: any; title?: string }[];
}

const RestaurantCategory: FC<IRestaurantCategory> = (props) => {
  const [open, setOpen] = useState<any>([]);
  const { response = [] } = props;

  const categoryOpen = (category: string) => {
    if (open.includes(category)) {
      const filter = open?.filter((item: string) => item !== category);
      setOpen(filter);
    } else {
      setOpen([...open, category]);
    }
  };

  return (
    <div className={styles.res_category_container}>
      {response?.length > 0 &&
        response.map((item: any) => {
          return (
            <div key={`${item?.title}`} className={styles.res_category_wrapper}>
              <div className={styles.res_border}></div>
              <div
                className={`${styles.res_category}`}
                onClick={() => {
                  categoryOpen(item?.title);
                }}
              >
                <h3 className={styles.heading}>{`${item?.title}(${
                  item?.itemCards?.length > 0 ? item.itemCards.length : null
                })`}</h3>
                {!open?.includes(item?.title) ? <ArrowUp /> : <ArrowDown />}
              </div>
              {item?.itemCards?.length > 0 &&
                item.itemCards.map((res: any) => {
                  return (
                    <RestaurantItemCard
                      className={`${
                        !open?.includes(item?.title) ? "" : styles.res_show
                      }`}
                      key={res?.card?.info?.id}
                      dishName={res?.card?.info?.name}
                      dishPrice={
                        res?.card?.info?.defaultPrice / 100 ||
                        res?.card?.info?.price / 100
                      }
                      discountPercentage={
                        res?.card?.info?.offerTags?.[0]?.title
                      }
                      imageId={res?.card?.info?.imageId}
                      description={res?.card?.info?.description}
                      isVeg={res?.card?.info?.itemAttribute?.vegClassifier}
                      couponCode={res?.card?.info?.offerTags?.[0]?.subTitle}
                      itemId={res?.card?.info?.id}
                    />
                  );
                })}
            </div>
          );
        })}
    </div>
  );
};

export default RestaurantCategory;
