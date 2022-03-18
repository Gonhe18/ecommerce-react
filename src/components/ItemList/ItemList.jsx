import Item from "./../Item/Item";
import { Link } from "react-router-dom";
import "./ItemList.css";

export default function ItemList({ producto }) {
  return (
    <>
      <div className="cardProd">
        {producto.map((prod) => (
          <Link to={`/producto/${prod.id}`} key={prod.id}>
            <Item product={prod} />
          </Link>
        ))}
      </div>
    </>
  );
}
