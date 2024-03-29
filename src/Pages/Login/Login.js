import React, { useRef, useState, useEffect } from "react";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import logo from "../../img/logo_oficial.png";
import "./styles.css";

export function Login() {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    currentUser && history.push("/"); //redirige para que una vez logeado no puedas entrar al login
  });

  async function _handleSubmit(e) {
    //handle login
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch (error) {
      setError(`Failed to login ${error}`);
      setLoading(false);
    }
  }

  return (
    <Container
      className="d-flex align-items-center justify-content-center flex-column"
      style={{
        minHeight: "100vh",
      }}
    >
      <Card className="card-container">
        <Card.Body>
          <div className="logo-upsin">
            <img src={logo} alt="UPSIN" width="120px"></img>
          </div>

          <Form onSubmit={_handleSubmit}>
            <Form.Group>
              <Form.Control
                className="form-input"
                type="email"
                placeholder="Correo electrónico"
                ref={emailRef}
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Control
                className="form-input"
                type="password"
                placeholder="Contraseña"
                aria-describedby="pass"
                ref={passwordRef}
                required
              />
            </Form.Group>

            {error && <Alert variant="danger">{error}</Alert>}

            <div className="button-container">
              <Button
                className="send-button"
                variant="primary"
                type="submit"
                disabled={loading}
              >
                Iniciar Sesión
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

      <div className="w-400 mt-2">
        <Link to="/signup">
          <label className="mb-4">Crear una cuenta</label>
        </Link>
      </div>
    </Container>
  );
}
