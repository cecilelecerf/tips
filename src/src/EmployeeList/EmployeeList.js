
import "./EmployeeList.css"
import SingleEmployee from "./SingleEmployee/SingleEmployee";

function EmployeeList(props) {
    return (
      <div className="EmployeeList overflow-x-scroll ">
        <SingleEmployee resume={props.resume}/>
        <SingleEmployee resume={props.resume}/>
        <SingleEmployee resume={props.resume}/>
        <SingleEmployee resume={props.resume}/>
        <SingleEmployee resume={props.resume}/>
        <SingleEmployee resume={props.resume}/>
      </div>
    );
  }
  
  export default EmployeeList;
  