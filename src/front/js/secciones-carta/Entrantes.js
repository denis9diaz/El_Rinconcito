import React from "react";
import "../../styles/Entrantes.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Entrantes = () => {
    return (
        <div className="entrantes-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Entrantes
