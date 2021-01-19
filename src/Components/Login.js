import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
import logo from "../img/logo_oficial (1).png";
import "../App.css";
export class Login extends Component {
    render(){
        return(
        <div>
            <Card className={"card-style"}>
                <div className='d-flex justify-content-center'>
                    <img src={logo} alt="UPSIN" style={{width: '120px', padding: "20px 5px",}}></img>
                </div>
                <Card.Header>Iniciar sesion</Card.Header>
                <Card.Body>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                    <Form.Label>Correo electronico</Form.Label>
                    <Form.Control type="email" placeholder="Email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña" />
                    </Form.Group>
                    <Form.Group controlId="formBasicCheckbox">
                    </Form.Group>
                    <Button className="mx-auto" variant="primary" type="submit" style={{ width: "100%", margin: "30px 0px 30px" }}>
                    Iniciar sesion
                    </Button>
                </Form>
                <div className={"tex"}>
                    <span>Universidad Politécnica de Sinaloa</span>
                        <br></br>
                    <span>
                        <small>©2021 Todos los Derechos Reservados</small>
                    </span>
                </div>
                </Card.Body>
            </Card>
        </div>
        )
    }
}
