import { useCarContext } from "./../Context/CartContext";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsFillDashSquareFill, BsFillPlusSquareFill } from "react-icons/bs";

import "./ItemCount.css";

export default function ItemCount() {
  const {
    contador,
    carrito,
    aumentarItemDetalle,
    disminuirItemDetalle,
    agregarCarrito,
  } = useCarContext();
  const { id } = useParams();

  const dentroCarrito = carrito.find((prod) => prod.id === id);

  return (
    <>
      {!dentroCarrito ? (
        <>
          <div className="contador">
            <BsFillDashSquareFill
              className="disminuir"
              onClick={disminuirItemDetalle}
            />
            <label className="contadorItem">{contador}</label>
            <BsFillPlusSquareFill
              className="aumentar"
              onClick={aumentarItemDetalle}
            />
          </div>
          <div className="btn-item">
            <Button
              variant="outline-info"
              data-id={id}
              onClick={agregarCarrito}
            >
              Agregar a carrito
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="btn-item">
            <Link to="/cart">
              <Button variant="outline-success">Finalizar compra</Button>
            </Link>
            <Link to="/">
              <Button variant="outline-secondary">Seguir comprando</Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
