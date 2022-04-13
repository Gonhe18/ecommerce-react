import { memo } from "react";
import Item from "./../Item/Item";
import { useCarContext } from "../Context/CartContext";
import { Link } from "react-router-dom";

import "./ItemList.css";

const ItemList = memo(() => {
  const { productos } = useCarContext();
  return (
    <div className="cardProd">
      {productos.map((prod) => (
        <Link to={`/producto/${prod.id}`} key={prod.id}>
          <Item prod={prod} />
        </Link>
      ))}
    </div>
  );
});

export default ItemList;
