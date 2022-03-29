import { useCartContext } from "../Context/CartContext";
import ItemCount from "./../ItemCount/ItemCount";

import "./ItemDetail.css";

export default function ItemDetail() {
  const { producto } = useCartContext();

  return (
    <>
      <div className="contenidoCard" key={producto.id}>
        <article>
          <div className="cardItem">
            <div className="imgCard">
              <img src={producto.img} alt="producto" className="prodImg" />
            </div>
            <div className="bloqueContenedor">
              <h3 className="titContenedor">
                {producto.marca} {producto.modelo}
              </h3>
              <div className="separador"></div>
              <div className="bloqueContador">
                <h4>${producto.precio} </h4>
                <ItemCount />
              </div>
            </div>
          </div>
          <div className="bloqueDescripcion">
            <p className="textDescripcion">{producto.descripcion}</p>
          </div>
        </article>
      </div>
    </>
  );
}
