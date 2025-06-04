import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";

function SacarCitas() {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState(new Date());
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const cita = {
      nombre,
      telefono,
      fecha: fecha.toLocaleString(),
    };

    // Aquí puedes guardar la cita en la API o localStorage
    console.log("Cita agendada:", cita);

    // Simulamos guardado y redirigimos
    alert("¡Cita agendada con éxito!");
    navigate("/");
  };

  return (
    <div className="container mt-4 bg-light" style={{ minHeight: "100vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <div className="formulario-cita bg-primary" style={{ maxWidth: "400px", width: "100%" }}>

          <h2 className="text-#002147" style={{
            color: "#002147",
            fontWeight: "bold",
            fontSize: "2.5rem",
            fontFamily: "sans-serif",
            textShadow: "1px 4px 9px white", // sombra para contraste
            textTransform: "uppercase",
            letterSpacing: "2px"
          }}>Agendar Cita</h2>
          <form onSubmit={handleSubmit}>
            <label className=" text-light" style={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "'Lobster', cursive",
              textShadow: "1px 4px 9px red", // sombra para contraste
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
            > <strong> Nombre: </strong> </label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

             <label className=" text-light" style={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "'Lobster', cursive",
              textShadow: "1px 4px 9px red", // sombra para contraste
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
            >Teléfono:</label>
            <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

            <label className=" text-light" style={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "'Lobster', cursive",
              textShadow: "1px 4px 9px red", // sombra para contraste
              textTransform: "uppercase",
              letterSpacing: "1px"
            }}
            >Fecha y Hora:</label>
            <DatePicker
              selected={fecha}
              onChange={(date) => setFecha(date)}
              showTimeSelect
              dateFormat="Pp"
              minDate={new Date()}
            />

            <button type="submit" style={{ marginTop: "10px", background: "#002147", color: "white", padding: "10px 20px", border: "none", borderRadius: "5px", fontSize: "1.2rem", fontWeight: "bold", cursor: "pointer"
            }}>Agendar Cita</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SacarCitas;
