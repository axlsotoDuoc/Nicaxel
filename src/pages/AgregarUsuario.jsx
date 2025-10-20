import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AgregarUsuario.css";


export default function AgregarUsuario() {
    const [usuarios, setUsuarios] = useState([]);
    const [nuevoUsuario, setNuevoUsuario] = useState({
        nombre: "",
        correo: "",
        contraseña: "",
        rol: "",
    });
    const [errores, setErrores] = useState({});
    const [editando, setEditando] = useState(null);

    // 📥 Cargar usuarios desde localStorage al montar el componente
    useEffect(() => {
        const guardados = localStorage.getItem("usuarios");
        if (guardados) {
        setUsuarios(JSON.parse(guardados));
        }
    }, []);

    // 💾 Guardar usuarios en localStorage cada vez que cambien
    useEffect(() => {
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
    }, [usuarios]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({ ...nuevoUsuario, [name]: value });

        // Borrar error del campo al escribir
        setErrores({ ...errores, [name]: "" });
    };

    const validarCampos = () => {
        let nuevosErrores = {};

        if (!nuevoUsuario.nombre.trim())
        nuevosErrores.nombre = "El nombre no puede estar vacío.";

        if (!nuevoUsuario.correo.trim())
        nuevosErrores.correo = "El correo no puede estar vacío.";
        else if (!/\S+@\S+\.\S+/.test(nuevoUsuario.correo))
        nuevosErrores.correo = "El correo no tiene un formato válido.";

        if (!nuevoUsuario.contraseña.trim())
        nuevosErrores.contraseña = "La contraseña no puede estar vacía.";
        else if (nuevoUsuario.contraseña.length < 6)
        nuevosErrores.contraseña = "Debe tener al menos 6 caracteres.";

        if (!nuevoUsuario.rol.trim())
        nuevosErrores.rol = "El rol no puede estar vacío.";

        setErrores(nuevosErrores);
        return Object.keys(nuevosErrores).length === 0;
    };

    const handleAgregar = (e) => {
        e.preventDefault();

        if (!validarCampos()) return;

        if (editando !== null) {
        // Actualizar usuario
        const actualizados = usuarios.map((u, i) =>
            i === editando ? nuevoUsuario : u
        );
        setUsuarios(actualizados);
        setEditando(null);
        } else {
        // Agregar usuario nuevo
        setUsuarios([...usuarios, nuevoUsuario]);
        }

        // Limpiar formulario
        setNuevoUsuario({
        nombre: "",
        correo: "",
        contraseña: "",
        rol: "",
        });
        setErrores({});
    };

    const handleEditar = (index) => {
        setNuevoUsuario(usuarios[index]);
        setEditando(index);
    };

    const handleEliminar = (index) => {
        if (usuarios.length === 0) {
        setErrores({ general: "No hay usuarios para eliminar." });
        return;
        }
        setErrores({});
        setUsuarios(usuarios.filter((_, i) => i !== index));
    };

    return (
        <>
        <h1 className="h1-admin">Gestión de usuarios</h1>
        <main className="gestionUsuarios-main">
            <form className="form-usuario" onSubmit={handleAgregar}>
            <div className="campo">
                <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={nuevoUsuario.nombre}
                onChange={handleChange}
                />
                {errores.nombre && <p className="error">{errores.nombre}</p>}
            </div>

            <div className="campo">
                <input
                type="email"
                name="correo"
                placeholder="Correo"
                value={nuevoUsuario.correo}
                onChange={handleChange}
                />
                {errores.correo && <p className="error">{errores.correo}</p>}
            </div>

            <div className="campo">
                <input
                type="password"
                name="contraseña"
                placeholder="Contraseña"
                value={nuevoUsuario.contraseña}
                onChange={handleChange}
                />
                {errores.contraseña && <p className="error">{errores.contraseña}</p>}
            </div>

            <div className="campo">
                <input
                type="text"
                name="rol"
                placeholder="Rol (admin, cliente, etc.)"
                value={nuevoUsuario.rol}
                onChange={handleChange}
                />
                {errores.rol && <p className="error">{errores.rol}</p>}
            </div>

            <button type="submit">
                {editando !== null ? "Actualizar usuario" : "Agregar usuario"}
            </button>

            {errores.general && <p className="error">{errores.general}</p>}
            </form>

            {/* Tabla */}
            <table className="tabla-usuarios">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Contraseña</th>
                <th>Rol</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.length === 0 ? (
                <tr>
                    <td colSpan="5">No hay usuarios registrados</td>
                </tr>
                ) : (
                usuarios.map((u, index) => (
                    <tr key={index}>
                    <td>{u.nombre}</td>
                    <td>{u.correo}</td>
                    <td>{"•".repeat(u.contraseña.length)}</td>
                    <td>{u.rol}</td>
                    <td>
                        <button onClick={() => handleEditar(index)}>Editar</button>
                        <button onClick={() => handleEliminar(index)}>Eliminar</button>
                    </td>
                    </tr>
                ))
                )}
            </tbody>
            </table>
        </main>
        </>
    );
}