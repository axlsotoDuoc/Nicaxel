import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";
import "../styles/nosotros.css";

function Nosotros() {
    return (
        <>
        <div className="sticky">
        

            {/* Navbar Mobile */}
            <nav className="navbar-mobile">
            <Link to="/" className="tittle">
                NICAXEL
            </Link>

            <ul className="nav-menu">
                <li className="nav-item">
                <Link to="/" className="nav-link">
                    Home
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
                <div className="login-flex">
                    <Link to="/login" className="nav-link">
                    Iniciar sesión
                    </Link>
                    <img src="/Img/login.svg" alt="icono login" />
                </div>
                </li>
                <li className="nav-item">
                <Link to="/carrito" className="nav-link">
                    Ver carrito 🛒(2)
                </Link>
                </li>
            </ul>

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
                <span>Sobre nosotros</span>
                <Link to="/">Blog</Link>
                <Link to="/contacto" className="navbar-contacto">
                Contacto
                </Link>
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

        {/* Contenido principal */}
        <main className="main-faq">
            <header className="header-cont">
            <h1>Preguntas Frecuentes</h1>
            <span>Conócenos más a fondo </span>
            <p>
                Queremos entregarles a nuestros clientes la mayor transparencia
                posible, por eso te dejamos invitado a conocer más acerca de
                nosotros.
            </p>
            </header>

            <div className="acordeon-contenedor">
            {/* GARANTÍAS */}
            <div className="acordeon-h2">
                <h2>Garantías</h2>
            </div>

            <div className="acordeon-grid">
                <details>
                <summary>
                    Plazos
                    <i className="fa-solid fa-play fa-rotate-90 fa-xs arrow-1"></i>
                    <i className="fa-solid fa-minus fa-lg" id="arrow-2"></i>
                </summary>
                <div className="details-content">
                    <p>
                    Cada cliente contará con un total de <span>15 días máximos</span>{" "}
                    posteriores a la compra de su perfume para que pueda hacer
                    efectivo el cambio o devolución.
                    </p>
                </div>
                </details>

                <details>
                <summary>
                    Posibilidad de cambio o devolución
                    <i className="fa-solid fa-play fa-rotate-90 fa-xs arrow-1"></i>
                    <i className="fa-solid fa-minus fa-lg" id="arrow-2"></i>
                </summary>
                <div className="details-content">
                    <p>
                    Nuestros productos podrán ser cambiados o devueltos sin
                    problema alguno siempre y cuando no se haya cumplido ninguna de
                    las <span>siguientes causales:</span>
                    </p>
                    <p>
                    1. El tiempo máximo para aplicar su garantía (15 días) haya sido
                    sobrepasado.
                    </p>
                    <p>2. La caja o envoltura del perfume fue devuelta en mal estado.</p>
                    <p>3. El cliente atomizó el perfume.</p>
                    <p>
                    <span>
                        * El único caso en el que procederemos con el cambio o
                        devolución a pesar de que el cliente haya atomizado el perfume
                        será cuando de forma clara se pueda apreciar que el atomizador
                        venía defectuoso.
                    </span>
                    </p>
                </div>
                </details>
            </div>

            {/* MÉTODOS DE PAGO */}
            <div className="acordeon-h2">
                <h2>Métodos de pago</h2>
            </div>

            <details>
                <summary>
                Formas
                <i className="fa-solid fa-play fa-rotate-90 fa-xs arrow-1"></i>
                <i className="fa-solid fa-minus fa-lg" id="arrow-2"></i>
                </summary>
                <div className="details-content">
                <p>
                    Contamos con <span>3 tipos</span> de métodos de pago:
                </p>
                <div>- Tarjetas de débito o crédito.</div>
                <div>- Transferencias.</div>
                <div>- Efectivo.</div>
                </div>
            </details>

            {/* NUESTRA HISTORIA */}
            <div className="acordeon-h2">
                <h2>Sobre nosotros</h2>
            </div>

            <div className="acordeon-grid">
                <details>
                <summary>
                    Fundación
                    <i className="fa-solid fa-play fa-rotate-90 fa-xs arrow-1"></i>
                    <i className="fa-solid fa-minus fa-lg" id="arrow-2"></i>
                </summary>
                <div className="details-content">
                    <p>
                    Nuestra empresa fue fundada en el año <span>1980</span>. Todo
                    comenzó por una pasión por la perfumería, creando nuestros
                    propios aromas con las limitadas esencias que teníamos en ese
                    momento.
                    </p>
                    <p>
                    Al poco tiempo nos planteamos la idea de comenzar a regalar
                    algunas de estas creaciones para saber si a la gente le gustaba
                    y al darnos cuenta que realmente fue así nos planteamos
                    organizar un negocio pequeño de ventas de nuestros perfumes.
                    </p>
                    <p>
                    Así fue como comenzó la historia de <span>Nicaxel</span>. A
                    partir de una idea que surgió por diversión nos transformamos en
                    la empresa con <span>mayor prestigio</span> dentro del país.
                    </p>
                    <p>
                    Más de <span>40 años</span> entregando{" "}
                    <span>productos de calidad</span> a nuestros clientes.
                    </p>
                </div>
                </details>

                <details>
                <summary>
                    Dónde estamos ubicados
                    <i className="fa-solid fa-play fa-rotate-90 fa-xs arrow-1"></i>
                    <i className="fa-solid fa-minus fa-lg" id="arrow-2"></i>
                </summary>
                <div className="details-content">
                    <p>
                    Podrás encontrarnos en <span>Av. Martínez 287, Providencia.</span>
                    </p>
                    <p>Santiago. Región Metropolitana</p>
                </div>
                </details>
            </div>
            </div>
        </main>
        </>
    );
}

export default Nosotros;
