
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import RecapToday from "./pages/RecapToday"
import AddTips from "./pages/AddTips"
import BurgerMenu from './components/NavBar/BurgerMenu';
import WhoWorks from "./pages/WhoWorks";

const router = createBrowserRouter([
  {
    
      path: "/",
      element:
      <div className="App">      
        <header className="App-header">
          <div className="menu-container">
            <BurgerMenu navbarBrand="Qui travaille aujourd’hui ?"  />
          </div>
        </header>
        <WhoWorks />
      </div> 
    },
    {
      path: "/recapToday",
      element:
      <div className="App">     
       <header className="App-header">
          <div className="menu-container">
            <BurgerMenu navbarBrand="Récapitulatif du service"  />
          </div>
        </header><RecapToday />
      </div> 
    },
    {
      path: "/addTips",
      element:
      <div className="App">      
        <header className="App-header">
          <div className="menu-container">
            <BurgerMenu navbarBrand="Ajouter un pourboire"  />
          </div>
        </header>
       <AddTips />
      </div> 
    }
  ,
])



function App() {
  return <RouterProvider router={router} />;

}

export default App;
