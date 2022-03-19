import "./Btn.css";
import Button from "react-bootstrap/Button";

export default function Btn({ msjCount, cant }) {
  const totalProducts = () => {
    console.log(cant);
  };

  return (
    <>
      <div className="btn-item">
        <Button variant="outline-info" onClick={totalProducts}>
          {msjCount}
        </Button>
      </div>
    </>
  );
}
