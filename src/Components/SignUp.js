import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import logo from "../img/logo_oficial (1).png";
import "./SignUp.css";

export class SignUp extends Component {
  render() {
    return (
      <Card className="cardContainer">
        <Card.Body>
          <div className="logo">
            <img src={logo} alt="UPSIN" width="82px"></img>
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

            <Form.Group>
              <Form.Control
                className="formInput"
                type="password"
                placeholder="Confirmar contraseña"
                aria-describedby="confirmPass"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="formInput"
                type="email"
                placeholder="Correo electronico"
              />
            </Form.Group>

            <div className="btnContainer">
              <Button className="sendButton" variant="primary" type="submit">
                Enviar
              </Button>
            </div>
          </Form>

          <div className="txt centered">
            <span>Universidad Politécnica de Sinaloa</span>
            <br></br>
            <span>
              <small>©2021 Todos los Derechos Reservados</small>
            </span>
          </div>
        </Card.Body>
      </Card>
    );
  }
}
