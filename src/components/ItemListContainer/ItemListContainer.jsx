import "./ItemListContainer.css";
import ItemList from "./../ItemList/ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners/MoonLoader";
import { getFetch } from "../../helpers/getFetch.js";

export default function ItemListContainer({ title }) {
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();

  useEffect(() => {
    // setTimeout(() => {
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
    // }, 3000);
  }, [categoria]);

  return (
    <>
      <div className="my-3">
        <h1 className="titulo">{title}</h1>
      </div>
      {loading ? (
        <div className="loadProd">
          Cargando
          {/* <MoonLoader color="black" /> */}
        </div>
      ) : (
        <ItemList producto={productos} />
      )}
    </>
  );
}
