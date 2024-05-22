import React from "react";
import "../../styles/Principal.css";
import fondo from "../../img/fondo-principal.png";
import Navbar from "./Navbar";

const Principal = () => {
    return (
        <div className="principal-section text-center" style={{ backgroundImage: `url(${fondo})` }}>
            <div className="overlay"></div>
            <Navbar />
            <div className="content-principal">
                <h1 className="title-div">El Rinconcito</h1>
                <h3 className="subtitle-div">Marisquería en Madrid</h3>
            </div>
        </div>
    );
}

export default Principal;
