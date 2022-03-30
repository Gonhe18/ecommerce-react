import ItemList from "./../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { useCartContext } from "../Context/CartContext";
import { useEffect } from 'react';
import { getFirestore, collection, getDocs,query,where } from 'firebase/firestore';

import "./ItemListContainer.css";

export default function ItemListContainer({ title }) {
  const { loading, setProdCategoria } = useCartContext();
  const { categoria } = useParams();
    
  useEffect(() => {
    const db = getFirestore();
    const prods = collection(db, "Items");
    const filterCat = query(prods,where('cat','==', categoria || ''))
    getDocs(filterCat)
      .then((data) =>
      setProdCategoria(data.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((error) => console.log(error))
  }, [categoria,setProdCategoria]);

  return (
    <>
      <div className="my-3">
        {categoria ? (
          <h1 className="titulo">{categoria}</h1>
        ) : (
          <h1 className="titulo">{title}</h1>
        )}
      </div>
      {loading ? (
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
