import React, { createContext, useContext, useState, useEffect } from "react";


const carritoAlmacen = JSON.parse(localStorage.getItem("carrito")) || [];
// Creo contexto
const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

export function CartContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [contador, setContador] = useState(1);
  const [btn, setBtn] = useState("addCart");
  const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState({});
  const [carrito, setCarrito] = useState(carritoAlmacen);

// Actualizo localStorage
  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito));
  }, [carrito]);

  // Aumenta cantidad productos en detail
  const aumentarDetail = () => {
    contador < producto.stock && setContador(contador + 1);
  };
  // Disminuye cantidad productos en detail
  const disminuirDetail = () => {
    contador > 1 && setContador(contador - 1);
  };
  // Aumenta cantidad productos en Cart
  const aumentarCart = (e) => {
    const id = e.target.parentElement.id || e.target.id;
    const stockInCart = carrito.find((prod) => prod.id === id);
    if (contador <= stockInCart.stock) {
      stockInCart.cantidad += contador;
      stockInCart.stock -= contador;
    }
    setCarrito([...carrito]);
  };
  // Disminuye cantidad productos en Cart
  const disminuirCart = (e) => {
    const id = e.target.parentElement.id || e.target.id;
    const stockInCart = carrito.find((prod) => prod.id === id);
    if (stockInCart.cantidad > 1) {
      stockInCart.cantidad -= contador;
      stockInCart.stock += contador;
    } else {
      for (let i = carrito.length - 1; i >= 0; --i) {
        if (carrito[i].id === id) carrito.splice(i, 1);
      }
    }
    setCarrito([...carrito]);
  };
  // Agrego productos al carrito
  const addCart = () => {
    setBtn("inCart");
    setCarrito([
      ...carrito,
      { ...producto, stock: producto.stock - contador, cantidad: contador },
    ]);
    setContador(1);
  };
  // Almaceno total de productos agregados al carrito
  const cantTotalProd = () => {
    const cantProd = carrito.map((prod) => prod.cantidad);
    return cantProd.reduce((acc, item) => acc + item, 0);
  };
  // Limpiar carrito
  const limpiarCarrito = () => {
    setCarrito([]);
  };
  // Remover items
  const removerItems = (e) => {
    const idProd = e.target.parentElement.id || e.target.id;
    for (let i = carrito.length - 1; i >= 0; --i) {
      if (carrito[i].id === idProd) carrito.splice(i, 1);
    }
    setCarrito([...carrito]);
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
        setProductos,
        productos,
        setProducto,
        producto,
        setLoading,
        loading,
        setBtn,
        btn,
        setContador,
        contador,
        cantTotalProd,
        limpiarCarrito,
        removerItems,
        aumentarDetail,
        disminuirDetail,
        addCart,
        inCart,
        aumentarCart,
        disminuirCart,
        totalPrecioCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
