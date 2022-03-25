import { useCartContext } from "./../Context/CartContext";
import { useParams, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import "./ItemCount.css";

export default function ItemCount({ addCart }) {
  const { productos, contador, setContador, btn, setBtn, carrito } =
    useCartContext();
  const { id } = useParams();
  const validProd = carrito.find((prod) => prod.id === id);

  // Estado btn agregar al carrito
  const inCart = () => {
    setBtn("addCart");
  };
  // Aumenta cantidad productos
  const clickAumentar = () => {
    const stockProd = productos.find((prod) => prod.id === id);
    contador < stockProd.stock
      ? setContador(contador + 1)
      : setContador(stockProd.stock);
  };
  // Disminuye cantidad productos
  const clickDisminuir = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };

  return (
    <>
      {btn === "addCart" && !validProd ? (
        <>
          <div className="contador">
            <BsDashLg className="disminuir" onClick={clickDisminuir} />
            <label className="contadorItem">{contador}</label>
            <BsPlusLg className="aumentar" onClick={clickAumentar} />
          </div>
          <div className="btn-item">
            <Button variant="outline-info" onClick={addCart}>
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
