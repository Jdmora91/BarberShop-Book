import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "./SacarCita.css"; // Import local styles for the confirmation page

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

    console.log("Cita agendada:", cita);
    navigate("/ConfirmaCita");
  };

  return (
    <div className="cita-container">
      <div className="cita-card">
        <h2 className="titulo-cita">Agendar Cita</h2>
        <form onSubmit={handleSubmit} className="form-cita">
          <label>Nombre:</label>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Escribe tu nombre"
          />

          <label>Teléfono:</label>
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            required
            placeholder="Ej: 555-123-4567"
          />

          <label>Fecha y Hora:</label>
          <DatePicker
            selected={fecha}
            onChange={(date) => setFecha(date)}
            showTimeSelect
            dateFormat="Pp"
            minDate={new Date()}
            className="datepicker"
          />

          <button type="submit">Agendar Cita</button>
        </form>
      </div>
    </div>
  );
}

export default SacarCitas;
