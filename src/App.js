import {Login} from './Components/Login';
import { SignIn } from './Components/SingIn';
import { Container,Row, Col,Card, Form,Button } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Container 
      className="d-flex align-items-center justify-content-center"
      style={{minHeight: "100vh"}}>
      <Login />
      {/* <SignIn /> */}
      
    </Container>
  );
}

export default App;
