
import Item from "./../Item/Item";
import { Link } from "react-router-dom";
import { useState } from 'react';
import "./ItemList.css";

export default function ItemList({ producto }) {
  const [loading, setLoading] = useState(true);
  
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
