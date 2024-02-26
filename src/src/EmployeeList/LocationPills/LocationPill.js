
import "./LocationPill.css"

function LocationPill(props) {
    return (
      <p className="LocationPill rounded-pill bg-secondary-subtle px-2 text-secondary">
        {props.locationPill}
      </p>
    );
  }
  
  export default LocationPill;
  