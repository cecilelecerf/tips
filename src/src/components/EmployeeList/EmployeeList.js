
import "./EmployeeList.css"
import SingleEmployee from "./SingleEmployee/SingleEmployee";

function EmployeeList(props) {
    return (
      <div className="EmployeeList overflow-x-scroll ">
        <SingleEmployee  />
        <SingleEmployee resume={props.resume} locationPill="cuisine"/>
        <SingleEmployee resume={props.resume} money="3"/>
        <SingleEmployee resume={props.resume}/>
        <SingleEmployee resume={props.resume}/>
        <SingleEmployee resume={props.resume}/>
      </div>
    );
  }
  
  export default EmployeeList;
  