import React, { useState } from "react";
import "../../styles/Menus.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";

const Menus = () => {
    const [activeSection, setActiveSection] = useState("menu1");

    return (
        <div className="menus-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <div className="sections d-flex justify-content-center my-4">
                <div 
                    className={`section ${activeSection === "menu1" ? "active" : ""}`} 
                    onClick={() => setActiveSection("menu1")}
                >
                    Menu 1
                </div>
                <div 
                    className={`section ${activeSection === "menu2" ? "active" : ""}`} 
                    onClick={() => setActiveSection("menu2")}
                >
                    Menu 2
                </div>
            </div>
            <div className="content container">
                {activeSection === "menu1" && (
                    <div>
                        {/* Contenido del Menu 1 */}
                        <h2>Contenido del Menu 1</h2>
                    </div>
                )}
                {activeSection === "menu2" && (
                    <div>
                        {/* Contenido del Menu 2 */}
                        <h2>Contenido del Menu 2</h2>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Menus;
