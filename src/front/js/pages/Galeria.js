import React, { useState } from "react";
import "../../styles/Galeria.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";

import img1 from "../../img/entrantes.png";
import img2 from "../../img/marisco.png";
import img3 from "../../img/arroces.png";

const Galeria = () => {
    const [activeSection, setActiveSection] = useState("platos");

    const renderImages = () => (
        <>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img1} className="img-fluid" alt="Entrantes" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img2} className="img-fluid" alt="Marisco" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img3} className="img-fluid" alt="Arroces" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img1} className="img-fluid" alt="Entrantes" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img2} className="img-fluid" alt="Marisco" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img3} className="img-fluid" alt="Arroces" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img1} className="img-fluid" alt="Entrantes" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img2} className="img-fluid" alt="Marisco" /></div>
            <div className="col-md-4 col-6 mb-4 img-container"><img src={img3} className="img-fluid" alt="Arroces" /></div>
        </>
    );

    return (
        <div className="galeria-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <div className="sections d-flex justify-content-around my-4">
                <div 
                    className={`section ${activeSection === "platos" ? "active" : ""}`} 
                    onClick={() => setActiveSection("platos")}
                >
                    Platos
                </div>
                <div 
                    className={`section ${activeSection === "restaurante" ? "active" : ""}`} 
                    onClick={() => setActiveSection("restaurante")}
                >
                    El Restaurante
                </div>
                <div 
                    className={`section ${activeSection === "nosotros" ? "active" : ""}`} 
                    onClick={() => setActiveSection("nosotros")}
                >
                    Nosotros
                </div>
            </div>
            <div className="content container">
                <div className="row">
                    {activeSection === "platos" && renderImages()}
                    {activeSection === "restaurante" && renderImages()}
                    {activeSection === "nosotros" && renderImages()}
                </div>
            </div>
        </div>
    );
};

export default Galeria;
