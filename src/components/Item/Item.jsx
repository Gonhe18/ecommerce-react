import "./Item.css";

export default function Item({ product }) {
  return (
    <>
      <article className="product-card">
        <div className="img-contenedor">
          <img src={product.img} alt="Producto" className="prod-img" />
        </div>
        <div className="tit-contenedor">
          <h3>
            {product.marca} {product.modelo}
          </h3>
          <h4>${product.precio}</h4>
        </div>
      </article>
    </>
  );
}
