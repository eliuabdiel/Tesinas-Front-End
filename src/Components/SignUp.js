import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import logo from "../img/logo_oficial (1).png";
import "../App.css";

export class SignUp extends Component {
  render() {
    return (
      <Card className="cardContainer">
        <Card.Body>
          <div className="logo">
            <img src={logo} alt="UPSIN" className="upsin"></img>
          </div>

          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Contraseña"
                aria-describedby="pass"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Confirmar contraseña"
                aria-describedby="pass"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control type="email" placeholder="Correo electronico" />
            </Form.Group>

            <div className="btnContainer">
              <Button className="sendBtn" variant="primary" type="submit">
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
