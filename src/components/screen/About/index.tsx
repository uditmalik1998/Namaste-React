import React, { useState } from "react";
import Modal from "../../atoms/Modal";
import Offcanvas from "../../atoms/Offcanvas";

const About = () => {
  const [show, setShow] = useState<boolean>(true);

  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <h1>About Us</h1>
      <Modal
        show={show}
        handleClose={handleClose}
        header={" "}
        footer={"Footer"}
        headerProps={{ closeButton: true }}
      >
        KKK
      </Modal>
      {/* <Offcanvas
        show={show}
        handleClose={handleClose}
        header={"Udit"}
        offcanvasProps={{ placement: "end" }}
        headerProps={{ closeButton: true }}
      >
        Hello
      </Offcanvas> */}
    </>
  );
};

export default About;
