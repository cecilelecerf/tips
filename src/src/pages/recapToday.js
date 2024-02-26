// recapToday.js
import React, { useContext } from 'react';
import NavLocation from "../components/NavLocation/NavLocation";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Button from "../components/Button/Button";
import Switch from "../components/Switch/Switch";
import { NavLink } from "react-router-dom";
import DarkModeContext from '../DarkModeContext';

function RecapToday() {
    const { darkMode, handleSwitchChange } = useContext(DarkModeContext);

    return (
        <main className="d-flex flex-column justify-content-between">
            <NavLocation />
            <p className="text-primary fw-bold fs-5 text-center">Employés sélectionnés</p>
            <EmployeeList height="200px" />
            <Switch leftSvg="../components/Switch/LightSun.svg" rightSvg="../components/Switch/LightMoon.svg" onChange={handleSwitchChange} />
            <NavLink to="/addTips">
                <Button text="Commancer le service !" />
            </NavLink>
        </main>
    );
};

export default RecapToday;