
import "./LocationPills.css"

function LocationPills(props) {
    return (
      <p className="LocationPills rounded-pills bg-secondary-subtle ">
        {props.text}
      </p>
    );
  }
  
  export default LocationPills;
  