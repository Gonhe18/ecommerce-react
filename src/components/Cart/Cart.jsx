import { useCarContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import { memo } from "react";
import FormUser from "./FormUser";
import DetalleProd from "./DetalleProd";
import { Link } from "react-router-dom";

import "./Cart.css";

const Cart = memo(({ title }) => {
  const { carrito, limpiarCarrito, cantTotalProd, totalPrecioCarrito } =
    useCarContext();

  return (
    <>
      <div className="pago">
        {carrito.length >= 1 ? (
          <>
            <h2>{title}</h2>
            <div className="contenedorCarrito">
              <section className="detalle">
                <div className="titulo-detalle">
                  <h3>Productos</h3>
                </div>
                <div className="datosCarrito">
                  <div className="detalleCompra">
                    <DetalleProd />
                    <div className="contendorDetalle">
                      <div className="encabezadoFinal">
                        <div> </div>
                        <h3 className="totalItem">Cantidad</h3>
                        <h3 className="totalPrecio">Saldo</h3>
                      </div>
                      <div className="detalleCart">
                        <h3 className="totalGral">TOTAL</h3>
                        <h3 className="cantTotal">{cantTotalProd()}</h3>
                        <h3 className="saldoTotal">
                          ${cantTotalProd() * totalPrecioCarrito()}
                        </h3>
                      </div>
                    </div>
                    <Button
                      variant="outline-primary"
                      className="btnClean"
                      onClick={limpiarCarrito}
                    >
                      Vaciar carrito
                    </Button>
                  </div>
                </div>
              </section>
              <section className="datosCliente">
                <h3>Datos cliente</h3>
                <FormUser />
              </section>
            </div>
          </>
        ) : (
          <>
            <h2>Carrito vacio</h2>
            <div className="cardVacio">
              <img src="./img/sin-items.ico" alt="Icono carrito vacio" />
              <Link to="/">
                <Button variant="outline-secondary">Seguir Comprando</Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
});

export default Cart;
