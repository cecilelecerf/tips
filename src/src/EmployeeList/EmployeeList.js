
import "./EmployeeList.css"
import SingleEmployee from "./SingleEmployee/SingleEmployee";

function EmployeeList() {
    return (
      <div className="EmployeeList overflow-x-scroll ">
        <SingleEmployee/>
        <SingleEmployee/>
        <SingleEmployee/>
        <SingleEmployee/>
        <SingleEmployee/>
        <SingleEmployee/>
      </div>
    );
  }
  
  export default EmployeeList;
  