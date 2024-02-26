import Button from "./components/Button/Button"
import EmployeeList from "./components/EmployeeList/EmployeeList"
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Form/>
        <EmployeeList resume={true} />
    <Button text="test" icons="true"/>
      </header>
    </div>
  );
}

export default App;
