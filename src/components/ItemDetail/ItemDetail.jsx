import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCarContext } from "../Context/CartContext";
import ItemCount from "./../ItemCount/ItemCount";

import "./ItemDetail.css";

export default function ItemDetail() {
  const { producto } = useCarContext();

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
                <h5>Stock:</h5>
                {producto.stock >= 10 ? (
                  <p style={{ color: "green" }}>{producto.stock} unidad(es)</p>
                ) : (
                  <>
                    {producto.stock >= 1 ? (
                      <p style={{ color: "red" }}>
                        Solo hay {producto.stock} unidad(es)!!
                      </p>
                    ) : (
                      <p style={{ color: "red", marginTop: "10px" }}>
                        Sin Stock
                      </p>
                    )}
                  </>
                )}
                {producto.stock > 0 ? (
                  <ItemCount />
                ) : (
                  <Link to="/">
                    <Button variant="outline-info">Seguir comprando</Button>
                  </Link>
                )}
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
