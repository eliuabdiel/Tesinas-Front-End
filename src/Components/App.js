import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound";
import CustomNavbar from "./CustomNavbar";
import { useAuth } from "../Contexts/AuthContext";
import Home from "../Pages/Home";
import Profile from "./Profile";



function App() {
  const { currentUser } = useAuth()
  return (
    <Router>
        {currentUser && <CustomNavbar/>}
        <Switch>
          <PrivateRoute exact path='/'>
            <Home/> {/* tamemas este es el componente donde vamos a poner como la pagina de inicio es una ruta privada tienen q iniciar sesion para q puedan entrar creense un usuario */}
          </PrivateRoute>
          <PrivateRoute path='/perfil'>
            <Profile/> 
          </PrivateRoute>
          <Route path="/login">
            <Login/> {/*un tamemas pa q cambie los botones para que se vean mas bonitos, el boton de submit */}
          </Route>
          <Route path="/signup">
            <SignUp/> {/*un tamemas pa q cambie los botones para que se vean mas bonitos, el boton de submit */}
          </Route>
          <Route to="*">
            <NotFound/> {/*esta es la pagina 404 en la q va a chambiar uno d ustedes */}
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
