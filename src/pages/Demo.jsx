import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css"; // si deseas usar clases globales desde index.css
import "./Demo.css";   // archivo CSS local solo para estilos de las cards

export const Demo = () => {
  const navigate = useNavigate();

  const cortes = [
    {
      id: 1,
      imagen: "https://images.unsplash.com/photo-1568339434343-2a640a1a9946?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion:"Fade clásico con navaja",
      
    },
    {
      id: 2,
      imagen: "https://plus.unsplash.com/premium_photo-1742909963787-1f74fc54628a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion:"Corte moderno con diseño",
    },
    {
      id: 3,
      imagen: "https://images.unsplash.com/photo-1618049049816-43a00d5b0c3d?q=80&w=1360&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Barba perfilada y corte limpio",
    },
    {
    id: 4,
    imagen: "https://images.unsplash.com/photo-1698795354036-84c8199d67da?q=80&w=1517&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    descripcion: "Barba perfilada y corte limpio",
    },
    {
    id: 5,
    imagen: "https://images.unsplash.com/photo-1723879371691-631902ea2fe1?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Barba perfilada y corte limpio",
    },
    {
    id: 6,
    imagen: "https://images.unsplash.com/photo-1608347183661-cbc3ecf769ce?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Barba perfilada y corte limpio",
    },
    {
    id: 7,
    imagen: "https://images.unsplash.com/photo-1723879371709-17908244d70a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Barba perfilada y corte limpio",
    },
    {
    id: 8,
    imagen: "https://images.unsplash.com/photo-1485290334039-a3c69043e517?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      descripcion: "Barba perfilada y corte limpio",
    }
];

return (
  <div className="container mt-4 bg-light" style={{ minHeight: "100vh" }}>
  <div style={estilos.contenedor}>
    <h1 className="titulo-principal">Estilos Y Diseños</h1>
    <div style={estilos.galeria}>
      {cortes.map((corte) => (
        <div key={corte.id} style={estilos.card} className="card-corte">
          <img src={corte.imagen} alt="Corte" style={estilos.imagen} />
          <p style={estilos.descripcion}><h4 className="text-center"><strong> Descripcion : </strong></h4> <br/>{corte.descripcion}</p>
          <button style={estilos.boton} onClick={() => navigate("/sacarcitas")}>
            Sacar Cita
          </button>
        </div>
      ))}
    </div>
  </div>
  </div>
);
};

const estilos = {
  contenedor: {
    padding: "2rem",
    backgroundColor: "#f9f9f9",
  },
  galeria: {
    display: "flex",
    flexWrap: "wrap",
    gap: "2rem",
    justifyContent: "center",
  },
  card: {
    width: "260px",
    height: "420px",
    padding: "1rem",
    backgroundColor: "#fff",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  imagen: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  descripcion: {
   
    color: "red",
    textAlign: "center",
    backgroundColor: "white",
    margin: "2rem 0",
    fontWeight: "100",
    flexGrow: 1,
  },
  boton: {
    backgroundColor: "blue",
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};
