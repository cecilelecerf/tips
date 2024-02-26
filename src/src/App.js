
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import React, { useState, useEffect } from 'react';
import RecapToday from "./pages/RecapToday"
import AddTips from "./pages/AddTips"
import BurgerMenu from './components/NavBar/BurgerMenu';
import WhoWorks from "./pages/WhoWorks";
import DarkModeContext from './components/DarkMode/DarkMode';


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
  }
  ,
])



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
