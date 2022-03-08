import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

export default function NavBar() {
  return (
    <>
      <Navbar className="navbarPrincipal" collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand className="navbarTitulo" href="./index.html">
          <h1>
            Vice<span className="bandera">A</span>R<span className="bandera">G</span>
          </h1>
        </Navbar.Brand>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className="px-4 navbarCat" href="./index.html">
                Teclados
              </Nav.Link>
              <Nav.Link className="px-4 navbarCat" href="./index.html">
                Mouse
              </Nav.Link>
              <Nav.Link className="px-4 navbarCat" href="./index.html">
                Auriculares
              </Nav.Link>
              <Nav.Link className="px-4 navbarCat" href="./index.html">
                Monitores
              </Nav.Link>
              <Nav.Link className="px-4 navbarCat" href="./index.html">
                Notebooks
              </Nav.Link>
            </Nav>
            <CartWidget />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}