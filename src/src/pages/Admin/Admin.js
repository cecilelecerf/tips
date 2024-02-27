
import AmountPayEmployee from "../../components/Admin/AmountPayEmployee/AmountPayEmployee";
import Graph from "../../components/Admin/Graph/Graph";
import Result from "../../components/Admin/Result/Result";
import "./Admin.css"
function Admin() {
    return(
        <main className="mainAdmin">
            <Result />
            <Graph />
            <AmountPayEmployee />
        </main>
    )
}

export default Admin;

