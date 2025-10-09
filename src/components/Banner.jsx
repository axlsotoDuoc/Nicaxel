import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css"; 

const Banner = () => {
    return (
        <>
             {/* Banner */}
                <div className="banner-div">
                <span className="banner">
                    Aprovecha solo por esta semana hasta un <span>60%</span> en productos
                    seleccionados.{" "}
                    <Link to="/catalogo" className="pincha">
                    Pincha aquí para más info.
                    </Link>{" "}
                    <i
                    className="fa-solid fa-hand-pointer fa-xs"
                    style={{ color: "#ffffff" }}
                    ></i>
                </span>
                </div>
        </>
    )
}

export default Banner;