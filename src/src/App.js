import { NavLink, Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import WhoWorks from "./pages/WhoWorks"
import RecapToday from "./pages/RecapToday"
import AddTips from "./pages/AddTips"
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
    <header>
      <nav>
        <NavLink to="/whoWorks">Accueil</NavLink>
        <NavLink to="/recapToday">Recap</NavLink>
        <NavLink to="/addTips">Recap</NavLink>
      </nav>
    </header>
      <Outlet />

  </div>
  )
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;
