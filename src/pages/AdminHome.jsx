import React from "react";
import { Link } from "react-router-dom";
import "../styles/adminHome.css"; 
import AgregarUsuario from "./AgregarUsuario";
import AgregarProducto from "./AgregarProducto";

export default function AdminHome() {
    return (
            <>
            <main className="adminHome-main">
                <h1 className="h1-admin">Home</h1>

                <div className="gestion-container">

                    <Link to="/addUser" className="gestion-card">
                        <span to="/addUser">Usuarios</span>
                        <div className="gestion-card-right">
                        <img src="/public/Img/userWhite.svg" alt="User Icon" />
                        <span>()</span>
                        </div>
                    </Link>

                    <Link to="/addProduct" className="gestion-card">
                        <span to="/addProduct">Productos</span>
                        <div className="gestion-card-right">
                        <img src="/public/Img/qr.svg" alt="QR Code" />
                        <span>()</span>
                        </div>
                    </Link>

                </div>
            </main>
            </>
        );
}