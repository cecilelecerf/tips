import NavLocationItem from "../../NavLocation/NavLocationItem/NavLocationItem";


function NavDate(props) {
  return (
    <div className="NavDate d-flex justify-content-between align-items-center">
        <NavLocationItem text="jour" actif={props.Date === "day"}  />
        <NavLocationItem text="semaine" actif={props.Date === "week"}  />
        <NavLocationItem text="mois" actif={props.Date === "month"}  />

    </div>
  );
}

export default NavDate;
