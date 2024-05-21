import React from "react";
import "../../styles/Arroces.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Arroces = () => {
    return (
        <div className="arroces-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Arroces
