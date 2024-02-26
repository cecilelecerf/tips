
import SingleEmployee from "./SingleEmployee/SingleEmployee";

function EmployeeList(props) {
  const containerStyle = {
    maxHeight: props.height || "auto",
  };

  const handleEmployeeClick = (employee) => {
    props.onEmployeeSelect(employee);
  };
  return (
    <div className="EmployeeList overflow-x-scroll" style={containerStyle}>
      {props.data.map((employee, index) => (
        <div key={index} onClick={() => handleEmployeeClick(employee)}>
          <SingleEmployee name={employee.name} locationPill={"kitchen"} resume={props.resume} />
        </div>
      ))}
    </div>
  );
}

export default EmployeeList;





  