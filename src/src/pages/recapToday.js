import React, { useContext } from 'react';
import NavLocation from "../components/NavLocation/NavLocation"
import EmployeeList from "../components/EmployeeList/EmployeeList"
import Button from "../components/Button/Button"
import { NavLink } from "react-router-dom"
import Switch from "../components/Switch/Switch";
import DarkModeContext from '../components/DarkMode/DarkMode';
import { getSelectedEmployees } from "../LocalStorageService";

const RecapToday = () => {
    const salleSelectedEmployees = getSelectedEmployees("salle");
    const cuisineSelectedEmployees = getSelectedEmployees("cuisine");
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const selectedEmployees = [...salleSelectedEmployees, ...cuisineSelectedEmployees];
    return (
        <main className="d-flex flex-column justify-content-between">
            <NavLocation defaultLocation= "service" />
            <p className="text-primary fw-bold fs-5 text-center">Employés sélectionnés</p>
        <EmployeeList height="200px" data={selectedEmployees} />
            <Switch leftSvg="../components/Switch/LightSun.svg" rightSvg="../components/Switch/LightMoon.svg" onChange={toggleDarkMode} />
            <NavLink to="/addTips">
                <Button text="Commancer le service !" />
            </NavLink>
        </main>
    )
};

export default RecapToday;
