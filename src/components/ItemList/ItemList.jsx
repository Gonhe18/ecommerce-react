import { memo } from "react";
import Item from "./../Item/Item";

import "./ItemList.css";

const ItemList = memo(() => {
  return (
    <>
      <div className="cardProd">
        <Item />
      </div>
    </>
  );
});

export default ItemList;
