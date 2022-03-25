import { useCartContext } from "../Context/CartContext";
import { useParams, Link } from "react-router-dom";
import "./Item.css";

export default function Item() {
  const { prodCat } = useCartContext();
  const { categoria } = useParams();
  
  const product = prodCat(categoria);

  return (
    <>
      {product.map((prod) => (
        <Link to={`/producto/${prod.id}`} key={prod.id}>
          <article className="product-card">
            <div className="img-contenedor">
              <img src={prod.img} alt="Producto" className="prod-img" />
            </div>
            <div className="tit-contenedor">
              <h3>
                {prod.marca} {prod.modelo}
              </h3>
              <h4>${prod.precio}</h4>
            </div>
          </article>
        </Link>
      ))}
    </>
  );
}
