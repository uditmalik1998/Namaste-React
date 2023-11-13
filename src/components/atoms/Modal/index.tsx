import React, { FC } from "react";
import { Modal as BSModal } from "react-bootstrap";
import styles from "./index.module.scss";

interface IModal {
  show?: boolean;
  handleClose?: () => void;
  header?: any;
  children?: any;
  footer?: any;
  title?: any;
  headerProps?: { closeButton?: boolean };
  className?: any;
}

const Modal: FC<IModal> = (props) => {
  const {
    show = false,
    handleClose,
    header = null,
    children,
    footer = null,
    title = null,
    headerProps = null,
    className = "",
  } = props;

  return (
    <div>
      <BSModal
        show={show}
        onHide={handleClose}
        className={`${styles.modal_wrapper} ${className}`}
      >
        {header ? (
          <BSModal.Header {...headerProps}>{header}</BSModal.Header>
        ) : null}
        {title ? (
          <BSModal.Header>
            <BSModal.Title>{title}</BSModal.Title>
          </BSModal.Header>
        ) : null}
        <BSModal.Body>{children}</BSModal.Body>
        {footer ? <BSModal.Footer>{footer}</BSModal.Footer> : null}
      </BSModal>
    </div>
  );
};

export default Modal;
