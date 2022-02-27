import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="./index.html">
          Vice<span className="bandera">A</span>R<span className="bandera">G</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item mx-3">
              <a className="nav-link text-white" href="./index.html">
                Home
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white" href="./index.html">
                Teclados
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white" href="./index.html">
                Mouses
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white" href="./index.html">
                Auriculares
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white" href="./index.html">
                Monitores
              </a>
            </li>
            <li className="nav-item mx-3">
              <a className="nav-link text-white" href="./index.html">
                Notebooks
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
