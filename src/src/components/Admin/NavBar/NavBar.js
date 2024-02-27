import { NavLink } from "react-router-dom"
import "./NavBar.css"
import  Setting from './Icon/SettingIcon.js';
import { useLocation } from "react-router-dom";

function NavBarAdmin (){
    const location = useLocation();
    return(
        <div className="NavBarAdmin bg-light rounded-3 d-flex justify-content-between px-3 mx-5 mb-3 py-1 shadow fixed-bottom">
            <NavLink to="/admin"><Setting color={location.pathname === "/admin" ? "#ff8b40" : "black"} /><div className={`point ${location.pathname === "/admin" ?" bg-primary" : "transparant"} my-1`}></div></NavLink>

            <NavLink to="/admin/addPeople"><Setting color={location.pathname === "/admin/addPeople" ? "#ff8b40" : "black"} /><div className={`point ${location.pathname === "/admin/addPeople" ?" bg-primary" : "transparant"} my-1`}></div></NavLink>

            <NavLink to="/admin/deletePeople"><Setting color={location.pathname === "/admin/deletePeople" ? "#ff8b40" : "black"} /><div className={`point ${location.pathname === "/admin/deletePeople" ?" bg-primary" : "transparant"} my-1`}></div></NavLink>
        </div>
    )
}
export default NavBarAdmin