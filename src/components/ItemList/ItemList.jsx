import "./ItemList.css";

import Item from "./../Item/Item";
import { Link } from "react-router-dom";

export default function ItemList({ producto }) {
  return (
    <>
      <div className="cardProd">
        {producto.map((prod) => (
          <Link to={`/detalle/${prod.id}`} key={prod.id}>
            <Item product={prod} />
          </Link>
        ))}
      </div>
    </>
  );
}
