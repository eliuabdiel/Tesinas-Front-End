import React, { useState, useEffect } from "react";
import { Card, Form, Button } from "react-bootstrap";
import logo from "../img/logo_oficial (1).png";
import "../App.css";

import {
  Link
} from "react-router-dom";

export function SignUp(){
    let passwordsMatch = false
    const [passwords, setPasswords] = useState({
      password: '',
      passwordConfirmation: ''
    });
    // useEffect(() => {
    //   _passwordMatches()
    // }, [passwords]);
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
    // function _passwordMatches() {
    //   if(passwords.passwordConfirmation.length !== 0 ){
    //     if(passwords.passwordConfirmation !== passwords.password){
    //       passwordsMatch = false
          
    //     }else{
    //       passwordsMatch = true
          
    //     }
    //   }
    // }
    return (
      <Card className="cardContainer">
        <Card.Body>
          <div className="logo">
<<<<<<< HEAD
            <img src={logo} alt="UPSIN" width="120px"></img>
=======
            <img src={logo} alt="UPSIN" className="upsin"></img>
>>>>>>> 3be10688be0af4926e45230a416b6057cdec4cdd
          </div>

          <Form>
            <Form.Group>
              <Form.Control type="text" placeholder="Usuario" />
            </Form.Group>

            <Form.Group>
              <Form.Control
<<<<<<< HEAD
                className="formInput"
                type="email"
                placeholder="Correo electronico"
=======
                type="password"
                placeholder="Contraseña"
                aria-describedby="pass"
>>>>>>> 3be10688be0af4926e45230a416b6057cdec4cdd
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
<<<<<<< HEAD
                placeholder="Contraseña"
                aria-describedby="pass"
                onChange={_handlePasswordChange}
=======
                placeholder="Confirmar contraseña"
                aria-describedby="pass"
>>>>>>> 3be10688be0af4926e45230a416b6057cdec4cdd
              />
            </Form.Group>

            <Form.Group>
<<<<<<< HEAD
              <Form.Control
                className="formInput"
                type="password"
                placeholder="Confirmar contraseña"
                aria-describedby="confirmPass"
                onChange={_handlePasswordConfirmationChange}
              />
=======
              <Form.Control type="email" placeholder="Correo electronico" />
>>>>>>> 3be10688be0af4926e45230a416b6057cdec4cdd
            </Form.Group>
            {passwords.passwordConfirmation.length !== 0 
              ? passwords.passwordConfirmation !== passwords.password
                ? <label>Las no contraseñas coinciden</label>
                : <label>Las contraseñas coinciden</label>
              : null
            }
            <div className="btnContainer">
<<<<<<< HEAD
              <Button className="sendButton" variant="primary" type="submit">
                Registrarse
=======
              <Button className="sendBtn" variant="primary" type="submit">
                Enviar
>>>>>>> 3be10688be0af4926e45230a416b6057cdec4cdd
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
