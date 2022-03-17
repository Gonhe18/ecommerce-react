import "./ItemListContainer.css";
import ItemList from "./../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getFetch } from "../../helpers/getFetch.js";
import { Triangle } from "react-loader-spinner";

export default function ItemListContainer({ title }) {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      if (categoria) {
        getFetch()
          .then((data) =>
            setProductos(data.filter((prod) => prod.cat === categoria))
          )
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      } else {
        getFetch()
          .then((data) => setProductos(data))
          .catch((error) => console.log(error))
          .finally(() => setLoading(false));
      }
    }, 3000);
  }, [categoria]);

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
          <ItemList producto={productos} />
        </>
      )}
    </>
  );
}
