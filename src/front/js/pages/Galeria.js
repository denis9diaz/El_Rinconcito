import React from "react";
import "../../styles/Galeria.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";

const Galeria = () => {
    return (
        <div className="galeria-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <div>Platos</div>
            <div>El Restaurante</div>
            <div>Nosotros</div>
        </div>
    )
}

export default Galeria
