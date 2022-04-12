import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCarContext } from "./../Context/CartContext";

import "./Cart.css";

const FormUser = () => {
  const { finalizarCompra, enDatosUsuario } = useCarContext();
  const [form, enForm] = useState({
    usuario: "",
    telefono: "",
    email: "",
    validacionEmail: "",
  });

  const actualizarForm = (e) => {
    enForm({ ...form, [e.target.name]: e.target.value });
  };

  const datosUsuarioCompra = () => {
    enDatosUsuario({
      usuario: form.usuario,
      telefono: form.telefono,
      email: form.email,
    });
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
          placeholder="ejemplo@mail.com"
          name="email"
          value={form.email}
          onChange={actualizarForm}
          autoComplete="off"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />
        <label className="my-2" htmlFor="validacionEmail">
          Confirma tu Email
        </label>
        <input
          className="form-control mb-2"
          id="validacionEmail"
          type="email"
          placeholder="Reingrese su email"
          name="validacionEmail"
          value={form.validacionEmail}
          onChange={actualizarForm}
          autoComplete="off"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          required
        />

        {form.email !== form.validacionEmail ? (
          <label className="my-2 labelError">
            Los emails ingresados con coinciden
          </label>
        ) : (
          <Button
            variant="outline-success"
            type="submit"
            className="w-50 mt-3"
            onClick={datosUsuarioCompra}
          >
            Generar orden
          </Button>
        )}
      </Form>
    </>
  );
};

export default FormUser;
