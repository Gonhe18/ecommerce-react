import { useCartContext } from "../Context/CartContext";

import "./Cart.css";
import { BsDashLg } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

export default function Cart({ title }) {
  const { carrito } = useCartContext();

  return (
    <>
      {
        <div className="pago">
          <h2>{title}</h2>
          <section className="detalle">
            <div className="titulo-detalle">
              <h3>Producto</h3>
              <h3>Cantidad</h3>
              <h3>Precio</h3>
            </div>
            {carrito.map((prod) => (
              <div className="detalleCompra" key={prod.id}>
                <div className="info-producto">
                  <img src={prod.img} alt="Imagen" />
                  <div className="title-prod">
                    <h4>{prod.marca}</h4>
                    <h4>{prod.modelo}</h4>
                  </div>
                </div>
                <div className="cant-producto">
                  <div className="modifProd">
                    <BsDashLg className="disminuir"/>
                    <p className="cant-item">{prod.cantidad}</p>
                    <BsPlusLg className="aumentar"/>
                  </div>
                  <span className="remove-item">Remove</span>
                </div>
                <h4 className="precio">${prod.precio}</h4>
              </div>
            ))}
          </section>
        </div>
      }
    </>
  );
}
