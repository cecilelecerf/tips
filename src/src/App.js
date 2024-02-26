import { NavLink, Outlet, RouterProvider, createBrowserRouter} from "react-router-dom"
import WhoWorks from "./pages/whoWorks"
import RecapToday from "./pages/recapToday"
import AddTips from "./pages/addTips"
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
  {
    path:"/blog",
    element: <div>Page blog<nav><NavLink to="/">fezefz</NavLink></nav></div>
  },
  {
    path:"/blog/:id",
    element: <div>Page blog unique<nav><NavLink to="/">fezefz</NavLink></nav></div>
  }
])

function Root(){
  return(
  <div className="App"> 
    <header>
      <nav>
        <NavLink to="/">erfre</NavLink>
        <NavLink to="/accueil">Accueil</NavLink>
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
