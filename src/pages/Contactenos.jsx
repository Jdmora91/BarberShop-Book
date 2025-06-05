import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

function Contactenos() {
    return (
        <div
            style={{
                minHeight: "100vh",
                background: "llinear-gradient(-45deg, #000000, #1a1a1a, #2a2a2a, #000000)",
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
                    Sala De Belleza
                </h2>

                <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: "20px" }}>
                    Horario: Lunes a Sabados. 9am-5pm
                </p>
                <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: "20px" }}>
                    Telefono: 888-888-8888
                </p>
                <p style={{ fontSize: "1.2rem", color: "#333", marginBottom: "20px" }}>
                    Siguenos En Nuestras Redes Sociales:
                </p>
                <div className='text-center border-1rem'>
                    <p style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2rem",  // separa los íconos entre sí
                        fontSize: "3rem",
                        marginBottom: "20px",
                        color: "#fff"
                    }}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#1877F2" }}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#C13584" }}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                        <a href="https://maps.google.com/?q=Tu+Dirección" target="_blank" rel="noopener noreferrer" style={{ color: "#EA4335" }}>
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </a>
                    </p>
                </div>

                <p style={{ display: "flex", justifyContent:"center", gap:"1rem", fontSize: "1.1rem", color: "#555", marginBottom: "30px" }}>
                   <h1>💈</h1>¡Tu estilo está en buenas manos!<h1> 💈</h1>
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

export default Contactenos;