import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const [correo, setCorreo] = useState("");
    const [password, setPassword] = useState("");
    const [rolAdmin, setRolAdmin] = useState(false);
    const [rolUsuario, setRolUsuario] = useState(false);
    const [recordar, setRecordar] = useState(false);

    const [errorCorreo, setErrorCorreo] = useState("");
    const [errorPassword, setErrorPassword] = useState("");
    const [errorRol, setErrorRol] = useState("");

    

    const handleSubmit = (e) => {
        e.preventDefault();
        let valido = true;

        if (!rolAdmin && !rolUsuario) {
        setErrorRol("Debes seleccionar al menos un tipo de usuario (Admin o Usuario).");
        valido = false;
        } else {
        setErrorRol("");
        }

        if (!correo.includes("@")) {
        setErrorCorreo("Ingresa un correo válido.");
        valido = false;
        } else {
        setErrorCorreo("");
        }

        if (password.length < 6) {
        setErrorPassword("La contraseña debe tener al menos 6 caracteres.");
        valido = false;
        } else {
        setErrorPassword("");
        }

        if (valido) {
            alert(`Inicio de sesión exitoso como ${rolAdmin ? "ADMIN" : "USUARIO"} ✅`);

            if (rolAdmin) {
                navigate("/adminHome");
            } else {
                navigate("/home");
            }
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
                        onChange={() => {
                            setRolAdmin(true);
                            setRolUsuario(false);
                        }}
                        />
                        ADMIN
                    </div>

                    <div className="remember-me">
                        <input
                        type="checkbox"
                        className="checkbox rol"
                        id="usuario"
                        checked={rolUsuario}
                        onChange={() => {
                            setRolUsuario(true);
                            setRolAdmin(false);
                        }}
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

