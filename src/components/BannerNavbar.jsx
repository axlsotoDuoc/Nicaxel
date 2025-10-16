import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 

const Banner = () => {
    return (
        <>
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
                            {/* Título */}
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
                                    <Link to="/login" className="nav-link">Iniciar sesión</Link>
                                    <img src="/Img/login.svg" alt="Login icon" />
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
                                <Link to="/contacto" className="navbar-contacto">Contacto</Link>
                            </div>
                    
                            <div className="nav-derecha">
                                <Link to="/login">
                                <img src="/Img/login.svg" alt="Icono de login" />
                                </Link>
                                <div className="carrito-flex">
                                <Link to="/carrito">
                                    <img src="/Img/carrito.svg" alt="Icono de carrito" />
                                </Link>
                                <span>(1)</span>
                                </div>
                            </div>
                    
                        </nav>
    </div>
        </>
    )
}

export default Banner;