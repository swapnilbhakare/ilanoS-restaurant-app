import stylesheet from "./ModalOverlay.module.css";

const ModalOverlay = (props) => {
  return (
    <div className={stylesheet.modal}>
      <div className={stylesheet.content}>{props.children}</div>
    </div>
  );
};

export default ModalOverlay;
