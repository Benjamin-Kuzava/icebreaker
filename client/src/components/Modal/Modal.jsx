import "./Modal.css";

const Modal = (props) => {
  return (
    <div className="modal">
      <h2>Congratulations! You've completed all available levels.</h2>
      <h2>
        Head over to <span>Create Levels</span> to add your own.
      </h2>
    </div>
  );
};

export default Modal;
