import { getFetch } from "../../helpers/getFetch.js";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemDetail from "./../ItemDetail/ItemDetail";

import "./ItemDetailContainer.css";

export default function ItemDetailContainer({ title }) {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState();
  const { id } = useParams();

  useEffect(() => {
    // setTimeout(() => {
    getFetch()
      .then((data) => setProducto(data.find((prod) => prod.id === Number(id))))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
    // }, 3000);
  }, [id]);

  return (
    <>
      <div className="my-3">
        <h2 className="titulo">{title}</h2>
      </div>
      {loading ? (
        <div className="loadProd">
          Cargando
          {/* <MoonLoader color="black" /> */}
        </div>
      ) : (
        <ItemDetail prod={producto} />
      )}
    </>
  );
}
