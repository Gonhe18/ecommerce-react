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
  // Aumenta cantidad productos en detail
  const aumentarDetail = (e) => {
    const id = e.target.dataset.id;
    const stockProd = productos.find((prod) => prod.id === id);
    contador < stockProd.stock
      ? setContador(contador + 1)
      : setContador(stockProd.stock);
  };
  // Disminuye cantidad productos en detail
  const disminuirDetail = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };
  // Aumenta/disminuye cantidad productos en Cart
  const cantidadItemCart = (e) => {
    const id = e.target.dataset.id;
    const action = e.target.dataset.action;
    const stockInCart = carrito.find((prod) => prod.id === id);
    if (action === "aumentar") {
      if (contador <= stockInCart.stock) {
        stockInCart.cantidad += contador;
        stockInCart.stock -= contador;
      }
      setCarrito([...carrito]);
    } else {
      if (stockInCart.cantidad > 1) {
        stockInCart.cantidad -= contador;
        stockInCart.stock += contador;
      } else {
        for (let i = carrito.length - 1; i >= 0; --i) {
          if (carrito[i].id === id) carrito.splice(i, 1);
        }
      }
      setCarrito([...carrito]);
    }
    localStorage.setItem("carrito", JSON.stringify(carrito));
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
    prod.stock -= contador;
    setProductos([...productos]);
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
  // Modifica vista btn en detalle productos
  const inCart = () => {
    setBtn("addCart");
  };
  // Obtengo el saldo total del cart
  const totalPrecioCart = () => {
    const totalPrecio = carrito.map((prod) => prod.precio);
    return totalPrecio.reduce((acc, item) => acc + item, 0);
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
        aumentarDetail,
        disminuirDetail,
        addCart,
        inCart,
        cantidadItemCart,
        totalPrecioCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
