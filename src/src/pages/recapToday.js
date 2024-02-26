import NavLocation from "../components/NavLocation/NavLocation"
import EmployeeList from "../components/EmployeeList/EmployeeList"
import Button from "../components/Button/Button"
import { NavLink} from "react-router-dom"
function recapToday () {
    return (
    <main className="d-flex flex-column justify-content-between">
        <NavLocation />
        <p className="text-primary fw-bold fs-5 text-center">Employés sélectionnés</p>
        <EmployeeList height="200px" />
        <NavLink to="/addTips">

        <Button text="Suivant" icons={true}/>
        </NavLink>
    </main>
    )
};
export default recapToday