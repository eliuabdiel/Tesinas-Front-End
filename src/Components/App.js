import Dashboard from "../Pages/Dashboard";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { Login } from "./Login";
import { SignUp } from "./SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound";



function App() {
  return (
    <Router>
        <Switch>
          <PrivateRoute exact path='/'>
            <Dashboard/> {/* tamemas este es el componente donde vamos a poner como la pagina de inicio es una ruta privada tienen q iniciar sesion para q puedan entrar creense un usuario */}
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
