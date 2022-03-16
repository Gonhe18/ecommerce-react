import "./ItemCount.css";
import { BsDashLg, BsPlusLg } from "react-icons/bs";
import { useState } from "react";
import Btn from "../Btn/Btn";

export default function ItemCount({ cantProd }) {

  const [contador, setContador] = useState(1);

  const clickAumentar = () => {
    contador < cantProd ? setContador(contador + 1) : setContador(cantProd);
  };
  const clickDisminuir = () => {
    contador > 1 ? setContador(contador - 1) : setContador(1);
  };

  return (
    <>
      <div className="contador-Item">
        <div className="contador">
          <label className="disminuir" onClick={clickDisminuir}>
            <BsDashLg />
          </label>
          <label className="contadorItem">{contador}</label>
          <label className="aumentar" onClick={clickAumentar}>
            <BsPlusLg />
          </label>
        </div>
        <Btn msjCount="Agregar al carrito" />
      </div>
    </>
  );
}
