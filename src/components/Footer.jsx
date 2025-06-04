import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export const Footer = () => {

  return (
    <footer style={footerStyle}>
      <div style={iconosStyle}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={linkStyle}>
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer" style={linkStyle}>
          <FaInstagram />
        </a>
      </div>
      <p style={{ margin: "5px 0" }}>Dirección: Calle Central, Tu Pueblo</p>
      <p style={{ margin: "5px 0", fontSize: "0.9em", color: "#aaa" }}>
        © {new Date().getFullYear()} jdmora91. Todos los derechos reservados.
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: "#111",
  color: "#fff",
  textAlign: "center",
  padding: "20px",
  marginTop: "auto",
  fontFamily: "Arial, sans-serif",
};

const iconosStyle = {
  marginBottom: "10px",
  fontSize: "1.5em",
};

const linkStyle = {
  color: "#fff",
  margin: "0 10px",
  transition: "color 0.3s",
};

