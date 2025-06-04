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
    navigate("/home");
  };

  return (
    <div className="formulario-cita" style={{ maxWidth: "400px", margin: "5rem 30rem" }}>
      <h2 className="text-primary">Agendar Cita</h2>
      <form onSubmit={handleSubmit}>
        <label className=" text-danger">Nombre:</label>
        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />

        <label className="text-danger">Teléfono:</label>
        <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />

        <label className="text-danger">Fecha y Hora:</label>
        <DatePicker
          selected={fecha}
          onChange={(date) => setFecha(date)}
          showTimeSelect
          dateFormat="Pp"
          minDate={new Date()}
        />

        <button type="submit" style={{ marginTop: "10px" }}>Agendar Cita</button>
      </form>
    </div>
  );
}

export default SacarCitas;
