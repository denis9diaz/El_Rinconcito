import React from "react";
import "../../styles/Bebidas.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Bebidas = () => {
    return (
        <div className="bebidas-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Bebidas
