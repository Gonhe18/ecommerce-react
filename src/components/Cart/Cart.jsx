import "./Cart.css"

export default function Cart({title}) {
  return (
    <>
      <div className="cart">
        <h1 className="titulo">{title}</h1>
      </div>
    </>
  );
}