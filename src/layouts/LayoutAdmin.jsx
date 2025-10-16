// src/layouts/LayoutAdmin.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import PanelNavbarAdmin from '../components/PanelNavbarAdmin';

export default function LayoutAdmin() {
    return (
        <>
        <main>
            <PanelNavbarAdmin />
            <Outlet /> {/* Aquí se renderiza solo Admin */}
        </main>
        </>
    );
}
