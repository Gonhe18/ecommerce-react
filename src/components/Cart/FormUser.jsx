import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import "./Cart.css";

const FormUser = () => {
  return (
    <>
      <Form className="form-control">
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su email" />
        </Form.Group>
        <Button variant="outline-success" type="submit" className="w-50">
          Finalizar compra
        </Button>
      </Form>
    </>
  );
};

export default FormUser;
