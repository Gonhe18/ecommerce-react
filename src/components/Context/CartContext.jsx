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
  // const [stockProd, setStockProd] = useState();

  // Obtengo datos de API
  useEffect(() => {
    setTimeout(() => {
    getFetch()
      .then((data) => setProductos(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    }, 3000);
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
  // Aumenta cantidad productos
  const clickAumentar = () => {
    // const id = e.target.dataset.id;
    // const stockProd = productos.find((prod) => prod.id === id);
    contador < 10 ? setContador(contador + 1) : setContador(10);
  };
  // Disminuye cantidad productos
  const clickDisminuir = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };
  // Agrego productos al carrito
  const addCart = (e) => {
    setBtn("inCart");
    const id = e.target.dataset.id;
    const prodInCart = carrito.find((prod) => prod.id === id);
    const prod = prodId(id);

    if (prodInCart) {
      if (contador < prodInCart.stock) {
        prodInCart.cantidad += contador;
        prodInCart.stock -= contador;
      }
      setCarrito([...carrito]);
    } else {
      setCarrito([
        ...carrito,
        { ...prod, stock: prod.stock - contador, cantidad: contador },
      ]);
    }
    setContador(1);
  };
  // Almaceno total de productos agregados al carrito
  const cantTotalProd = () => {
    const cantProd = carrito.map((prod) => prod.cantidad);
    return cantProd.reduce((acc, item) => acc + item, 0);
  };
  // Limpiar carrito
  const limpiarCarrito = () => {
    localStorage.clear();
    setCarrito([]);
  };
  // Remover items
  const removerItems = (e) => {
    const idProd = e.target.dataset.id;

    for (let i = carrito.length - 1; i >= 0; --i) {
      if (carrito[i].id === idProd) carrito.splice(i, 1);
    }
    setCarrito([...carrito]);
    localStorage.setItem("carrito", JSON.stringify(carrito));
  };
  const inCart = () => {
    setBtn("addCart");
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
        prodCat,
        prodId,
        cantTotalProd,
        limpiarCarrito,
        removerItems,
        clickAumentar,
        clickDisminuir,
        addCart,
        inCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
