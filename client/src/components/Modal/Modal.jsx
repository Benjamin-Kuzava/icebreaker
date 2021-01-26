import "./Modal.css";

const Modal = (props) => {
  return (
    <div className={props.isFinished}>
      <h2>Congratulations! You've completed all available levels.</h2>
      <h2>Head over to Create Levels to add your own.</h2>
    </div>
  );
};

export default Modal;
