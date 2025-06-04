import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ borderBottom: "5px solid red" }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/" style={{ color: "pink", fontWeight: "bold" }}>
          💈 Barbería/Salon De Belleza
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link" to="/Demo">Tipos de Cortes</Link>
              
            </li>
            <li className="nav-item">
      
              <Link className="nav-link" to="/SacarCitas">Sacar Cita</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/horarios">Horarios</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/info">Información</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};