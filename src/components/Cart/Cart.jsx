import { useCartContext } from "../Context/CartContext";
import Button from "react-bootstrap/Button";
import { carritoVacio } from "../../helpers/alert.js";
import { memo } from "react";
import { Triangle } from "react-loader-spinner";
import FormUser from "./FormUser";
import DetalleProd from "./DetalleProd";

import "./Cart.css";

const Cart = memo(({ title }) => {
  const { carrito, loading, limpiarCarrito, cantTotalProd, totalPrecioCart } =
    useCartContext();

  return (
    <>
      <div className="pago">
        <h2>{title}</h2>
        {loading ? (
          <div className="loadProd">
            <Triangle color="#1a1a40" height={100} width={100} />
          </div>
        ) : (
          <>
            {carrito.length >= 1 ? (
              <>
                <section className="detalle">
                  <div className="titulo-detalle">
                    <h3>Productos</h3>
                    <h3>Datos cliente</h3>
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
                            ${cantTotalProd() * totalPrecioCart()}
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
                    <div className="datosCliente">
                      <FormUser />
                    </div>
                  </div>
                </section>
              </>
            ) : (
              carritoVacio(carrito)
            )}
          </>
        )}
      </div>
    </>
  );
});

export default Cart;
