import './CartWidget.css'
import { RiShoppingCartFill } from "react-icons/ri";

export default function CartWidget() {
  return (
    <>
      <div className="cart-btn">
        <span className="nav-icon">
        <RiShoppingCartFill/>
        </span>
        <div className="cart-items">0</div>
      </div>
    </>
  );
}
