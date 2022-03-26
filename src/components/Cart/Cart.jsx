import { useCartContext } from "../Context/CartContext";
import { BsDashLg } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { carritoVacio } from "../../helpers/alert.js";

import "./Cart.css";

export default function Cart({ title }) {
  const {
    carrito,
    limpiarCarrito,
    removerItems,
    clickAumentar,
    clickDisminuir,
  } = useCartContext();

  return (
    <>
      <div className="pago">
        <h2>{title}</h2>
        {carrito.length >= 1 ? (
          <>
            <section className="detalle">
              <div className="titulo-detalle">
                <h3>Producto</h3>
                <h3>Cantidad</h3>
                <h3>Precio</h3>
              </div>
              <div className="detalleCompra">
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
                        <BsDashLg
                          className="disminuir"
                          data-id={prod.id}
                          onClick={clickDisminuir}
                        />
                        <p className="cant-item">{prod.cantidad}</p>
                        <BsPlusLg
                          className="aumentar"
                          data-id={prod.id}
                          onClick={clickAumentar}
                        />
                      </div>
                      <span
                        className="remove-item"
                        data-id={prod.id}
                        onClick={removerItems}
                      >
                        Remove
                      </span>
                    </div>
                    <h4 className="precio">${prod.precio}</h4>
                  </div>
                ))}
              </div>
            </section>
            <Button className="btnClean" onClick={limpiarCarrito}>
              Vaciar carrito
            </Button>
          </>
        ) : (
          carritoVacio(carrito)
        )}
      </div>
    </>
  );
}
