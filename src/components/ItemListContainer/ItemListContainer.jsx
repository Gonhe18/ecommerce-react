import "./ItemListContainer.css";
import ItemList from './../ItemList/ItemList';


export default function ItemListContainer({ title }) {
  return (
    <>
      <div className="my-3">
        <h1 className="titulo">{title}</h1>
      </div>
      <ItemList />
    </>
  );
}
