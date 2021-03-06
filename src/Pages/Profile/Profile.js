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
            <h5>Email:&nbsp;{currentUser.email}</h5>
            <h5>Nombre:&nbsp;</h5>
            <h5>Matricula:&nbsp;</h5>
            <h5>Rol:&nbsp;</h5>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
