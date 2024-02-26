
import { Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import WhoWorks from "./pages/WhoWorks"
import RecapToday from "./pages/RecapToday"
import AddTips from "./pages/AddTips"
import BurgerMenu from './components/NavBar/BurgerMenu';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root />,
    children:[
      {
        path: "/whoWorks",
        element: <WhoWorks />
      },
      {
        path: "/recapToday",
        element: <RecapToday />
      },
      {
        path: "/addTips",
        element: <AddTips />
      }
    ]
  },
])

function Root(){
  return(
  <div className="App"> 
      <header className="App-header">
        <div className="menu-container">
          <BurgerMenu navbarBrand="Qui travaille aujourd’hui ?"  />
        </div>
      </header>
      <Outlet />

  </div>
  )
}

function App() {
  return <RouterProvider router={router} />;

}

export default App;
