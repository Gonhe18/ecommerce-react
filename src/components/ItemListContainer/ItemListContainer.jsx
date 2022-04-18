import ItemList from "./../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { useCarContext } from "../Context/CartContext";
import { useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import "./ItemListContainer.css";

export default function ItemListContainer({ title }) {
  const { carga, enProductos, enCarga } = useCarContext();
  const { categoria } = useParams();

  // Obtengo TODOS los producto
  useEffect(() => {
    enCarga(true);
    const db = getFirestore();

    const obtenerProductos = categoria
      ? query(collection(db, "Items"), where("cat", "==", categoria))
      : collection(db, "Items");

    getDocs(obtenerProductos)
      .then((data) =>
        enProductos(data.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((error) => console.log(error))
      .finally(() => enCarga(false));
  }, [categoria, enProductos, enCarga]);

  return (
    <>
      <div className="my-3">
        {categoria ? (
          <h1 className="titulo">{categoria}</h1>
        ) : (
          <h1 className="titulo">{title}</h1>
        )}
      </div>
      {carga ? (
        <div className="loadProd">
          <Triangle color="#1a1a40" height={100} width={100} />
        </div>
      ) : (
        <>
          <ItemList />
        </>
      )}
    </>
  );
}
