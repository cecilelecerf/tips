import LocationPill from "../LocationPills/LocationPill";
import PicturePeople from "../PicturePeople/PicturePeople";
import "./SingleEmployee.css"
import  { useState } from "react";

import { getSelectedEmployees } from "../../../LocalStorageService";
function SingleEmployee(props) {
  // const isEmployeeSelected = getSelectedEmployees().some((emp) => emp.name === props.name);
  const [isEmployeeSelected, setIsEmployeeSelect] = useState(getSelectedEmployees().some((emp) => emp.name === props.name));
  const handleClick=()=>{
    setIsEmployeeSelect(! getSelectedEmployees().some((emp) => emp.name === props.name))
  }
  
  if(props.resume){
    return (
      <div className="Employee d-flex justify-content-between p-2 border-bottom">
        <div className="d-flex align-items-center">
          <PicturePeople />
          <p className="ms-3 mb-0">{props.name}</p>
        </div>
          {props.locationPill &&(
            <LocationPill locationPill={props.locationPill} />
          )}
          {
            props.money&&(
              <p className="text-primary">{props.money}</p>
            )
          }
      </div>
    );
  }
 else{
  return (
    <div className={`Employee d-flex p-3 border mb-1 rounded ${isEmployeeSelected ? 'border-primary' : 'border-gray'}`} onClick={handleClick}>
      <div className="d-flex align-items-center">
        <PicturePeople />
        <p className="ms-3 mb-0">{props.name}</p>
      </div>
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        checked={isEmployeeSelected}
      />
    </div>
  );
 }
}

export default SingleEmployee;
