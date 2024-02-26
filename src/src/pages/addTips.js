
import Button from "../components/Button/Button"
import { NavLink } from "react-router-dom"
import FormTips from "../components/Form/Form"
import DarkModeContext from '../components/DarkMode/DarkMode';
import React, { useContext } from 'react';

function AddTips() {
    const { darkMode, handleSwitchChange } = useContext(DarkModeContext);
    return (
        <main className="d-flex flex-column justify-content-between">
            <FormTips />
            <NavLink to="/addTips">
                <Button text="Ajouter le pourboire" />
            </NavLink>
        </main>
    )
};
export default AddTips