import React, { useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import { Navbar, Nav, Dropdown, Alert } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import logo from "../../img/logo_oficial.png";

export default function CustomNavbar() {
  const [error, setError] = useState();
  const { logout } = useAuth();
  const history = useHistory();

  async function _handleClickLogout(e) {
    try {
      setError("");
      await logout();
      history.push("/login");
    } catch (error) {
      setError(error);
    }
  }
  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand
          onClick={() => {
            history.push("/");
          }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={logo}
            width="35"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              onClick={() => {
                history.push("/perfil");
              }}
            >
              Perfil
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                history.push("/help");
              }}
            >
              Ayuda
            </Nav.Link>
          </Nav>
          <Nav>
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link}>Mi cuenta</Dropdown.Toggle>
              <Dropdown.Menu alignRight={true} className="mt-2">
                <Dropdown.Item onClick={_handleClickLogout}>
                  Cerrar Sesion
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={() => {
                    history.push("/perfil");
                  }}
                >
                  Perfil
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
