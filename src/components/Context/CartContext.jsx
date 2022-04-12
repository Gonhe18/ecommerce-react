import React, { createContext, useContext, useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import Swal from "sweetalert2";
import { fecha } from "./../../helpers/fecha";

const carritoAlmacen = JSON.parse(localStorage.getItem("carrito")) || [];

const CarContext = createContext();
export const useCarContext = () => useContext(CarContext);

export function CartContextProvider({ children }) {
  const [carga, enCarga] = useState(true);
  const [contador, enContador] = useState(1);
  const [productos, enProductos] = useState([]);
  const [producto, enProducto] = useState({});
  const [carrito, enCarrito] = useState(carritoAlmacen);
  const [datosUsuario, enDatosUsuario] = useState({
    usuario: "",
    telefono: "",
    email: "",
  });

  // Actualizo localStorage
  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  const aumentarItemDetalle = () => {
    contador < producto.stock && enContador(contador + 1);
  };

  const disminuirItemDetalle = () => {
    contador > 1 && enContador(contador - 1);
  };

  const cantidadItemCarrito = (e) => {
    const id = e.target.parentElement.id || e.target.id;
    const accion =
      e.target.parentElement.dataset.action || e.target.dataset.action;
    const stockCarrito = carrito.find((prod) => prod.id === id);

    if (accion === "aumentar") {
      if (contador <= stockCarrito.stock) {
        stockCarrito.cantidad += contador;
        stockCarrito.stock -= contador;
      }
    }

    if (accion === "disminuir") {
      if (stockCarrito.cantidad > 1) {
        stockCarrito.cantidad -= contador;
        stockCarrito.stock += contador;
      } else {
        for (let i = carrito.length - 1; i >= 0; --i) {
          if (carrito[i].id === id) carrito.splice(i, 1);
        }
      }
    }

    enCarrito([...carrito]);
  };

  const agregarCarrito = () => {
    enCarrito([
      ...carrito,
      { ...producto, stock: producto.stock - contador, cantidad: contador },
    ]);
    enContador(1);
  };

  const cantTotalProd = () => {
    const cantProd = carrito.map((prod) => prod.cantidad);
    return cantProd.reduce((acc, item) => acc + item, 0);
  };

  const limpiarCarrito = () => {
    enCarrito([]);
  };

  const removerItem = (e) => {
    const idProd = e.target.parentElement.id || e.target.id;
    for (let i = carrito.length - 1; i >= 0; --i) {
      if (carrito[i].id === idProd) carrito.splice(i, 1);
    }
    enCarrito([...carrito]);
  };

  const totalPrecioCarrito = () => {
    const totalPrecio = carrito.map((prod) => prod.precio);
    return totalPrecio.reduce((acc, item) => acc + item, 0);
  };

  const generarOrdenCompra = (db, orden) => {
    const obtenerColeccion = collection(db, "ordenCompra");
    addDoc(obtenerColeccion, orden).then(({ id }) =>
      Swal.fire({
        title: "Compra exitosa!",
        html: `N° de orden <br> <b>${id}</b>`,
        confirmButtonText: "Volver al home",
        icon: "success",
        allowOutsideClick: false,
        allowEscapeKey: false,
      }).then(function () {
        window.location = "./index.html";
      })
    );
  };

  const actualizarStock = (db, orden) => {
    const idProd = orden.items.map((prod) => prod.id);
    idProd.forEach((id) => {
      const stockProd = carrito.find((prod) => prod.id === id);
      const actualizarStock = doc(db, "Items", id);
      updateDoc(actualizarStock, { stock: stockProd.stock });
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    const db = getFirestore();

    let ordenDeCompra = {};

    ordenDeCompra.usuario = datosUsuario;

    ordenDeCompra.saldoTotal = cantTotalProd() * totalPrecioCarrito();

    ordenDeCompra.items = carrito.map((prod) => {
      const id = prod.id;
      const producto = `${prod.marca} ${prod.modelo}`;
      const cantidad = prod.cantidad;
      const precioUnidad = prod.precio;
      return { id, producto, cantidad, precioUnidad };
    });

    ordenDeCompra.fechaCompra = fecha();

    generarOrdenCompra(db, ordenDeCompra);
    actualizarStock(db, ordenDeCompra);
    enCarrito([]);
  };

  return (
    <CarContext.Provider
      value={{
        carrito,
        enProductos,
        productos,
        enProducto,
        producto,
        enCarga,
        carga,
        enContador,
        contador,
        datosUsuario,
        enDatosUsuario,
        cantTotalProd,
        limpiarCarrito,
        removerItem,
        aumentarItemDetalle,
        disminuirItemDetalle,
        agregarCarrito,
        cantidadItemCarrito,
        totalPrecioCarrito,
        finalizarCompra,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}
