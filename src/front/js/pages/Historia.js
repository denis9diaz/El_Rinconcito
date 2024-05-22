import React from "react";
import "../../styles/Historia.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";

const Historia = () => {
    return(
        <div className="historia-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Historia
