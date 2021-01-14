import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
// import logo from "../img/logo_oficial (1).png";

export class SignUp extends Component {
  render() {
    return (
      <Card
        style={{
          background: "#2F4159",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {/* <Card.Header>Sign Up</Card.Header> */}

        <Card.Body>
          {/* <img src={logo} alt="UPSIN"></img> */}

          <div>
            <Card.Title className="cardTitle">
              Crear una cuenta nueva
            </Card.Title>
          </div>

          <Form>
            <Form.Group>
              <Form.Control
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "12px 5px",
                  borderRadius: "0px",
                  background: "none",
                  border: "none",
                  borderBottom: "3px solid #465568",
                  placeholder: "color: red",
                }}
                type="text"
                placeholder="Usuario"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "12px 5px",
                  borderRadius: "0px",
                  background: "none",
                  border: "none",
                  borderBottom: "3px solid #465568",
                }}
                type="password"
                placeholder="Contraseña"
                aria-describedby="pass"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "12px 5px",
                  borderRadius: "0px",
                  background: "none",
                  border: "none",
                  borderBottom: "3px solid #465568",
                }}
                type="password"
                placeholder="Confirmar contraseña"
                aria-describedby="confirmPass"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                style={{
                  width: "100%",
                  boxSizing: "border-box",
                  padding: "12px 5px",
                  borderRadius: "0px",
                  background: "none",
                  border: "none",
                  borderBottom: "3px solid #465568",
                }}
                type="email"
                placeholder="Correo electronico"
              />
            </Form.Group>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                style={{ width: "100%", margin: "30px 0px 30px" }}
                variant="primary"
                type="submit"
              >
                Enviar
              </Button>
            </div>
          </Form>

          <div style={{ textAlign: "center" }}>
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
