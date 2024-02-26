
import './App.css';
import BurgerMenu from './NavBar/burgerMenu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-container">
          <BurgerMenu navbarBrand="Qui travaille aujourd’hui ?"/>
        </div>
      </header>
    </div>
  );
}

export default App;
