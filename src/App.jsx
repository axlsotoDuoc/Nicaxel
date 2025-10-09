import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Carrito from './pages/Carrito';
import Catalogo from './pages/Catalogo';
import Contacto from './pages/Contacto';
import Login from './pages/Login';
import Nosotros from './pages/Nosotros';
import Register from './pages/Register';

import Banner from './components/Banner'
import Footer from './components/Footer'

function App() {
return (
        <Router>
        <Banner />

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/register" element={<Register />} />
            {/* Ruta para páginas no encontradas */}
            <Route path="*" element={<h1>Página no encontrada</h1>} />
        </Routes>
        <Footer />
        
        </Router>
);
}

export default App;




