import "./Btn.css";
import Button from "react-bootstrap/Button";

export default function Btn({ msjCount }) {
  return (
    <>
      <div className="btn-item">
        <Button variant="outline-info">{msjCount}</Button>{" "}
      </div>
    </>
  );
}
