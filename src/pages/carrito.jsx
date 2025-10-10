import React from "react";
import { Link } from "react-router-dom";

const Carrito = () => {
    return (
        <>
        <main>
            <h1>Bienvenido a tu carrito</h1>
            
            <section className="resumen">
            <article className="resumen-tittle-flex">
                <h3>Resumen del pedido</h3>
                <h3>Items </h3>
            </article>
            </section>

            <section className="detalle">
            <article className="detalle-flex">
                <img src="/Img/Versace-Eros-Flame.jpeg" alt="Versace Eros Flame" />
                <span className="perfume-nombre">
                Versace Versace Eros Flame Men EDP 100 ML (H)
                </span>
                <span className="perfume-precio">$59.990</span>
            </article>
            </section>

            <section className="codigo">
            <article className="codigo-flex">
                <input type="text" placeholder="Código de descuento" />
                <span className="aplicar">Aplicar</span>
            </article>
            </section>

            <section className="subtotal">
            <article className="subtotal-flex">
                <span>Subtotal</span>
                <span>$59.990</span>
            </article>
            <article className="subtotal-flex">
                <span>Envío</span>
                <span>Introduce la dirección de envío</span>
            </article>
            </section>

            <section className="total">
            <article className="total-flex">
                <h3>Total</h3>
                <div className="total-precio-flex">
                <span>CLP</span>
                <span>$59.990</span>
                </div>
            </article>
            </section>

            <div className="pagar-button-div">
            <Link to="/" className="pagar">
                Completar pago
            </Link>
            </div>
        </main>
        </>
    );
};

export default Carrito;
