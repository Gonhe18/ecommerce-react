import React, { createContext, useContext, useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";

// Recupero datos del localStorage
const carritoAlmacen = JSON.parse(localStorage.getItem("carrito")) || [];
// Creo contexto
const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [carrito, setCarrito] = useState(carritoAlmacen);
  const [loading, setLoading] = useState(true);
  const [contador, setContador] = useState(1);
  const [btn, setBtn] = useState("addCart");
  const [productos, setProductos] = useState([]);
  const [prodCategoria, setProdCategoria] = useState([]);
  const [producto, setProducto] = useState({});

  // Obtengo TODOS los producto
  useEffect(() => {
    const db = getFirestore();
    const allProd = collection(db, "Items");
    getDocs(allProd)
      .then((data) =>
        setProductos(data.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  // Aumenta cantidad productos en detail
  const aumentarDetail = (e) => {
    const id = e.target.dataset.id;
    const stockProd = productos.find((prod) => prod.id === id);

    console.log("aumentarDetail", stockProd);

    (contador < stockProd.stock) && setContador(contador + 1);
  };
  // Disminuye cantidad productos en detail
  const disminuirDetail = () => {
    (contador > 1) && setContador(contador - 1);
  };
  // Aumenta/disminuye cantidad productos en Cart
  const cantidadItemCart = (e) => {
    const id = e.target.dataset.id;
    const action = e.target.dataset.action;
    const stockInCart = carrito.find((prod) => prod.id === id);

    console.log("cantidadItemCart", stockInCart);

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
    if (prodInCart) {
      if (contador < prodInCart.stock) {
        prodInCart.cantidad += contador;
        prodInCart.stock -= contador;
      }
      setCarrito([...carrito]);
    } else {
      setCarrito([
        ...carrito,
        { ...producto, stock: producto.stock - contador, cantidad: contador },
      ]);
    }
    producto.stock -= contador;
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
        setCarrito,
        carrito,
        productos,
        setProducto,
        producto,
        loading,
        setBtn,
        btn,
        setProdCategoria,
        prodCategoria,
        setContador,
        contador,
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
