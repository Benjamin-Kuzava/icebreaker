import "./List.css";
import { NavLink } from "react-router-dom";

const activeStyle = {
  fontWeight: 700,
  textShadow: "3px 3px 3px rgba(0, 0, 0, .4)",
};

const List = (props) => {
  return (
    <>
      <div className="level-container">
        {props.levels &&
          props.levels.map((level) => (
            <div key={level.id} className="list">
              <NavLink activeStyle={activeStyle} to={`/select/${level.id}`}>
                {level.fields.levelName}
              </NavLink>
              <h5>{`Difficulty: ${level.fields.difficulty}`}</h5>
              <h5>{`Author: ${level.fields.author}`}</h5>
            </div>
          ))}
      </div>
    </>
  );
};

export default List;
