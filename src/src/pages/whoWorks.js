import NavLocation from "../components/NavLocation/NavLocation"
import EmployeeList from "../components/EmployeeList/EmployeeList"
import Button from "../components/Button/Button"
import { NavLink } from "react-router-dom"
import React, { useContext } from 'react';
import DarkModeContext from '../components/DarkMode/DarkMode';

function WhoWorks() {
    const { darkMode } = useContext(DarkModeContext);


    const pageStyle = darkMode ? "dark-page" : "light-page";

    return (
        <main className={`d-flex flex-column justify-content-between ${pageStyle}`}>
            <NavLocation />
            <EmployeeList height="500px" />
            <NavLink to="/recapToday">
                <Button text="Suivant" icons={true} />
            </NavLink>
        </main>
    )
};
export default WhoWorks