import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useCarContext } from "./../Context/CartContext";
import { useForm } from "react-hook-form";

import "./Cart.css";

const FormUser = () => {
  const { enDatosUsuario } = useCarContext();
  const {
    register,
    formState: { errors },
    handleSubmit,
    getValues,
  } = useForm();

  const actualizarForm = (data, e) => {
    enDatosUsuario({
      usuario: data.usuario,
      telefono: data.telefono,
      email: data.email,
    });
    e.target.reset();
  };

  return (
    <>
      <Form
        className="form-control p-4"
        onSubmit={handleSubmit(actualizarForm)}
      >
        <label className="mb-2 w-100" htmlFor="nombreUsuario">
          Usuario
        </label>
        <input
          className="form-control mb-2"
          id="nombreUsuario"
          type="text"
          placeholder="Ingrese su nombre"
          autoComplete="off"
          {...register("usuario", {
            required: {
              value: true,
              message: "Usuario requerido",
            },
            minLength: {
              value: 3,
              message: "Mínimo 3 carácteres",
            },
          })}
        />
        <span className="colorError mb-2">{errors?.usuario?.message}</span>

        <label className="my-2 w-100" htmlFor="telefonoUsuario">
          Teléfono
        </label>
        <input
          className="form-control mb-2"
          id="telefonoUsuario"
          type="number"
          placeholder="Ingrese su n° de teléfono"
          autoComplete="off"
          {...register("telefono", {
            required: {
              value: true,
              message: "Teléfono es requerido",
            },
            minLength: {
              value: 10,
              message: "Mínimo 10 dígitos",
            },
          })}
        />
        <span className="colorError mb-2">{errors?.telefono?.message}</span>

        <label className="my-2 w-100" htmlFor="emailUsuario">
          Email
        </label>
        <input
          className="form-control mb-2"
          id="emailUsuario"
          type="email"
          placeholder="ejemplo@mail.com"
          {...register("email", {
            required: {
              value: true,
              message: "Email requerido",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Formato de email incorrecto",
            },
          })}
        />
        <span className="colorError mb-2">{errors?.email?.message}</span>

        <label className="my-2 w-100" htmlFor="validacionEmail">
          Confirma email
        </label>
        <input
          className="form-control mb-2"
          id="validacionEmail"
          type="email"
          placeholder="Reingrese su email"
          {...register("validacionEmail", {
            required: {
              value: true,
              message: "Confirmación de email requerida",
            },
            validate: {
              confirmar: (value) =>
                value === getValues("email") ||
                "Los emails ingresados no coinciden",
            },
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Formato de email incorrecto",
            },
          })}
        />
        <span className="colorError mb-2">
          {errors?.validacionEmail?.message}
        </span>
        <Button variant="outline-success" type="submit" className="w-100 mt-3">
          Validar datos
        </Button>
      </Form>
    </>
  );
};

export default FormUser;
