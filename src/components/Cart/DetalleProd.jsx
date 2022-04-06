import { useCarContext } from "../Context/CartContext";
import {
  BsFillDashSquareFill,
  BsFillPlusSquareFill,
  BsFillXCircleFill,
} from "react-icons/bs";

import "./Cart.css";

const DetalleProd = () => {
  const { carrito, removerItem, aumentarItemCarrito, disminuirItemCarrito } =
    useCarContext();
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
                  <BsFillDashSquareFill
                    className="disminuir"
                    id={prod.id}
                    onClick={disminuirItemCarrito}
                  />
                </div>
                <p className="cant-item">{prod.cantidad}</p>
                <div className="modifCant">
                  <BsFillPlusSquareFill
                    className="aumentar "
                    id={prod.id}
                    onClick={aumentarItemCarrito}
                  />
                </div>
              </div>
              <div className="saldoParcial">
                <h4 className="precio">Importe </h4>
                <h4 className="precio">${prod.precio * prod.cantidad}</h4>
              </div>
            </div>
            <BsFillXCircleFill
              className="remove-item"
              id={prod.id}
              onClick={removerItem}
              title="Eliminar item"
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default DetalleProd;
