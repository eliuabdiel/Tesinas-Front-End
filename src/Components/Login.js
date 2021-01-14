import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";
export class Login extends Component {
  render() {
    return (
      <Card
        style={{ width: "18rem", backgroundColor: "#264d78", color: "white" }}
        className="mx-auto my-auto"
      >
        <Card.Header>Login</Card.Header>
        <Card.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="mx-auto" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}
