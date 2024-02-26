import React, { useState } from "react";
import "./NavLocation.css";
import NavLocationItem from "./NavLocationItem/NavLocationItem";
import { NavLink } from "react-router-dom";

function NavLocation(props) {
  const [activeItem, setActiveItem] = useState(props.defaultLocation || "salle");



  return (
    <div className="NavLocation d-flex justify-content-between align-items-center px-5">
      <NavLink to="/">

        <NavLocationItem text="salle" actif={activeItem === "salle"}  />
      </NavLink>
      <NavLink to="/kitchen">

      <NavLocationItem text="cuisine" actif={activeItem === "cuisine"}  />
      </NavLink>
      <NavLink to="/recapToday">
        <NavLocationItem text="service" actif={activeItem === "service"}  />
      </NavLink>
    </div>
  );
}

export default NavLocation;
