import React from "react";
import "../../styles/Marisco.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Marisco = () => {
    return (
        <div className="marisco-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Marisco
