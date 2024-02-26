import NavLocation from "../components/NavLocation/NavLocation"
import EmployeeList from "../components/EmployeeList/EmployeeList"
import Button from "../components/Button/Button"
import { NavLink} from "react-router-dom"
function AddTips () {
    return (
    <main className="d-flex flex-column justify-content-between">
        <NavLocation />
        <EmployeeList height="500px" />
        <NavLink to="/recapToday">

        <Button text="Suivant" icons={true}/>
        </NavLink>
    </main>
    )
};
export default AddTips