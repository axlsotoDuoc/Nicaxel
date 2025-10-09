import React from "react";
import { Link } from "react-router-dom";
import "../styles/carrito.css";

const Carrito = () => {
    return (
        <>
        <div className="sticky">

            {/* Navbar Mobile */}
            <nav className="navbar-mobile">
            {/* Título */}
            <Link to="/" className="tittle">
                NICAXEL
            </Link>

            {/* Links */}
            <ul className="nav-menu">
                <li className="nav-item">
                <Link to="/nosotros" className="nav-link">
                    Sobre nosotros
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/" className="nav-link">
                    Blog
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/catalogo" className="nav-link">
                    Catálogo
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/contacto" className="nav-link">
                    Contacto
                </Link>
                </li>

                <li className="nav-item">
                <Link to="/register" className="nav-link">
                    Registrarse
                </Link>
                </li>

                <li className="nav-item">
                <div className="login-flex">
                    <Link to="/login" className="nav-link">
                    Iniciar sesión
                    </Link>
                    <img src="/Img/login.svg" alt="icono login" />
                </div>
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
                <Link to="/">Blog</Link>
                <Link to="/contacto" className="navbar-contacto">
                Contacto
                </Link>
            </div>

            <div className="nav-derecha">
                <Link to="/login">
                <img src="/Img/login.svg" alt="ícono de login" />
                </Link>
            </div>
            </nav>
        </div>

        {/* Contenido principal */}
        <main>
            <section className="resumen">
            <article className="resumen-tittle-flex">
                <h3>Resumen del pedido</h3>
                <span>$59.990</span>
            </article>
            </section>

            <section className="detalle">
            <article className="detalle-flex">
                <img src="/Img/Versace-Eros-Flame.jpeg" alt="Versace Eros Flame" />
                <span className="perfume-nombre">
                Versace Versace Eros Flame Men EDP 100 ML (H)
                </span>
                <span className="perfume-precio">$59.990</span>
            </article>
            </section>

            <section className="codigo">
            <article className="codigo-flex">
                <input type="text" placeholder="Código de descuento" />
                <span className="aplicar">Aplicar</span>
            </article>
            </section>

            <section className="subtotal">
            <article className="subtotal-flex">
                <span>Subtotal</span>
                <span>$59.990</span>
            </article>
            <article className="subtotal-flex">
                <span>Envío</span>
                <span>Introduce la dirección de envío</span>
            </article>
            </section>

            <section className="total">
            <article className="total-flex">
                <h3>Total</h3>
                <div className="total-precio-flex">
                <span>CLP</span>
                <span>$59.990</span>
                </div>
            </article>
            </section>

            <div className="pagar-button-div">
            <Link to="/" className="pagar">
                Completar pago
            </Link>
            </div>
        </main>

        </>
    );
};

export default Carrito;
