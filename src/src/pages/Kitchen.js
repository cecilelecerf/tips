
// Kitchen.js
import NavLocation from "../components/NavLocation/NavLocation";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import { people } from "../data";
import { getSelectedEmployees, setSelectedEmployees } from "../LocalStorageService";

function Kitchen() {
  const location = "kitchen";
  const handleEmployeeSelect = (employee) => {
    console.log(...getSelectedEmployees())
    setSelectedEmployees([...getSelectedEmployees(), employee]);
  };

  return (
    <main className="d-flex flex-column justify-content-between">
      <NavLocation defaultLocation={location} />
      <EmployeeList height="500px" data={people.filter(person => person.location === location)} onEmployeeSelect={handleEmployeeSelect} />
      <NavLink to="/recapToday">
        <Button text="Suivant" icons={true} />
      </NavLink>
    </main>
  );
}

export default Kitchen;

