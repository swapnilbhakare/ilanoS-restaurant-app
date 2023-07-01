import stylesheet from "./Backdrop.module.css";

const Backdrop = (props) => {
  return <div className={stylesheet.backdrop} onClick={props.onHideCart}></div>;
};
export default Backdrop;
