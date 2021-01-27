import { NavLink } from "react-router-dom";
import "./Nav.css";

const activeStyle = {
  color: "#444",
  fontWeight: 800,
};

const Nav = (props) => {
  return (
    <>
      <input type="checkbox" className="nav-toggle" id="nav-toggle" />
      <nav>
        <ul>
          <li>
            <NavLink activeStyle={activeStyle} exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/select">
              Browse Levels
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={activeStyle} to="/new">
              Create Levels
            </NavLink>
          </li>
        </ul>
      </nav>
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
    </>
  );
};

export default Nav;
