import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Cart from "./components/Cart/Cart";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from "./components/Footer/Footer";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer title="Bienvenidos" />} />
          <Route path="/categorias/:categoria" element={<ItemListContainer title="Filtro" />} />
          <Route path="/producto/:id" element={<ItemDetailContainer title="Productos"/>} />
          <Route path="/cart" element={<Cart title="Carrito"/>} />
          <Route path="/*" element={<Navigate to='/'/>} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
