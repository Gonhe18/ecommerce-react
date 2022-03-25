import ItemList from "./../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { Triangle } from "react-loader-spinner";
import { useCartContext } from "../Context/CartContext";

import "./ItemListContainer.css";

export default function ItemListContainer({ title }) {
  const { loading } = useCartContext();
  const { categoria } = useParams();

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
