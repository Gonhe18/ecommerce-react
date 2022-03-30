import { useCartContext } from "../Context/CartContext";
import { BsDashLg } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import { carritoVacio } from "../../helpers/alert.js";
import { memo } from "react";
import { Triangle } from "react-loader-spinner";

import "./Cart.css";

const Cart = memo(({ title }) => {
  const {
    carrito,
    loading,
    limpiarCarrito,
    removerItems,
    aumentarCart,
    disminuirCart,
    cantTotalProd,
    totalPrecioCart,
  } = useCartContext();

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
                            <div className="midifCant">
                              <BsDashLg
                                className="disminuir"
                                id={prod.id}
                                onClick={disminuirCart}
                              />
                            </div>
                            <p className="cant-item">{prod.cantidad}</p>
                            <div className="midifCant">
                              <BsPlusLg
                                className="aumentar"
                                id={prod.id}
                                onClick={aumentarCart}
                              />
                            </div>
                          </div>
                          <span
                            className="remove-item"
                            id={prod.id}
                            onClick={removerItems}
                          >
                            Remove
                          </span>
                        </div>
                        <h4 className="precio">
                          ${prod.precio * prod.cantidad}
                        </h4>
                      </div>
                    ))}
                  </div>
                  <div className="detalleCart">
                    <h3 className="totalGral">TOTAL</h3>
                    <h3 className="totalItem">{cantTotalProd()}</h3>
                    <h3 className="totalPrecio">
                      ${cantTotalProd() * totalPrecioCart()}
                    </h3>
                  </div>
                  <Button
                    variant="outline-primary"
                    className="btnClean"
                    onClick={limpiarCarrito}
                  >
                    Vaciar carrito
                  </Button>
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
