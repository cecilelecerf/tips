
import "./LocationPill.css"

function LocationPill({location}) {
    return (
      <p className="LocationPill rounded-pill bg-secondary-subtle px-2 text-secondary">
        {location === "kitchen"? "cuisine": "salle"}
      </p>
    );
  }
  
  export default LocationPill;
  