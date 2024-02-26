import React, { useState } from "react";
import "./NavLocation.css";
import NavLocationItem from "./NavLocationItem/NavLocationItem";

function NavLocation() {
  const [activeItem, setActiveItem] = useState("salle");

  const handleItemClick = (text) => {
    setActiveItem(text);
  };

  return (
    <div className="NavLocation d-flex justify-content-between align-items-center px-5">
      <NavLocationItem text="salle" actif={activeItem === "salle"} onClick={handleItemClick} />
      <NavLocationItem text="cuisine" actif={activeItem === "cuisine"} onClick={handleItemClick} />
      <NavLocationItem text="service" actif={activeItem === "service"} onClick={handleItemClick} />
    </div>
  );
}

export default NavLocation;