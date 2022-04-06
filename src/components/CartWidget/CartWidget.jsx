import { useCarContext } from "../Context/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";

import "./CartWidget.css";

export default function CartWidget() {
  const { cantTotalProd } = useCarContext();
  return (
    <>
      <div className="cart-btn">
        <span className="nav-icon">
          <RiShoppingCartFill />
        </span>
        {cantTotalProd() !== 0 && (
          <div className="cart-items">{cantTotalProd()}</div>
        )}
      </div>
    </>
  );
}
