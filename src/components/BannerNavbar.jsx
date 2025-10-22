import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/main.css"; 

export default function BannerNavbar() {
    const navigate = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    // Inicializar usuarioActivo y escuchar cambios
    useEffect(() => {
        const actualizarUsuario = () => {
            const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
            setUsuarioActivo(usuario);
        };

        // Inicializar al cargar
        actualizarUsuario();

        // Escuchar eventos globales
        window.addEventListener("usuarioLogueado", actualizarUsuario);

        return () => window.removeEventListener("usuarioLogueado", actualizarUsuario);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("usuarioActivo");
        setUsuarioActivo(null);

        window.dispatchEvent(new Event("usuarioLogueado"));

        navigate("/login");
    };

    return (
        <div className="sticky">
            {/* Banner */}
            <div className="banner-div">
                <span className="banner">
                    Aprovecha solo por esta semana hasta un <span>60%</span> en productos
                    seleccionados.{" "}
                    <Link to="/catalogo" className="pincha">
                        Pincha aquí para más info.
                    </Link>{" "}
                    <i className="fa-solid fa-hand-pointer fa-xs" style={{ color: "#ffffff" }}></i>
                </span>
            </div>

            {/* Navbar Desktop */}
            <nav className="navbar-dekstop">
                <Link to="/" className="tittle">
                    NICAXEL
                </Link>

                <div className="nav-medio">
                    <Link to="/nosotros">Sobre nosotros</Link>
                    <Link to="/catalogo" className="navbar-contacto">Catálogo</Link>
                    <Link to="/contacto" className="navbar-contacto">Contacto</Link>
                </div>

                <div className="nav-derecha">
                    {!usuarioActivo ? (
                        <Link to="/login">
                            <img src="/Img/login.svg" alt="Icono de login" />
                        </Link>
                    ) : (
                        <button
                            onClick={handleLogout}
                            style={{
                                background: "none",
                                border: "none",
                                cursor: "pointer",
                                display: "flex",
                                alignItems: "center",
                                gap: "5px",
                            }}
                        >
                            <img src="/Img/logoutBlack.svg" alt="Icono de logout" />
                        </button>
                    )}

                    <div className="carrito-flex">
                        <Link to="/carrito">
                            <img src="/Img/carrito.svg" alt="Icono de carrito" />
                        </Link>
                        <span>(1)</span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

