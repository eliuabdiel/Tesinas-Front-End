import { Login } from "./Components/Login";
import { SignUp } from "./Components/SignUp";
import { Container } from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{
        minHeight: "100vh",
      }}
    >
      {/* <Login /> */}
      <SignUp />
    </Container>
  );
}

export default App;
