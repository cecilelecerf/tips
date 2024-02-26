
import './App.css';
import BurgerMenu from './NavBar/BurgerMenu';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-container">
          <BurgerMenu navbarBrand="Qui travaille aujourd’hui ?"  NavButton="Non, modifier" />
        </div>
      </header>
    </div>
  );
}

export default App;
