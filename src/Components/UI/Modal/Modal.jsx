import React from "react";
import { createPortal } from "react-dom";

import Backdrop from "./Backdrop";
import ModalOverlay from "./ModalOverlay";

const portalElement = document.getElementById("cart-root");
const Modal = (props) => {
  return (
    <>
      {createPortal(<Backdrop />, portalElement)}

      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
