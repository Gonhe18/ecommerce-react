import { useCartContext } from "../Context/CartContext";
import { BsDashLg } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

import "./Cart.css";

const DetalleProd = () => {
  const { carrito, removerItems, aumentarCart, disminuirCart } =
    useCartContext();
  return (
    <>
      {carrito.map((prod) => (
        <div className="conjuntoProd" key={prod.id}>
          <div className="info-producto">
            <img src={prod.img} alt="Imagen" />
            <div className="title-prod">
              <h4>{prod.marca}</h4>
              <h4>{prod.modelo}</h4>
            </div>
          </div>
          <div className="cant-producto">
            <div className="modifProd">
              <div className="contadorCart">
                <div className="modifCant">
                  <BsDashLg
                    className="disminuir"
                    id={prod.id}
                    onClick={disminuirCart}
                  />
                </div>
                <p className="cant-item">{prod.cantidad}</p>
                <div className="modifCant">
                  <BsPlusLg
                    className="aumentar"
                    id={prod.id}
                    onClick={aumentarCart}
                  />
                </div>
              </div>
              <span className="remove-item" id={prod.id} onClick={removerItems}>
                Remove
              </span>
            </div>
            <div className="saldoParcial">
              <h4 className="precio">Importe </h4>
              <h4 className="precio">${prod.precio * prod.cantidad}</h4>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default DetalleProd;
