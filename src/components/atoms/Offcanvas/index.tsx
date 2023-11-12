import React, { FC } from "react";
import { Offcanvas as BSOffcanvas } from "react-bootstrap";

interface IOffcanvas {
  show?: boolean;
  handleClose?: () => void;
  header?: any;
  title?: any;
  children?: any;
  offcanvasProps?: { placement?: string } | any;
  headerProps?: { closeButton?: boolean };
}

const Offcanvas: FC<IOffcanvas> = (props) => {
  const {
    show = true,
    handleClose,
    header = null,
    title,
    children,
    offcanvasProps = null,
    headerProps = null,
  } = props;
  return (
    <div>
      <BSOffcanvas show={show} onHide={handleClose} {...offcanvasProps}>
        {header ? (
          <BSOffcanvas.Header {...headerProps}>{header}</BSOffcanvas.Header>
        ) : null}
        {title ? (
          <BSOffcanvas.Header>
            <BSOffcanvas.Title>{title}</BSOffcanvas.Title>
          </BSOffcanvas.Header>
        ) : null}
        <BSOffcanvas.Body>{children}</BSOffcanvas.Body>
      </BSOffcanvas>
    </div>
  );
};

export default Offcanvas;
