import { Triangle } from "react-loader-spinner";
import ItemDetail from "./../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { useCartContext } from "./../Context/CartContext";
import { useEffect } from "react";
import { getFirestore, getDoc, doc } from "firebase/firestore";

import "./ItemDetailContainer.css";

export default function ItemDetailContainer({ title }) {
  const { loading, setLoading, setProducto } = useCartContext();
  const { id } = useParams();

  // Obtengo producto por ID
  useEffect(() => {
    const db = getFirestore();
    const prodId = doc(db, "Items", id || "");
    getDoc(prodId)
      .then((data) => setProducto({ id: data.id, ...data.data() }))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id, setProducto, setLoading]);

  return (
    <>
      {loading ? (
        <>
          <div className="my-3">
            <h2 className="titulo">{title}</h2>
          </div>
          <div className="loadProd">
            <Triangle color="#1a1a40" height={100} width={100} />
          </div>
        </>
      ) : (
        <>
          <h2 className="titulo">{}</h2>
          <ItemDetail />
        </>
      )}
    </>
  );
}
