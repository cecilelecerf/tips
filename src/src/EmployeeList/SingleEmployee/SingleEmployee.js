import LocationPill from "../LocationPills/LocationPill";
import PicturePeople from "../PicturePeople/PicturePeople";
import "./SingleEmployee.css"
import React, { useState } from "react";

function SingleEmployee(props) {
 // Utilisez l'état local pour suivre l'état de la checkbox
 const [isChecked, setIsChecked] = useState(false);

 // Fonction pour mettre à jour l'état de la checkbox
 const handleCheckboxChange = () => {
   setIsChecked(!isChecked);
 };

 // Classe conditionnelle basée sur l'état de la checkbox
 const employeeClass = `Employee d-flex p-3 border mb-1 rounded ${isChecked ? 'border-primary' : 'border-gray'}`;
 if(props.resume){
   return (
     <div className="Employee d-flex justify-content-between p-2 border-bottom">
       <div className="d-flex align-items-center">
         <PicturePeople />
         <p className="ms-3 mb-0">Sarah</p>
         <LocationPills text="cuisine" />
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
    <div className={employeeClass}>
      <div className="d-flex align-items-center">
        <PicturePeople />
        <p className="ms-3 mb-0">Sarah</p>
      </div>
      <input
        type="checkbox"
        className="form-check-input"
        id="exampleCheck1"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
  );
 }
}

export default SingleEmployee;
