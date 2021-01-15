import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Container, Button } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
        <Link to="/login">
          <Button>
            Login
          </Button>
        </Link> 
        <Link to="singup">
          <Button >
            SignUp
          </Button>
        </Link> 
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
        }}
        >
        
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/singup">
            <SignUp />
          </Route>
        </Switch>
      </Container>
    </Router>

    
  );
}

export default App;
