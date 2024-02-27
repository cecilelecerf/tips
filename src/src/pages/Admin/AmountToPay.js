import SelectDate from "../../components/Admin/SelectDate/SelectDate";
import { people } from "../../data"
import SingleEmployee from "../../components/EmployeeList/SingleEmployee/SingleEmployee"

function AmountToPay() {
    return(
        <main className="d-flex flex-column justify-content-between">
            <SelectDate />
            {people.map((person, index) => (
                <SingleEmployee name={person.name} resume money={person.price ? person.price : true} key={index}/>
            ))}
        </main>
    )
}

export default AmountToPay;

