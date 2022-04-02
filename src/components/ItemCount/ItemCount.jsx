import { useCartContext } from "./../Context/CartContext";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import "./ItemCount.css";

export default function ItemCount() {
  const {
    contador,
    inCart,
    carrito,
    aumentarDetail,
    disminuirDetail,
    addCart,
  } = useCartContext();
  const { id } = useParams();

  // Verifico si el producto esta en el carrito
  const isInCart = carrito.find((prod) => prod.id === id);

  return (
    <>
      {!isInCart ? (
        <>
          <div className="contador">
            <BsDashLg
              className="disminuir"
              onClick={disminuirDetail}
            />
            <label className="contadorItem">{contador}</label>
            <BsPlusLg
              className="aumentar"
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
