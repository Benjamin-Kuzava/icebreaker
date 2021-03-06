import "./Node.css";

const Node = (props) => {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
};

export default Node;
