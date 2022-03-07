import "./ItemList.css";

import { useState, useEffect } from "react";
import Item from "../Item/Item";
import PropagateLoader from "react-spinners/PropagateLoader";

export default function ItemList() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("./api/productos.json")
        .then((res) => res.json())
        .then((res) => setProductos(res))
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="loadProd">
          <PropagateLoader color="black" />
        </div>
      ) : (
        <div className="cardProd">
          {productos.map((prod) => (
            <Item product={prod} />
          ))}
        </div>
      )}
    </>
  );
}
