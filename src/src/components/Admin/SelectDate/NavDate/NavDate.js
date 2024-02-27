import NavLocationItem from "../../../NavLocation/NavLocationItem/NavLocationItem";



function NavDate({Date, handleClick}) {
  return (
    <div className="NavDate d-flex justify-content-between align-items-center">
        <NavLocationItem text="jour" actif={Date === "day"} onClick={()=> handleClick("day")} />
        <NavLocationItem text="semaine" actif={Date === "week"} onClick={()=> handleClick("week")} />
        <NavLocationItem text="mois" actif={Date === "month"} onClick={()=> handleClick("month")}   />

    </div>
  );
}

export default NavDate;
