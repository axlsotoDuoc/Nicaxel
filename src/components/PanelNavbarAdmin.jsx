import React from "react";
import { Link } from "react-router-dom";
import "../styles/panelAdmin.css"; 

export default function PanelNavbarAdmin() {
    return (
            <>

            <main className="admin-main">
    
                <aside className="panel-left">
                    <h2>Nicaxel</h2>
                    <div className="funciones-flex">
                        <Link to="/adminHome">Inicio</Link>
                        <Link to="/verProductos">Ver productos</Link>
                        <Link to="/gestionar">Gestionar</Link>

                        <div className="buttons-div">
                        <Link to="/" className="button-panel-left">Tienda</Link>
                        <Link to="/login" className="button-panel-left cerrar-sesion"> <img src="/Img/logout (2).svg" alt="Icono de carrito" /></Link>
                        </div>
                    </div>
                </aside>
                <section className="panel-central">
                    <h1>Panel de Administrador</h1>
                </section>
            </main>
            </>
        );
}