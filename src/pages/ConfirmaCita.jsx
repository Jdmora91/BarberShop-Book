import React from "react";
import { Link } from "react-router-dom";

function ConfirmaCita() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(to right, #002147, #004e92)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem"
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "20px",
          padding: "40px",
          maxWidth: "500px",
          width: "100%",
          boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            color: "#002147",
            marginBottom: "20px",
            textTransform: "uppercase",
            letterSpacing: "2px",
            fontWeight: "bold",
          }}
        >
          ¡Cita Confirmada!
        </h2>

        <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: "20px" }}>
          Muchas gracias por agendar tu cita con nosotros. Estamos encantados de recibirte en nuestra barbería.
        </p>

        <p style={{ fontSize: "1.1rem", color: "#555", marginBottom: "30px" }}>
          Nos vemos pronto. ¡Tu estilo está en buenas manos! 💈
        </p>

        <Link
          to="/"
          style={{
            display: "inline-block",
            marginTop: "10px",
            backgroundColor: "#002147",
            color: "#fff",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "background 0.3s",
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}

export default ConfirmaCita;
