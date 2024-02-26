

import Button from './Button/Button';
import EmployeeList from './EmployeeList/EmployeeList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <EmployeeList resume={true} />
    <Button text="test" icons="true"/>
      </header>
    </div>
  );
}

export default App;
