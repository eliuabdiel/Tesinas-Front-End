import React, { useState} from "react";
import { Card, Form, Button } from "react-bootstrap";
import logo from "../img/logo_oficial (1).png";
import "./SignUp.css";

import {
  Link
} from "react-router-dom";

export function SignUp(){
    const [passwords, setPasswords] = useState({
      password: '',
      passwordConfirmation: ''
    });
    
    function _handlePasswordChange(e) {
      setPasswords({
        password: e.target.value,
        passwordConfirmation: passwords.passwordConfirmation
      })
    }
    function _handlePasswordConfirmationChange(e){
      setPasswords({
        passwordConfirmation: e.target.value,
        password  : passwords.password
      })
    }
   
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
                type="email"
                placeholder="Correo electronico"
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="formInput"
                type="password"
                placeholder="Contraseña"
                aria-describedby="pass"
                onChange={_handlePasswordChange}
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="formInput"
                type="password"
                placeholder="Confirmar contraseña"
                aria-describedby="confirmPass"
                onChange={_handlePasswordConfirmationChange}
              />
            </Form.Group>
            {passwords.passwordConfirmation.length !== 0 
              ? passwords.passwordConfirmation !== passwords.password
                ? <label>Las no contraseñas coinciden</label>
                : <label>Las contraseñas coinciden</label>
              : null
            }
            <div className="btnContainer">
              <Button className="sendButton" variant="primary" type="submit">
                Registrarse
              </Button>
            </div>
            
          </Form>

          <div className="txt centered">
            <Link to="/login">
              <label className="mb-4">
                Ya tengo una cuenta.
              </label>
            </Link>
            <label className="mb-0">Universidad Politécnica de Sinaloa</label>
            <label className="mb-0">
              <small>©2021 Todos los Derechos Reservados</small>
            </label>
          </div>
        </Card.Body>
      </Card>
    );
  
}
