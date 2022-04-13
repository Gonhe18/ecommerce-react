
import "./Item.css";

export default function Item({ prod }) {
  return (
    <>
      
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

    </>
  );
}
