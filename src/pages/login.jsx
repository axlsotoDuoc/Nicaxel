import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Estados del formulario
    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [rolAdmin, setRolAdmin] = useState(false);
    const [rolUsuario, setRolUsuario] = useState(false);
    const [recordar, setRecordar] = useState(false);

    // Errores
    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRol, setErrorRol] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        let valido = true;

        // Validar roles
        if (!rolAdmin && !rolUsuario) {
        setErrorRol("Debes seleccionar al menos un tipo de usuario (Admin o Usuario).");
        valido = false;
        } else {
        setErrorRol("");
        }

        // Validar correo
        if (!correo.includes("@")) {
        setErrorCorreo("Ingresa un correo válido.");
        valido = false;
        } else {
        setErrorCorreo("");
        }

        // Validar contraseña
        if (password.length < 4) {
        setErrorPassword("La contraseña debe tener al menos 4 caracteres.");
        valido = false;
        } else {
        setErrorPassword("");
        }

        if (valido) {
        alert(`Inicio de sesión exitoso como ${rolAdmin ? "ADMIN" : "USUARIO"} ✅`);
        setCorreo("");
        setPassword("");
        setRolAdmin(false);
        setRolUsuario(false);
        setRecordar(false);
        }
    };

    return (
        <>
        <main className="form-main">
            <h1 className="form-h1">Regístrate o inicia sesión</h1>

            <section className="formulario-div">
            <div className="titulo-form">
                <h2 className="login-h2">Selecciona tipo de login</h2>
                <div className="admin-usuario-flex">
                <div className="remember-me">
                    <input
                    type="checkbox"
                    className="checkbox rol"
                    id="admin"
                    checked={rolAdmin}
                    onChange={() => setRolAdmin(!rolAdmin)}
                    />
                    ADMIN
                </div>
                <div className="remember-me">
                    <input
                    type="checkbox"
                    className="checkbox rol"
                    id="usuario"
                    checked={rolUsuario}
                    onChange={() => setRolUsuario(!rolUsuario)}
                    />
                    USUARIO
                </div>
                </div>
                {errorRol && (
                <span
                    style={{
                    color: "rgb(179, 56, 56)",
                    display: "block",
                    textAlign: "center",
                    marginTop: "5px",
                    }}
                >
                    {errorRol}
                </span>
                )}
            </div>

            <form onSubmit={handleSubmit} id="miFormulario">
                {/* Correo */}
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

                {/* Contraseña */}
                <label htmlFor="password">Contraseña*</label>
                <input
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa tu contraseña aquí"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                {errorPassword && (
                <span style={{ color: "rgb(179, 56, 56)" }}>{errorPassword}</span>
                )}

                <div className="remember-register-flex">
                <div className="remember-me">
                    <input
                    type="checkbox"
                    className="checkbox"
                    id="recordar"
                    checked={recordar}
                    onChange={() => setRecordar(!recordar)}
                    />
                    Recordar contraseña
                </div>
                <span>
                    ¿No has creado una cuenta?{" "}
                    <Link to="/register" className="register-here">
                    Regístrate aquí
                    </Link>
                </span>
                </div>

                <button type="submit">Iniciar sesión</button>
            </form>
            </section>
        </main>
        </>
    );
};

export default Login;
