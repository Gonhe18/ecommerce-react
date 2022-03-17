import CartWidget from "../CartWidget/CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";

import "./NavBar.css";

export default function NavBar() {
  return (
    <>
      <Navbar
        className="navbarPrincipal"
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <NavLink className={({ isActive }) => "navbarTitulo"} to="/">
          <h1>
            Vice<span className="bandera">A</span>R
            <span className="bandera">G</span>
          </h1>
        </NavLink>

        <Container className="contenedor">
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="cont">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/teclado"
              >
                Teclado
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/mouse"
              >
                Mouse
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/auricular"
              >
                Auricular
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/monitor"
              >
                Monitor
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "active px-4 navbarCat" : " px-4 navbarCat"
                }
                to="categorias/notebook"
              >
                Notebook
              </NavLink>
            </Nav>
            <NavLink className={({ isActive }) => "carrito"} to="cart" >
              <CartWidget/>
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

// "px-4 navbarCat"
