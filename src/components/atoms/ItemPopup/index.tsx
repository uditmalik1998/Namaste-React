import React, { FC } from "react";
import Modal from "../Modal";
import { IRestaurantItemCard } from "../RestaurantItemCard";

interface IItemPopup {
  show?: boolean;
  handleClose?: () => void;
  data?: IRestaurantItemCard;
  deviceType?: any;
}

const ItemPopup: FC<IItemPopup> = (props) => {
  const { show = false, handleClose, data = {}, deviceType } = props;
  return (
    <>
      {deviceType === "desktop" ? (
        <Modal
          show={show}
          handleClose={handleClose}
          header={" "}
          headerProps={{ closeButton: true }}
        ></Modal>
      ) : null}
    </>
  );
};

export default ItemPopup;
