import React from "react";
import "../../styles/Menus.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";

const Menus = () => {
    return (
        <div className="menus-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <div>Menu 1</div>
            <div>Menu 2</div>
        </div>
    )
}

export default Menus
