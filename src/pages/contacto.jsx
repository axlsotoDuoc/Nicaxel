import React, { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [errorNombre, setErrorNombre] = useState("");
    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorMensaje, setErrorMensaje] = useState("");
    const [contador, setContador] = useState(200);

    const handleSubmit = (e) => {
        e.preventDefault();
        let valido = true;

        if (nombre.trim().split(" ").length < 2) {
        setErrorNombre("Debes ingresar tu nombre y al menos un apellido.");
        valido = false;
        } else {
        setErrorNombre("");
        }

        if (!correo.includes("@")) {
        setErrorCorreo("Ingresa un correo válido.");
        valido = false;
        } else {
        setErrorCorreo("");
        }

        if (mensaje.trim().length === 0) {
        setErrorMensaje("El mensaje no puede estar vacío.");
        valido = false;
        } else {
        setErrorMensaje("");
        }

        if (valido) {
        alert("Formulario enviado con éxito 🎉");
        setNombre("");
        setCorreo("");
        setMensaje("");
        setContador(200);
        }
    };

    const handleMensajeChange = (e) => {
        const texto = e.target.value;
        setMensaje(texto);
        setContador(200 - texto.length);
    };

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
                <Link to="/nosotros">Sobre nosotros</Link>
                <Link to="/">Blog</Link>
                <span>Contacto</span>
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
        <main>
            <h1>Contáctanos</h1>

            <section className="formulario-div">
            <h2>Información requerida</h2>

            <form onSubmit={handleSubmit} id="miFormulario">
                {/* Nombre */}
                <label htmlFor="nombre">Nombre y apellido/s*</label>
                <input
                type="text"
                id="nombre"
                name="nombre"
                placeholder="Ingresa tu nombre y al menos 1 apellido"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                />
                {errorNombre && (
                <span style={{ color: "rgb(179, 56, 56)" }}>{errorNombre}</span>
                )}

                {/* Correo electrónico */}
                <label htmlFor="correo">Correo electrónico*</label>
                <input
                type="email"
                id="correo"
                name="correo"
                placeholder="ejemplo@gmail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                />
                {errorCorreo && (
                <span style={{ color: "rgb(179, 56, 56)" }}>{errorCorreo}</span>
                )}

                {/* Mensaje */}
                <label htmlFor="mensaje">Mensaje (máx 200 caracteres):</label>
                <textarea
                id="mensaje"
                name="mensaje"
                placeholder="Déjanos tu mensaje aquí..."
                maxLength="200"
                rows="5"
                cols="30"
                value={mensaje}
                onChange={handleMensajeChange}
                ></textarea>
                {errorMensaje && (
                <span style={{ color: "rgb(179, 56, 56)" }}>{errorMensaje}</span>
                )}
                <p id="contador">{contador} caracteres restantes</p>

                {/* Enviar */}
                <button type="submit">Enviar</button>
            </form>
            </section>
        </main>
        </>
    );
};

export default Contact;
