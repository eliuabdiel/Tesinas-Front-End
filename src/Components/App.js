import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "../Pages/Login/Login";
import { SignUp } from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";
import CustomNavbar from "./CustomNavbar/CustomNavbar";
import { useAuth } from "../Contexts/AuthContext";
import Home from "../Pages/Home/Home";
import Profile from "../Pages/Profile/Profile";
import { Container } from "react-bootstrap";
import Help from "../Pages/Help/Help";

function App() {
  const { currentUser } = useAuth();
  return (
    <Router>
      {currentUser && <CustomNavbar />}
      <Container>
        <Switch>
          <PrivateRoute exact path="/">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/perfil">
            <Profile />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route to="*">
            <NotFound />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
