
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

function Root() {
  const { darkMode, handleSwitchChange } = useContext(DarkModeContext);

  return (
    <div className="App">
      <header className="App-header">
        <div className="menu-container">
          <BurgerMenu navbarBrand="Qui travaille aujourd’hui ?" />
        </div>
      </header>
      <Outlet />
    </div>
  )
}

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleSwitchChange = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      if (darkMode) {
        el.setAttribute('data-bs-theme', 'dark');
      } else {
        el.removeAttribute('data-bs-theme');
      }
    });
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, handleSwitchChange }}>
      <Router>
        <Root />
      </Router>
    </DarkModeContext.Provider>
  );
}

export default App;
