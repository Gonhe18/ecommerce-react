import { useCartContext } from "../Context/CartContext";
import { useParams } from "react-router-dom";

import "./ItemDetail.css";
import ItemCount from "./../ItemCount/ItemCount";

export default function ItemDetail() {
  const {
    carrito,
    setCarrito,
    setBtn,
    setContador,
    contador,
    prodId,
    setStockProd,
  } = useCartContext();
  const { id } = useParams();
  const prod = prodId(id);

  const addCart = () => {
    setBtn("inCart");
    const prodInCart = carrito.find((prod) => prod.id === id);
    if (prodInCart) {
      if (contador < prodInCart.stock) {
        prodInCart.cantidad += contador;
        prodInCart.stock -= contador;
      }
      setCarrito([...carrito]);
      setStockProd(prodInCart.stock);
    } else {
      setCarrito([
        ...carrito,
        { ...prod, stock: prod.stock - contador, cantidad: contador },
      ]);
      setStockProd(prod.stock - contador);
    }
    setContador(1);
  };

  localStorage.setItem("carrito", JSON.stringify(carrito));

  return (
    <>
      <div className="contenidoCard" key={prod.id}>
        <article>
          <div className="cardItem">
            <div className="imgCard">
              <img src={prod.img} alt="producto" className="prodImg" />
            </div>
            <div className="bloqueContenedor">
              <h3 className="titContenedor">
                {prod.marca} {prod.modelo}
              </h3>
              <div className="separador"></div>
              <div className="bloqueContador">
                <h4>${prod.precio} </h4>
                <ItemCount addCart={addCart} />
              </div>
            </div>
          </div>
          <div className="bloqueDescripcion">
            {prod.descripcion.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
