import './CartWidget.css'

export default function CartWidget() {
  return (
    <>
      <div className="cart-btn">
        <span className="nav-icon">
          <i className="fas fa-shopping-cart"></i>
        </span>
        <div className="cart-items">0</div>
      </div>
    </>
  );
}
