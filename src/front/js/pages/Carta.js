import React from "react";
import "../../styles/Carta.css";
import Navbar from "./Navbar";
import fondo from "../../img/fondo-info.png";
import arroces from "../../img/arroces.png";
import pescados from "../../img/pescados.png";
import entrantes from "../../img/entrantes.png";
import carnes from "../../img/carnes.png";
import marisco from "../../img/marisco.png";
import vinos from "../../img/vinos.png";
import bebidas from "../../img/bebidas.png";
import postres from "../../img/postres.png";

const categories = [
    { title: "Entrantes", img: entrantes, link: "/entrantes" },
    { title: "Marisco", img: marisco, link: "/marisco" },
    { title: "Arroces", img: arroces, link: "/arroces" },
    { title: "Carnes", img: carnes, link: "/carnes" },
    { title: "Pescados", img: pescados, link: "/pescados" },
    { title: "Postres", img: postres, link: "/postres" },
    { title: "Bebidas", img: bebidas, link: "/bebidas" },
    { title: "Vinos", img: vinos, link: "/vinos" },
];

const Carta = () => {
    return (
        <div className="carta-div" style={{ backgroundImage: `url(${fondo})` }}>
            <Navbar />
            <div className="cards-container">
                {categories.map((category, index) => (
                    <div className="card" key={index}>
                        <a href={category.link} className="card-link">
                            <img src={category.img} alt={category.title} />
                            <div className="card-title">{category.title}</div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Carta;
