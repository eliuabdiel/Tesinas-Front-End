import React, { useState, useRef, useEffect } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../Contexts/AuthContext'
import logo from "../img/logo_oficial (1).png";
import "./styles.css";

export function SignUp() {
  const [passwords, setPasswords] = useState({
    password: "",
    passwordConfirmation: "",
  });
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)

  const emailRef = useRef();
  const userRef = useRef();
  const passwordRef = useRef()
  const passwordConfirmRef = useRef();
  const { signup, currentUser} = useAuth()
  const history = useHistory()
  
  useEffect(() => {
    currentUser && history.push('/') //redirige para que una vez logeado no puedas entrar al signin
  })

  async function _handleSubmit(e) { //handle signin
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value){
      console.log('passwords do not match')
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/') //despues de logearte te manda pal dashboard
    } catch (error){
      setError(`Failed to create an account ${error}`)
      setLoading(false)
    }
  }
  
  function _handlePasswordChange(e) {
    setPasswords({
      password: e.target.value,
      passwordConfirmation: passwords.passwordConfirmation,
    });
  }
  function _handlePasswordConfirmationChange(e) {
    setPasswords({
      passwordConfirmation: e.target.value,
      password: passwords.password,
    });
  }

  return (
      <Container
        className="d-flex align-items-center justify-content-center flex-column"
        style={{
            minHeight: "100vh",
        }}
        >
          <Card className="cardContainer">
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>} {/* si hay algun error pone una alerta en el componente */}
              <div className="logo">
                <img src={logo} alt="UPSIN" width="120px"></img>
              </div>

              <Form onSubmit={_handleSubmit}> 
                <Form.Group>
                  <Form.Control
                    className="formInput"
                    type="text"
                    placeholder="Usuario"
                    ref={userRef}
                      required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    className="formInput"
                    type="email"
                    placeholder="Correo electronico"
                    ref={emailRef}
                      required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    className="formInput"
                    type="password"
                    placeholder="Contraseña"
                    aria-describedby="pass"
                    onChange={_handlePasswordChange}
                    ref={passwordRef}
                      required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Control
                    className="formInput"
                    type="password"
                    placeholder="Confirmar contraseña"
                    aria-describedby="confirmPass"
                    onChange={_handlePasswordConfirmationChange}
                    ref={passwordConfirmRef}
                      required
                  />
                </Form.Group>
                {passwords.passwordConfirmation.length !== 0 ? (
                  passwords.passwordConfirmation !== passwords.password ? (
                    <label className="text-danger">
                      Las no contraseñas coinciden
                    </label>
                  ) : (
                    <label className="text-success">Las contraseñas coinciden</label>
                  )
                ) : null}
                <div className="btnContainer">
                  <Button className="sendButton" variant="primary" type="submit"  disabled={loading}>
                    Registrarse
                  </Button>
                </div>
              </Form>

              <div className="txt centered">
                <label className="mb-0">Universidad Politécnica de Sinaloa</label>
                <label className="mb-0">
                  <small>©2021 Todos los Derechos Reservados</small>
                </label>
              </div>
            </Card.Body>
          </Card>
          <div className="w-400 mt-4">
            <Link to="/login">
              <label className="mb-4">Ya tengo una cuenta</label>
            </Link>
          </div>
      </Container>
  );
}
