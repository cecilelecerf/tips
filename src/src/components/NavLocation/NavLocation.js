import "./NavLocation.css";
import NavLocationItem from "./NavLocationItem/NavLocationItem";
import { NavLink } from "react-router-dom";

function NavLocation(props) {



  return (
    <div className="NavLocation d-flex justify-content-between align-items-center px-5">
      <NavLink to="/">

        <NavLocationItem text="salle" actif={props.location === "room"}  />
      </NavLink>
      <NavLink to="/kitchen">

      <NavLocationItem text="cuisine" actif={props.location === "kitchen"}  />
      </NavLink>
      <NavLink to="/recapToday">
        <NavLocationItem text="service" actif={props.location === "service"}  />
      </NavLink>
    </div>
  );
}

export default NavLocation;
