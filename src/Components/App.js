import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Login } from "./Login/Login";
import { SignUp } from "./SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../Pages/NotFound/NotFound";
import CustomNavbar from "./CustomNavbar/CustomNavbar";
import { useAuth } from "../Contexts/AuthContext";
import Home from "../Pages/Home/Home";
import Profile from "./Profile/Profile";

function App() {
  const { currentUser } = useAuth();
  return (
    <Router>
      {currentUser && <CustomNavbar />}
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
        <Route to="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
