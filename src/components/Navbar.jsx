import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
    <nav className="navbar navbar-expand-lg navbar-primary bg-danger" style={{ borderBottom: "5px solid red" }}>
      <div className="container-fluid">
       <Link
  className="navbar-brand"
  to="/"
  style= {{
    color: "white", 
    fontWeight: "bold",
    fontSize: "2.5rem",
    fontFamily: "'Lobster', cursive", 
    textShadow: "1px 4px 9px blue", // sombra para contraste
    textTransform: "uppercase",
    letterSpacing: "2px"
  }}
>
 💈Barbería Estilo
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
              <Link className="nav-link text-white" to="/"> <strong>Inicio </strong> </Link>
            </li>
            <li className="nav-item">
              
              <Link className="nav-link text-white" to="/Demo"> <strong> Tipos de Cortes </strong> </Link>
              
            </li>
            <li className="nav-item">
      
              <Link className="nav-link text-white" to="/SacarCitas"><strong> Sacar Cita </strong></Link>
            </li>          
            <li className="nav-item">
              <Link className="nav-link text-white" to="/info"> <strong> Contactenos </strong> </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};