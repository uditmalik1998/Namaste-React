import React, { FC } from "react";
import Card from "../../atoms/Card";
import styles from "./index.module.scss";
import useDeviceType from "../../../utils/hooks/useDeviceType";
import MobCard from "../../atoms/MobImage";

interface IHomeLayout {
  filteredList: any;
}

const HomeLayout: FC<IHomeLayout> = (props) => {
  const { filteredList = [] } = props;
  const { deviceType } = useDeviceType();
  return (
    <div>
      {deviceType === "desktop" ? (
        <div className={styles.card_container}>
          {filteredList.map((item: any) => (
            <Card resData={item} key={item.info.id} />
          ))}
        </div>
      ) : (
        <MobCard/>
      )}
    </div>
  );
};

export default HomeLayout;
