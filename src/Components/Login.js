import { Card, Form, Button } from "react-bootstrap";
import logo from "../img/logo_oficial (1).png";
import "./SignUp.css";
import {
  Link
} from "react-router-dom";

export function Login() {

    return (
      <Card className="cardContainer">
        <Card.Body>
          <div className="logo">
            <img src={logo} alt="UPSIN" width="120px"></img>
          </div>

          <Form>
            <Form.Group>
              <Form.Control
                className="formInput"
                type="text"
                placeholder="Usuario"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="formInput"
                type="password"
                placeholder="Contraseña"
                aria-describedby="pass"
              />
            </Form.Group>
            
            <div className="btnContainer">
              <Button className="sendButton" variant="primary" type="submit">
                Iniciar Sesión
              </Button>
            </div>

          </Form>

          <div className="txt centered">
            <Link to="/signup">
              <label className="mb-4">
                Crear una cuenta.
              </label>
            </Link>
            <label className="mb-0">Universidad Politécnica de Sinaloa</label>
            <br></br>
            <label className="mb-0">
              <small>©2021 Todos los Derechos Reservados</small>
            </label>
          </div>
        </Card.Body>
      </Card>
    );
}
