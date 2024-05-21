import React from "react";
import "../../styles/Postres.css";
import Navbar from "../pages/Navbar";
import fondo from "../../img/fondo-info.png";

const Postres = () => {
    return (
        <div className="postres-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
        </div>
    )
}

export default Postres
