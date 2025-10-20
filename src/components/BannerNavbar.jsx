import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/main.css"; 

export default function BannerNavbar() {
    const navigate = useNavigate();
    const [usuarioActivo, setUsuarioActivo] = useState(null);

    useEffect(() => {
        const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
        setUsuarioActivo(usuario);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("usuarioActivo");
        setUsuarioActivo(null);
        navigate("/login");
    };

        useEffect(() => {
    const actualizarUsuario = () => {
        const usuario = JSON.parse(localStorage.getItem("usuarioActivo"));
        setUsuarioActivo(usuario);
    };

    // Escuchar evento personalizado
    window.addEventListener("usuarioLogueado", actualizarUsuario);

    // Limpieza al desmontar
    return () => {
        window.removeEventListener("usuarioLogueado", actualizarUsuario);
    };

}, []);

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
            <i
                className="fa-solid fa-hand-pointer fa-xs"
                style={{ color: "#ffffff" }}
            ></i>
            </span>
        </div>

        {/* Navbar Mobile */}
        <nav className="navbar-mobile">
            <Link to="/" className="tittle">
            NICAXEL
            </Link>

            <ul className="nav-menu">
            <li className="nav-item">
                <Link to="/nosotros" className="nav-link">Sobre nosotros</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/catalogo" className="nav-link">Catálogo</Link>
            </li>
            <li className="nav-item">
                <Link to="/contacto" className="nav-link">Contacto</Link>
            </li>
            <li className="nav-item">
                <div className="login-flex">
                {!usuarioActivo ? (
                    <>
                    <Link to="/login" className="nav-link">Iniciar sesión</Link>
                    <img src="/Img/login.svg" alt="Login icon" />
                    </>
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
                    <img src="/public/Img/logout.svg" alt="Logout icon" />
                    </button>
                )}
                </div>
            </li>
            <li className="nav-item">
                <Link to="/carrito" className="nav-link">Ver carrito 🛒(2)</Link>
            </li>
            </ul>

            {/* Burger */}
            <div className="burger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
            </div>
        </nav>

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

