import React, { createContext, useContext, useState, useEffect } from "react";
import { getFetch } from "../../helpers/getFetch.js";
// Recupero datos del localStorage
const carritoAlmacen = JSON.parse(localStorage.getItem("carrito")) || [];
// Creo contexto
const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState(carritoAlmacen);
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [contador, setContador] = useState(1);
  const [btn, setBtn] = useState("addCart");
  const [stockProd, setStockProd] = useState();

  // Obtengo datos de API
  useEffect(() => {
    // setTimeout(() => {
    getFetch()
      .then((data) => setProductos(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // }, 3000);
  }, []);

  // Filtro por categoría
  const prodCat = (cat) => {
    if (cat) {
      return productos.filter((prod) => prod.cat === cat);
    } else {
      return productos;
    }
  };

  // Filtro por Id
  const prodId = (id) => {
    return productos.find((prod) => prod.id === id);
  };
  // Almaceno total de productos agregados al carrito
  const cantTotalProd = () => {
    const cantProd = carrito.map((prod) => prod.cantidad);
    return cantProd.reduce((acc, item) => acc + item, 0);
  };
  

  return (
    <CartContext.Provider
      value={{
        carrito,
        productos,
        loading,
        btn,
        setBtn,
        contador,
        setContador,
        setCarrito,
        stockProd,
        setStockProd,
        prodCat,
        prodId,
        cantTotalProd,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
