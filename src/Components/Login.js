import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
export class Login extends Component {
    render(){
        return(
        <div class="back">
            <Card style={{ width: '18rem' ,backgroundColor: '#264d78',color:'white'}} className="mx-auto my-auto">
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
                    <Button className="mx-auto" variant="primary" type="submit">
                    Iniciar sesion
                    </Button>
                </Form>
                </Card.Body>
            </Card>
        </div>
        )
    }
}
