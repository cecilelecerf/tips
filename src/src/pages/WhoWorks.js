
// WhoWorks.js
import NavLocation from "../components/NavLocation/NavLocation";
import EmployeeList from "../components/EmployeeList/EmployeeList";
import Button from "../components/Button/Button";
import { NavLink } from "react-router-dom";
import { people } from "../data";
import { getSelectedEmployees, setSelectedEmployees } from "../LocalStorageService";

function WhoWorks(props) {
  const handleEmployeeSelect = (employee) => {
    const isEmployeeSelected = getSelectedEmployees().some((emp) => emp.name === employee.name);
    if(isEmployeeSelected){
      const updatedEmployees = getSelectedEmployees().filter((emp) => emp.name !== employee.name);
      setSelectedEmployees(updatedEmployees);
    }else{
      const updatedEmployees = [...getSelectedEmployees(), employee];
      setSelectedEmployees(updatedEmployees);
    }
  };
  return (
    <main className="d-flex flex-column justify-content-between">
      <NavLocation location={props.location} />
      <EmployeeList height="450px" data={people.filter(person => person.location === props.location)} onEmployeeSelect={handleEmployeeSelect} />
      <NavLink to={props.location==="room"?"/kitchen":"/recapToday"}>
        <Button text="Suivant" icons={true} />
      </NavLink>
    </main>
  );
}

export default WhoWorks;

