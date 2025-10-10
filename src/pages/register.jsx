import React, { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    
    const [correo, setCorreo] = useState("");
    const [password1, setPassword1] = useState("");
    const [password2, setPassword2] = useState("");
    const [errores, setErrores] = useState({
        correo: "",
        password: "",
        repeat: "",
    });

    const validarRegistro = (e) => {
        e.preventDefault();
        let valido = true;
        const nuevosErrores = { correo: "", password: "", repeat: "" };

        if (!correo.includes("@")) {
        nuevosErrores.correo = "Ingrese un correo válido.";
        valido = false;
        }

        if (password1.length < 6) {
        nuevosErrores.password = "La contraseña debe tener al menos 6 caracteres.";
        valido = false;
        }

        if (password1 !== password2) {
        nuevosErrores.repeat = "Las contraseñas no coinciden.";
        valido = false;
        }

        setErrores(nuevosErrores);

        if (valido) {
        alert("Registro exitoso ✅");
        }
    };

    return (
        <>
        <main className="form-main">
            <h1 className="form-h1">Regístrate o inicia sesión</h1>

            <section className="formulario-div">
            <h2 className="form-h2">Información requerida</h2>

            <form id="formRegistro" onSubmit={validarRegistro}>
                <label htmlFor="correo">Correo electrónico*</label>
                <input
                type="email"
                id="correo"
                name="correo"
                placeholder="ejemplo@gmail.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                />
                <span style={{ color: "rgb(179, 56, 56)" }}>{errores.correo}</span>

                <label htmlFor="password1">Contraseña*</label>
                <input
                type="password"
                id="password1"
                name="password1"
                placeholder="Ingresa tu nueva contraseña"
                value={password1}
                onChange={(e) => setPassword1(e.target.value)}
                />
                <span style={{ color: "rgb(179, 56, 56)" }}>{errores.password}</span>

                <label htmlFor="password2">Repetir contraseña*</label>
                <input
                type="password"
                id="password2"
                name="password2"
                placeholder="Repite la contraseña"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                />
                <span style={{ color: "rgb(179, 56, 56)" }}>{errores.repeat}</span>

                <div className="remember-register-flex">
                <div className="remember-me">
                    <input type="checkbox" className="checkbox" title="remember-password" />
                    Recordar contraseña
                </div>
                <span>
                    ¿Ya tienes cuenta?{" "}
                    <Link to="/login" className="register-here">
                    Iniciar sesión
                    </Link>
                </span>
                </div>

                <button type="submit">Registrar</button>
            </form>
            </section>
        </main>
        </>
    );
}

export default Register;
