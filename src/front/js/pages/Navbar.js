import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Navbar.css";

const Navbar = () => {
    const handleReservasClick = () => {
        const reservasUrl = "https://www.google.com/maps/reserve/v/dine/c/qwfw-fafxvw?source=pa&opi=89978449&hl=es-ES&gei=X8NMZo2GEI2fkdUP2oa8sAw&sourceurl=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Ddish%2Breserva%2Bel%2Brinconcito%2Bmadrid%26oq%3Ddish%2Breserva%2Bel%26gs_lcrp%3DEgZjaHJvbWUqBwgCECEYoAEyBggAEEUYOTIHCAEQIRigATIHCAIQIRigAagCALACAA%26pf%3Dop%26sourceid%3Dchrome%26ie%3DUTF-8&ihs=3"; // Reemplaza esta URL con la URL específica para reservas
        window.open(reservasUrl, "_blank");
    };

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand no-underline" to="/">LOGO</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                        <li className="nav-item">
                            <Link className="nav-link active underline-hover" aria-current="page" to="/historia">Nuestra historia</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active underline-hover" aria-current="page" to="/carta">Carta</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active underline-hover" aria-current="page" to="/menus">Menús</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active underline-hover" aria-current="page" to="/galeria">Galería</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active underline-hover" aria-current="page" to="/info">Información</Link>
                        </li>
                    </ul>
                    <button className="btn btn-outline-light" type="button" onClick={handleReservasClick}>Reservas</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
