
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import RecapToday from "./pages/recapToday"
import AddTips from "./pages/addTips"
import BurgerMenu from './components/NavBar/BurgerMenu';
import WhoWorks from "./pages/WhoWorks";
import DarkModeContext from './components/DarkMode/DarkMode';
import Admin from "./pages/Admin/Admin";
import NavBarAdmin from "./components/Admin/NavBar/NavBar";
import AddPeople from "./pages/Admin/AddPeople";
import AmountToPay from "./pages/Admin/AmountToPay";


const router = createBrowserRouter([
  {

    path: "/",
    element:
      <div className="App">
        <header className="App-header">
          <div className="menu-container">
            <BurgerMenu navbarBrand="Qui travaille aujourd’hui ?" />
          </div>
        </header>
        <WhoWorks location="room" />
      </div> 
    },
    {
    
      path: "/kitchen",
      element:
      <div className="App">      
        <header className="App-header">
          <div className="menu-container">
            <BurgerMenu navbarBrand="Qui travaille aujourd’hui ?" />
          </div>
        </header>
        <WhoWorks location="kitchen" />
      </div> 
    },
    {
      path: "/recapToday",
      element:
      <div className="App">     
       <header className="App-header">

          <div className="menu-container">
            <BurgerMenu navbarBrand="Récapitulatif du service" />
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
            <BurgerMenu navbarBrand="Ajouter un pourboire" />
          </div>
        </header>
        <AddTips />
      </div>
  },
  {
    path: "/admin",
    element: <RootAdmin />,
    children:[
      {
        path: "",
        element: 
        <>        
          <header className="App-header">
            <div className="menu-container">
              <BurgerMenu navbarBrand="Adminstrateur" />
            </div>
          </header>
          <Admin />
        </>
      },
      {
        path: "addPeople",
        element: 
        <>        
          <header className="App-header">
            <div className="menu-container">
              <BurgerMenu navbarBrand="Ajout d'employés" />
            </div>
          </header>
          <AddPeople />
        </>
      },
      {
        path: "amountPeople",
        element: 
        <>        
          <header className="App-header">
            <div className="menu-container">
              <BurgerMenu navbarBrand="Montant à payer" />
            </div>
          </header>
          <AmountToPay />
        </>
      }
    ]
  }
])

function RootAdmin (){
  return (
    <div className="App">
      <Outlet />
      <NavBarAdmin/>
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };



  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.setAttribute('data-bs-theme', 'dark');
    } else {
      body.removeAttribute('data-bs-theme');
    }
  }, [darkMode]);


  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <RouterProvider router={router}>
      </RouterProvider>
    </DarkModeContext.Provider>
  );
}

export default App;
