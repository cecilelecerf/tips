import SingleEmployee from "./SingleEmployee/SingleEmployee";

function EmployeeList(props) {
  const containerStyle = {
    maxHeight: props.height || "auto" // Utilisez "auto" si aucune hauteur n'est spécifiée
  };
    return (
      <div className="EmployeeList overflow-x-scroll " style={containerStyle}>
        <SingleEmployee  />
        <SingleEmployee resume={props.resume} locationPill="cuisine"/>
        <SingleEmployee resume={props.resume} money="3"/>
        <SingleEmployee resume={props.resume}/>
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
  