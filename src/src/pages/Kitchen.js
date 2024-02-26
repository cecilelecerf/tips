
// Kitchen.js
import NavLocation from "../components/NavLocation/NavLocation";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import { kitchen } from "../data";
import { getSelectedEmployees, setSelectedEmployees } from "../LocalStorageService";
import { useState } from "react";

function Kitchen() {
  const location = "cuisine";
  const [selectedEmployees, setSelectedEmployeesState] = useState(getSelectedEmployees(location));

  const handleEmployeeSelect = (employee) => {
    setSelectedEmployeesState((prevSelectedEmployees) => [...prevSelectedEmployees, employee]);
    setSelectedEmployees(location, [...selectedEmployees, employee]);
  };

  return (
    <main className="d-flex flex-column justify-content-between">
      <NavLocation defaultLocation={location} />
      <EmployeeList height="500px" data={kitchen} onEmployeeSelect={handleEmployeeSelect} />
      <NavLink to="/recapToday">
        <Button text="Suivant" icons={true} />
      </NavLink>
    </main>
  );
}

export default Kitchen;

