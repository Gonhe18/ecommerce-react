import ItemCount from "./../ItemCount/ItemCount";

import "./ItemDetail.css";

export default function ItemDetail({ prod }) {
  return (
    <>
      <article className="cardItem" key={prod.id}>
        <div className="contenidoCard">
          <div className="imgCard">
            <img src={prod.img} alt="producto" className="prodImg" />
          </div>
          <div className="bloqueContenedor">
            <h3 className="titContenedor">
              {prod.marca} {prod.modelo}
            </h3>
            <div className="bloqueContador">
            
              <h4>Precio: ${prod.precio}</h4>
              <ItemCount cantProd={prod.stock} />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
