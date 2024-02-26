import { NavLink } from "react-router-dom"
import "./NavBar.css"
import  Setting from './Icon/SettingIcon.js';

function NavBarAdmin (){
    return(
        <div className="NavBarAdmin bg-light rounded-3 d-flex justify-content-between px-3 mx-5 mb-3 py-1 shadow fixed-bottom">
            <NavLink to="/admin"><Setting color="#ff8b40" /><div className={`point bg-black my-1`}></div></NavLink>

            <NavLink to="/adminAddPeople"><Setting color="black" /><div className={`point bg-black my-1`}></div></NavLink>

            <NavLink to="/adminDeletePeople"><Setting color="black" /><div className={`point bg-black my-1`}></div></NavLink>
        </div>
    )
}
export default NavBarAdmin