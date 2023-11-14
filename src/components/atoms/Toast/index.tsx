import React, { FC } from "react";
import { Toast as BSToast } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { showToast } from "../../../../store/ToastSlice";
import styles from "./index.module.scss";
import { ENDPOINTS } from "../../../utils/constants";

interface IToast {
  toastProps: {
    show?: boolean;
    delay?: number;
    autohide?: boolean;
    toastContent?: string;
  };
}
const Toast: FC<IToast> = (props) => {
  const { toastProps = {} } = props;
  const dispatch = useDispatch();

  return (
    <BSToast
      className={styles.toast_wrapper}
      {...toastProps}
      onClose={() => dispatch(showToast({ show: false }))}
    >
      <img className={styles.tick_icon} src={ENDPOINTS.greenTick} alt="..." />
      <p className={styles.toast_content}>{toastProps.toastContent}</p>
    </BSToast>
  );
};

export default Toast;
