import { useCartContext } from "../Context/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";

import "./CartWidget.css";

export default function CartWidget() {
  const {cantTotalProd} = useCartContext();
  return (
    <>
      <div className="cart-btn">
        <span className="nav-icon">
          <RiShoppingCartFill />
        </span>
        <div className="cart-items">{cantTotalProd()}</div>
      </div>
    </>
  );
}
