import React from "react";
import "../../styles/Pescados.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Pescados = () => {
    return (
        <div className="pescados-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Pescados
