import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCarContext } from "./../Context/CartContext";

import "./Cart.css";

const FormUser = () => {
  const { finalizarCompra, enForm, form } = useCarContext();

  const actualizarForm = (e) => {
    enForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <Form className="form-control p-4" onSubmit={finalizarCompra}>
        <label className="mb-2" htmlFor="nombreUsuario">
          Usuario
        </label>
        <input
          className="form-control mb-2"
          id="nombreUsuario"
          type="text"
          placeholder="Ingrese su nombre"
          name="usuario"
          value={form.usuario}
          onChange={actualizarForm}
          autoComplete="off"
          required
        />
        <label className="my-2" htmlFor="telefonoUsuario">
          Teléfono
        </label>
        <input
          className="form-control mb-2"
          id="telefonoUsuario"
          type="number"
          placeholder="Ingrese su n° de teléfono"
          name="telefono"
          value={form.telefono}
          onChange={actualizarForm}
          autoComplete="off"
          required
        />
        <label className="my-2" htmlFor="emailUsuario">
          Email
        </label>
        <input
          className="form-control mb-2"
          id="emailUsuario"
          type="email"
          placeholder="Ingrese su email"
          name="email"
          value={form.email}
          onChange={actualizarForm}
          autoComplete="off"
          required
        />
        <Button variant="outline-success" type="submit" className="w-50 mt-3">
          Generar orden
        </Button>
      </Form>
    </>
  );
};

export default FormUser;
