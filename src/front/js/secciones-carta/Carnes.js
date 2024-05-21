import React from "react";
import "../../styles/Carnes.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Carnes = () => {
    return (
        <div className="carnes-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Carnes
