import React from "react";
import "../../styles/Vinos.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Vinos = () => {
    return (
        <div className="vinos-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Vinos
