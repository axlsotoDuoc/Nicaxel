import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LayoutPublic from './layouts/LayoutPublic';
import LayoutAdmin from './layouts/LayoutAdmin';

import Home from './pages/Home';
import Carrito from './pages/Carrito';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Register from './pages/Register';
import AdminHome from './pages/AdminHome';
import VerProductos from "./pages/VerProductos";
import Gestionar from "./pages/Gestionar";

export default function App() {
    return (
        <Router>
        <Routes>
            {/* TIENDA*/}
            <Route element={<LayoutPublic />}>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/register" element={<Register />} />
            </Route>

            {/* ADMIN*/}
            <Route element={<LayoutAdmin />}>
            <Route path="/adminHome" element={<AdminHome />} />
            <Route path="/gestionar" element={<Gestionar />} />
            <Route path="/verProductos" element={<VerProductos />} />
            </Route>

            <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
        </Router>
    );
}






