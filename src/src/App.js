

import Button from './components/Button/Button';
import EmployeeList from './components/EmployeeList/EmployeeList';
import NavLocation from './components/NavLocation/NavLocation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavLocation/>
        <EmployeeList />
        <Button text="test" icons="true"/>
      </header>
    </div>
  );
}

export default App;
