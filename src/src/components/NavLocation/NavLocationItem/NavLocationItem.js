import React from "react";
import "./NavLocationItem.css";

function NavLocationItem(props) {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props.text);
    }
  };

  if (props.actif) {
    return (
      <p className="NavLocationItem rounded-2 bg-secondary-subtle text-dark px-2 py-1" onClick={handleClick}>
        {props.text}
      </p>
    );
  } else {
    return (
      <div className="NavLocationItem text-secondary px-2 py-1" onClick={handleClick}>
        {props.text}
      </div>
    );
  }
}

export default NavLocationItem;
