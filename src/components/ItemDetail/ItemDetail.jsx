import ItemCount from "./../ItemCount/ItemCount";

import "./ItemDetail.css";

export default function ItemDetail({ prod }) {
  return (
    <>
      <div className="contenidoCard" key={prod.id}>
        <article>
          <div className="cardItem">
            <div className="imgCard">
              <img src={prod.img} alt="producto" className="prodImg" />
            </div>
            <div className="bloqueContenedor">
              <h3 className="titContenedor">
                {prod.marca} {prod.modelo}
              </h3>
              <div className="separador"></div>
              <div className="bloqueContador">
                <h4>${prod.precio} </h4>
                <ItemCount cantProd={prod.stock} />
              </div>
            </div>
          </div>
          <div className="bloqueDescripcion">
            {prod.descripcion.map((product, index) => (
              <li key={index}>{product}</li>
            ))}
          </div>
        </article>
      </div>
    </>
  );
}
