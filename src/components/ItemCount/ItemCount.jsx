import { useCartContext } from "./../Context/CartContext";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import "./ItemCount.css";

export default function ItemCount() {
  const {
    contador,
    btn,
    inCart,
    carrito,
    aumentarDetail,
    disminuirDetail,
    addCart,
  } = useCartContext();
  const { id } = useParams();

  // Actualizo el localStorage
  localStorage.setItem("carrito", JSON.stringify(carrito));

  // Verifico si el producto esta en el carrito
  const isInCart = carrito.find((prod) => prod.id === id);

  return (
    <>
      {btn === "addCart" && !isInCart ? (
        <>
          <div className="contador">
            <BsDashLg
              className="disminuir"
              data-id={id}
              onClick={disminuirDetail}
            />
            <label className="contadorItem">{contador}</label>
            <BsPlusLg
              className="aumentar"
              data-id={id}
              onClick={aumentarDetail}
            />
          </div>
          <div className="btn-item">
            <Button variant="outline-info" data-id={id} onClick={addCart}>
              Agregar a carrito
            </Button>
          </div>
        </>
      ) : (
        <>
          <div className="btn-item">
            <Link to="/cart">
              <Button variant="outline-success" onClick={inCart}>
                Finalizar compra
              </Button>
            </Link>
            <Link to="/">
              <Button variant="outline-secondary" onClick={inCart}>
                Seguir comprando
              </Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
