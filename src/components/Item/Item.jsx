import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

export default function Card({ product }) {
  return (
    <>
      <article className="product-card" key={product.id}>
        <div className="img-contenedor">
          <img src={product.img} alt="Producto" className="prod-img" />
        </div>
        <div className="tit-contenedor">
          <h3>
            {product.marca} {product.modelo}
          </h3>
          <h4>${product.precio}</h4>
          <ItemCount cantProd={product.stock} />
        </div>
      </article>
    </>
  );
}
