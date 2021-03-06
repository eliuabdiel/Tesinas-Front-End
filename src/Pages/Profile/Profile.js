import React from "react";
import { Card, Container } from "react-bootstrap";
import { useAuth } from "../../Contexts/AuthContext";

export default function Profile() {
  const { currentUser } = useAuth();
  return (
    <>
      <Container className="d-flex justify-content-center mt-4">
        <Card style={{ maxWidth: "600px" }}>
          <Card.Header>Perfil</Card.Header>
          <Card.Body>
            <h5>Email:&nbsp; {currentUser.email} </h5>
            <h5>Nombre:</h5>&nbsp;
            <h5>Matricula:</h5>&nbsp;
            <h5>Rol:</h5>&nbsp;
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
