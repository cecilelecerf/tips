// RecapToday.js
import React from "react";
import NavLocation from "../components/NavLocation/NavLocation";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import { getSelectedEmployees } from "../LocalStorageService";

function RecapToday() {
  const salleSelectedEmployees = getSelectedEmployees("salle");
  const cuisineSelectedEmployees = getSelectedEmployees("cuisine");

  const selectedEmployees = [...salleSelectedEmployees, ...cuisineSelectedEmployees];

  return (
    <main className="d-flex flex-column justify-content-between">
      <NavLocation defaultLocation="service" />
      <p className="text-primary fw-bold fs-5 text-center">Employés sélectionnés</p>
      <EmployeeList height="200px" data={selectedEmployees} />
      <NavLink to="/addTips">
        <Button text="Commencer le service !" />
      </NavLink>
    </main>
  );
}

export default RecapToday;
