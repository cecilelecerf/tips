import { NavLink } from "react-router-dom"
import SingleEmployee from "../../EmployeeList/SingleEmployee/SingleEmployee"
import { people } from "../../../data"

function AmountPayEmployee(){
    return(
        <>
            <div className="d-flex justify-content-between align-items-center">
                <p className="text-primary fw-bold fs-6">Montant à payer par employé</p>
                <NavLink to="amountPeople" className="text-primary rounded rounded-pill bg-primary-subtle py-1 px-2 fs-6">Voir tout</NavLink>
            </div>
            <div>
                {people.filter(person => person.price !== undefined).slice(0,2).map((person, index) =>(
                    <SingleEmployee name={person.name} resume money={person.price} key={index}/>
                ))}
            </div>
        </>
    )
}
export default AmountPayEmployee