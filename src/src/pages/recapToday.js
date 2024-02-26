import React from 'react';
import NavLocation from "../components/NavLocation/NavLocation"
import EmployeeList from "../components/EmployeeList/EmployeeList"
import Button from "../components/Button/Button"
import { NavLink } from "react-router-dom"
import Switch from "../components/Switch/Switch";
import { getSelectedEmployees } from "../LocalStorageService";

const RecapToday = () => {
    const selectedEmployees = [...getSelectedEmployees()];
    if(selectedEmployees.length===0){

        return (
            <main className="d-flex flex-column justify-content-between">
                <NavLocation location= "service" />
                        <p className="text-center mt-2 text-primary">Pas d'employé sélectionné</p>                <NavLink to="/">
                            <Button text="Sélectionner dans la salle" />
                        </NavLink>
                    
                </main>)
    }else{
        return(
            <main className="d-flex flex-column justify-content-between">

            <NavLocation location= "service" />
            <p className="text-primary fw-bold fs-5 text-center">Employés sélectionnés</p>
            <EmployeeList height="320px" data={selectedEmployees} resume={true} /><div className="align-self-center">

            <Switch/>
            </div>
            <NavLink to="/addTips">
                <Button text="Commancer le service !" />
            </NavLink>
            </main>
        )
    }

    
};
export default RecapToday;
