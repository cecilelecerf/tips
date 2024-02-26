import React, { useContext } from 'react';
import NavLocation from "../components/NavLocation/NavLocation"
import EmployeeList from "../components/EmployeeList/EmployeeList"
import Button from "../components/Button/Button"
import { NavLink } from "react-router-dom"
import Switch from "../components/Switch/Switch";
import DarkModeContext from '../components/DarkMode/DarkMode';
import { NavLink } from "react-router-dom";
import { getSelectedEmployees } from "../LocalStorageService";

function recapToday() {
    const salleSelectedEmployees = getSelectedEmployees("salle");
    const cuisineSelectedEmployees = getSelectedEmployees("cuisine");
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const selectedEmployees = [...salleSelectedEmployees, ...cuisineSelectedEmployees];
    return (
        <main className="d-flex flex-column justify-content-between">
            <NavLocation />
            <p className="text-primary fw-bold fs-5 text-center">Employés sélectionnés</p>
            <EmployeeList height="200px" />
            <Switch leftSvg="../components/Switch/LightSun.svg" rightSvg="../components/Switch/LightMoon.svg" onChange={toggleDarkMode} />
            <NavLink to="/addTips">
                <Button text="Commancer le service !" />
            </NavLink>
        </main>
    )
};
export default recapToday